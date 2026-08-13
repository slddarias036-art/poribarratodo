// data-loader.js
// Descarga un CSV desde una URL (o desde Google Drive por defecto), parsea con PapaParse y dispara 'csv-updated' y 'dataUpdated'.
(function(){
  const DEFAULT_DRIVE_FILE_ID = "1NmSWUIDu0DaxIWxADq3-Q3P2lss3HvlD";
  const DIRECT_DRIVE_URL = id => `https://drive.google.com/uc?export=download&id=${id}`;
  const PROXY = url => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`; // proxy genérico (evita CORS)

  async function fetchText(url){
    const res = await fetch(url + (url.includes('?') ? '&' : '?') + '_t=' + Date.now());
    if(!res.ok) throw new Error('HTTP ' + res.status);
    return await res.text();
  }

  async function fetchAndParseFromDrive(id = DEFAULT_DRIVE_FILE_ID){
    const direct = DIRECT_DRIVE_URL(id);
    // Intentar directo primero
    try{
      const txt = await fetchText(direct);
      if(txt && !txt.trim().startsWith('<')) return txt;
    }catch(e){ /* fallback a proxy */ }

    // Fallback a proxy de CORS
    try{
      const txt = await fetchText(PROXY(direct));
      if(txt) return txt;
    }catch(e){
      throw new Error('No se pudo obtener CSV desde Drive ni proxy: ' + e.message);
    }
  }

  async function fetchAndLoadCSV(urlOrFlag){
    try{
      let csvText = null;
      if(typeof urlOrFlag === 'string' && urlOrFlag.trim()){
        csvText = await fetchText(urlOrFlag);
      } else {
        csvText = await fetchAndParseFromDrive();
      }

      if(!csvText) throw new Error('Contenido CSV vacío');

      if(typeof Papa === 'undefined'){
        console.error('PapaParse no disponible');
        alert('Error: PapaParse no está cargado.');
        return;
      }

      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete(results){
          const rows = results.data || [];
          document.dispatchEvent(new CustomEvent('csv-updated', {detail: rows}));
          document.dispatchEvent(new CustomEvent('dataUpdated', {detail: rows}));
          const el = document.getElementById('lastUpdate');
          if(el) el.textContent = 'Última actualización: ' + (new Date()).toLocaleString();
          try{ localStorage.setItem('ibarra_radar_cached_dataset', JSON.stringify(rows)); }catch(e){/*ignore*/ }
        },
        error(err){
          console.error('PapaParse error', err);
          alert('Error parsing CSV: ' + err.message);
        }
      });
    }catch(err){
      console.error('fetchAndLoadCSV error', err);
      alert('No se pudo descargar el CSV: ' + err.message);
    }
  }

  // Exponer globalmente
  window.fetchAndLoadCSV = fetchAndLoadCSV;
  window.fetchCsvFromUrl = fetchAndLoadCSV;
})();
