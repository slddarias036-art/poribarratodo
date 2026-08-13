// ============================================================
// CSV LOADER - FUNCIÓN GLOBAL UNIFICADA
// Centraliza toda la lógica de carga CSV desde múltiples fuentes
// ============================================================
(function() {
  const DEFAULT_DRIVE_FILE_ID = "1NmSWUIDu0DaxIWxADq3-Q3P2lss3HvlD";
  const DIRECT_DRIVE_URL = id => `https://drive.google.com/uc?export=download&id=${id}`;
  const PROXY_URL = url => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;

  /**
   * Intenta obtener CSV desde múltiples fuentes con fallback
   * @param {string} customUrl - URL personalizada opcional
   * @returns {Promise<string>} Contenido CSV como texto
   */
  async function fetchCsvText(customUrl) {
    const urls = [];
    
    if (customUrl && customUrl.trim()) {
      urls.push(customUrl);
      urls.push(PROXY_URL(customUrl));
    } else {
      urls.push(DIRECT_DRIVE_URL(DEFAULT_DRIVE_FILE_ID));
      urls.push(PROXY_URL(DIRECT_DRIVE_URL(DEFAULT_DRIVE_FILE_ID)));
    }

    for (let url of urls) {
      try {
        const res = await fetch(url + (url.includes('?') ? '&' : '?') + '_t=' + Date.now());
        if (res.ok) {
          const text = await res.text();
          if (text && !text.trim().startsWith('<') && !text.trim().startsWith('<!')) {
            return text;
          }
        }
      } catch (e) {
        console.warn(`Intento fallido en ${url}:`, e.message);
      }
    }
    
    throw new Error('No se pudo obtener CSV desde ninguna fuente disponible');
  }

  /**
   * Parsea CSV con PapaParse
   * @param {string} csvText - Contenido CSV
   * @returns {Promise<Array>} Array de filas parseadas
   */
  function parseCsv(csvText) {
    return new Promise((resolve, reject) => {
      if (typeof Papa === 'undefined') {
        reject(new Error('PapaParse no disponible'));
        return;
      }

      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          resolve(results.data || []);
        },
        error: (err) => {
          reject(new Error('Error parsing CSV: ' + err.message));
        }
      });
    });
  }

  /**
   * Normaliza y valida datos crudos del CSV
   * @param {Array} parsedRows - Filas del CSV parseadas
   * @returns {Array} Datos normalizados
   */
  function normalizeData(parsedRows) {
    return parsedRows.map((row, idx) => ({
      id: idx + 1,
      fecha: row.fecha || '',
      fuente: row.fuente || '',
      plataforma: row.plataforma || 'Medios digitales',
      tipo_contenido: row.tipo_contenido || 'Artículo',
      contenido_resumido: row.contenido_resumido || '',
      tema: row.tema || '',
      entidad_o_contexto: row.entidad_o_contexto || '',
      url: row.url || '#',
      sentimiento: row.sentimiento || 'No inferido',
      verificacion: row.verificacion || 'Sin verificar',
      nota_metodologica: row.nota_metodologica || '',
      interacciones: parseInt(row.interacciones, 10) || 0,
      comentarios: parseInt(row.comentarios, 10) || 0,
      compartidos: parseInt(row.compartidos, 10) || 0,
      visualizaciones: parseInt(row.visualizaciones, 10) || 0,
      guardados: parseInt(row.guardados, 10) || 0,
      ubicacion: row.ubicacion || 'Sin especificar',
      circunscripcion: row.circunscripcion || 'Sin especificar',
      edad: row.edad ? parseInt(row.edad, 10) : null,
      hashtags: typeof row.hashtags === 'string' 
        ? row.hashtags.split(';').map(h => h.trim()).filter(h => h) 
        : (Array.isArray(row.hashtags) ? row.hashtags : []),
      audio: row.audio || ''
    }));
  }

  /**
   * Función global central: carga, parsea y normaliza CSV
   * @param {string} customUrl - URL personalizada opcional (Google Drive, archivo remoto, etc.)
   */
  window.fetchAndLoadCSV = async function(customUrl = null) {
    try {
      console.log('🔄 Iniciando carga de CSV...');
      const csvText = await fetchCsvText(customUrl);
      const parsedRows = await parseCsv(csvText);
      const normalizedData = normalizeData(parsedRows);

      if (!normalizedData.length) {
        throw new Error('CSV no contiene registros válidos');
      }

      // Guardar en caché
      try {
        localStorage.setItem('ibarra_radar_cached_dataset', JSON.stringify(normalizedData));
        localStorage.setItem('ibarra_radar_cache_timestamp', new Date().toISOString());
      } catch (e) {
        console.warn('No se pudo guardar en localStorage:', e);
      }

      // Disparar evento unificado
      const event = new CustomEvent('csv-updated', {
        detail: normalizedData,
        bubbles: true
      });
      document.dispatchEvent(event);

      console.log('✅ CSV cargado:', normalizedData.length, 'registros');
      return normalizedData;

    } catch (error) {
      console.error('❌ Error en fetchAndLoadCSV:', error);
      
      // Fallback a caché local
      try {
        const cached = localStorage.getItem('ibarra_radar_cached_dataset');
        if (cached) {
          const data = JSON.parse(cached);
          const event = new CustomEvent('csv-updated', {
            detail: data,
            bubbles: true
          });
          document.dispatchEvent(event);
          console.log('⚠️  Usando datos cacheados:', data.length, 'registros');
          return data;
        }
      } catch (e) {
        console.error('No hay caché disponible');
      }

      // Notificar error
      alert('Error al cargar CSV: ' + error.message + '\nIntentando usar datos locales...');
      throw error;
    }
  };

  // Alias para compatibilidad
  window.fetchCsvFromUrl = window.fetchAndLoadCSV;

})();
