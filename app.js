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

// ============================================================
// CONFIGURACIÓN DE URLS Y RECURSOS
// ============================================================
const DRIVE_FILE_ID = "1NmSWUIDu0DaxIWxADq3-Q3P2lss3HvlD";
const DIRECT_DRIVE_URL = `https://drive.google.com/uc?export=download&id=${DRIVE_FILE_ID}`;
const PROXY_DRIVE_URL = `https://api.corsproxy.io/?${encodeURIComponent(DIRECT_DRIVE_URL)}`;

const STORAGE_KEYS = {
  DATASET: 'ibarra_radar_cached_dataset',
  LAST_UPDATE: 'ibarra_radar_last_update_info'
};

let DATA = [];

// ============================================================
// NAVEGACIÓN Y CONTROL DE PESTAÑAS (TABS)
// ============================================================
function setupTabNavigation() {
  const tabButtons = document.querySelectorAll('.nav-tab-btn, [data-tab]');
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
// PROCESAMIENTO Y MODELADO DE DATOS
// ============================================================
function buildDataset(parsedRows) {
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
    hashtags: typeof row.hashtags === 'string' ? row.hashtags.split(';').map(h => h.trim()) : (row.hashtags || []),
    audio: row.audio || ''
  }));
}

function processCsvContent(csvText, sourceLabel) {
  if (typeof Papa === 'undefined') {
    alert('Error: La librería PapaParse no está cargada en el proyecto.');
    return;
  }

  Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
    complete: function(results) {
      if (results.data && results.data.length > 0) {
        DATA = buildDataset(results.data);
        localStorage.setItem(STORAGE_KEYS.DATASET, JSON.stringify(DATA));
        localStorage.setItem(STORAGE_KEYS.LAST_UPDATE, JSON.stringify({
          timestamp: new Date().toISOString(),
          source: sourceLabel
        }));
        renderAll();
        updateStatusIndicator(`${sourceLabel} (${DATA.length} registros)`);
      } else {
        alert('El archivo CSV no contiene registros válidos.');
      }
    },
    error: function(err) {
      alert('Error en el formato del CSV: ' + err.message);
    }
  });
}

// ============================================================
// SINCRONIZACIÓN Y DESCARGA REMOTA
// ============================================================
async function syncOnlineCsv() {
  const btn = document.getElementById('btnSyncOnline');
  if (btn) {
    btn.innerHTML = '⌛ Sincronizando...';
    btn.disabled = true;
  }

  let csvText = null;

  try {
    const proxyResponse = await fetch(`${PROXY_DRIVE_URL}&_t=${Date.now()}`);
    if (proxyResponse.ok) {
      const text = await proxyResponse.text();
      if (!text.trim().startsWith("<html") && !text.trim().startsWith("<!DOCTYPE")) {
        csvText = text;
      }
    }

    if (!csvText) {
      const directResponse = await fetch(`${DIRECT_DRIVE_URL}&_t=${Date.now()}`);
      if (directResponse.ok) {
        const text = await directResponse.text();
        if (!text.trim().startsWith("<html") && !text.trim().startsWith("<!DOCTYPE")) {
          csvText = text;
        }
      }
    }

    if (csvText) {
      processCsvContent(csvText, "Google Drive (Actualizado)");
    } else {
      throw new Error("Respuesta no válida recibida desde Google Drive.");
    }

  } catch (error) {
    console.warn("Falla en la carga remota, utilizando datos cacheados o iniciales:", error);
    if (!DATA || DATA.length === 0) {
      DATA = buildDataset(SEED_ROWS);
      renderAll();
      updateStatusIndicator("Datos semillas locales (offline)");
    }
    alert("No se pudo descargar automáticamente el archivo desde Google Drive. Se han cargado los datos iniciales.");
  } finally {
    if (btn) {
      btn.innerHTML = '🔄 Sincronizar CSV';
      btn.disabled = false;
    }
  }
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    processCsvContent(e.target.result, `Archivo local (${file.name})`);
  };
  reader.readAsText(file);
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
// INICIALIZACIÓN GENERAL
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  setupTabNavigation();

  // Soportar ambos IDs por compatibilidad: 'csvInput' (nuevo) y 'inputCsvFile' (antiguo)
  const fileInput = document.getElementById('csvInput') || document.getElementById('inputCsvFile');
  if (fileInput) fileInput.addEventListener('change', handleFileUpload);

  const btnSync = document.getElementById('btnSyncOnline');
  if (btnSync) btnSync.addEventListener('click', syncOnlineCsv);

  // Escuchar evento global cuando csv-hooks/data-loader despacha la actualización
  document.addEventListener('csv-updated', function(ev){
    try{
      const rows = ev.detail || [];
      if(Array.isArray(rows) && rows.length){
        DATA = buildDataset(rows);
        renderAll();
        const last = document.getElementById('lastUpdate');
        if(last) last.textContent = 'Última actualización: ' + (new Date()).toLocaleString();
      }
    }catch(e){
      console.warn('csv-updated handler error', e);
    }
  });

  const cachedData = localStorage.getItem(STORAGE_KEYS.DATASET);
  if (cachedData) {
    try {
      DATA = JSON.parse(cachedData);
      renderAll();
      updateStatusIndicator("Caché local cargada");
      return;
    } catch (e) {
      console.error("Error leyendo caché:", e);
    }
  }

  // Si no hay datos cacheados, usar datos de semilla e intentar sincronizar
  DATA = buildDataset(SEED_ROWS);
  renderAll();
  updateStatusIndicator("Cargando datos...");
  syncOnlineCsv();
});
