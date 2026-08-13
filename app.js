// ============================================================
// APP.JS - APLICACIÓN PRINCIPAL SIMPLIFICADA
// Usa función unificada csv-loader y coordina módulos
// ============================================================

// ============================================================
// DATOS SEMILLA INICIALES (PRELIMINARES)
// ============================================================
const SEED_ROWS = [
  {
    fecha: "2026-06-29", fuente: "La Hora", plataforma: "Medios digitales", tipo_contenido: "Artículo",
    contenido_resumido: "Juan Fernando Arias fue elegido como precandidato de Juntos lista 70; participaron más de 300 militantes.",
    tema: "Proceso electoral / candidatura", entidad_o_contexto: "Juntos 70", url: "https://www.lahora.com.ec/imbaburacarchi/juntos-70-oficializa-a-juan-arias-como-precandidato",
    sentimiento: "No inferido", verificacion: "Respaldada", nota_metodologica: "Registro verificado en fuente original.",
    interacciones: 120, comentarios: 15, compartidos: 30, visualizaciones: 0, guardados: 0,
    ubicacion: "Centro", circunscripcion: "Circunscripción 3", edad: null, hashtags: "#JuanArias;#Ibarra", audio: ""
  },
  {
    fecha: "2026-07-25", fuente: "La Hora", plataforma: "Medios digitales", tipo_contenido: "Entrevista",
    contenido_resumido: "Entrevista sobre modernización del Mercado Amazonas con proyección de inversión.",
    tema: "Mercado Amazonas", entidad_o_contexto: "Propuesta de Juan Arias", url: "https://www.lahora.com.ec/imbaburacarchi/juan-arias-nuestra-proyeccion",
    sentimiento: "No inferido", verificacion: "Respaldada", nota_metodologica: "Registro verificado en fuente original.",
    interacciones: 80, comentarios: 8, compartidos: 12, visualizaciones: 0, guardados: 0,
    ubicacion: "San Joaquín", circunscripcion: "Circunscripción 2", edad: null, hashtags: "#MercadoAmazonas", audio: ""
  },
  {
    fecha: "2026-07-26", fuente: "Instagram", plataforma: "Instagram", tipo_contenido: "Reel",
    contenido_resumido: "Reel: recorrido por el Mercado Amazonas con propuestas de modernización y empleo juvenil.",
    tema: "Mercado Amazonas", entidad_o_contexto: "Propuesta de Juan Arias", url: "https://www.instagram.com/p/AAA1",
    sentimiento: "Positivo", verificacion: "Respaldada", nota_metodologica: "Post oficial del candidato.",
    interacciones: 2200, comentarios: 180, compartidos: 90, visualizaciones: 35000, guardados: 540,
    ubicacion: "Barrio La Merced", circunscripcion: "Circunscripción 3", edad: 28, hashtags: "#MercadoAmazonas;#PorIbarraTodo", audio: "audio_mercado_1"
  },
  {
    fecha: "2026-07-27", fuente: "Facebook", plataforma: "Facebook", tipo_contenido: "Post",
    contenido_resumido: "Publicación sobre plan de agua potable y mantenimiento de pozos en barrios rurales.",
    tema: "Agua potable", entidad_o_contexto: "Propuesta de Juan Arias", url: "https://www.facebook.com/poribarratodo/posts/1",
    sentimiento: "Positivo", verificacion: "Respaldada", nota_metodologica: "Post oficial del candidato.",
    interacciones: 1500, comentarios: 120, compartidos: 210, visualizaciones: 8000, guardados: 45,
    ubicacion: "Parroquia El Sagrario", circunscripcion: "Circunscripción 4", edad: 40, hashtags: "#AguaParaIbarra;#PorIbarraTodo", audio: ""
  },
  {
    fecha: "2026-07-28", fuente: "TikTok", plataforma: "TikTok", tipo_contenido: "Video",
    contenido_resumido: "Video explicando beneficios del tren como mejora a la movilidad urbana.",
    tema: "Movilidad y transporte", entidad_o_contexto: "Propuesta de Juan Arias", url: "https://www.tiktok.com/@juanariasec/video/1",
    sentimiento: "Positivo", verificacion: "Respaldada", nota_metodologica: "Post oficial del candidato.",
    interacciones: 5000, comentarios: 400, compartidos: 600, visualizaciones: 120000, guardados: 200,
    ubicacion: "El Centro", circunscripcion: "Circunscripción 1", edad: 22, hashtags: "#TrenIbarra", audio: "audio_tren_viral"
  }
];

const STORAGE_KEYS = {
  DATASET: 'ibarra_radar_cached_dataset',
  LAST_UPDATE: 'ibarra_radar_last_update_info'
};

let DATA = [];

// ============================================================
// NAVEGACIÓN Y CONTROL DE PESTAÑAS (TABS)
// ============================================================
function setupTabNavigation() {
  const tabButtons = document.querySelectorAll('.nav-tab-btn, [data-tab], .tab');
  const tabPanels = document.querySelectorAll('.tab-panel, [data-panel]');

  if (!tabButtons.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTabId = btn.getAttribute('data-tab') || btn.getAttribute('href')?.replace('#', '');
      
      if (!targetTabId) return;

      // Actualizar estado activo en botones
      tabButtons.forEach(b => b.classList.remove('active', 'border-blue-600', 'text-blue-600'));
      btn.classList.add('active', 'border-blue-600', 'text-blue-600');

      // Alternar visibilidad de paneles
      tabPanels.forEach(panel => {
        const panelId = panel.getAttribute('data-panel') || panel.id;
        if (panelId === targetTabId) {
          panel.classList.remove('hidden', 'd-none');
          panel.classList.add('block');
        } else {
          panel.classList.add('hidden', 'd-none');
          panel.classList.remove('block');
        }
      });
    });
  });
}

// ============================================================
// FUNCIONES DE RENDERIZADO
// ============================================================
function renderAll() {
  renderDashboard();
  renderTable();
}

function renderDashboard() {
  const totalViewsEl = document.getElementById('metricTotalViews');
  const totalInteractionsEl = document.getElementById('metricTotalInteractions');
  const totalRecordsEl = document.getElementById('metricTotalRecords');

  if (totalViewsEl) {
    const totalViews = DATA.reduce((sum, item) => sum + item.visualizaciones, 0);
    totalViewsEl.textContent = totalViews.toLocaleString();
  }
  if (totalInteractionsEl) {
    const totalInteractions = DATA.reduce((sum, item) => sum + item.interacciones, 0);
    totalInteractionsEl.textContent = totalInteractions.toLocaleString();
  }
  if (totalRecordsEl) {
    totalRecordsEl.textContent = DATA.length;
  }
}

function renderTable() {
  const tableBody = document.getElementById('tableBody');
  if (!tableBody) return;

  tableBody.innerHTML = DATA.map(item => `
    <tr>
      <td class="px-4 py-2">${item.fecha}</td>
      <td class="px-4 py-2">${item.fuente}</td>
      <td class="px-4 py-2">${item.plataforma}</td>
      <td class="px-4 py-2">${item.tema}</td>
      <td class="px-4 py-2">${item.visualizaciones.toLocaleString()}</td>
      <td class="px-4 py-2">${item.interacciones.toLocaleString()}</td>
    </tr>
  `).join('');
}

function updateStatusIndicator(msg) {
  const statusPill = document.getElementById('dataStatusPill');
  if (statusPill) statusPill.textContent = msg;
}

// ============================================================
// MANEJADOR DE CARGA LOCAL (FILE INPUT)
// ============================================================
function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  console.log('📂 Cargando archivo local:', file.name);
  
  const reader = new FileReader();
  reader.onload = function(e) {
    const csvText = e.target.result;
    
    // Usar función global unificada para parsear
    if (typeof Papa === 'undefined') {
      alert('Error: PapaParse no está cargado');
      return;
    }

    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: function(results) {
        if (results.data && results.data.length > 0) {
          // Disparar evento csv-updated para que csv-loader lo procese
          document.dispatchEvent(new CustomEvent('csv-updated', {
            detail: results.data,
            bubbles: true
          }));
          updateStatusIndicator(`Archivo local (${file.name}) - ${results.data.length} registros`);
        } else {
          alert('El archivo CSV no contiene registros válidos.');
        }
      },
      error: function(err) {
        alert('Error en el formato del CSV: ' + err.message);
      }
    });
  };
  reader.readAsText(file);
}

// ============================================================
// BOTÓN DE SINCRONIZACIÓN (USA FUNCIÓN GLOBAL UNIFICADA)
// ============================================================
async function syncOnlineCsv() {
  const btn = document.getElementById('btnSyncOnline');
  if (btn) {
    btn.innerHTML = '⌛ Sincronizando...';
    btn.disabled = true;
  }

  try {
    // Llamar a la función global unificada desde csv-loader.js
    if (typeof fetchAndLoadCSV === 'function') {
      await fetchAndLoadCSV();
      console.log('✅ Sincronización completada con fetchAndLoadCSV');
    } else {
      throw new Error('fetchAndLoadCSV no disponible');
    }
  } catch (error) {
    console.warn('Error en sincronización:', error);
    
    // Fallback a datos semilla
    if (!DATA || DATA.length === 0) {
      DATA = SEED_ROWS;
      renderAll();
      updateStatusIndicator("Datos semillas locales (offline)");
      document.dispatchEvent(new CustomEvent('csv-updated', {
        detail: SEED_ROWS,
        bubbles: true
      }));
    }
  } finally {
    if (btn) {
      btn.innerHTML = '🔄 Sincronizar CSV';
      btn.disabled = false;
    }
  }
}

// ============================================================
// EVENT LISTENERS - COORDINACIÓN DE MÓDULOS
// ============================================================

// 1. Cuando csv-updated es disparado (por csv-loader), actualizar datos
document.addEventListener('csv-updated', function(ev) {
  try {
    const rows = ev.detail || [];
    if (Array.isArray(rows) && rows.length) {
      DATA = rows;
      
      // Guardar en caché
      try {
        localStorage.setItem(STORAGE_KEYS.DATASET, JSON.stringify(DATA));
        localStorage.setItem(STORAGE_KEYS.LAST_UPDATE, JSON.stringify({
          timestamp: new Date().toISOString(),
          count: DATA.length
        }));
      } catch (e) {
        console.warn('No se pudo guardar en caché', e);
      }

      // Renderizar
      renderAll();
      
      // Actualizar UI
      const last = document.getElementById('lastUpdate');
      if (last) last.textContent = 'Última actualización: ' + (new Date()).toLocaleString();
      
      console.log('📊 Datos actualizados:', DATA.length, 'registros');
    }
  } catch (e) {
    console.warn('Error en csv-updated handler:', e);
  }
});

// 2. Cuando data-enriched es disparado (por analytics-radar)
document.addEventListener('data-enriched', function(ev) {
  try {
    console.log('🎨 Datos enriquecidos recibidos, esperando simulaciones...');
  } catch (e) {
    console.warn('Error en data-enriched handler:', e);
  }
});

// 3. Cuando simulations-ready es disparado (por simulator-predictive)
document.addEventListener('simulations-ready', function(ev) {
  try {
    console.log('✨ Simulaciones predictivas disponibles - Renderizando dashboards enriquecidos');
  } catch (e) {
    console.warn('Error en simulations-ready handler:', e);
  }
});

// ============================================================
// INICIALIZACIÓN GENERAL
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Inicializando Ibarra Civic Radar...');
  
  setupTabNavigation();

  // Hook para input de carga local
  const fileInput = document.getElementById('csvInput') || document.getElementById('inputCsvFile');
  if (fileInput) {
    fileInput.addEventListener('change', handleFileUpload);
  }

  // Hook para botón de sincronización
  const btnSync = document.getElementById('btnSyncOnline');
  if (btnSync) {
    btnSync.addEventListener('click', syncOnlineCsv);
  }

  // Intentar cargar desde caché
  const cachedData = localStorage.getItem(STORAGE_KEYS.DATASET);
  if (cachedData) {
    try {
      const parsedData = JSON.parse(cachedData);
      if (Array.isArray(parsedData) && parsedData.length) {
        DATA = parsedData;
        renderAll();
        updateStatusIndicator("Caché local cargada");
        
        // Disparar evento para que módulos procesen datos cacheados
        document.dispatchEvent(new CustomEvent('csv-updated', {
          detail: DATA,
          bubbles: true
        }));
        
        console.log('💾 Datos cargados desde caché');
        return;
      }
    } catch (e) {
      console.error("Error leyendo caché:", e);
    }
  }

  // Si no hay caché, usar semilla e intentar sincronizar
  DATA = SEED_ROWS;
  renderAll();
  updateStatusIndicator("Cargando datos...");
  
  // Disparar evento de semilla
  document.dispatchEvent(new CustomEvent('csv-updated', {
    detail: SEED_ROWS,
    bubbles: true
  }));
  
  // Intentar sincronizar automáticamente
  console.log('📡 Intentando sincronización automática...');
  syncOnlineCsv();
});
