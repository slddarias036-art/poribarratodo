// csv-hooks.js
(function(){
  // Botón principal para sincronizar: llama al loader global si existe, si no lanza un evento
  window.syncOnlineCsv = function(){
    if(typeof fetchAndLoadCSV === 'function'){
      fetchAndLoadCSV();
    } else {
      document.dispatchEvent(new CustomEvent('csv-request-update'));
    }
  };

  // Cuando el CSV es actualizado por data-loader.js o por carga local, llamamos a los renderers de la app
  function onCsvUpdated(ev){
    const rows = ev.detail || [];
    window.CSV_DATA = rows;

    // Llamar renderers genéricos si existen
    if(typeof renderAll === 'function') try{ renderAll(); }catch(e){ console.warn('renderAll error', e); }
    const fns = ['renderDatos','renderDashboard','renderTable','renderTendencias','renderHeatmap'];
    fns.forEach(name=>{
      if(typeof window[name] === 'function'){
        try{ window[name](rows); }catch(e){ console.warn(name + ' error', e); }
      }
    });
  }

  document.addEventListener('csv-updated', onCsvUpdated);
  document.addEventListener('dataUpdated', onCsvUpdated);

  // Hook para input#csvInput (carga local)
  const fileInput = document.getElementById('csvInput');
  if(fileInput && !fileInput.dataset.hooked){
    fileInput.dataset.hooked = '1';
    fileInput.addEventListener('change', e => {
      const f = e.target.files && e.target.files[0];
      if(!f) return;
      if(typeof Papa !== 'undefined'){
        Papa.parse(f, {header:true, skipEmptyLines:true, complete: function(results){
          document.dispatchEvent(new CustomEvent('csv-updated', {detail: results.data}));
        }});
      }else{
        alert('PapaParse no está disponible. Asegúrate de cargar papaparse en index.html');
      }
    });
  }
})();
