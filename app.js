const SEED_ROWS = [
{fecha:"2026-06-22",fuente:"La Hora",tipo_registro:"Preparación de primarias",contenido_resumido:"Juan Arias aparece como posible precandidato de Juntos 70 para Ibarra; el movimiento convocó a su primarias del 28 de junio.",tema:"Preparación electoral",entidad_o_contexto:"Juntos 70",url:"https://www.lahora.com.ec/imbaburacarchi/imbabura-juntos-lista-70-elegira-a-sus-precandidatos-para-las-seccionales-2027-20260622-0012.html",sentimiento:"No inferido",verificacion:"Revisar fuente original",nota_metodologica:"Registro construido a partir de información pública localizada; no representa opinión del electorado."},
{fecha:"2026-06-29",fuente:"La Hora",tipo_registro:"Ratificación de precandidatura",contenido_resumido:"Juan Fernando Arias fue elegido como precandidato de Juntos lista 70; participaron más de 300 militantes y dirigentes según la publicación.",tema:"Candidatura",entidad_o_contexto:"Juntos 70",url:"https://www.lahora.com.ec/imbaburacarchi/juntos-70-oficializa-a-juan-arias-como-precandidato-a-la-alcaldia-de-ibarra-20260629-0021.html",sentimiento:"No inferido",verificacion:"Revisar fuente original",nota_metodologica:"Registro construido a partir de información pública localizada; no representa opinión del electorado."},
{fecha:"2026-06-29",fuente:"Primera Zona",tipo_registro:"Ratificación de precandidatura",contenido_resumido:"El movimiento Juntos ratificó a Juan Arias como precandidato a la Alcaldía de Ibarra tras las primarias del 28 de junio.",tema:"Candidatura",entidad_o_contexto:"Juntos 70",url:"https://primerazona.news/2026/06/juan-arias-ratificado-como-precandidato-a-la-alcaldia-de-ibarra-por-el-movimiento-juntos/",sentimiento:"No inferido",verificacion:"Revisar fuente original",nota_metodologica:"Registro construido a partir de información pública localizada; no representa opinión del electorado."},
{fecha:"2026-06-29",fuente:"Diario El Norte",tipo_registro:"Ratificación de precandidatura",contenido_resumido:"Se reportó la ratificación de Arias y su intención de construir una propuesta mediante diálogo con habitantes del cantón.",tema:"Participación ciudadana",entidad_o_contexto:"Juntos 70",url:"https://elnorte.ec/juan-arias-es-ratificado-como-precandidato-a-la-alcaldia-de-ibarra/",sentimiento:"No inferido",verificacion:"Revisar fuente original",nota_metodologica:"Registro construido a partir de información pública localizada; no representa opinión del electorado."},
{fecha:"2026-06-29",fuente:"Expectativa",tipo_registro:"Ratificación de precandidatura",contenido_resumido:"Se informó sobre la designación de Juan Arias y la presentación de precandidaturas a concejales.",tema:"Equipo político",entidad_o_contexto:"Juntos 70",url:"https://www.expectativa.ec/juan-arias-fue-ratificado-como-precandidato-a-la-alcaldia-de-ibarra/",sentimiento:"No inferido",verificacion:"Revisar fuente original",nota_metodologica:"Registro construido a partir de información pública localizada; no representa opinión del electorado."},
{fecha:"2026-07-01",fuente:"OMCE Medios",tipo_registro:"Panorama electoral",contenido_resumido:"El medio incluyó a Juan Fernando Arias entre las precandidaturas para la Alcaldía de Ibarra y describió el proceso electoral en Imbabura.",tema:"Panorama electoral",entidad_o_contexto:"Ibarra",url:"https://omcemedios.com/omce/2026/07/01/mirador-politico-3/",sentimiento:"No inferido",verificacion:"Revisar fuente original",nota_metodologica:"Registro construido a partir de información pública localizada; no representa opinión del electorado."},
{fecha:"2026-07-08",fuente:"Primera Zona",tipo_registro:"Escenario electoral",contenido_resumido:"Una medición atribuida a CONSULTAREC reportó 15% para Juan Arias, junto con 39% de indecisos. El dato corresponde a la encuesta citada por el medio y no equivale a una medición propia.",tema:"Encuestas",entidad_o_contexto:"Ibarra",url:"https://primerazona.news/2026/07/se-mantiene-una-eleccion-abierta-y-jose-moncayo-aparece-como-el-outsider-de-la-contienda/",sentimiento:"No inferido",verificacion:"Revisar fuente original",nota_metodologica:"Registro construido a partir de información pública localizada; no representa opinión del electorado."},
{fecha:"2026-07-25",fuente:"La Hora",tipo_registro:"Propuestas de campaña",contenido_resumido:"Entrevista sobre modernización del mercado Amazonas, con una proyección de inversión de USD 40 millones.",tema:"Comercio / mercado Amazonas",entidad_o_contexto:"Propuesta de Juan Arias",url:"https://www.lahora.com.ec/imbaburacarchi/juan-arias-nuestra-proyeccion-es-invertir-40-millones-para-modernizar-el-mercado-amazonas-20260725-0013.html",sentimiento:"No inferido",verificacion:"Revisar fuente original",nota_metodologica:"Registro construido a partir de información pública localizada; no representa opinión del electorado."},
{fecha:"2026-07-25",fuente:"La Hora",tipo_registro:"Propuestas de campaña",contenido_resumido:"La entrevista aborda agua potable, mantenimiento y ampliación de pozos, y un plan maestro de agua y alcantarillado.",tema:"Agua potable",entidad_o_contexto:"Propuesta de Juan Arias",url:"https://www.lahora.com.ec/imbaburacarchi/juan-arias-nuestra-proyeccion-es-invertir-40-millones-para-modernizar-el-mercado-amazonas-20260725-0013.html",sentimiento:"No inferido",verificacion:"Revisar fuente original",nota_metodologica:"Registro construido a partir de información pública localizada; no representa opinión del electorado."},
{fecha:"2026-07-25",fuente:"La Hora",tipo_registro:"Propuestas de campaña",contenido_resumido:"La entrevista plantea modernización del transporte público y menciona el tren como parte de la movilidad de Ibarra.",tema:"Movilidad",entidad_o_contexto:"Propuesta de Juan Arias",url:"https://www.lahora.com.ec/imbaburacarchi/juan-arias-nuestra-proyeccion-es-invertir-40-millones-para-modernizar-el-mercado-amazonas-20260725-0013.html",sentimiento:"No inferido",verificacion:"Revisar fuente original",nota_metodologica:"Registro construido a partir de información pública localizada; no representa opinión del electorado."},
{fecha:"2026-07-25",fuente:"La Hora",tipo_registro:"Propuestas de campaña",contenido_resumido:"Entre tres prioridades se mencionan mercado Amazonas, puente del ingreso norte y vinculación con la academia para generar empleo joven.",tema:"Infraestructura / empleo joven",entidad_o_contexto:"Propuesta de Juan Arias",url:"https://www.lahora.com.ec/imbaburacarchi/juan-arias-nuestra-proyeccion-es-invertir-40-millones-para-modernizar-el-mercado-amazonas-20260725-0013.html",sentimiento:"No inferido",verificacion:"Revisar fuente original",nota_metodologica:"Registro construido a partir de información pública localizada; no representa opinión del electorado."},
{fecha:"2026-08-01",fuente:"OMCE Medios",tipo_registro:"Calendario electoral",contenido_resumido:"Se reportó la convocatoria oficial a elecciones el 1 de agosto y etapas posteriores del proceso electoral; el artículo lista a Arias entre las precandidaturas de Ibarra.",tema:"Calendario electoral",entidad_o_contexto:"Elecciones seccionales",url:"https://omcemedios.com/omce/2026/07/01/mirador-politico-3/",sentimiento:"No inferido",verificacion:"Revisar fuente original",nota_metodologica:"Registro construido a partir de información pública localizada; no representa opinión del electorado."},
{fecha:"2026-06-23",fuente:"La Hora",tipo_registro:"Contexto local",contenido_resumido:"Una noticia sobre violencia y ocupación de espacios públicos en Ibarra aporta contexto para el análisis de temas locales, aunque no se refiere directamente a Arias.",tema:"Seguridad / espacio público",entidad_o_contexto:"Contexto de Ibarra",url:"https://www.lahora.com.ec/imbaburacarchi/",sentimiento:"No inferido",verificacion:"Revisar fuente original",nota_metodologica:"Registro construido a partir de información pública localizada; no representa opinión del electorado."},
{fecha:"2026-07-03",fuente:"La Hora",tipo_registro:"Contexto local",contenido_resumido:"Noticias sobre áreas verdes y protección de Guayabillas aportan contexto ambiental para el monitoreo de conversación pública en Ibarra.",tema:"Ambiente",entidad_o_contexto:"Contexto de Ibarra",url:"https://www.lahora.com.ec/tema/ibarra-t49650",sentimiento:"No inferido",verificacion:"Revisar fuente original",nota_metodologica:"Registro construido a partir de información pública localizada; no representa opinión del electorado."},
{fecha:"2026-07-17",fuente:"La Hora",tipo_registro:"Contexto local",contenido_resumido:"La inauguración del Centro Cultural y Comercial El Torreón aparece entre las noticias locales de Ibarra del periodo.",tema:"Desarrollo urbano / cultura",entidad_o_contexto:"Contexto de Ibarra",url:"https://www.lahora.com.ec/tema/ibarra-t49650",sentimiento:"No inferido",verificacion:"Revisar fuente original",nota_metodologica:"Registro verificado."},
];

const KNOWN_MEDIA = ["La Hora","Primera Zona","Diario El Norte","Expectativa","OMCE Medios"];
const NA = "Dato no disponible";

function normVal(v){
  if(v===undefined||v===null) return "";
  return String(v).trim();
}
function pick(obj, keys){
  for(const k of keys){
    const found = Object.keys(obj).find(h=>h.toLowerCase().trim()===k);
    if(found && normVal(obj[found])!="") return normVal(obj[found]);
  }
  return "";
}
function parseNumber(v){
  const s = normVal(v).replace(/[.,](?=\d{3}\b)/g,'').replace(',','.');
  if(s==="") return null;
  const n = parseFloat(s);
  return isNaN(n) ? null : n;
}
function parseFechaFlexible(v){
  const s = normVal(v);
  if(s==="") return null;
  let m = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if(m) return `${m[1]}-${m[2]}-${m[3]}`;
  m = s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
  if(m){
    let dd=m[1], mm=m[2];
    if(parseInt(mm)>12){ const t=dd; dd=mm; mm=t; }
    return `${m[3]}-${mm.padStart(2,'0')}-${dd.padStart(2,'0')}`;
  }
  const d = new Date(s);
  if(!isNaN(d.getTime())) return d.toISOString().slice(0,10);
  return null;
}
function normalizePlataforma(raw, fuente, tipoContenido){
  const s = normVal(raw).toLowerCase();
  if(s.includes('insta')) return 'Instagram';
  if(s.includes('face')||s==='fb') return 'Facebook';
  if(s.includes('tiktok')||s==='tt') return 'TikTok';
  if(s.includes('medio')||s.includes('prensa')||s.includes('digital')) return 'Medios digitales';
  if(raw && normVal(raw)!="") return normVal(raw);
  if(KNOWN_MEDIA.includes(fuente)) return 'Medios digitales';
  return NA;
}

const CATEGORY_KEYWORDS = [
  ["Seguridad", /seguridad|violencia|delincuen|espacio p[uú]blico/i],
  ["Movilidad y transporte", /movilidad|transporte|tr[aá]nsito|tren|v[ií]a/i],
  ["Agua potable", /agua potable|alcantarill|pozo/i],
  ["Empleo", /empleo|trabajo|laboral/i],
  ["Juventud", /juventud|joven|j[oó]venes/i],
  ["Mercado Amazonas", /mercado amazonas/i],
  ["Ambiente", /ambiente|verde|guayabillas|ecol[oó]g/i],
  ["Infraestructura", /infraestructura|puente|obra/i],
  ["Educación", /educaci[oó]n|escuela|colegio|universidad/i],
  ["Turismo", /turismo|tur[ií]stic/i],
  ["Desarrollo económico", /desarrollo econ[oó]mico|comercio|inversi[oó]n/i],
  ["Administración municipal", /administraci[oó]n|municip|participaci[oó]n ciudadana/i],
  ["Proceso electoral / candidatura", /precandidat|candidat|primarias|elector|encuesta|calendario electoral|panorama electoral|equipo pol[ií]tico/i],
  ["Desarrollo urbano y cultura", /desarrollo urbano|cultura|centro cultural/i],
];
function deriveCategoria(tema, subtema){
  const text = `${tema} ${subtema}`.toLowerCase();
  for(const [cat, re] of CATEGORY_KEYWORDS){
    if(re.test(text)) return {categoria:cat, emergente: cat==="Proceso electoral / candidatura" || cat==="Desarrollo urbano y cultura"};
  }
  return {categoria: (tema && tema.trim()!="") ? tema.trim() : "Otros", emergente:true};
}

function normalizeRow(obj){
  const fechaRaw = pick(obj,['fecha']);
  const fecha = parseFechaFlexible(fechaRaw);
  const tema = pick(obj,['tema']) || NA;
  const subtema = pick(obj,['subtema','entidad_o_contexto']) || NA;
  const {categoria, emergente} = deriveCategoria(tema!==NA?tema:'', subtema!==NA?subtema:'');
  const fuente = pick(obj,['fuente']) || NA;
  const tipoContenido = pick(obj,['tipo_contenido','tipo_registro']) || NA;
  const plataformaRaw = pick(obj,['plataforma']);
  const verifRaw = pick(obj,['requiere_verificacion','verificacion']);
  let requiereVerif = 'Información insuficiente';
  if(verifRaw){
    const low = verifRaw.toLowerCase();
    if(low.includes('requiere')||low.includes('sí')||low.includes('si')) requiereVerif = 'Requiere verificación';
    else if(low.includes('respald')||low.includes('confirm')||low.includes('no')) requiereVerif = 'Respaldada';
    else requiereVerif = 'Requiere verificación';
  }
  return {
    fecha: fecha || null,
    fecha_raw: fechaRaw || NA,
    hora: pick(obj,['hora']) || NA,
    fuente,
    plataforma: normalizePlataforma(plataformaRaw, fuente, tipoContenido),
    url: pick(obj,['url']) || NA,
    tipo_contenido: tipoContenido,
    autor_o_medio: pick(obj,['autor_o_medio']) || fuente,
    titulo: pick(obj,['titulo','título']) || NA,
    texto: pick(obj,['texto','contenido_resumido','resumen_ia']) || NA,
    tema,
    subtema,
    categoria, emergente,
    tono: pick(obj,['tono','sentimiento']) || NA,
    interacciones: parseNumber(pick(obj,['interacciones'])),
    comentarios: parseNumber(pick(obj,['comentarios'])),
    compartidos: parseNumber(pick(obj,['compartidos'])),
    visualizaciones: parseNumber(pick(obj,['visualizaciones'])),
    hashtags: pick(obj,['hashtags']) || NA,
    ubicacion: pick(obj,['ubicacion','ubicación']) || NA,
    entidad_relacionada: pick(obj,['entidad_relacionada','entidad_o_contexto']) || NA,
    nivel_relevancia: parseNumber(pick(obj,['nivel_relevancia'])),
    requiere_verificacion: requiereVerif,
    fuente_verificacion: pick(obj,['fuente_verificacion']) || pick(obj,['url']) || NA,
    resumen_ia: pick(obj,['resumen_ia','contenido_resumido']) || NA,
    tendencia: pick(obj,['tendencia']) || NA,
    observaciones: pick(obj,['observaciones','nota_metodologica']) || NA,
  };
}

function buildDataset(rawObjs, log){
  const seen = new Map();
  let dupCount = 0, badDateCount = 0;
  const rows = [];
  rawObjs.forEach((o,i)=>{
    const r = normalizeRow(o);
    if(!r.fecha) badDateCount++;
    const key = [r.fecha_raw, r.url, (r.titulo!==NA?r.titulo:r.texto)].join('|').toLowerCase().trim();
    if(seen.has(key)){ dupCount++; return; }
    seen.set(key, true);
    rows.push(r);
  });
  if(log){
    log.push({t:'ok', m:`${rows.length} registro(s) cargado(s) correctamente.`});
    if(dupCount) log.push({t:'warn', m:`${dupCount} registro(s) duplicado(s) detectado(s) y omitido(s).`});
    if(badDateCount) log.push({t:'warn', m:`${badDateCount} registro(s) sin fecha reconocible — se conservan pero no aparecerán en gráficos por fecha.`});
  }
  return rows;
}

let DATA = [];
let lastUpdateTs = null;
let currentTab = 'inicio';
let filters = {plataforma:"", fuente:"", categoria:"", desde:"", hasta:""};
let selectedNode = null;

function loadSeed(){
  const log = [];
  DATA = buildDataset(SEED_ROWS, log);
  lastUpdateTs = new Date();
  setUpdatePill('Conjunto de datos original (10 columnas)');
  renderAll();
}

function setUpdatePill(sourceLabel){
  const el = document.getElementById('lastUpdate');
  const ts = lastUpdateTs ? lastUpdateTs.toLocaleString('es-EC') : '—';
  el.textContent = `Última actualización: ${ts} · ${sourceLabel}`;
}

const EXPECTED_COLS = ["fecha","hora","fuente","plataforma","url","tipo_contenido","autor_o_medio","título","texto","tema","subtema","tono","interacciones","comentarios","compartidos","visualiza..."];
const LEGACY_COLS = ["fecha","fuente","tipo_registro","contenido_resumido","tema","entidad_o_contexto","url","sentimiento","verificacion","nota_metodologica"];

document.getElementById('csvInput').addEventListener('change', e=>{
  if(e.target.files[0]) handleCsvFile(e.target.files[0]);
});
const dropZone = document.getElementById('dropZone');
['dragenter','dragover'].forEach(ev=>dropZone.addEventListener(ev, e=>{e.preventDefault(); dropZone.classList.add('drag');}));
['dragleave','drop'].forEach(ev=>dropZone.addEventListener(ev, e=>{e.preventDefault(); dropZone.classList.remove('drag');}));
dropZone.addEventListener('drop', e=>{
  if(e.dataTransfer.files[0]) handleCsvFile(e.dataTransfer.files[0]);
});

function handleCsvFile(file){
  const log = [];
  if(!file.name.toLowerCase().endsWith('.csv')){
    log.push({t:'err', m:'El archivo no tiene extensión .csv. Selecciona un archivo CSV válido.'});
    showUploadReport(log);
    return;
  }
  Papa.parse(file, {
    header:true,
    skipEmptyLines:true,
    complete: function(results){
      const headers = results.meta.fields || [];
      const headersLower = headers.map(h=>h.toLowerCase().trim());
      const missingExtended = EXPECTED_COLS.filter(c=>!headersLower.includes(c));
      const hasLegacyCore = LEGACY_COLS.filter(c=>headersLower.includes(c)).length >= 5;
      const hasAnyCore = headersLower.includes('fecha') || headersLower.includes('tema') || headersLower.includes('fuente');

      if(!hasAnyCore){
        log.push({t:'err', m:'El CSV no contiene columnas reconocibles (se esperaba al menos fecha, fuente o tema). Verifica la estructura del archivo.'});
        showUploadReport(log);
        return;
      }
      log.push({t:'ok', m:`Archivo leído: ${file.name} (${results.data.length} fila(s), ${headers.length} columna(s)).`});
      if(results.errors && results.errors.length){
        log.push({t:'warn', m:`${results.errors.length} problema(s) de formato detectado(s) por el parser (filas afectadas se procesan de forma parcial cuando es posible).`});
      }
      if(missingExtended.length && !hasLegacyCore){
        log.push({t:'warn', m:`Columnas del esquema extendido no encontradas (se mostrará "Dato no disponible"): ${missingExtended.join(', ')}.`});
      } else if(hasLegacyCore){
        log.push({t:'ok', m:'Se detectó el esquema original de 10 columnas — se procesará en modo compatibilidad.'});
      }
      const rows = buildDataset(results.data, log);
      if(rows.length===0){
        log.push({t:'err', m:'No se pudo construir ningún registro válido a partir del archivo.'});
        showUploadReport(log);
        return;
      }
      DATA = rows;
      lastUpdateTs = new Date();
      setUpdatePill(file.name);
      log.push({t:'ok', m:'✓ Datos actualizados correctamente. Todos los paneles fueron recalculados.'});
      showUploadReport(log);
      resetFilters();
      renderAll();
    },
    error: function(err){
      log.push({t:'err', m:'No se pudo leer el archivo: '+err.message});
      showUploadReport(log);
    }
  });
}
function showUploadReport(log){
  const box = document.getElementById('uploadReport');
  const list = document.getElementById('uploadLog');
  box.style.display='block';
  list.innerHTML = log.map(l=>`<div class="l-${l.t}">${l.t==='err'?'✕':l.t==='warn'?'⚠':'✓'} ${l.m}</div>`).join('');
  goTab('datos');
}

document.querySelectorAll('.tab').forEach(btn=>{
  btn.addEventListener('click', ()=>goTab(btn.dataset.tab));
});
function goTab(tab){
  currentTab = tab;
  document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  const el = document.getElementById('panel-'+tab);
  if(el) el.classList.add('active');
  document.getElementById('globalFilterBar').style.display = (tab==='datos'||tab==='metodologia') ? 'none' : 'flex';
  window.scrollTo({top:0, behavior:'smooth'});
  renderCurrentTab();
}
goTab('inicio');

function uniq(arr){return [...new Set(arr.filter(v=>v && v!==NA))];}
function populateFilterOptions(){
  const sel = (id, values)=>{
    const el = document.getElementById(id);
    const cur = el.value;
    el.innerHTML = `<option value="">${id==='f-plataforma'?'Todas las fuentes':'Todas'}</option>` +
      values.sort().map(v=>`<option value="${v}">${v}</option>`).join('');
    el.value = values.includes(cur) ? cur : "";
  };
  sel('f-plataforma', uniq(DATA.map(d=>d.plataforma)));
  sel('f-fuente', uniq(DATA.map(d=>d.fuente)));
  sel('f-categoria', uniq(DATA.map(d=>d.categoria)));
}
['f-plataforma','f-fuente','f-categoria','f-desde','f-hasta'].forEach(id=>{
  document.getElementById(id).addEventListener('change', ()=>{
    filters.plataforma = document.getElementById('f-plataforma').value;
    filters.fuente = document.getElementById('f-fuente').value;
    filters.categoria = document.getElementById('f-categoria').value;
    filters.desde = document.getElementById('f-desde').value;
    filters.hasta = document.getElementById('f-hasta').value;
    renderCurrentTab();
  });
});
document.getElementById('reset').addEventListener('click', resetFilters);
function resetFilters(){
  filters = {plataforma:"", fuente:"", categoria:"", desde:"", hasta:""};
  ['f-plataforma','f-fuente','f-categoria','f-desde','f-hasta'].forEach(id=>document.getElementById(id).value="");
  renderCurrentTab();
}
document.getElementById('f-window')?.addEventListener('change', renderCurrentTab);
document.getElementById('f-metric')?.addEventListener('change', renderCurrentTab);

function getFiltered(){
  return DATA.filter(r=>{
    if(filters.plataforma && r.plataforma!==filters.plataforma) return false;
    if(filters.fuente && r.fuente!==filters.fuente) return false;
    if(filters.categoria && r.categoria!==filters.categoria) return false;
    if(filters.desde && (!r.fecha || r.fecha < filters.desde)) return false;
    if(filters.hasta && (!r.fecha || r.fecha > filters.hasta)) return false;
    return true;
  }).sort((a,b)=>(a.fecha||'').localeCompare(b.fecha||''));
}

const COLORS = ['#B30000','#6E001A','#FFB3C6','#FFD24C','#8A7A7A','#7A3EB0','#2E6B3E'];
const PLATFORMS = ['Instagram','Facebook','TikTok','Medios digitales'];

function maxDate(rows){
  const ds = rows.map(r=>r.fecha).filter(Boolean).sort();
  return ds.length ? ds[ds.length-1] : null;
}
function addDays(dateStr, n){
  const d = new Date(dateStr+"T00:00:00"); d.setDate(d.getDate()+n);
  return d.toISOString().slice(0,10);
}
function computeTrends(rows, windowDays){
  const ref = maxDate(rows);
  if(!ref) return [];
  const curStart = addDays(ref, -windowDays+1);
  const prevStart = addDays(curStart, -windowDays);
  const prevEnd = addDays(curStart, -1);
  const cur = rows.filter(r=>r.fecha && r.fecha>=curStart && r.fecha<=ref);
  const prev = rows.filter(r=>r.fecha && r.fecha>=prevStart && r.fecha<=prevEnd);
  const cats = uniq(rows.map(r=>r.categoria));
  return cats.map(cat=>{
    const curCount = cur.filter(r=>r.categoria===cat).length;
    const prevCount = prev.filter(r=>r.categoria===cat).length;
    const total = curCount+prevCount;
    const platsCur = uniq(cur.filter(r=>r.categoria===cat).map(r=>r.plataforma));
    let tag, label;
    if(total<=1){ tag='isolated'; label='⚪ Evento aislado'; }
    else if(prevCount===0 && curCount>=2){ tag='new'; label='🟣 Tema emergente'; }
    else if(curCount > prevCount*1.2 || (prevCount===0 && curCount>0)){ tag='up'; label='🟢 Tendencia creciente'; }
    else if(curCount < prevCount*0.8){ tag='down'; label='🟠 Tendencia decreciente'; }
    else { tag='stable'; label='🔵 Tendencia estable'; }
    const variacion = prevCount>0 ? Math.round(((curCount-prevCount)/prevCount)*100) : (curCount>0?100:0);
    const confianza = total>=6?'Alta':total>=3?'Media':'Baja';
    return {tema:cat, curCount, prevCount, variacion, tag, label, platsCur, confianza, ref, curStart};
  }).filter(t=>t.curCount>0 || t.prevCount>0).sort((a,b)=>b.curCount-a.curCount);
}
function toneSuggestion(trend){
  const map = {
    up:['informativo','propositivo'],
    down:['empático','transparente'],
    new:['pedagógico','cercano'],
    stable:['institucional','técnico'],
    isolated:['informativo']
  };
  const tono = (map[trend.tag]||['informativo']).join(' + ');
  const justif = [];
  if(trend.tag==='up') justif.push('aumento de publicaciones respecto al periodo anterior');
  if(trend.tag==='down') justif.push('disminución de publicaciones respecto al periodo anterior');
  if(trend.tag==='new') justif.push('tema sin presencia relevante en el periodo previo');
  if(trend.tag==='stable') justif.push('volumen de publicaciones sostenido en el tiempo');
  if(trend.tag==='isolated') justif.push('un único registro disponible, sin base suficiente para tendencia');
  justif.push(`nivel de confianza ${trend.confianza.toLowerCase()} (${trend.curCount+trend.prevCount} registro(s) analizados)`);
  if(trend.platsCur.length) justif.push(`presencia en: ${trend.platsCur.join(', ')}`);
  return {tono, justif: justif.slice(0,3)};
}

let charts = {};
function destroyChart(k){ if(charts[k]){ charts[k].destroy(); delete charts[k]; } }

function renderAll(){
  populateFilterOptions();
  renderCurrentTab();
}
function renderCurrentTab(){
  const data = getFiltered();
  document.getElementById('filterCount').textContent = `${data.length} de ${DATA.length} registros visibles`;
  if(currentTab==='inicio') renderInicio(data);
  else if(currentTab==='tendencias') renderTendencias(data);
  else if(currentTab==='heatmap') renderHeatmap(data);
  else if(['instagram','facebook','tiktok'].includes(currentTab)) renderPlatformPanel(currentTab, data);
  else if(currentTab==='noticias') renderNoticias(data);
  else if(currentTab==='narrativas') renderNarrativas(data);
  else if(currentTab==='verificacion') renderVerificacion(data);
  else if(currentTab==='datos') renderDatos();
  else if(currentTab==='metodologia') renderMetodologia();
}

function renderInicio(data){
  const fuentes = uniq(data.map(d=>d.fuente));
  const cats = uniq(data.map(d=>d.categoria));
  const trendsAll = computeTrends(data, 7);
  const emergentes = trendsAll.filter(t=>t.tag==='new').length;
  const reqVerif = data.filter(d=>d.requiere_verificacion==='Requiere verificación').length;

  document.getElementById('kpi-row').innerHTML = `
    <div class="kpi"><div class="v">${data.length}</div><div class="l">Publicaciones analizadas</div></div>
    <div class="kpi"><div class="v">${uniq(data.map(d=>d.plataforma)).length}</div><div class="l">Plataformas</div></div>
    <div class="kpi"><div class="v">${cats.length}</div><div class="l">Temas activos</div></div>
    <div class="kpi alert"><div class="v">${emergentes}</div><div class="l">Tendencias emergentes</div></div>
    <div class="kpi"><div class="v">${data.length}</div><div class="l">Noticias relevantes</div></div>
    <div class="kpi alert"><div class="v">${reqVerif}</div><div class="l">Por verificar</div></div>
    <div class="kpi"><div class="v" style="font-size:.85rem;">${lastUpdateTs?lastUpdateTs.toLocaleDateString('es-EC'):'—'}</div><div class="l">Última actualización</div></div>
  `;

  const top = trendsAll.slice(0,6);
  document.getElementById('whatsChanging').innerHTML = top.length ? top.map(t=>{
    const arrow = t.tag==='up'?'↑':t.tag==='down'?'↓':t.tag==='new'?'NEW':t.tag==='isolated'?'⚪':'→';
    const cls = t.tag==='up'?'up':t.tag==='down'?'down':t.tag==='new'?'new':t.tag==='isolated'?'isolated':'stable';
    return `<div class="trend-card">
      <div class="tt">${t.tema}</div>
      <div class="meta">${arrow} ${t.prevCount>0? (t.variacion>=0?'+':'')+t.variacion+'%' : (t.tag==='new'?'nuevo':'—')}</div>
      <div class="nav-hint" style="margin-top:6px;">El cambio se observa principalmente en: ${t.platsCur.length?t.platsCur.join(', '):NA}.</div>
      <span class="trend-tag ${cls}">${t.label}</span>
    </div>`;
  }).join('') : '<div class="empty-state">No hay suficientes datos con fecha para calcular variación entre periodos.</div>';

  const catCounts = {};
  data.forEach(d=>catCounts[d.categoria]=(catCounts[d.categoria]||0)+1);
  const topCat = Object.entries(catCounts).sort((a,b)=>b[1]-a[1])[0];
  document.getElementById('resumen-texto').innerHTML =
    `Dentro del conjunto filtrado (<b>${data.length}</b> registros, ${fuentes.length} fuente(s)), la categoría con mayor presencia es <b>${topCat?topCat[0]:'—'}</b> (${topCat?topCat[1]:0} registro(s)).`;
  const bullets = [];
  const withPlat = uniq(data.map(d=>d.plataforma));
  bullets.push(`Plataformas presentes en el conjunto: ${withPlat.length?withPlat.join(', '):NA}.`);
  const reqV = data.filter(d=>d.requiere_verificacion==='Requiere verificación').length;
  bullets.push(`${reqV} registro(s) están marcados para verificación adicional (ver pestaña Verificación).`);
  const conEngagement = data.filter(d=>d.interacciones!=null).length;
  bullets.push(conEngagement ? `${conEngagement} registro(s) incluyen datos de interacciones.` : `Ningún registro del conjunto filtrado incluye datos de interacciones, comentarios o visualizaciones.`);
  document.getElementById('resumen-bullets').innerHTML = bullets.map(b=>`<li>${b}</li>`).join('');

  const byDate = {};
  data.forEach(d=>{ if(d.fecha) byDate[d.fecha]=(byDate[d.fecha]||0)+1; });
  const dateLabels = Object.keys(byDate).sort();
  destroyChart('volumen');
  charts.volumen = new Chart(document.getElementById('chartVolumen'), {
    type:'bar',
    data:{labels:dateLabels, datasets:[{label:'Registros', data:dateLabels.map(l=>byDate[l]), backgroundColor:'#B30000', borderRadius:4}]},
    options:{plugins:{legend:{display:false}, title:{display:true,text:'Volumen de publicaciones por fecha'}}, scales:{y:{beginAtZero:true, ticks:{stepSize:1}}}}
  });

  // Ranking
  const catEntries = Object.entries(catCounts).sort((a,b)=>b[1]-a[1]);
  destroyChart('ranking');
  charts.ranking = new Chart(document.getElementById('chartRanking'), {
    type:'bar',
    data:{labels:catEntries.map(e=>e[0]), datasets:[{data:catEntries.map(e=>e[1]), backgroundColor:catEntries.map((_,i)=>COLORS[i%COLORS.length]), borderRadius:4}]},
    options:{indexAxis:'y', plugins:{legend:{display:false}, title:{display:true,text:'Ranking de categorías temáticas'}}, scales:{x:{beginAtZero:true,ticks:{stepSize:1}}}}
  });

  // Platform volumes
  const platCounts = PLATFORMS.map(p=>data.filter(d=>d.plataforma===p).length);
  destroyChart('platvol');
  charts.platvol = new Chart(document.getElementById('chartPlatVol'), {
    type:'bar',
    data:{labels:PLATFORMS, datasets:[{label:'Publicaciones', data:platCounts, backgroundColor:['#C13584','#4267B2','#010101','#6E001A'], borderRadius:4}]},
    options:{plugins:{legend:{display:false}, title:{display:true,text:'Publicaciones por plataforma'}}, scales:{y:{beginAtZero:true,ticks:{stepSize:1}}}}
  });

  // Engagement by platform
  const engMetrics = ['interacciones','comentarios','compartidos','visualizaciones'];
  const engDatasets = engMetrics.map((m,i)=>({
    label:m, data: PLATFORMS.map(p=>{
      const vals = data.filter(d=>d.plataforma===p && d[m]!=null).map(d=>d[m]);
      return vals.length ? vals.reduce((a,b)=>a+b,0) : 0;
    }), backgroundColor: COLORS[i%COLORS.length]
  }));
  const anyEngagement = data.some(d=>engMetrics.some(m=>d[m]!=null));
  destroyChart('plateng');
  const engCanvas = document.getElementById('chartPlatEng');
  if(anyEngagement && engCanvas){
    charts.plateng = new Chart(engCanvas, {
      type:'bar',
      data:{labels:PLATFORMS, datasets:engDatasets},
      options:{plugins:{title:{display:true,text:'Interacciones por plataforma (suma de datos disponibles)'}}, scales:{y:{beginAtZero:true}}}
    });
  } else if(engCanvas) {
    engCanvas.parentElement.innerHTML = '<div class="empty-state" style="height:100%;display:flex;align-items:center;">Ningún registro del conjunto filtrado incluye interacciones, comentarios o visualizaciones.</div>';
  }

  // Tone
  const tonoCounts = {};
  data.forEach(d=>{ const t = d.tono!==NA? d.tono : 'No inferido / dato no disponible'; tonoCounts[t]=(tonoCounts[t]||0)+1; });
  const tonoEntries = Object.entries(tonoCounts);
  destroyChart('tono');
  charts.tono = new Chart(document.getElementById('chartTono'), {
    type:'doughnut',
    data:{labels:tonoEntries.map(e=>e[0]), datasets:[{data:tonoEntries.map(e=>e[1]), backgroundColor:tonoEntries.map((_,i)=>COLORS[i%COLORS.length])}]},
    options:{plugins:{title:{display:true,text:'Tono reportado en el dato de origen'}}}
  });
  const allNoInfer = tonoEntries.length===1 && tonoEntries[0][0].includes('No inferido');
  document.getElementById('toneEmptyNote').innerHTML = allNoInfer ? `<div class="empty-state">El 100% de los registros filtrados no trae tono clasificado en el dato de origen. No se generó una interpretación de tono.</div>` : '';
}

function renderTendencias(data){
  const win = parseInt(document.getElementById('f-window').value||'7');
  const trends = computeTrends(data, win);
  document.getElementById('trendGrid').innerHTML = trends.length ? trends.map(t=>{
    const cls = t.tag;
    return `<div class="trend-card">
      <div class="tt">${t.tema}</div>
      <div class="meta">Periodo actual: ${t.curCount} · Periodo anterior: ${t.prevCount}</div>
      <div class="meta">Plataformas: ${t.platsCur.length?t.platsCur.join(', '):NA}</div>
      <div class="meta">Confianza: ${t.confianza}</div>
      <span class="trend-tag ${cls}">${t.label}</span>
    </div>`;
  }).join('') : '<div class="empty-state">No hay registros con fecha suficiente para calcular tendencias en esta ventana.</div>';

  const relevant = trends.filter(t=>t.tag!=='isolated').slice(0,10);
  const tbl = document.getElementById('toneTable');
  tbl.innerHTML = `<tr><th>Tema</th><th>Tendencia</th><th>Tono sugerido</th><th>Justificación</th></tr>` +
    (relevant.length ? relevant.map(t=>{
      const s = toneSuggestion(t);
      return `<tr><td>${t.tema}</td><td>${t.label}</td><td><b>${s.tono}</b></td><td><ul class="clean" style="padding-left:14px;margin:0;">${s.justif.map(j=>`<li>${j}</li>`).join('')}</ul></td></tr>`;
    }).join('') : `<tr><td colspan="4">Datos insuficientes para establecer una tendencia con tono sugerido.</td></tr>`);

  const withDates = data.filter(d=>d.fecha);
  destroyChart('evolucion');
  if(withDates.length){
    const first = withDates.map(d=>d.fecha).sort()[0];
    function weekOf(dateStr){
      const diffDays = Math.floor((new Date(dateStr+"T00:00:00")-new Date(first+"T00:00:00"))/86400000);
      return "Sem "+(Math.floor(diffDays/7)+1);
    }
    const weeks = uniq(withDates.map(d=>weekOf(d.fecha))).sort((a,b)=>parseInt(a.split(' ')[1])-parseInt(b.split(' ')[1]));
    const cats = uniq(withDates.map(d=>d.categoria));
    const evoDatasets = cats.map((c,i)=>({label:c, data: weeks.map(w=> withDates.filter(d=>weekOf(d.fecha)===w && d.categoria===c).length), backgroundColor: COLORS[i%COLORS.length]}));
    charts.evolucion = new Chart(document.getElementById('chartEvolucion'), {
      type:'bar',
      data:{labels:weeks, datasets:evoDatasets},
      options:{plugins:{title:{display:true,text:'Registros por semana y categoría'}}, scales:{x:{stacked:true}, y:{stacked:true, beginAtZero:true, ticks:{stepSize:1}}}}
    });
  }

  document.getElementById('timeline').innerHTML = data.map(d=>`
    <div class="tl-item">
      <div class="tl-date">${d.fecha||d.fecha_raw}</div>
      <div class="tl-title">${d.tipo_contenido}${d.requiere_verificacion==='Requiere verificación'?'<span class="badge warn" style="margin-left:6px;">Requiere verificación</span>':''}</div>
      <div>${d.texto}</div>
      <div class="tl-source">${d.fuente} · ${d.plataforma} · ${d.categoria}${d.emergente?' (categoría emergente)':''}</div>
    </div>`).join('') || '<div class="empty-state">No hay registros en el rango filtrado.</div>';
}

function renderHeatmap(data){
  // Now build a territorial summary by circunscripcion (1..11)
  const circNames = [];
  for(let i=1;i<=11;i++) circNames.push('Circunscripción '+i);
  // compute counts per circunscripcion
  const map = {};
  data.forEach(r=>{
    let circ = r.circunscripcion && r.circunscripcion!==NA ? r.circunscripcion : null;
    if(!circ && r.ubicacion && r.ubicacion!==NA){
      const m = r.ubicacion.match(/\b(\d{1,2})\b/);
      if(m){
        const n = parseInt(m[1]); if(n>=1 && n<=11) circ = 'Circunscripción '+n;
      }
    }
    if(!circ) circ = 'No asignada';
    if(!map[circ]) map[circ] = {count:0, interacciones:0, categorias:{}};
    map[circ].count += 1;
    map[circ].interacciones += (r.interacciones||0);
    map[circ].categorias[r.categoria] = (map[circ].categorias[r.categoria]||0)+1;
  });

  // compute thresholds for intensity based on counts
  const counts = Object.values(map).map(m=>m.count).filter(Boolean).sort((a,b)=>a-b);
  const lowThresh = counts.length? counts[Math.floor(counts.length*0.33)] : 0;
  const highThresh = counts.length? counts[Math.floor(counts.length*0.66)] : 0;

  let html = `<tr><th>Circunscripción</th><th>Intensidad (calor)</th><th>Publicaciones</th><th>Interacciones</th><th>Temas dominantes</th></tr>`;
  const rows = Object.keys(map).length? Object.keys(map) : circNames;
  rows.forEach(c=>{
    const stat = map[c] || {count:0, interacciones:0, categorias:{}};
    let intensity='Bajo';
    if(stat.count>highThresh) intensity='Alto';
    else if(stat.count>lowThresh) intensity='Medio';
    const catEntries = Object.entries(stat.categorias).sort((a,b)=>b[1]-a[1]).slice(0,3).map(e=>`${e[0]} (${e[1]})`).join(', ');
    html += `<tr><td class="rowlabel">${c}</td><td>${intensity}</td><td>${stat.count||''}</td><td>${stat.interacciones||''}</td><td>${catEntries||''}</td></tr>`;
  });
  document.getElementById('heatmapTable').innerHTML = html;
}

function renderPlatformPanel(tabId, dataAll){
  const platName = tabId==='instagram'?'Instagram':tabId==='facebook'?'Facebook':'TikTok';
  const panel = document.getElementById('panel-'+tabId);
  const data = dataAll.filter(d=>d.plataforma===platName);
  if(data.length===0){
    panel.innerHTML = `
      <section class="block">
        <div class="sec-head"><h2>${platName} Radar</h2></div>
        <div class="empty-state">Datos insuficientes para establecer una tendencia. No se encontraron registros de ${platName} en el conjunto de datos cargado (o en el filtro activo).</div>
      </section>`;
    return;
  }

  // common KPIs
  const totalPublicaciones = data.length;
  const sumInteractions = data.map(d=>d.interacciones||0).reduce((a,b)=>a+b,0);
  const sumComments = data.map(d=>d.comentarios||0).reduce((a,b)=>a+b,0);
  const sumShares = data.map(d=>d.compartidos||0).reduce((a,b)=>a+b,0);
  const sumViews = data.map(d=>d.visualizaciones||0).reduce((a,b)=>a+b,0);

  // platform-specific analyses
  let specificHtml = '';
  if(platName==='Facebook'){
    // sentiment distribution
    const sentiments = {};
    data.forEach(d=>{ const s = (d.tono&&d.tono!==NA)? d.tono.toLowerCase() : 'no disponible'; sentiments[s] = (sentiments[s]||0)+1; });
    const ageBuckets = {'<25':0,'25-34':0,'35-44':0,'45-54':0,'55+':0,'No disponible':0};
    data.forEach(d=>{
      const a = d.edad && d.edad!==NA ? String(d.edad).replace(/[^0-9]/g,'') : null;
      if(a){ const n = parseInt(a); if(n<25) ageBuckets['<25']++; else if(n<35) ageBuckets['25-34']++; else if(n<45) ageBuckets['35-44']++; else if(n<55) ageBuckets['45-54']++; else ageBuckets['55+']++; }
      else ageBuckets['No disponible']++;
    });
    specificHtml = `<div class="card"><h3 class="disp" style="margin:0 0 8px 0;">Análisis en Facebook</h3>
      <div class="kpi-row" style="grid-template-columns:repeat(5,1fr);margin-bottom:10px;">
        <div class="kpi"><div class="v">${totalPublicaciones}</div><div class="l">Publicaciones</div></div>
        <div class="kpi"><div class="v">${sumInteractions||0}</div><div class="l">Interacciones</div></div>
        <div class="kpi"><div class="v">${sumComments||0}</div><div class="l">Comentarios</div></div>
        <div class="kpi"><div class="v">${sumShares||0}</div><div class="l">Compartidos</div></div>
        <div class="kpi"><div class="v">${sumViews||0}</div><div class="l">Visualizaciones</div></div>
      </div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;">
        <div style="flex:1;min-width:220px;">
          <div class="sec-head"><h2 style="font-size:.95rem;">Sentimiento reportado</h2></div>
          <ul class="clean">${Object.entries(sentiments).map(e=>`<li>${e[0]} — ${e[1]}</li>`).join('')}</ul>
        </div>
        <div style="flex:1;min-width:220px;">
          <div class="sec-head"><h2 style="font-size:.95rem;">Demografía por edad</h2></div>
          <ul class="clean">${Object.entries(ageBuckets).map(e=>`<li>${e[0]} — ${e[1]}</li>`).join('')}</ul>
        </div>
      </div>
    </div>`;
  } else if(platName==='Instagram'){
    // reels / stories / stickers
    const reels = data.filter(d=>d.tipo_contenido && d.tipo_contenido.toLowerCase().includes('reel')).length;
    const stories = data.filter(d=>d.tipo_contenido && d.tipo_contenido.toLowerCase().includes('story')).length;
    // stickers detection (search keywords)
    const stickerKeywords = ['sticker','encuesta','pregunta','quiz','sticker','poll','emoji slider'];
    let stickerCount = 0;
    data.forEach(d=>{ const t = (d.texto||'').toLowerCase(); if(stickerKeywords.some(k=>t.includes(k))) stickerCount++; });
    const saves = data.map(d=>d.guardados||0).reduce((a,b)=>a+b,0);
    specificHtml = `<div class="card"><h3 class="disp" style="margin:0 0 8px 0;">Análisis en Instagram</h3>
      <div class="kpi-row" style="grid-template-columns:repeat(5,1fr);margin-bottom:10px;">
        <div class="kpi"><div class="v">${totalPublicaciones}</div><div class="l">Publicaciones</div></div>
        <div class="kpi"><div class="v">${reels}</div><div class="l">Reels</div></div>
        <div class="kpi"><div class="v">${stories}</div><div class="l">Stories</div></div>
        <div class="kpi"><div class="v">${saves||0}</div><div class="l">Guardados (suma)</div></div>
        <div class="kpi"><div class="v">${stickerCount}</div><div class="l">Uso stickers</div></div>
      </div>
      <div><b>Top hashtags detectados:</b> ${(uniq(data.flatMap(d=>{ return (d.hashtags && d.hashtags!==NA)? d.hashtags.split(/[;,\n]+/).map(s=>s.trim()).flatMap(s=>extractHashtags(s)) : extractHashtags(d.texto); })).slice(0,10).join(', ')||'Dato no disponible'}</div>
    </div>`;
  } else { // TikTok
    const avgView = data.filter(d=>d.visualizaciones!=null).map(d=>d.visualizaciones).reduce((a,b)=>a+b,0);
    const cntView = data.filter(d=>d.visualizaciones!=null).length;
    const avgPer = cntView? Math.round(avgView/cntView) : NA;
    // top audios
    const audios = {};
    data.forEach(d=>{ const a = (d.audio && d.audio!==NA)? d.audio : ''; if(a){ audios[a] = (audios[a]||0)+1; } });
    const topAudios = Object.entries(audios).sort((a,b)=>b[1]-a[1]).slice(0,8).map(e=>`${e[0]} (${e[1]})`).join(', ');
    specificHtml = `<div class="card"><h3 class="disp" style="margin:0 0 8px 0;">Análisis en TikTok</h3>
      <div class="kpi-row" style="grid-template-columns:repeat(5,1fr);margin-bottom:10px;">
        <div class="kpi"><div class="v">${totalPublicaciones}</div><div class="l">Publicaciones</div></div>
        <div class="kpi"><div class="v">${sumShares||0}</div><div class="l">Compartidos</div></div>
        <div class="kpi"><div class="v">${avgPer}</div><div class="l">Visualizaciones promedio</div></div>
        <div class="kpi"><div class="v">${sumInteractions||0}</div><div class="l">Interacciones</div></div>
        <div class="kpi"><div class="v">${cntView}</div><div class="l">Registros con visualizaciones</div></div>
      </div>
      <div><b>Top audios:</b> ${topAudios||'Dato no disponible'}</div>
    </div>`;
  }

  // assemble panel
  panel.innerHTML = `
    <section class="block">
      <div class="sec-head"><h2>${platName} Radar</h2></div>
      ${specificHtml}
      <div class="card" style="margin-top:12px;">
        <h3 class="disp" style="font-size:.95rem;margin-top:0;">Publicaciones relevantes / noticias relacionadas</h3>
        <div class="news-list">${data.map(d=>`
          <div class="news-card">
            <div class="top-row"><span class="date">${d.fecha||d.fecha_raw}</span><span class="badge tag">${d.categoria}</span></div>
            <div class="src">${d.autor_o_medio}</div>
            <p>${d.texto}</p>
            ${d.url!==NA?`<a class="link" href="${d.url}" target="_blank" rel="noopener">Ver fuente →</a>`:''}
          </div>`).join('')}</div>
      </div>
    </section>`;
}

function whyRelevant(d){
  const bits = [];
  if(d.categoria && d.categoria!=='Otros') bits.push(`aborda ${d.categoria.toLowerCase()}`);
  if(d.requiere_verificacion==='Requiere verificación') bits.push('contiene una cifra o afirmación pendiente de verificación');
  if(d.nivel_relevancia!=null) bits.push(`nivel de relevancia declarado: ${d.nivel_relevancia}`);
  if(d.plataforma && d.plataforma!==NA) bits.push(`publicado en ${d.plataforma}`);
  if(!bits.length) return 'Registro incluido en el conjunto de datos analizado; sin criterios adicionales de relevancia disponibles.';
  const txt = 'Es relevante porque ' + bits.slice(0,3).join(', ') + '.';
  return txt.split(' ').slice(0,40).join(' ');
}
function renderNoticias(data){
  document.getElementById('news-list').innerHTML = data.length ? data.slice().reverse().map(d=>`
    <div class="news-card">
      <div class="top-row">
        <div>
          <span class="badge tag">${d.categoria}</span>
          <span class="badge plat">${d.plataforma}</span>
          ${d.requiere_verificacion==='Requiere verificación'?'<span class="badge warn">Requiere verificación</span>':d.requiere_verificacion==='Respaldada'?'<span class="badge ok">Respaldada</span>':''}
        </div>
        <span class="date">${d.fecha||d.fecha_raw}</span>
      </div>
      <div class="src">${d.titulo!==NA?d.titulo:d.autor_o_medio}</div>
      <p>${d.texto}</p>
      <div class="why"><b>¿Por qué es relevante?</b> ${whyRelevant(d)}</div>
      <div class="metrics">Interacciones: ${d.interacciones??NA} · Comentarios: ${d.comentarios??NA} · Compartidos: ${d.compartidos??NA} · Visualizaciones: ${d.visualizaciones??NA}</div>
      ${d.url!==NA?`<a class="link" href="${d.url}" target="_blank" rel="noopener">Ver fuente →</a>`:''}
    </div>`).join('') : '<div class="empty-state">No hay registros en el rango filtrado.</div>';
}

function renderNarrativas(data){
  const cats = {};
  data.forEach(d=>{ (cats[d.categoria]=cats[d.categoria]||[]).push(d); });
  const entries = Object.entries(cats).sort((a,b)=>b[1].length-a[1].length);
  const max = entries.length? entries[0][1].length : 1;
  document.getElementById('narrativeBubbles').innerHTML = entries.map(([cat,rows],i)=>{
    const size = 70 + Math.sqrt(rows.length/max)*90;
    return `<div class="bubble ${selectedNode===cat?'sel':''}" style="width:${size}px;height:${size}px;background:${COLORS[i%COLORS.length]};" onclick="selectNarrativeNode('${cat.replace(/'/g,"\\'")}')">
      <div class="n">${rows.length}</div>
      <div class="t">${cat}</div>
    </div>`;
  }).join('') || '<div class="empty-state">No hay datos para construir el mapa de narrativas.</div>';

  renderNarrativeDetail(data);
}
function selectNarrativeNode(cat){
  selectedNode = (selectedNode===cat) ? null : cat;
  renderCurrentTab();
}
function renderNarrativeDetail(data){
  const box = document.getElementById('narrativeDetail');
  if(!selectedNode){ box.innerHTML = '<div class="nav-hint">Selecciona un nodo para ver el detalle de sus registros.</div>'; return; }
  const rows = data.filter(d=>d.categoria===selectedNode);
  // strengths: positive tone share, engagement average
  const positives = rows.filter(r=>r.tono && r.tono.toLowerCase().includes('pos')).length;
  const engSum = rows.map(r=>r.interacciones||0).reduce((a,b)=>a+b,0);
  const avgEng = rows.length? Math.round(engSum/rows.length) : 0;
  const suggestedTone = positives/rows.length>0.5 ? 'Propositivo / informativo' : 'Empático / pedagógico';
  box.innerHTML = `
    <h3 class="disp" style="font-size:1rem;">${selectedNode} <span class="nav-hint">(${rows.length} registro(s))</span></h3>
    <div class="card">
      <p><b>Fortalezas detectadas:</b> ${positives} registro(s) con tono positivo; engagement promedio aproximado: ${avgEng}.</p>
      <p><b>Tono sugerido:</b> ${suggestedTone}</p>
      <div class="table-scroll"><table class="data-table">
        <tr><th>Fecha</th><th>Subtema</th><th>Plataforma</th><th>Fuente</th><th>Tendencia</th><th>Confianza dato</th><th>URL</th></tr>
        ${rows.map(r=>`<tr>
          <td>${r.fecha||r.fecha_raw}</td>
          <td>${r.subtema}</td>
          <td>${r.plataforma}</td>
          <td>${r.fuente}</td>
          <td>${r.tendencia}</td>
          <td>${r.nivel_relevancia!=null?r.nivel_relevancia:NA}</td>
          <td>${r.url!==NA?`<a href="${r.url}" target="_blank" rel="noopener">Ver</a>`:NA}</td>
        </tr>`).join('')}
      </table></div>
    </div>`;
}

function renderVerificacion(data){
  const counts = {'Respaldada':0,'Requiere verificación':0,'Presenta contradicciones':0,'Información insuficiente':0};
  data.forEach(d=>{ counts[d.requiere_verificacion] = (counts[d.requiere_verificacion]||0)+1; });
  document.getElementById('verifyKpis').innerHTML = `
    <div class="kpi"><div class="v">🟢 ${counts['Respaldada']}</div><div class="l">Respaldadas</div></div>
    <div class="kpi alert"><div class="v">🟡 ${counts['Requiere verificación']}</div><div class="l">Requieren verificación</div></div>
    <div class="kpi"><div class="v">🔴 ${counts['Presenta contradicciones']||0}</div><div class="l">Contradicciones</div></div>
    <div class="kpi"><div class="v">⚪ ${counts['Información insuficiente']||0}</div><div class="l">Info. insuficiente</div></div>
  `;
  document.getElementById('alerts-list').innerHTML = data.length ? data.map(d=>{
    const icon = d.requiere_verificacion==='Respaldada'?'🟢':d.requiere_verificacion==='Requiere verificación'?'🟡':d.requiere_verificacion==='Presenta contradicciones'?'🔴':'⚪';
    return `<div class="alert-item">
      <span class="ico">${icon}</span>
      <span class="txt"><span class="src">${d.fecha||d.fecha_raw} · ${d.fuente}</span> — ${d.requiere_verificacion}${d.observaciones!==NA?': '+d.observaciones:''}. ${d.url!==NA?`<a href="${d.url}" target="_blank" rel="noopener">Fuente</a>`:''}</span>
    </div>`;
  }).join('') : '<div class="empty-state">No hay registros en el rango filtrado.</div>';
}

function renderDatos(){
  document.getElementById('datasetMeta').textContent = `${DATA.length} registro(s) en memoria · última actualización: ${lastUpdateTs?lastUpdateTs.toLocaleString('es-EC'):'—'}.`;
  const cols = ['fecha','plataforma','fuente','tipo_contenido','tema','categoria','tono','requiere_verificacion','url'];
  const tbl = document.getElementById('fullTable');
  tbl.innerHTML = `<tr>${cols.map(c=>`<th>${c}</th>`).join('')}</tr>` +
    DATA.map(d=>`<tr>${cols.map(c=>{ let v = c==='fecha' ? (d.fecha||d.fecha_raw) : d[c]; if(c==='url' && v!==NA) return `<td><a href="${v}" target="_blank" rel="noopener">Ver</a></td>`; return `<td>${v}</td>`; }).join('')}</tr>`).join('');
}

function renderMetodologia(){
  const noTono = DATA.filter(d=>d.tono===NA || d.tono.toLowerCase().includes('no inferido')).length;
  const noEng = DATA.filter(d=>d.interacciones==null && d.comentarios==null && d.compartidos==null && d.visualizaciones==null).length;
  document.getElementById('limitationsCard').innerHTML = `
    <ul class="clean">
      <li><b>${DATA.length} registro(s)</b> en el conjunto actual: una muestra reducida no permite conclusiones estadísticamente generalizables.</li>
      <li><b>${noTono} registro(s)</b> sin tono clasificado en el dato de origen.</li>
      <li><b>${noEng} registro(s)</b> sin datos de interacciones, comentarios, compartidos o visualizaciones.</li>
      <li>El mapa de calor requiere idealmente una columna 'circunscripcion' en el CSV para asignaciones fiables; si no existe se intentan heurísticos sobre 'ubicacion'.</li>
      <li>Las tendencias, el mapa de calor y las comparaciones por plataforma dependen enteramente de lo que traiga el CSV cargado; columnas ausentes se muestran como "Dato no disponible" y no se estiman valores.</li>
      <li>La actualización de datos ocurre al cargar un archivo CSV manualmente; este entorno no mantiene una conexión en tiempo real a redes sociales o medios.</li>
    </ul>`;
}

function applyConfig(){
  const root = document.documentElement.style;
  root.setProperty('--primary', document.getElementById('cfg-primary').value);
  root.setProperty('--secondary', document.getElementById('cfg-secondary').value);
  root.setProperty('--accent', document.getElementById('cfg-accent').value);
  root.setProperty('--paper', document.getElementById('cfg-bg').value);
  root.setProperty('--text', document.getElementById('cfg-text').value);
}

loadSeed();
