// data-loader.js
// Fetches a remote CSV file (default: raw file in this repo) and parses it with PapaParse.
// It binds to the existing "Actualizar datos (CSV)" button (.btn-upload) and to the
// hidden file input (#csvInput) as a fallback for manual uploads.

// CONFIG: change this URL to the publicly accessible raw CSV you want to use.
const CSV_URL = 'https://raw.githubusercontent.com/slddarias036-art/poribarratodo/main/ibarra_civic_radar_ultimos_60_dias.csv';
// Poll interval for automatic refresh (ms). 0 to disable automatic polling.
const AUTO_REFRESH_MS = 0; // set to 60000 for 1 minute

async function fetchAndLoadCSV(showAlerts = false){
  const lastUpdateEl = document.getElementById('lastUpdate');
  if(lastUpdateEl) lastUpdateEl.textContent = 'Última actualización: cargando…';
  try{
    const res = await fetch(CSV_URL + '?cache=' + Date.now());
    if(!res.ok) throw new Error('HTTP ' + res.status);
    const text = await res.text();
    Papa.parse(text, {
      header: true,
      skipEmptyLines: true,
      transform: v => v.trim(),
      complete: results => handleParsedCSV(results.data),
      error: err => {
        console.error('PapaParse error:', err);
        if(lastUpdateEl) lastUpdateEl.textContent = 'Última actualización: error';
        if(showAlerts) alert('Error al parsear CSV: ' + err);
      }
    });
  }catch(err){
    console.error('fetchAndLoadCSV error:', err);
    if(lastUpdateEl) lastUpdateEl.textContent = 'Última actualización: error';
    if(showAlerts) alert('Error al descargar CSV: ' + err);
  }
}

function handleParsedCSV(rows){
  // Normaliza: convierte cabeceras en minúsculas sin espacios y mantén los valores crudos.
  if(!rows || !rows.length) console.warn('CSV vacío o no parseado');
  const normalized = rows.map(r => {
    const out = {};
    for(const k in r){
      const newKey = k ? k.trim() : k;
      out[newKey] = r[k];
    }
    return out;
  });

  // Exponer los datos globalmente para compatibilidad con el resto de la app.
  window.CSV_DATA = normalized;
  window.CSV_LAST_UPDATE = new Date();

  const lastUpdateEl = document.getElementById('lastUpdate');
  if(lastUpdateEl) lastUpdateEl.textContent = 'Última actualización: ' + window.CSV_LAST_UPDATE.toLocaleString();

  // Emitir un evento para que otras partes de la app reaccionen.
  document.dispatchEvent(new CustomEvent('csv-updated', {detail: normalized}));

  // Llamar a un callback global si existe (para compatibilidad hacia atrás).
  try{
    if(typeof window.onCSVLoaded === 'function') window.onCSVLoaded(normalized);
  }catch(e){ console.error(e); }

  // Algunas apps esperan funciones concretas; intentamos llamar a algunas comunes si existen.
  try{ if(typeof window.renderDatos === 'function') window.renderDatos(); }catch(e){}
  try{ if(typeof window.renderTendencias === 'function') window.renderTendencias(); }catch(e){}
}

function parseLocalFile(file){
  if(!file) return;
  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: results => handleParsedCSV(results.data),
    error: err => { console.error('PapaParse file error:', err); alert('Error al parsear el archivo: ' + err); }
  });
}

function bindControls(){
  const uploadBtn = document.querySelector('.btn-upload');
  if(uploadBtn){
    uploadBtn.removeAttribute('onclick');
    uploadBtn.addEventListener('click', e => {
      // By default fetch remote CSV. If user holds Alt/Option, open file picker.
      if(e.altKey || e.shiftKey){
        const fileInput = document.getElementById('csvInput');
        if(fileInput) fileInput.click();
        return;
      }
      fetchAndLoadCSV(true);
    });
  }

  const fileInput = document.getElementById('csvInput');
  if(fileInput){
    fileInput.addEventListener('change', e => {
      const f = e.target.files && e.target.files[0];
      if(f) parseLocalFile(f);
    });
  }
}

// Auto-init when DOM is ready
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', () => { bindControls(); if(AUTO_REFRESH_MS > 0) setInterval(fetchAndLoadCSV, AUTO_REFRESH_MS); });
}else{
  bindControls(); if(AUTO_REFRESH_MS > 0) setInterval(fetchAndLoadCSV, AUTO_REFRESH_MS);
}

// Optionally auto-fetch once on load (do not show alert by default)
fetchAndLoadCSV(false);
