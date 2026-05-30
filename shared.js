// ═══════════════════════════════════════════════════════════
// shared.js — Ateliers CD47 v16.0
// Code commun frontend + admin — Design system : gdin-theme.css
// ═══════════════════════════════════════════════════════════

(function injectCSS(){
  const s=document.createElement('style');
  s.textContent=`
/* ── Calendrier events ── */
.cal-event{display:flex;align-items:center;gap:3px;padding:2px 5px;border-radius:3px;font-size:9.5px;cursor:pointer;margin-bottom:2px;transition:filter .1s;overflow:hidden;max-width:100%;line-height:1.3}
.cal-event:hover{filter:brightness(.9)}
.cal-event-time{font-weight:700;flex-shrink:0;font-size:9px}
.cal-event-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;color:var(--text)}
.cal-more{font-size:9.5px;color:var(--text-3);cursor:pointer;margin-top:2px;font-weight:600;padding:1px 4px;background:var(--bg-3);border-radius:3px;display:inline-block}
.cal-more:hover{color:var(--cyan);background:var(--cyan-dim)}
.cal-header-cell{text-align:center;font-size:11px;font-weight:700;color:var(--text-3);padding:6px 2px;text-transform:uppercase;letter-spacing:.06em;background:var(--bg-2);border-radius:4px;font-family:'IBM Plex Mono',monospace}
.cal-cell-empty{background:var(--bg-2);border-color:var(--border);cursor:default}
.cal-today{background:var(--blue-dim);border-color:var(--blue)}
.cal-today:hover{background:var(--blue-dim)}
.cal-day-num{font-size:12px;font-weight:600;color:var(--text-2);margin-bottom:3px;line-height:1.4;font-family:'IBM Plex Mono',monospace}
.cal-today-num{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;background:var(--blue);color:#fff;border-radius:50%;font-size:11px;font-weight:700}
.cal-year-sel{padding:4px 8px;border:1.5px solid rgba(255,255,255,.35);border-radius:6px;background:rgba(255,255,255,.12);color:#fff;font-size:12px;font-weight:700;cursor:pointer;outline:none;font-family:'IBM Plex Mono',monospace}
.cal-year-sel option{background:var(--bg-2);color:var(--text)}
/* ── Saisie ── */
.sf-section-inner{background:var(--bg-1);border-radius:14px;padding:18px 20px;margin-bottom:12px;box-shadow:0 1px 8px rgba(0,0,0,.15);border:1px solid var(--border)}
.sf-mat-chip{display:flex;align-items:center;gap:6px;padding:7px 12px;border:2px solid var(--border);border-radius:20px;cursor:pointer;font-size:12px;font-weight:600;color:var(--text-2);background:var(--bg-2);transition:all .15s;user-select:none}
.sf-mat-chip.checked{border-color:currentColor;background:var(--bg-3)}
.sf-mat-chip input{display:none}
.sf-lbl{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--text-3);display:block;margin-bottom:6px;font-family:'IBM Plex Mono',monospace}
.sf-err-msg{color:var(--red);font-size:11px;font-weight:600;display:block;margin-top:3px}
.sf-input-base{width:100%;padding:11px 14px;border:2px solid var(--border);border-radius:10px;font-size:14px;color:var(--text);background:var(--bg-2);outline:none;box-sizing:border-box;transition:border-color .15s,background .15s}
.sf-input-base:focus{border-color:var(--cyan);background:var(--bg-1)}
.sf-input-err{border-color:var(--red)!important;background:var(--red-dim)!important}
.sf-btn-cancel{padding:13px 24px;border:2px solid var(--border);border-radius:12px;cursor:pointer;font-size:14px;font-weight:600;color:var(--text-2);background:var(--bg-2);font-family:inherit;transition:all .15s}
.sf-btn-cancel:hover{border-color:var(--border-2);color:var(--text)}
.sf-pill-statut{padding:8px 16px;border-radius:20px;border:2px solid var(--border);background:var(--bg-2);font-size:13px;font-weight:600;color:var(--text-2);cursor:pointer;display:flex;align-items:center;gap:6px;transition:all .15s}
.sf-pill-statut.active{color:#fff}
.sf-lot-header{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700}
.sf-lot-row{display:grid;grid-template-columns:140px 100px 64px 1fr 32px;gap:8px;align-items:start;padding:9px 10px;border-radius:10px;border:1.5px solid var(--border);margin-bottom:6px;background:var(--bg-2)}
.sf-lot-row.err{border-color:var(--red)!important;background:var(--red-dim)!important}
.sf-lot-del{background:none;border:1px solid var(--border);border-radius:6px;color:var(--red);cursor:pointer;font-size:15px;height:32px;width:32px;display:flex;align-items:center;justify-content:center}
/* ── KPI mini ── */
.kpi-mini-card{background:var(--bg-1);border-radius:8px;padding:10px 8px;text-align:center;border:1px solid var(--border);flex:1;min-width:60px}
.kpi-mini-card .v{font-family:'IBM Plex Mono',monospace;font-size:22px;font-weight:700;line-height:1}
.kpi-mini-card .l{font-size:10px;color:var(--text-3);margin-top:2px}
.kpi-mini-card .p{font-size:10px;font-weight:600;margin-top:1px}
/* ── Panels / modales ── */
.panel-close{background:none;border:none;font-size:18px;cursor:pointer;color:var(--text-3);padding:0;line-height:1}
.panel-close:hover{color:var(--text)}
.panel-title{font-size:13px;font-weight:700;color:var(--text);margin-bottom:8px}
.panel-sublbl{font-size:11px;font-weight:700;color:var(--text-3);margin-bottom:4px;text-transform:uppercase;letter-spacing:.06em;font-family:'IBM Plex Mono',monospace}
.panel-irrev{font-size:12px;color:var(--text-3);margin-bottom:16px}
.btn-dupliquer{background:var(--blue-dim);color:var(--blue);border:1px solid rgba(59,130,246,.3)}
.btn-dupliquer:hover{background:var(--blue);color:#fff}
/* ── Historique filters ── */
.hist-filter-lbl{font-size:11px;font-weight:700;color:var(--text-3);letter-spacing:.06em;margin-bottom:6px;font-family:'IBM Plex Mono',monospace;text-transform:uppercase}
.hist-count{font-size:11px;color:var(--text-3);margin-top:8px}
.hist-du-au{font-size:11px;font-weight:700;color:var(--text-3);white-space:nowrap}
/* ── Retard banner ── */
.retard-banner{background:var(--orange-dim);border:1px solid rgba(249,115,22,.3);border-radius:10px;padding:10px 14px;margin-bottom:10px;display:flex;gap:10px;align-items:center}
.retard-banner-title{font-weight:700;color:var(--orange);font-size:13px}
.retard-banner-sub{font-size:12px;color:var(--text-2)}
/* ── Roadmap ── */
.rm-month-nav{font-size:18px;font-weight:800;color:var(--text);min-width:170px;text-align:center;font-family:'Syne',sans-serif}
.rm-filter-lbl{font-size:12px;font-weight:600;color:var(--text-2);margin:0;white-space:nowrap}
/* ── Period chips ── */
.period-btn{padding:4px 13px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid var(--border);background:var(--bg-2);color:var(--text-3);font-family:inherit;transition:all .15s}
.period-btn.active{background:var(--blue);color:#fff;border-color:var(--blue)}
.period-btn:hover:not(.active){border-color:var(--border-2);color:var(--text)}
/* ── VueListes ── */
.listes-email-row{display:flex;padding:'8px 14px';margin-bottom:8px;background:var(--bg-2);border:1.5px solid var(--border);border-radius:8px;align-items:center;justify-content:space-between}
.listes-email-lbl{font-size:12px;font-weight:700;color:var(--text-2)}
.listes-email-input{flex:'1 1 140px';min-width:0;padding:'5px 8px';border:'1.5px solid var(--border)';border-radius:6px;font-size:12px;color:var(--blue);background:var(--bg-1);font-family:'IBM Plex Mono',monospace}
.listes-suppr-btn{background:var(--red-dim);color:var(--red);border:none;border-radius:4px;padding:4px 10px;font-size:12px;cursor:pointer}
/* ── VueAdmin couleurs ── */
.admin-color-row{display:flex;align-items:center;gap:12px;padding:10px 14px;background:var(--bg-2);border-radius:10px;border:1.5px solid var(--border)}
.admin-color-name{flex:1;font-weight:700;font-size:14px;color:var(--text)}
.admin-color-hex{width:88px;font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:700;color:var(--text);padding:6px 10px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg-1);text-align:center}
.admin-color-reset{padding:4px 10px;border:1px solid var(--border);border-radius:6px;font-size:11px;color:var(--text-3);cursor:pointer;background:var(--bg-2)}
/* ── Animations ── */
@keyframes fadeInUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeSlideIn{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:translateY(0)}}
.view-anim{animation:fadeSlideIn .28s ease both}
/* ── Bingo ── */
.bingo-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:14px;margin-bottom:20px}
.bingo-card{background:var(--bg-1);border:1px solid var(--border);border-radius:14px;padding:16px 12px;text-align:center;cursor:pointer;transition:all .15s}
.bingo-card:hover{box-shadow:var(--shadow-md);transform:translateY(-3px);border-color:var(--border-2)}
.bingo-card.selected{border-color:var(--cyan);box-shadow:0 0 16px var(--cyan-glow)}
.bingo-circle{width:64px;height:64px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;font-size:22px;font-weight:800;border:2px solid}
.bingo-nom{font-family:'Syne',sans-serif;font-size:11px;font-weight:700;color:var(--text);margin-bottom:4px;line-height:1.2}
.bingo-pct{font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700}
.bingo-list-item{display:flex;align-items:center;gap:10px;padding:8px 12px;border-bottom:1px solid var(--border);font-size:13px}
.bingo-list-item:last-child{border-bottom:none}
.bingo-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.bingo-list-date{color:var(--text-3);font-size:12px;min-width:80px;font-family:'IBM Plex Mono',monospace}
.bingo-list-theme{flex:1;color:var(--text);font-weight:500}
@media(min-width:768px){.bingo-grid{grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:16px}.bingo-card{padding:20px 16px}.bingo-circle{width:72px;height:72px;font-size:26px}}
/* ── Misc ── */
.accueil-stat-count{font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:800;border-radius:10px;padding:1px 7px;color:#fff}
.accueil-stat-trend{font-size:10px;font-weight:700;opacity:.8}
.accueil-stats{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:16px;padding:0 20px}
.accueil-stat-chip{display:flex;align-items:center;gap:6px;border-radius:var(--r-md);padding:6px 12px;font-size:12px}
`;
  document.head.appendChild(s);
})();


// ── Globals ────────────────────────────────────────────────

// ── Impression : injecter la date courante ─────────────────
window.addEventListener('beforeprint',()=>{
  document.body.setAttribute('data-print-date',new Date().toLocaleDateString('fr-FR',{day:'2-digit',month:'long',year:'numeric'}));
});
window.addEventListener('afterprint',()=>{
  document.body.removeAttribute('data-print-date');
});

if(!window.React||!window.ReactDOM){throw new Error('React/ReactDOM non chargé — vérifiez les CDN dans le HTML');}
const CE = React.createElement;
function isDark(){return document.documentElement.getAttribute('data-theme')!=='light';}

function FadeItem({children,delay=0,style={}}){
  const[v,setV]=React.useState(false);
  React.useEffect(()=>{const t=setTimeout(()=>setV(true),delay*1000+20);return()=>clearTimeout(t);},[]);
  return CE('div',{style:{opacity:v?1:0,transition:'opacity .6s ease',...style}},children);
}

const GS_URL = 'https://script.google.com/macros/s/AKfycbw4u5tP97Drju1PiF16Lxl7KpnTwYMVWl18VwBbfm9AKuDI1F36dkNSvU08kKlifM6zbg/exec';

const COMMUNES = [
  'AGEN','ARGENTON','ASTAFFORT','CASSENEUIL','CASTELMORON SUR LOT',
  'FAUILLET','FIEUX','FUMEL','LAVARDAC','LAYRAC',
  'LE TEMPLE SUR LOT','MONCLAR','NERAC','Ste-Bazeille',
  "Saint Pardoux d'Isaac",'TONNEINS',"TOURNONS D'AGENAIS",'VILLENEUVE SUR LOT'
];
const COMMUNES_GPS = {
  'AGEN':{lat:44.2004,lng:0.6213},'ARGENTON':{lat:44.3167,lng:0.7833},
  'ASTAFFORT':{lat:44.0447,lng:0.6586},'CASSENEUIL':{lat:44.3614,lng:0.6667},
  'CASTELMORON SUR LOT':{lat:44.3961,lng:0.4944},'FAUILLET':{lat:44.3833,lng:0.3167},
  'FIEUX':{lat:44.1500,lng:0.8167},'FUMEL':{lat:44.4967,lng:0.9700},
  'LAVARDAC':{lat:44.1806,lng:0.2958},'LAYRAC':{lat:44.1347,lng:0.6625},
  'LE TEMPLE SUR LOT':{lat:44.3833,lng:0.5333},'MONCLAR':{lat:44.2167,lng:0.5833},
  'NERAC':{lat:44.1381,lng:0.3394},'Ste-Bazeille':{lat:44.3667,lng:0.1833},
  "Saint Pardoux d'Isaac":{lat:44.4000,lng:0.2167},'TONNEINS':{lat:44.3906,lng:0.3044},
  "TOURNONS D'AGENAIS":{lat:44.3833,lng:0.9667},'VILLENEUVE SUR LOT':{lat:44.4089,lng:0.7053}
};
const CONSEILLERS_DEFAULT = ['Cynthia Pineau','Corentin Tual','Michel Aswad','Eva Capelle'];
const STATUTS_DEFAULT = ['Planifié','Réalisé','Annulé','Non réalisé','Reporté'];
const PUBLICS_DEFAULT = [
  'Tous publics',
  'Besoin particulier',
  'Collèges',
  'Jeunes',
  'Séniors',
  'Insertion Pro',
  'Interne',
  'Autres'
];
const MATERIELS_DEFAULT = ['Videoprojecteur','Ecran','Classe mobile','Boitier 4G','Tablette','Scanner','Multiprise','Ordinateur'];

let STATUTS     = [...STATUTS_DEFAULT];
let CONSEILLERS = [...CONSEILLERS_DEFAULT];
let PUBLICS     = [...PUBLICS_DEFAULT];
let MATERIELS   = [...MATERIELS_DEFAULT];
let COMMUNES_47_CACHE = null;

// ── Utilitaires ────────────────────────────────────────────
const NAV_DEFAULT_COLOR = '#197d89';
let CONSEILLER_COLORS = {'Cynthia Pineau':'#7C3AED','Corentin Tual':'#2563EB','Michel Aswad':'#059669','Eva Capelle':'#DB2777'};
function conseillerColor(c){return(c&&CONSEILLER_COLORS[c])||'#6B7280';}
function applyColors(colors){if(colors&&typeof colors==='object')Object.assign(CONSEILLER_COLORS,colors);}
const MOIS = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
const JOURS = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];
const fmtDate = d=>{if(!d)return'';const[y,m,j]=d.split('-');const jour=JOURS[new Date(parseInt(y),parseInt(m)-1,parseInt(j)).getDay()];return`${jour} ${j}/${m}/${y}`;};
function fmtCardDate(d){if(!d)return{day:'',month:'',jour:''};const[y,m,j]=d.split('-');const jour=JOURS[new Date(parseInt(y),parseInt(m)-1,parseInt(j)).getDay()];return{day:j,month:MOIS[parseInt(m)-1],jour};}
// v10.0 : todayLocal() en heure locale (évite le bug UTC après 22h/23h en France)
function todayLocal(){const d=new Date();return`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
const isPasse = e=>e.date<todayLocal()&&e.statut==='Réalisé';
const isRetard = e=>e.statut==='Planifié'&&e.date<todayLocal();
const genId = ()=>`atelier_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;
function stripAccents(str){return String(str||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();}
function normalizeDate(val){if(!val)return'';const s=String(val).trim();if(/^\d{4}-\d{2}-\d{2}$/.test(s))return s;if(/^\d{4}-\d{2}-\d{2}T/.test(s))return s.split('T')[0];const m=s.match(/^(\d{2})\/(\d{2})\/(\d{4})/);if(m)return`${m[3]}-${m[2]}-${m[1]}`;return s;}
function normalizeHoraire(val){if(!val)return'';const s=String(val).trim();const iso=s.match(/T(\d{2}:\d{2})/);if(iso)return iso[1];if(/^\d{1,2}[Hh]\d{2}$/.test(s))return s.replace(/[Hh]/,':');if(/^\d{1,2}:\d{2}(:\d{2})?$/.test(s))return s.slice(0,5);return s;}
const COMMUNE_MAP={'TEMPLE SUR LOT':'LE TEMPLE SUR LOT','VILLENEUVE-SUR-LOT':'VILLENEUVE SUR LOT'};
function normalizeCommune(c){return COMMUNE_MAP[String(c||'').trim()]||String(c||'').trim();}
function badgePill(statut,retard){
  if(retard)return CE('span',{className:'badge-pill bp-retard'},'⚠ À mettre à jour');
  const cls={'Planifié':'bp-planifie','Réalisé':'bp-realise','Annulé':'bp-annule','Reporté':'bp-reporte','Non réalisé':'bp-nonrealise'}[statut]||'bp-nonrealise';
  return CE('span',{className:'badge-pill '+cls},statut);
}
const STATUT_COLORS={'Planifié':'#3b82f6','Réalisé':'#22c55e','Annulé':'#ef4444','Reporté':'#f97316','Non réalisé':'#94a3b8'};
// v10.0 : constante partagée — évite la duplication dans VueHistorique et VueCalendrier
const CLOTURE_PRESETS=[
  {label:'✅ Réalisé',    statut:'Réalisé',     bg:'#16a34a',color:'#fff'},
  {label:'❌ Annulé',     statut:'Annulé',      bg:'#dc2626',color:'#fff'},
  {label:'🚫 Non réalisé',statut:'Non réalisé', bg:'#6b7280',color:'#fff'},
  {label:'📅 Reporté',    statut:'Reporté',     bg:'#d97706',color:'#fff'},
];

let _toastTimer;
function showToast(msg,ok=true){
  const t=document.getElementById('toast');if(!t)return;
  t.textContent=msg;t.className=`toast ${ok?'toast-ok':'toast-err'}`;t.style.opacity='1';
  clearTimeout(_toastTimer);_toastTimer=setTimeout(()=>{t.style.opacity='0';},3500);
}

// ── API v15.0 — timeout adaptatif mobile/PC + 1 retry auto ──
(function(){
  const MAX_RETRY   = 1;
  const RETRY_DELAY = 3000;
  const isMobile    = /Android|iPhone|iPad/i.test(navigator.userAgent);
  const TIMEOUT_MS  = isMobile ? 20000 : 12000;

  window.apiFetch = async function apiFetch(action, body={}, _attempt=1){
    const params = new URLSearchParams({action});
    if(body && Object.keys(body).length){
      Object.entries(body).forEach(([k,v])=>{
        params.set(k, typeof v==='object' ? JSON.stringify(v) : v);
      });
    }
    try{
      const res = await Promise.race([
        fetch(`${GS_URL}?${params.toString()}`),
        new Promise((_,r)=>setTimeout(()=>r(new Error('timeout')), TIMEOUT_MS))
      ]);
      return res.json();
    }catch(err){
      if(err.message==='timeout' && _attempt <= MAX_RETRY){
        console.warn(`[apiFetch] Timeout "${action}" — retry ${_attempt}/${MAX_RETRY} dans ${RETRY_DELAY/1000}s`);
        await new Promise(r=>setTimeout(r, RETRY_DELAY));
        return window.apiFetch(action, body, _attempt + 1);
      }
      if(err.message==='timeout')
        throw new Error('Le serveur ne répond pas (GAS cold start ?) — réessaie dans quelques secondes.');
      throw err;
    }
  };
})()
async function loadCommunes47(){
  if(COMMUNES_47_CACHE)return COMMUNES_47_CACHE;
  try{
    const res=await Promise.race([fetch('https://geo.api.gouv.fr/departements/47/communes?fields=nom,codesPostaux&format=json'),new Promise((_,r)=>setTimeout(()=>r(new Error('timeout')),3000))]);
    const data=await res.json();
    const result=[];
    data.forEach(c=>{(c.codesPostaux||[]).forEach(cp=>{result.push({cp,nom:c.nom.toUpperCase()});});});
    result.sort((a,b)=>a.nom.localeCompare(b.nom));
    COMMUNES_47_CACHE=result;return result;
  }catch(e){COMMUNES_47_CACHE=COMMUNES.map(nom=>({cp:'47???',nom}));return COMMUNES_47_CACHE;}
}

// ═══════════════════════════════════════════════════════════
// COMBO COMMUNE
// ═══════════════════════════════════════════════════════════
function ComboCommune({value,onChange,hasError}){
  const[inputVal,setInputVal]=React.useState(value||'');
  const[open,setOpen]=React.useState(false);
  const[activeIdx,setActiveIdx]=React.useState(0);
  const[communes,setCommunes]=React.useState(COMMUNES_47_CACHE||[]);
  const[apiLoading,setApiLoading]=React.useState(false);
  const wrapRef=React.useRef(null);
  React.useEffect(()=>{setInputVal(value||'');},[value]);
  React.useEffect(()=>{
    if(!COMMUNES_47_CACHE){setApiLoading(true);loadCommunes47().then(d=>{setCommunes(d);setApiLoading(false);}).catch(()=>setApiLoading(false));}
    else setCommunes(COMMUNES_47_CACHE);
  },[]);
  React.useEffect(()=>{
    function h(e){if(wrapRef.current&&!wrapRef.current.contains(e.target))setOpen(false);}
    document.addEventListener('mousedown',h);return()=>document.removeEventListener('mousedown',h);
  },[]);
  const suggestions=React.useMemo(()=>{const q=inputVal.trim();if(!q||q.length<2)return[];const qs=stripAccents(q);return communes.filter(c=>c.cp.startsWith(q)||stripAccents(c.nom).includes(qs)).slice(0,50);},[inputVal,communes]);
  function selectItem(item){const d=item.nom+' ('+item.cp+')';setInputVal(d);onChange(d);setOpen(false);setActiveIdx(0);}
  function handleKeyDown(e){if(!open||suggestions.length===0)return;if(e.key==='ArrowDown'){e.preventDefault();setActiveIdx(i=>Math.min(i+1,suggestions.length-1));}else if(e.key==='ArrowUp'){e.preventDefault();setActiveIdx(i=>Math.max(i-1,0));}else if(e.key==='Enter'){e.preventDefault();if(suggestions[activeIdx])selectItem(suggestions[activeIdx]);}else if(e.key==='Escape')setOpen(false);}
  return CE('div',{className:'combo-wrap',ref:wrapRef},
    CE('input',{type:'text',value:inputVal,placeholder:apiLoading?'Chargement…':'Code postal ou commune…',className:hasError?'err':'',autoComplete:'off',disabled:apiLoading,onChange:e=>{setInputVal(e.target.value);setOpen(true);setActiveIdx(0);if(!e.target.value)onChange('');},onFocus:()=>{if(inputVal.trim().length>=2)setOpen(true);},onKeyDown:handleKeyDown}),
    apiLoading&&CE('div',{className:'combo-dropdown'},CE('div',{className:'combo-loading'},CE('span',{className:'spinner',style:{borderTopColor:'#1e3a8a',borderColor:'#e2e8f0',marginRight:8}}),'Chargement des communes…')),
    !apiLoading&&open&&suggestions.length>0&&CE('div',{className:'combo-dropdown'},suggestions.map((item,i)=>CE('div',{key:item.cp+'-'+item.nom+'-'+i,className:'combo-item'+(i===activeIdx?' active':''),onMouseDown:e=>{e.preventDefault();selectItem(item);},onMouseEnter:()=>setActiveIdx(i)},CE('span',{className:'combo-cp'},item.cp),CE('span',{className:'combo-nom'},item.nom)))),
    !apiLoading&&open&&inputVal.trim().length>=2&&suggestions.length===0&&CE('div',{className:'combo-dropdown'},CE('div',{className:'combo-empty'},'Aucune commune trouvée'))
  );
}

// ═══════════════════════════════════════════════════════════
// COMBO ORIENTEUR
// ═══════════════════════════════════════════════════════════
function ComboOrienteur({value,onChange,entries,hasError}){
  const[inputVal,setInputVal]=React.useState(value||'');
  const[open,setOpen]=React.useState(false);
  const[activeIdx,setActiveIdx]=React.useState(0);
  const wrapRef=React.useRef(null);
  React.useEffect(()=>{setInputVal(value||'');},[value]);
  React.useEffect(()=>{
    function h(e){if(wrapRef.current&&!wrapRef.current.contains(e.target))setOpen(false);}
    document.addEventListener('mousedown',h);return()=>document.removeEventListener('mousedown',h);
  },[]);
  const orienteurs=React.useMemo(()=>{const s=new Set();(entries||[]).forEach(e=>{if(e.orienteur&&e.orienteur.trim())s.add(e.orienteur.trim());});return[...s].sort((a,b)=>a.localeCompare(b));},[entries]);
  const suggestions=React.useMemo(()=>{const q=inputVal.trim();if(!q||q.length<2)return[];const qs=stripAccents(q);return orienteurs.filter(o=>stripAccents(o).includes(qs)).slice(0,20);},[inputVal,orienteurs]);
  function selectItem(name){setInputVal(name);onChange(name);setOpen(false);setActiveIdx(0);}
  function handleKeyDown(e){if(!open||suggestions.length===0)return;if(e.key==='ArrowDown'){e.preventDefault();setActiveIdx(i=>Math.min(i+1,suggestions.length-1));}else if(e.key==='ArrowUp'){e.preventDefault();setActiveIdx(i=>Math.max(i-1,0));}else if(e.key==='Enter'){e.preventDefault();if(suggestions[activeIdx])selectItem(suggestions[activeIdx]);}else if(e.key==='Escape')setOpen(false);}
  return CE('div',{className:'combo-wrap',ref:wrapRef},
    CE('input',{type:'text',value:inputVal,placeholder:"Nom de l'orienteur",className:hasError?'err':'',autoComplete:'off',onChange:e=>{setInputVal(e.target.value);onChange(e.target.value);setOpen(true);setActiveIdx(0);},onFocus:()=>{if(inputVal.trim().length>=2)setOpen(true);},onBlur:()=>setTimeout(()=>setOpen(false),150),onKeyDown:handleKeyDown}),
    open&&suggestions.length>0&&CE('div',{className:'combo-dropdown'},suggestions.map((name,i)=>CE('div',{key:name,className:'combo-item'+(i===activeIdx?' active':''),onMouseDown:e=>{e.preventDefault();selectItem(name);},onMouseEnter:()=>setActiveIdx(i)},CE('span',{className:'combo-nom'},name))))
  );
}

// ═══════════════════════════════════════════════════════════
// VUE LISTES
// ═══════════════════════════════════════════════════════════
function getItemColor(tabKey,name){
  if(tabKey==='statuts')return STATUT_COLORS[name]||'#94a3b8';
  if(tabKey==='conseillers'){const cols=['#7C3AED','#2563EB','#059669','#DB2777','#d97706','#0891b2','#65a30d','#dc2626'];const idx=(name.charCodeAt(0)+(name.charCodeAt(1)||0))%cols.length;return cols[idx];}
  if(tabKey==='publics')return'#6366f1';
  if(tabKey==='materiels')return'#0891b2';
  return'#94a3b8';
}
function VueListes({lists,onSave,onClose,emails,onSaveEmails}){
  const TABS=[{key:'statuts',label:'Statuts'},{key:'conseillers',label:'Conseillers'},{key:'publics',label:'Types de public'},{key:'materiels',label:'Matériels'}];
  const[activeTab,setActiveTab]=React.useState('statuts');
  const[draft,setDraft]=React.useState({statuts:[...lists.statuts],conseillers:[...lists.conseillers],publics:[...lists.publics],materiels:[...lists.materiels]});
  const[newVal,setNewVal]=React.useState('');
  const[editIdx,setEditIdx]=React.useState(null);
  const[editVal,setEditVal]=React.useState('');
  const[emailDraft,setEmailDraft]=React.useState(()=>Object.assign({},emails||{}));
  const[rappelsActif,setRappelsActif]=React.useState({});
  const[rappelsSaving,setRappelsSaving]=React.useState(false);

  const items=draft[activeTab];
  function setItems(fn){setDraft(d=>({...d,[activeTab]:fn(d[activeTab])}));setEditIdx(null);}
  function moveUp(i){if(i===0)return;setItems(arr=>{const a=[...arr];[a[i-1],a[i]]=[a[i],a[i-1]];return a;});}
  function moveDown(i){if(i===items.length-1)return;setItems(arr=>{const a=[...arr];[a[i],a[i+1]]=[a[i+1],a[i]];return a;});}
  function remove(i){setItems(arr=>arr.filter((_,j)=>j!==i));}
  function startEdit(i){setEditIdx(i);setEditVal(items[i]);}
  function saveEdit(i){if(!editVal.trim())return;setItems(arr=>{const a=[...arr];a[i]=editVal.trim();return a;});setEditIdx(null);}
  function addItem(){const v=newVal.trim();if(!v)return;if(draft[activeTab].includes(v)){showToast('⚠️ Cet élément existe déjà',false);return;}setItems(arr=>[...arr,v]);setNewVal('');}
  async function handleSave(){
    onSave(draft);
    // Sauvegarder listes
    try{const res=await apiFetch('saveLists',{lists:JSON.stringify(draft)});if(!res||!res.ok)showToast('⚠️ Listes : erreur GAS',false);}
    catch(_){showToast('⚠️ Listes : hors-ligne',false);}
    // Sauvegarder emails si onglet conseillers actif ou systématiquement
    try{
      const res=await apiFetch('saveEmails',{emails:JSON.stringify(emailDraft)});
      if(res&&res.ok){if(onSaveEmails)onSaveEmails(emailDraft);}
      else showToast('⚠️ Emails : erreur GAS',false);
    }catch(_){showToast('⚠️ Emails : hors-ligne',false);}
    showToast('✅ Listes et emails enregistrés');
    onClose();
  }
  React.useEffect(()=>{function k(e){if(e.key==='Escape')onClose();}document.addEventListener('keydown',k);return()=>document.removeEventListener('keydown',k);},[]);
  React.useEffect(()=>{setNewVal('');setEditIdx(null);},[activeTab]);
  React.useEffect(()=>{apiFetch('getConfig').then(res=>{if(res.ok&&res.config){try{setRappelsActif(JSON.parse(res.config['rappels_actifs']||'{}'));}catch(_){setRappelsActif({});}}}).catch(()=>{});},[]);

  async function handleSaveRappels(newObj){
    setRappelsSaving(true);
    try{const res=await apiFetch('setConfig',{key:'rappels_actifs',value:JSON.stringify(newObj)});if(res&&res.ok){setRappelsActif(newObj);}else throw new Error(res.error);}
    catch(err){showToast('❌ '+err.message,false);}
    finally{setRappelsSaving(false);}
  }
  return CE('div',{className:'listes-overlay',onClick:e=>{if(e.target.className==='listes-overlay')onClose();}},
    CE('div',{className:'listes-modal'},
      CE('div',{className:'listes-header'},
        CE('button',{className:'listes-close',onClick:onClose},'×'),
        CE('h2',null,'📋 Gestion des listes déroulantes'),
        CE('p',null,'Ajouter, modifier, supprimer et réordonner')
      ),
      CE('div',{className:'listes-tabs'},TABS.map(t=>CE('div',{key:t.key,className:'listes-tab'+(activeTab===t.key?' active':''),onClick:()=>setActiveTab(t.key)},t.label,CE('span',{className:'tab-count'},draft[t.key].length)))),
      CE('div',{className:'listes-body'},
        activeTab==='conseillers'&&CE('div',{className:'listes-email-row',style:{display:'flex',alignItems:'center',justifyContent:'space-between'}},
          CE('span',{className:'listes-email-lbl'},'📧 Rappels email'),
          CE('button',{
            style:{fontSize:11,padding:'4px 10px',borderRadius:6,border:'1.5px solid var(--border)',background:'var(--bg-2)',cursor:'pointer',color:'var(--text-2)'},
            disabled:rappelsSaving,
            onClick:()=>{
              const allOn=draft.conseillers.every(c=>rappelsActif[c]!==false);
              const newObj={};
              draft.conseillers.forEach(c=>newObj[c]=allOn?false:true);
              handleSaveRappels(newObj);
            }
          },draft.conseillers.every(c=>rappelsActif[c]!==false)?'🔕 Tout désactiver':'✅ Tout activer')
        ),
        items.map((item,i)=>CE('div',{key:i,className:'listes-item',style:{flexWrap:'wrap'}},
          CE('div',{className:'listes-arrows'},
            CE('button',{onClick:()=>moveUp(i),disabled:i===0,title:'Monter'},'▲'),
            CE('button',{onClick:()=>moveDown(i),disabled:i===items.length-1,title:'Descendre'},'▼')
          ),
          CE('span',{className:'listes-dot',style:{background:getItemColor(activeTab,item)}}),
          editIdx===i
            ?CE('div',{className:'listes-name'},CE('input',{autoFocus:true,value:editVal,onChange:e=>setEditVal(e.target.value),onKeyDown:e=>{if(e.key==='Enter')saveEdit(i);if(e.key==='Escape')setEditIdx(null);}}))
            :CE('div',{className:'listes-name'},item),
          // Champ email + toggle rappel inline pour l'onglet Conseillers
          activeTab==='conseillers'&&CE(React.Fragment,null,
            CE('input',{
              type:'email',
              placeholder:'email@exemple.com',
              value:emailDraft[item]||'',
              onChange:e=>setEmailDraft(d=>({...d,[item]:e.target.value})),
              title:'Email pour les rappels automatiques',
              className:'sf-input-base',style:{flex:'1 1 140px',minWidth:0,padding:'5px 8px',fontSize:12,color:'var(--blue)'}
            }),
            CE('label',{className:'tgl',title:rappelsActif[item]!==false?'Rappels activés — cliquer pour désactiver':'Rappels désactivés — cliquer pour activer',style:{flexShrink:0}},
              CE('input',{type:'checkbox',checked:rappelsActif[item]!==false,disabled:rappelsSaving,
                onChange:e=>{const n={...rappelsActif,[item]:e.target.checked};handleSaveRappels(n);}}),
              CE('span',{className:'tgl-track'})
            )
          ),
          CE('div',{className:'listes-actions'},
            editIdx===i
              ?CE('button',{className:'btn btn-primary btn-sm',onClick:()=>saveEdit(i)},'✓ OK')
              :CE('button',{className:'btn btn-secondary btn-sm',onClick:()=>startEdit(i)},'Modifier'),
            CE('button',{className:'listes-suppr-btn',onClick:()=>remove(i)},'Suppr.')
          )
        )),
        CE('div',{className:'listes-add-row'},
          CE('input',{type:'text',placeholder:`Ajouter dans ${TABS.find(t=>t.key===activeTab)?.label}…`,value:newVal,onChange:e=>setNewVal(e.target.value),onKeyDown:e=>{if(e.key==='Enter')addItem();}}),
          CE('button',{className:'btn btn-primary',onClick:addItem},'+ Ajouter')
        )
      ),
      CE('div',{className:'listes-footer'},
        CE('button',{className:'btn btn-secondary',onClick:onClose},'Annuler'),
        CE('button',{className:'btn btn-primary',onClick:handleSave},'💾 Enregistrer')
      )
    )
  );
}

// Login — supprimé v10.0 (remplacé par AdminLogin dans admin.html)

// ═══════════════════════════════════════════════════════════
// VUE SAISIE — v9.1 : mode unique + mode lot (cycle)
// ═══════════════════════════════════════════════════════════
const emptyRow=()=>({id:genId(),date:'',horaire:'',ampm:'',thematique:''});

function VueSaisie({entries,onSaved,onNewEntry,lists,editingId,onClearEdit,prefillData,onClearPrefill,accentColor}){
  const statuts    = lists?.statuts     || STATUTS_DEFAULT;
  const conseillers= lists?.conseillers || CONSEILLERS_DEFAULT;
  const publics    = lists?.publics     || PUBLICS_DEFAULT;
  const materiels  = lists?.materiels   || MATERIELS_DEFAULT;
  const empty={_id:'',_n:'',statut:'',date:'',horaire:'',ampm:'',orienteur:'',commune:'',lieu:'',thematique:'',inscrits:'',presents:'',public:'',conseiller:'',materiel:[],residence:'',remarques:''};

  // ── états mode unique ──
  const[form,setForm]   = React.useState(empty);
  const[errors,setErrors]= React.useState({});
  const[editId,setEditId]= React.useState(null);
  const[isDup,setIsDup]  = React.useState(false);

  // ── états mode lot ──
  const[modeLot,setModeLot]     = React.useState(false);
  const[lotForm,setLotForm]     = React.useState({orienteur:'',commune:'',lieu:'',conseiller:'',public:'',materiel:[],residence:'',remarques:''});
  const[lotRows,setLotRows]     = React.useState([emptyRow(),emptyRow()]);
  const[lotErrors,setLotErrors] = React.useState({});
  const[lotRowErrors,setLotRowErrors]= React.useState({});

  const[saving,setSaving]= React.useState(false);

  // ── chargement editingId → force mode unique ──
  React.useEffect(()=>{
    if(!editingId)return;
    const e=entries.find(x=>x._id===editingId);if(!e)return;
    setForm({...empty,...e,materiel:e.materiel||[]});setEditId(editingId);setIsDup(false);setModeLot(false);
    window.scrollTo(0,0);if(onClearEdit)onClearEdit();
  },[editingId,entries]);

  // ── chargement prefillData (duplication) → force mode unique ──
  React.useEffect(()=>{
    if(!prefillData)return;
    setForm({...empty,...prefillData,_id:'',_n:'',date:'',horaire:'',ampm:'',inscrits:'',presents:'',remarques:'',statut:'Planifié'});
    setEditId(null);setIsDup(true);setModeLot(false);setErrors({});
    window.scrollTo(0,0);if(onClearPrefill)onClearPrefill();
  },[prefillData]);

  function reset(){setForm(empty);setEditId(null);setIsDup(false);setErrors({});}
  function resetLot(){setLotForm({orienteur:'',commune:'',lieu:'',conseiller:'',public:'',materiel:[],residence:'',remarques:''});setLotRows([emptyRow(),emptyRow()]);setLotErrors({});setLotRowErrors({});}

  function set(k,v){setForm(f=>({...f,[k]:v}));setErrors(er=>({...er,[k]:''}));}
  function toggleMat(m){setForm(f=>({...f,materiel:f.materiel.includes(m)?f.materiel.filter(x=>x!==m):[...f.materiel,m]}));}
  function setLot(k,v){setLotForm(f=>({...f,[k]:v}));setLotErrors(er=>({...er,[k]:''}));}
  function toggleLotMat(m){setLotForm(f=>({...f,materiel:f.materiel.includes(m)?f.materiel.filter(x=>x!==m):[...f.materiel,m]}));}

  // ── lignes du lot ──
  function addRow(){setLotRows(r=>[...r,emptyRow()]);}
  function removeRow(id){if(lotRows.length<=1)return;setLotRows(r=>r.filter(x=>x.id!==id));}
  function setRow(id,k,v){setLotRows(r=>r.map(x=>x.id===id?{...x,[k]:v}:x));setLotRowErrors(er=>({...er,[id]:{...(er[id]||{}),[k]:''}}));}

  // ── validation mode unique ──
  function validate(){
    const e={};
    if(!form.statut)            e.statut='Requis';
    if(!form.date)              e.date='Requis';
    if(!form.horaire)           e.horaire='Requis';
    if(!form.ampm)              e.ampm='Requis';
    if(!form.commune.trim())    e.commune='Requis';
    if(!form.lieu.trim())       e.lieu='Requis';
    if(!form.thematique.trim()) e.thematique='Requis';
    if(!form.conseiller)        e.conseiller='Requis';
    if(!form.orienteur.trim())  e.orienteur='Requis';
    if(!form.public)            e.public='Requis';
    if(form.inscrits==='')      e.inscrits='Requis';
    setErrors(e);return Object.keys(e).length===0;
  }

  // ── validation mode lot ──
  function validateLot(){
    const e={};
    if(!lotForm.commune.trim())   e.commune='Requis';
    if(!lotForm.lieu.trim())      e.lieu='Requis';
    if(!lotForm.conseiller)       e.conseiller='Requis';
    if(!lotForm.orienteur.trim()) e.orienteur='Requis';
    if(!lotForm.public)           e.public='Requis';
    setLotErrors(e);
    const re={};
    lotRows.forEach(r=>{
      const er={};
      if(!r.date)       er.date='Requis';
      if(!r.horaire)    er.horaire='Requis';
      if(!r.ampm)       er.ampm='Requis';
      if(!r.thematique.trim()) er.thematique='Requis';
      if(Object.keys(er).length>0)re[r.id]=er;
    });
    setLotRowErrors(re);
    return Object.keys(e).length===0&&Object.keys(re).length===0;
  }

  // ── submit mode unique ──
  async function handleSubmit(){
    if(!validate())return;
    setSaving(true);
    try{
      const entry={...form,_id:form._id||genId(),inscrits:form.inscrits===''?'':parseInt(form.inscrits)||0,presents:form.presents===''?'':parseInt(form.presents)||0};
      const res=await apiFetch('save',{entry});
      if(!res.ok)throw new Error(res.error);
      showToast(editId?'✅ Atelier modifié':'✅ Atelier enregistré');
      if(onNewEntry&&!editId)onNewEntry(entry);
      if(!editId) window._pendingHighlight=[entry._id];
      onSaved();reset();
    }catch(err){showToast('❌ '+err.message,false);}
    finally{setSaving(false);}
  }

  // ── submit mode lot ──
  async function handleSubmitLot(){
    if(!validateLot())return;
    setSaving(true);
    try{
      let ok=0; const createdIds=[];
      for(const row of lotRows){
        const entry={_id:genId(),_n:'',statut:'Planifié',date:row.date,horaire:row.horaire,ampm:row.ampm,thematique:row.thematique,orienteur:lotForm.orienteur,commune:lotForm.commune,lieu:lotForm.lieu,conseiller:lotForm.conseiller,public:lotForm.public,materiel:lotForm.materiel,residence:lotForm.residence,remarques:lotForm.remarques,inscrits:'',presents:''};
        const res=await apiFetch('save',{entry});
        if(!res.ok)throw new Error(res.error);
        if(onNewEntry)onNewEntry(entry);
        createdIds.push(entry._id);ok++;
      }
      showToast(`✅ ${ok} atelier(s) créé(s)`);
      window._pendingHighlight=createdIds;
      onSaved();resetLot();
    }catch(err){showToast('❌ '+err.message,false);}
    finally{setSaving(false);}
  }

  // ── champs communs (utilisés en mode unique ET en mode lot) ──
  const canToggle=!editId&&!isDup;

  // ── Couleur d'accent ─────────────────────────────────────
  const ac=accentColor||'#1e3a8a';
  const acLight=ac+'22';
  const acVars={'--ac':ac,'--ac-light':acLight};

  // ── Labels ───────────────────────────────────────────────
  const Lbl=({t,err})=>CE('span',{style:{fontSize:11,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',color:err?'#e53e3e':ac,display:'block',marginBottom:6}},t);
  const LblG=({t})=>CE('span',{className:'sf-lbl'},t);

  // ── Style inputs ─────────────────────────────────────────
  const iStyle=(err)=>({});
const iClass=(err)=>'sf-input-base'+(err?' sf-input-err':'');
  const sStyle=(err)=>({cursor:'pointer',appearance:'auto'});
const sClass=(err)=>'sf-input-base'+(err?' sf-input-err':'');
  const nStyle=()=>({});
const nClass='sf-input-base sf-num';
  const taStyle=(err)=>({minHeight:84,resize:'vertical'});
const taClass=(err)=>'sf-input-base'+(err?' sf-input-err':'');
  const secStyle={borderTop:`3px solid ${ac}`};
const secClass='sf-section-inner';

  // ── Statut pills ─────────────────────────────────────────
  const SDOTS={'Planifié':'#3b82f6','Réalisé':'#22c55e','Annulé':'#ef4444','Reporté':'#f59e0b','Non réalisé':'#94a3b8'};
  const statutPills=CE('div',{className:secClass,style:secStyle},
    Lbl({t:'Statut *',err:!!errors.statut}),
    errors.statut&&CE('span',{className:'sf-err-msg'},errors.statut),
    CE('div',{style:{display:'flex',flexWrap:'wrap',gap:8}},
      statuts.map(s=>{
        const active=form.statut===s;
        return CE('button',{key:s,type:'button',
          className:'sf-pill-statut'+(active?' active':''),style:{borderColor:active?ac:'var(--border)',background:active?ac:'var(--bg-2)'},
          onClick:()=>set('statut',s)},
          CE('span',{style:{width:7,height:7,borderRadius:'50%',background:active?'rgba(255,255,255,.7)':SDOTS[s]||'#94a3b8',display:'inline-block'}}),s);
      })
    )
  );

  // ── Champs communs (One Shot + Cycle) ─────────────────────
  const champsCommuns=(frm,setFn,errs,entries_)=>CE('div',null,
    CE('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}},
      CE('div',null,
        Lbl({t:'Orienteur *',err:!!errs.orienteur}),
        CE(ComboOrienteur,{value:frm.orienteur,onChange:v=>setFn('orienteur',v),entries:entries_,hasError:!!errs.orienteur}),
        errs.orienteur&&CE('span',{className:'sf-err-msg'},errs.orienteur)),
      CE('div',null,
        Lbl({t:'Commune *',err:!!errs.commune}),
        CE(ComboCommune,{value:frm.commune,onChange:v=>setFn('commune',v),hasError:!!errs.commune}),
        errs.commune&&CE('span',{className:'sf-err-msg'},errs.commune))
    ),
    CE('div',{style:{marginTop:12}},
      Lbl({t:'Lieu de l\'atelier *',err:!!errs.lieu}),
      CE('input',{type:'text',className:iClass(errs.lieu),value:frm.lieu,placeholder:'Salle, médiathèque, établissement…',onChange:e=>setFn('lieu',e.target.value)}),
      errs.lieu&&CE('span',{className:'sf-err-msg'},errs.lieu)
    ),
    CE('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:12,marginTop:12}},
      CE('div',null,
        Lbl({t:'Conseiller *',err:!!errs.conseiller}),
        CE('select',{className:sClass(errs.conseiller),value:frm.conseiller,onChange:e=>setFn('conseiller',e.target.value)},
          CE('option',{value:'',disabled:true},'— Choisir —'),
          conseillers.map(c=>CE('option',{key:c,value:c},c))),
        errs.conseiller&&CE('span',{className:'sf-err-msg'},errs.conseiller)),
      CE('div',null,
        Lbl({t:'Type de public *',err:!!errs.public}),
        CE('select',{className:sClass(errs.public),value:frm.public,onChange:e=>setFn('public',e.target.value)},
          CE('option',{value:'',disabled:true},'— Choisir —'),
          publics.map(p=>CE('option',{key:p,value:p},p))),
        errs.public&&CE('span',{className:'sf-err-msg'},errs.public)),
      CE('div',null,
        LblG({t:'Résidence'}),
        CE('input',{type:'text',className:iClass(false),value:frm.residence,placeholder:'Commune d\'origine',onChange:e=>setFn('residence',e.target.value)}))
    ),
    CE('div',{style:{marginTop:12}},
      LblG({t:'Matériel utilisé'}),
      CE('div',{style:{display:'flex',flexWrap:'wrap',gap:8}},
        materiels.map(m=>{
          const chk=frm.materiel.includes(m);
          return CE('label',{key:m,className:'sf-mat-chip'+(chk?' checked':''),style:{borderColor:chk?ac:'var(--border)',color:chk?ac:'var(--text-2)',background:chk?acLight:'var(--bg-2)'}},
            CE('input',{type:'checkbox',checked:chk,style:{display:'none'},onChange:()=>(modeLot?toggleLotMat:toggleMat)(m)}),m);
        })
      )
    ),
    CE('div',{style:{marginTop:12}},
      LblG({t:'Remarques'}),
      CE('input',{type:'text',className:iClass(false),value:frm.remarques,placeholder:'Notes libres',onChange:e=>setFn('remarques',e.target.value)}))
  );

  return CE('div',{style:{padding:'4px 0'}},
    // Badge conseiller coloré
    accentColor&&CE('div',{style:{display:'inline-flex',alignItems:'center',gap:8,padding:'6px 14px',borderRadius:20,fontSize:12,fontWeight:700,color:'#fff',background:ac,marginBottom:14}},
      editId?'✏️ Modifier':isDup?'📋 Duplication':modeLot?'🔄 Saisie par cycle':'⚡ Saisie One Shot'
    ),

    // Toggle One Shot / Cycle
    canToggle&&CE('div',{style:{display:'flex',gap:0,border:'1.5px solid #e2e8f0',borderRadius:8,overflow:'hidden',marginBottom:16,width:'fit-content'}},
      CE('button',{style:{padding:'8px 20px',background:!modeLot?ac:'var(--bg-2)',border:'none',cursor:'pointer',fontSize:13,fontWeight:700,color:!modeLot?'#fff':'var(--text-3)',transition:'all .15s'},onClick:()=>{setModeLot(false);resetLot();}},'⚡ Saisie One Shot'),
      CE('button',{style:{padding:'8px 20px',background:modeLot?ac:'var(--bg-2)',border:'none',cursor:'pointer',fontSize:13,fontWeight:700,color:modeLot?'#fff':'var(--text-3)',transition:'all .15s'},onClick:()=>{setModeLot(true);reset();}},'🔄 Saisie par cycle')
    ),

    isDup&&CE('div',{className:'dup-badge'},'📋 Duplication — vérifiez et complétez avant d\'enregistrer'),

    // ══════════════════════════════
    // MODE ONE SHOT
    // ══════════════════════════════
    !modeLot&&CE('div',null,
      // Statut pills
      statutPills,
      // Date / Horaire / AM-PM
      CE('div',{className:secClass,style:secStyle},
        CE('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr 80px',gap:12}},
          CE('div',null,
            Lbl({t:'Date *',err:!!errors.date}),
            CE('input',{type:'date',className:iClass(errors.date),value:form.date,onChange:e=>set('date',e.target.value)}),
            errors.date&&CE('span',{className:'sf-err-msg'},errors.date)),
          CE('div',null,
            Lbl({t:'Horaire *',err:!!errors.horaire}),
            CE('input',{type:'time',className:iClass(errors.horaire),value:form.horaire,onChange:e=>set('horaire',e.target.value)}),
            errors.horaire&&CE('span',{className:'sf-err-msg'},errors.horaire)),
          CE('div',null,
            Lbl({t:'AM/PM *',err:!!errors.ampm}),
            CE('select',{className:sClass(errors.ampm),value:form.ampm,onChange:e=>set('ampm',e.target.value)},
              CE('option',{value:'',disabled:true},'—'),CE('option',{value:'AM'},'AM'),CE('option',{value:'PM'},'PM')),
            errors.ampm&&CE('span',{className:'sf-err-msg'},errors.ampm))
        )
      ),
      // Champs communs
      CE('div',{className:secClass,style:secStyle},champsCommuns(form,set,errors,entries)),
      // Thématique
      CE('div',{className:secClass,style:secStyle},
        Lbl({t:'Thématique *',err:!!errors.thematique}),
        CE('textarea',{className:taClass(errors.thematique),value:form.thematique,placeholder:"Thème abordé lors de l'atelier…",onChange:e=>set('thematique',e.target.value)}),
        errors.thematique&&CE('span',{className:'sf-err-msg'},errors.thematique)
      ),
      // Inscrits / Présents
      CE('div',{className:secClass,style:secStyle},
        CE('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}},
          CE('div',null,
            Lbl({t:'Inscrits *',err:!!errors.inscrits}),
            CE('input',{type:'number',min:0,style:{...nStyle(),border:`2px solid ${errors.inscrits?'#e53e3e':'#e2e8f0'}`},value:form.inscrits,placeholder:'0',onChange:e=>set('inscrits',e.target.value)}),
            errors.inscrits&&CE('span',{className:'sf-err-msg'},errors.inscrits)),
          CE('div',null,
            LblG({t:'Présents'}),
            CE('input',{type:'number',min:0,className:nClass,value:form.presents,placeholder:'0',onChange:e=>set('presents',e.target.value)}))
        )
      ),
      // Boutons
      CE('div',{style:{display:'flex',gap:12,marginTop:4}},
        CE('button',{style:{padding:'13px 28px',border:'none',borderRadius:12,cursor:saving?'not-allowed':'pointer',fontSize:14,fontWeight:700,color:'#fff',background:saving?'#94a3b8':ac,opacity:saving?.7:1,display:'flex',alignItems:'center',gap:8},onClick:handleSubmit,disabled:saving},
          saving?CE('span',null,CE('span',{className:'spinner'}),'Enregistrement…'):(editId?'💾 Modifier l\'atelier':'💾 Enregistrer l\'atelier')),
        CE('button',{className:'sf-btn-cancel',onClick:reset},isDup||editId?'✖ Annuler':'✖ Réinitialiser')
      )
    ),

    // ══════════════════════════════
    // MODE CYCLE — même design
    // ══════════════════════════════
    modeLot&&CE('div',null,
      CE('div',{className:secClass,style:{...secStyle,background:acLight,borderTop:`3px solid ${ac}`,display:'flex',alignItems:'center',gap:8,fontSize:13,fontWeight:700,color:ac}},
        '🔄 ',lotRows.length,' atelier(s) à créer — tous "Planifié", inscrits/présents à compléter après'
      ),
      // Champs communs
      CE('div',{className:secClass,style:secStyle},champsCommuns(lotForm,setLot,lotErrors,entries)),
      // Tableau des dates
      CE('div',{className:secClass,style:secStyle},
        CE('div',{style:{fontSize:13,fontWeight:700,color:ac,marginBottom:12}},'📅 Dates du cycle'),
        CE('div',{style:{display:'grid',gridTemplateColumns:'140px 100px 64px 1fr 32px',gap:8,padding:'0 4px',marginBottom:6}},
          CE('span',{className:'sf-lbl'},'DATE *'),
          CE('span',{className:'sf-lbl'},'HORAIRE *'),
          CE('span',{className:'sf-lbl'},'AM/PM'),
          CE('span',{className:'sf-lbl'},'THÉMATIQUE *'),
          CE('span',null)
        ),
        lotRows.map((row)=>{
          const rErr=lotRowErrors[row.id]||{};
          const hasErr=Object.keys(rErr).length>0;
          const brd=(err)=>`2px solid ${err?'#e53e3e':'#e2e8f0'}`;
          const inp=(type,val,key,err,ph)=>CE('input',{type,value:val,placeholder:ph||'',onChange:e=>setRow(row.id,key,e.target.value),className:iClass(err)});
          return CE('div',{key:row.id,className:'sf-lot-row'+(hasErr?' err':''),style:{borderColor:hasErr?'var(--red)':acLight,background:hasErr?'var(--red-dim)':acLight}},
            inp('date',row.date,'date',rErr.date),
            inp('time',row.horaire,'horaire',rErr.horaire),
            CE('select',{value:row.ampm,onChange:e=>setRow(row.id,'ampm',e.target.value),className:'sf-input-base'+(rErr.ampm?' sf-input-err':''),style:{padding:'8px 4px'},},
              CE('option',{value:'',disabled:true},'—'),CE('option',{value:'AM'},'AM'),CE('option',{value:'PM'},'PM')),
            inp('text',row.thematique,'thematique',rErr.thematique,"Thème de la séance"),
            CE('button',{onClick:()=>removeRow(row.id),disabled:lotRows.length===1,className:'sf-lot-del',style:{borderColor:acLight}},'×')
          );
        }),
        CE('button',{onClick:addRow,style:{display:'flex',alignItems:'center',justifyContent:'center',gap:6,padding:10,background:'var(--bg-2)',border:`2px dashed ${ac}`,borderRadius:10,cursor:'pointer',fontSize:13,color:ac,fontWeight:700,width:'100%',marginTop:6}},'＋ Ajouter une date')
      ),
      // Boutons
      CE('div',{style:{display:'flex',gap:12,marginTop:4}},
        CE('button',{style:{padding:'13px 28px',border:'none',borderRadius:12,cursor:saving?'not-allowed':'pointer',fontSize:14,fontWeight:700,color:'#fff',background:saving?'#94a3b8':ac,opacity:saving?.7:1,display:'flex',alignItems:'center',gap:8},onClick:handleSubmitLot,disabled:saving},
          saving?CE('span',null,CE('span',{className:'spinner'}),'Création…'):`💾 Créer ${lotRows.length} atelier(s)`),
        CE('button',{className:'sf-btn-cancel',onClick:resetLot},'✖ Réinitialiser')
      )
    )
  );
}

// ═══════════════════════════════════════════════════════════
// VUE HISTORIQUE — v9.0 : duplication + flux de clôture
// ═══════════════════════════════════════════════════════════
function VueHistorique({entries,onEdit,onDelete,onRefresh,onDuplicate,initConseiller,onResetConseiller,canDelete,onChangeConseiller}){
  const[search,setSearch]=React.useState('');
  const[dSearch,setDSearch]=React.useState('');
  const[filtStatut,setFiltStatut]=React.useState('Planifié');
  const[filtMois,setFiltMois]=React.useState('Tous');
  const[filtCommune,setFiltCommune]=React.useState('Toutes');
  const[filtConseiller,setFiltConseiller]=React.useState(initConseiller||'Tous');
  const[sortDir,setSortDir]=React.useState(1);
  const[dateFrom,setDateFrom]=React.useState('');
  const[dateTo,setDateTo]=React.useState('');
  const[panel,setPanel]=React.useState(null);
  const[panelStatut,setPanelStatut]=React.useState('');
  const[panelInscrits,setPanelInscrits]=React.useState('');
  const[panelPresents,setPanelPresents]=React.useState('');
  const[panelNote,setPanelNote]=React.useState('');
  const[saving,setSaving]=React.useState(false);
  const[confirmDel,setConfirmDel]=React.useState(null);

  React.useEffect(()=>{if(initConseiller)setFiltConseiller(initConseiller);},[initConseiller]);
  React.useEffect(()=>{const t=setTimeout(()=>setDSearch(search),300);return()=>clearTimeout(t);},[search]);
  React.useEffect(()=>{
    window._filterNewEntries=(ids)=>{setFiltStatut('Tous');setFiltMois('Tous');setFiltCommune('Toutes');setFiltConseiller('Tous');setDateFrom('');setDateTo('');setSearch('');setDSearch('');window._newIdsFilter=new Set(ids);};
    return()=>{window._filterNewEntries=null;};
  },[]);
  // Applique le filtre de mise en évidence après rechargement post-sauvegarde
  React.useEffect(()=>{
    if(!window._pendingHighlight||!window._pendingHighlight.length||!entries.length)return;
    const ids=window._pendingHighlight;
    const found=ids.some(id=>entries.find(e=>e._id===id));
    if(!found)return;
    window._pendingHighlight=null;
    setFiltStatut('Tous');setFiltMois('Tous');setFiltCommune('Toutes');
    setFiltConseiller('Tous');setDateFrom('');setDateTo('');
    setSearch('');setDSearch('');
    window._newIdsFilter=new Set(ids);
  },[entries]);

  const moisDispo=React.useMemo(()=>{const s=new Set(entries.map(e=>e.date?e.date.slice(0,7):'').filter(Boolean));return[...s].sort();},[entries]);
  const CHIP_STATUTS=[{key:'Tous',label:'Tous',cls:'chip-all'},{key:'Planifié',label:'Planifié',cls:'chip-planifie',dot:'#3b82f6'},{key:'Réalisé',label:'Réalisé',cls:'chip-realise',dot:'#22c55e'},{key:'Annulé',label:'Annulé',cls:'chip-annule',dot:'#ef4444'},{key:'Reporté',label:'Reporté',cls:'chip-reporte',dot:'#f59e0b'},{key:'Non réalisé',label:'Non réalisé',cls:'chip-nonrealise',dot:'#94a3b8'}];
  const counts=React.useMemo(()=>{const c={Tous:entries.length};STATUTS.forEach(s=>{c[s]=entries.filter(e=>e.statut===s).length;});return c;},[entries]);
  const filtered=React.useMemo(()=>{
    let r=entries;
    if(filtStatut!=='Tous')r=r.filter(e=>e.statut===filtStatut);
    if(filtMois!=='Tous')r=r.filter(e=>e.date&&e.date.startsWith(filtMois));
    if(filtCommune!=='Toutes')r=r.filter(e=>e.commune===filtCommune);
    if(filtConseiller!=='Tous')r=r.filter(e=>e.conseiller===filtConseiller);
    if(dateFrom)r=r.filter(e=>e.date>=dateFrom);
    if(dateTo)r=r.filter(e=>e.date<=dateTo);
    if(dSearch){const q=dSearch.toLowerCase();r=r.filter(e=>[e.lieu,e.thematique,e.orienteur,e.commune,e.public].some(v=>String(v||'').toLowerCase().includes(q)));}
    if(window._newIdsFilter&&window._newIdsFilter.size>0)r=r.filter(e=>window._newIdsFilter.has(e._id));
    return[...r].sort((a,b)=>{const va=a.date||'',vb=b.date||'';return va<vb?-sortDir:va>vb?sortDir:0;});
  },[entries,filtStatut,filtMois,filtCommune,filtConseiller,dSearch,sortDir,dateFrom,dateTo]);

  const kpi=React.useMemo(()=>{const realises=filtered.filter(e=>e.statut==='Réalisé');const annules=filtered.filter(e=>e.statut==='Annulé').length;const inscrits=filtered.reduce((s,e)=>s+(parseInt(e.inscrits)||0),0);const presents=filtered.reduce((s,e)=>s+(parseInt(e.presents)||0),0);const tx=inscrits>0?Math.round(presents/inscrits*100):0;return{total:filtered.length,realises:realises.length,annules,inscrits,presents,tx};},[filtered]);
  const nRetard=entries.filter(e=>isRetard(e)&&(filtConseiller==='Tous'||e.conseiller===filtConseiller)).length;

  function openPanel(e){setPanel(e);setPanelStatut(e.statut);setPanelInscrits(e.inscrits===undefined||e.inscrits===''?'':String(e.inscrits));setPanelPresents(e.presents===undefined||e.presents===''?'':String(e.presents));setPanelNote(e.remarques||'');}
  function closePanel(){setPanel(null);}

  async function savePanel(){
    if(!panel)return;setSaving(true);
    try{
      const updated={...panel,statut:panelStatut,inscrits:panelInscrits===''?'':parseInt(panelInscrits)||0,presents:panelPresents===''?'':parseInt(panelPresents)||0,remarques:panelNote};
      const res=await apiFetch('save',{entry:updated});
      if(!res.ok)throw new Error(res.error);
      showToast('✅ Mis à jour');closePanel();onRefresh();
    }catch(err){showToast('❌ '+err.message,false);}
    finally{setSaving(false);}
  }

  function resetFiltres(){setSearch('');setDSearch('');setFiltStatut('Planifié');setFiltMois('Tous');setFiltCommune('Toutes');setFiltConseiller('Tous');setDateFrom('');setDateTo('');window._newIdsFilter=null;if(onResetConseiller)onResetConseiller();}

  function exportXLSX(){
    const rows=[['N°','Statut','Date','Horaire','Commune','Lieu','Thématique','Inscrits','Présents','Public','Conseiller','Orienteur','Matériel','Résidence','Remarques']];
    filtered.forEach(e=>rows.push([e._n,e.statut,fmtDate(e.date),e.horaire,e.commune,e.lieu,e.thematique,e.inscrits,e.presents,e.public,e.conseiller,e.orienteur,(e.materiel||[]).join(', '),e.residence,e.remarques]));
    const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(rows),'Ateliers');
    XLSX.writeFile(wb,`ateliers_cd47_${new Date().toISOString().slice(0,10)}.xlsx`);
  }

  const hexToRgba=(hex,a)=>{const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);return`rgba(${r},${g},${b},${a})`;};
  const BORDER_COLOR={'Planifié':'#3b82f6','Réalisé':'#22c55e','Annulé':'#ef4444','Reporté':'#f59e0b','Non réalisé':'#94a3b8'};

  // v9.0 : clôture rapide — preset statuts finaux
  // CLOTURE_PRESETS — v10.0 : défini globalement dans shared.js

  return CE('div',null,
    // KPIs
    CE('div',{className:'kpi-row'},
      CE(FadeItem,{delay:0,style:{flex:'1 1 0',minWidth:0}},CE('div',{className:'kpi-mini-card',style:{borderLeft:'3px solid var(--blue)',background:'var(--bg-1)'}},CE('div',{className:'v',style:{color:'var(--blue)'}},kpi.total),CE('div',{className:'l'},'Total'))),
      CE(FadeItem,{delay:0.08,style:{flex:'1 1 0',minWidth:0}},CE('div',{className:'kpi-mini-card',style:{borderLeft:'3px solid #16a34a',background:'var(--bg-1)'}},CE('div',{className:'v',style:{color:'var(--green)'}},kpi.realises),CE('div',{className:'l'},'Réalisés'),CE('div',{className:'p',style:{color:'var(--green)'}},kpi.total?Math.round(kpi.realises/kpi.total*100)+'%':'-'))),
      CE(FadeItem,{delay:0.16,style:{flex:'1 1 0',minWidth:0}},CE('div',{className:'kpi-mini-card',style:{borderLeft:'3px solid #dc2626',background:'var(--bg-1)'}},CE('div',{className:'v',style:{color:'var(--red)'}},kpi.annules),CE('div',{className:'l'},'Annulés'),CE('div',{className:'p',style:{color:'var(--red)'}},kpi.total?Math.round(kpi.annules/kpi.total*100)+'%':'-'))),
      CE(FadeItem,{delay:0.24,style:{flex:'1 1 0',minWidth:0}},CE('div',{className:'kpi-mini-card',style:{borderLeft:'3px solid var(--blue)',background:'var(--bg-1)'}},CE('div',{className:'v',style:{color:'var(--blue)'}},kpi.inscrits),CE('div',{className:'l'},'Inscrits'))),
      CE(FadeItem,{delay:0.32,style:{flex:'1 1 0',minWidth:0}},CE('div',{className:'kpi-mini-card',style:{borderLeft:'3px solid var(--orange)',background:'var(--bg-1)'}},CE('div',{className:'v',style:{color:'var(--orange)'}},kpi.presents),CE('div',{className:'l'},'Présents'),CE('div',{className:'p',style:{color:'var(--orange)'}},kpi.tx+'%')))
    ),
    // Alerte retards
    nRetard>0&&CE('div',{style:{background:'var(--bg-1)',border:'1px solid #fcd34d',borderRadius:10,padding:'10px 14px',marginBottom:10,display:'flex',gap:10,alignItems:'center'}},
      CE('span',{style:{fontSize:20}},'⚠️'),
      CE('div',null,
        CE('div',{className:'retard-banner-title'},`${nRetard} atelier(s) en attente de mise à jour`),
        CE('div',{className:'retard-banner-sub'},'Statut "Planifié" mais date déjà passée — cliquez sur un atelier pour le clôturer rapidement')
      )
    ),
    // Filtre conseiller (frontend)
    initConseiller&&CE('div',{className:'filtre-banner'},
      CE('span',null,'👤 Affichage filtré : ',CE('strong',null,initConseiller)),
      CE('button',{onClick:resetFiltres},'Voir tous')
    ),
    // Filtres
    CE('div',{className:'card',style:{marginBottom:10}},
      CE('div',{className:'hist-filter-lbl'},'STATUT'),
      CE('div',{className:'chip-bar'},
        CHIP_STATUTS.map(c=>CE('button',{key:c.key,className:`chip ${c.cls}${filtStatut===c.key?' active':''}`,onClick:()=>setFiltStatut(c.key)},
          c.dot&&CE('span',{className:'chip-dot',style:{background:c.dot}}),c.label,' ',CE('span',{style:{opacity:.7,fontSize:11}},'('+counts[c.key]+')')))
      ),
      CE('hr',{style:{border:'none',borderTop:'1px solid #f0f4f8',margin:'10px 0'}}),
      CE('div',{style:{display:'flex',gap:8,flexWrap:'wrap',alignItems:'center'}},
        CE('input',{type:'text',value:search,placeholder:'🔍 Recherche…',style:{flex:'1 1 160px',padding:'6px 10px',border:'1.5px solid #e2e8f0',borderRadius:6,fontSize:13},onChange:e=>setSearch(e.target.value)}),
        CE('select',{style:{padding:'6px 8px',border:'1.5px solid #e2e8f0',borderRadius:6,fontSize:12},value:filtMois,onChange:e=>setFiltMois(e.target.value)},
          CE('option',{value:'Tous'},'Tous les mois'),moisDispo.map(m=>CE('option',{key:m,value:m},m))),
        CE('select',{style:{padding:'6px 8px',border:'1.5px solid #e2e8f0',borderRadius:6,fontSize:12},value:filtCommune,onChange:e=>setFiltCommune(e.target.value)},
          CE('option',{value:'Toutes'},'Toutes communes'),COMMUNES.map(c=>CE('option',{key:c,value:c},c))),
        CE('select',{style:{padding:'6px 8px',border:'1.5px solid #e2e8f0',borderRadius:6,fontSize:12},value:filtConseiller,onChange:e=>{setFiltConseiller(e.target.value);if(onChangeConseiller)onChangeConseiller(e.target.value);}},
          CE('option',{value:'Tous'},'Tous conseillers'),CONSEILLERS.map(c=>CE('option',{key:c,value:c},c)))
      ),
      CE('div',{style:{display:'flex',gap:8,flexWrap:'wrap',alignItems:'center',marginTop:8}},
        CE('div',{style:{display:'flex',alignItems:'center',gap:4}},
          CE('span',{className:'hist-du-au'},'Du'),
          CE('input',{type:'date',value:dateFrom,onChange:e=>setDateFrom(e.target.value),style:{padding:'6px 8px',border:'1.5px solid #e2e8f0',borderRadius:6,fontSize:12}}),
          CE('span',{className:'hist-du-au'},'Au'),
          CE('input',{type:'date',value:dateTo,onChange:e=>setDateTo(e.target.value),style:{padding:'6px 8px',border:'1.5px solid #e2e8f0',borderRadius:6,fontSize:12}})
        ),
        CE('button',{className:'btn btn-secondary btn-sm',onClick:()=>setSortDir(d=>-d)},sortDir===1?'↑ Date':'↓ Date'),
        CE('button',{className:'btn btn-secondary btn-sm',onClick:exportXLSX},'📥 XLSX'),
        CE('button',{className:'btn btn-secondary btn-sm',onClick:onRefresh},'🔄 Sync'),
        CE('button',{className:'btn btn-secondary btn-sm',onClick:resetFiltres},'✖ Réinitialiser')
      ),
      CE('div',{className:'hist-count'},`${filtered.length} atelier(s) affiché(s) sur ${entries.length}`)
    ),
    // Liste des ateliers
    CE('div',{className:'atelier-list'},filtered.map((e,ei)=>{
      const d=fmtCardDate(e.date);const retard=isRetard(e);const cColor=conseillerColor(e.conseiller);
      return CE(FadeItem,{key:e._id,delay:Math.min(ei*0.05,0.5)},CE('div',{className:'atelier-card',style:{background:retard?'#fffbeb':hexToRgba(cColor,0.04),borderLeft:'none'},onClick:()=>openPanel(e)},
        CE('div',{className:'atelier-card-border',style:{background:cColor}}),
        CE('div',{className:'atelier-card-date',style:{background:hexToRgba(cColor,0.08),borderRight:`1px solid ${hexToRgba(cColor,0.2)}`}},
          CE('div',{className:'atelier-card-day'},d.day),CE('div',{className:'atelier-card-month'},d.month),
          CE('div',{className:'atelier-card-jour'},d.jour),CE('div',{className:'atelier-card-time'},e.horaire)
        ),
        CE('div',{className:'atelier-card-body'},
          CE('div',{className:'atelier-card-badges'},badgePill(e.statut,retard),CE('span',{className:'badge-pill bp-public'},e.public||'Tous publics')),
          CE('div',{className:'atelier-card-conseiller',style:{color:cColor}},e.conseiller),
          CE('div',{className:'atelier-card-title'},e.thematique),
          CE('div',{className:'atelier-card-sub'},e.commune,' — ',e.lieu,(e.inscrits||e.presents)?CE('span',null,' · ',e.presents||0,'/',e.inscrits||0,' présents'):null)
        ),
        CE('div',{className:'atelier-card-arrow'},'›')
      ));
    })),
    // Side panel overlay
    panel&&CE('div',{className:'side-panel-overlay',onClick:closePanel}),
    CE('div',{className:'side-panel'+(panel?' open':'')},
      panel&&CE(React.Fragment,null,
        CE('div',{className:'side-panel-header'},
          CE('h3',null,'Détail / Mise à jour'),
          CE('button',{onClick:closePanel,className:'panel-close'},'✕')
        ),
        CE('div',{className:'side-panel-body'},
          // v9.0 : Flux de clôture rapide si atelier en retard
          isRetard(panel)&&CE('div',{className:'cloture-banner'},
            CE('div',{className:'cloture-title'},'⚠️ Atelier passé — à clôturer'),
            CE('div',{className:'cloture-btns'},
              CLOTURE_PRESETS.map(p=>CE('button',{key:p.statut,className:'cloture-btn',style:{background:p.bg,color:p.color},onClick:()=>setPanelStatut(p.statut)},p.label))
            )
          ),
          CE('div',{className:'panel-title'},panel.thematique),
          CE('div',{className:'sp-info-row'},CE('span',null,'Date'),CE('span',null,fmtDate(panel.date),' ',panel.horaire)),
          CE('div',{className:'sp-info-row'},CE('span',null,'Commune'),CE('span',null,panel.commune)),
          CE('div',{className:'sp-info-row'},CE('span',null,'Lieu'),CE('span',null,panel.lieu)),
          panel.orienteur&&CE('div',{className:'sp-info-row'},CE('span',null,'Orienteur'),CE('span',null,panel.orienteur)),
          CE('div',{className:'sp-info-row'},CE('span',null,'Public'),CE('span',null,panel.public)),
          CE('div',{className:'sp-info-row'},CE('span',null,'Conseiller'),CE('span',{style:{color:conseillerColor(panel.conseiller),fontWeight:700}},panel.conseiller)),
          panel.materiel&&panel.materiel.length>0&&CE('div',{style:{marginTop:10,marginBottom:4}},
            CE('div',{className:'panel-sublbl'},'MATÉRIEL'),
            panel.materiel.map(m=>CE('span',{key:m,className:'mat-chip'},m))
          ),
          CE('hr',{style:{border:'none',borderTop:'1px solid #e2e8f0',margin:'12px 0'}}),
          CE('div',{className:'sp-field'},CE('label',null,'Statut *'),
            CE('select',{value:panelStatut,onChange:e=>setPanelStatut(e.target.value),style:{width:'100%',padding:'8px 10px',border:'1.5px solid #e2e8f0',borderRadius:6,fontSize:13}},
              STATUTS.map(s=>CE('option',{key:s,value:s},s)))),
          CE('div',{className:'sp-field'},CE('label',null,"Nombre d'inscrits"),
            CE('input',{type:'number',min:0,value:panelInscrits,onChange:e=>setPanelInscrits(e.target.value),style:{width:'100%',padding:'8px 10px',border:'1.5px solid #e2e8f0',borderRadius:6,fontSize:13},placeholder:'0'})),
          CE('div',{className:'sp-field'},CE('label',null,'Nombre de présents'),
            CE('input',{type:'number',min:0,value:panelPresents,onChange:e=>setPanelPresents(e.target.value),style:{width:'100%',padding:'8px 10px',border:'1.5px solid #e2e8f0',borderRadius:6,fontSize:13},placeholder:'0'})),
          CE('div',{className:'sp-field'},CE('label',null,'Remarques'),
            CE('textarea',{value:panelNote,onChange:e=>setPanelNote(e.target.value),rows:3,placeholder:'Ajouter une note…',style:{width:'100%',padding:'8px 10px',border:'1.5px solid #e2e8f0',borderRadius:6,fontSize:13,resize:'vertical'}}))
        ),
        CE('div',{className:'side-panel-footer'},
          canDelete&&CE('button',{className:'btn btn-danger btn-sm',onClick:()=>{setConfirmDel(panel);closePanel();}},'Supprimer'),
          onDuplicate&&CE('button',{className:'btn btn-secondary btn-sm',className:'btn btn-sm btn-dupliquer',onClick:()=>{onDuplicate(panel);closePanel();}},'📋 Dupliquer'),
          CE('button',{className:'btn btn-secondary',style:{flex:1},onClick:()=>onEdit(panel._id)},'Éditer complet'),
          CE('button',{className:'btn btn-primary',style:{flex:1},onClick:savePanel,disabled:saving},saving?'…':'💾 Enregistrer')
        )
      )
    ),
    // Confirmation suppression
    confirmDel&&CE('div',{style:{position:'fixed',inset:0,background:'rgba(0,0,0,.5)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1000}},
      CE('div',{className:'card',style:{width:360}},
        CE('h2',null,'🗑️ Confirmer la suppression'),
        CE('p',{style:{margin:'12px 0',fontSize:13}},`Supprimer l'atelier #${confirmDel._n} — ${confirmDel.thematique} ?`),
        CE('p',{className:'panel-irrev'},'Cette action est irréversible.'),
        CE('div',{style:{display:'flex',gap:10}},
          CE('button',{className:'btn btn-danger',onClick:()=>{onDelete(confirmDel._id);setConfirmDel(null);}},'🗑️ Supprimer'),
          CE('button',{className:'btn btn-secondary',onClick:()=>setConfirmDel(null)},'Annuler')
        )
      )
    )
  );
}

// ═══════════════════════════════════════════════════════════
// VUE CALENDRIER — v9.2
// ═══════════════════════════════════════════════════════════
function VueCalendrier({entries,onEdit,onDelete,onRefresh,onDuplicate,initConseiller,onResetConseiller,canDelete,onChangeConseiller}){
  const today=new Date();
  const todayStr=today.toISOString().slice(0,10);
  const[calDate,setCalDate]=React.useState(new Date(today.getFullYear(),today.getMonth(),1));
  const[filtConseiller,setFiltConseiller]=React.useState(initConseiller||'Tous');
  const[panel,setPanel]=React.useState(null);
  const[panelStatut,setPanelStatut]=React.useState('');
  const[panelInscrits,setPanelInscrits]=React.useState('');
  const[panelPresents,setPanelPresents]=React.useState('');
  const[panelNote,setPanelNote]=React.useState('');
  const[saving,setSaving]=React.useState(false);
  const[confirmDel,setConfirmDel]=React.useState(null);
  const[expandDay,setExpandDay]=React.useState(null);

  React.useEffect(()=>{if(initConseiller)setFiltConseiller(initConseiller);},[initConseiller]);

  const yr=calDate.getFullYear();
  const mo=calDate.getMonth();
  const monthStr=`${yr}-${String(mo+1).padStart(2,'0')}`;
  const MOIS_LONG=['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
  const JOURS_COURT=['Lun','Mar','Mer','Jeu','Ven'];
  // CLOTURE_PRESETS — v10.0 : défini globalement dans shared.js

  // Entrées du mois filtrées par conseiller
  const monthEntries=React.useMemo(()=>{
    let r=entries.filter(e=>e.date&&e.date.startsWith(monthStr));
    if(filtConseiller!=='Tous')r=r.filter(e=>e.conseiller===filtConseiller);
    return r;
  },[entries,monthStr,filtConseiller]);

  // Map jour→ateliers
  const dayMap=React.useMemo(()=>{
    const m={};
    monthEntries.forEach(e=>{const d=parseInt(e.date.slice(8,10));if(!m[d])m[d]=[];m[d].push(e);});
    // Tri par horaire dans chaque jour
    Object.values(m).forEach(arr=>arr.sort((a,b)=>(a.horaire||'').localeCompare(b.horaire||'')));
    return m;
  },[monthEntries]);

  // Grille calendrier
  const firstDow=new Date(yr,mo,1).getDay();
  const firstDowMon=(firstDow+6)%7; // 0=Lun … 4=Ven, 5=Sam, 6=Dim
  const daysInMonth=new Date(yr,mo+1,0).getDate();
  const cells=[];
  // Offset semaine (sam/dim → 0, sinon position lun-ven)
  const offset5=firstDowMon>=5?0:firstDowMon;
  for(let i=0;i<offset5;i++)cells.push(null);
  for(let d=1;d<=daysInMonth;d++){
    const dow=new Date(yr,mo,d).getDay(); // 0=dim,6=sam
    if(dow!==0&&dow!==6)cells.push(d);   // jours ouvrés uniquement
  }
  while(cells.length%5!==0)cells.push(null);

  // Navigation
  function prevMonth(){setCalDate(d=>new Date(d.getFullYear(),d.getMonth()-1,1));setExpandDay(null);}
  function nextMonth(){setCalDate(d=>new Date(d.getFullYear(),d.getMonth()+1,1));setExpandDay(null);}
  function goToday(){setCalDate(new Date(today.getFullYear(),today.getMonth(),1));setExpandDay(null);}

  // Panel
  function openPanel(e){setPanel(e);setPanelStatut(e.statut);setPanelInscrits(e.inscrits===undefined||e.inscrits===''?'':String(e.inscrits));setPanelPresents(e.presents===undefined||e.presents===''?'':String(e.presents));setPanelNote(e.remarques||'');}
  function closePanel(){setPanel(null);}
  async function savePanel(){
    if(!panel)return;setSaving(true);
    try{
      const updated={...panel,statut:panelStatut,inscrits:panelInscrits===''?'':parseInt(panelInscrits)||0,presents:panelPresents===''?'':parseInt(panelPresents)||0,remarques:panelNote};
      const res=await apiFetch('save',{entry:updated});
      if(!res.ok)throw new Error(res.error);
      showToast('✅ Mis à jour');closePanel();onRefresh();
    }catch(err){showToast('❌ '+err.message,false);}
    finally{setSaving(false);}
  }

  // KPIs mois
  const kpi=React.useMemo(()=>{
    const r=monthEntries.filter(e=>e.statut==='Réalisé').length;
    const p=monthEntries.filter(e=>e.statut==='Planifié').length;
    const ins=monthEntries.reduce((s,e)=>s+(parseInt(e.inscrits)||0),0);
    const pres=monthEntries.reduce((s,e)=>s+(parseInt(e.presents)||0),0);
    return{total:monthEntries.length,realises:r,planifies:p,inscrits:ins,presents:pres};
  },[monthEntries]);

  return CE('div',null,
    // ── Header ──
    CE('div',{className:'card',style:{marginBottom:12}},
      CE('div',{style:{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:10,marginBottom:12}},
        CE('div',{style:{display:'flex',alignItems:'center',gap:8}},
          CE('button',{className:'btn btn-secondary btn-sm',onClick:prevMonth},'‹'),
          CE('div',{className:'rm-month-nav'},`${MOIS_LONG[mo]} ${yr}`),
          CE('button',{className:'btn btn-secondary btn-sm',onClick:nextMonth},'›'),
          CE('button',{className:'btn btn-secondary btn-sm',style:{marginLeft:4,fontSize:12},onClick:goToday},'Aujourd\'hui')
        ),
        CE('div',{style:{display:'flex',alignItems:'center',gap:8}},
          CE('label',{className:'rm-filter-lbl'},'Conseiller :'),
          CE('select',{value:filtConseiller,onChange:e=>{setFiltConseiller(e.target.value);if(onChangeConseiller)onChangeConseiller(e.target.value);},style:{padding:'5px 10px',border:'1.5px solid #e2e8f0',borderRadius:6,fontSize:13}},
            CE('option',{value:'Tous'},'Tous'),
            CONSEILLERS.map(c=>CE('option',{key:c,value:c},c))
          )
        )
      ),
      CE('div',{style:{display:'flex',gap:8,flexWrap:'wrap'}},
        CE('div',{className:'kpi-mini-card',style:{flex:'1 1 70px',borderLeft:'3px solid var(--blue)',background:'var(--bg-1)'}},CE('div',{className:'v',style:{color:'var(--blue)',fontSize:20}},kpi.total),CE('div',{className:'l'},'Ateliers')),
        CE('div',{className:'kpi-mini-card',style:{flex:'1 1 70px',borderLeft:'3px solid #16a34a',background:'var(--bg-1)'}},CE('div',{className:'v',style:{color:'var(--green)',fontSize:20}},kpi.realises),CE('div',{className:'l'},'Réalisés')),
        CE('div',{className:'kpi-mini-card',style:{flex:'1 1 70px',borderLeft:'3px solid var(--blue)',background:'var(--bg-1)'}},CE('div',{className:'v',style:{color:'var(--blue)',fontSize:20}},kpi.planifies),CE('div',{className:'l'},'Planifiés')),
        CE('div',{className:'kpi-mini-card',style:{flex:'1 1 70px',borderLeft:'3px solid var(--violet)',background:'var(--bg-1)'}},CE('div',{className:'v',style:{color:'var(--violet)',fontSize:20}},kpi.inscrits),CE('div',{className:'l'},'Inscrits')),
        CE('div',{className:'kpi-mini-card',style:{flex:'1 1 70px',borderLeft:'3px solid var(--cyan)',background:'var(--bg-1)'}},CE('div',{className:'v',style:{color:'var(--cyan)',fontSize:20}},kpi.presents),CE('div',{className:'l'},'Présents'))
      )
    ),
    // ── Grille ──
    CE('div',{className:'card',style:{padding:'12px 16px'}},
      // En-têtes jours
      CE('div',{className:'cal-grid',style:{marginBottom:4}},
        JOURS_COURT.map(j=>CE('div',{key:j,className:'cal-header-cell'},j))
      ),
      // Cellules
      CE('div',{className:'cal-grid'},
        cells.map((day,idx)=>{
          if(day===null)return CE('div',{key:'e'+idx,className:'cal-cell cal-cell-empty'});
          const ds=`${yr}-${String(mo+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
          const isToday=ds===todayStr;
          const dayAteliers=dayMap[day]||[];
          const MAX_VISIBLE=3;
          const hidden=dayAteliers.length-MAX_VISIBLE;
          const expanded=expandDay===day;
          const visible=expanded?dayAteliers:dayAteliers.slice(0,MAX_VISIBLE);
          return CE('div',{key:day,className:'cal-cell'+(isToday?' cal-today':'')},
            CE('div',{className:'cal-day-num'},
              isToday?CE('span',{className:'cal-today-num'},day):day
            ),
            visible.map(e=>{
              const sc=conseillerColor(e.conseiller);
              const retard=isRetard(e);
              return CE('div',{key:e._id,className:'cal-event',
                style:{background:retard?'#fecaca':sc+'22',borderLeft:`3px solid ${retard?'#ef4444':sc}`},
                onClick:ev=>{ev.stopPropagation();openPanel(e);}},
                CE('span',{className:'cal-event-time',style:{color:retard?'#991b1b':sc}},e.horaire||''),
                CE('span',{className:'cal-event-label'},e.thematique||e.lieu||'—')
              );
            }),
            hidden>0&&!expanded&&CE('div',{className:'cal-more',onClick:ev=>{ev.stopPropagation();setExpandDay(day);}},`+${hidden} autre${hidden>1?'s':''}`),
            expanded&&hidden>0&&CE('div',{className:'cal-more',style:{color:'#dc2626'},onClick:ev=>{ev.stopPropagation();setExpandDay(null);}},`Réduire ▲`)
          );
        })
      )
    ),
    // ── Side panel ──
    panel&&CE('div',{className:'side-panel-overlay',onClick:closePanel}),
    CE('div',{className:'side-panel'+(panel?' open':'')},
      panel&&CE(React.Fragment,null,
        CE('div',{className:'side-panel-header'},
          CE('h3',null,'Détail / Mise à jour'),
          CE('button',{onClick:closePanel,className:'panel-close'},'✕')
        ),
        CE('div',{className:'side-panel-body'},
          isRetard(panel)&&CE('div',{className:'cloture-banner'},
            CE('div',{className:'cloture-title'},'⚠️ Atelier passé — à clôturer'),
            CE('div',{className:'cloture-btns'},
              CLOTURE_PRESETS.map(p=>CE('button',{key:p.statut,className:'cloture-btn',style:{background:p.bg,color:p.color},onClick:()=>setPanelStatut(p.statut)},p.label))
            )
          ),
          CE('div',{className:'panel-title'},panel.thematique),
          CE('div',{className:'sp-info-row'},CE('span',null,'Date'),CE('span',null,fmtDate(panel.date),' ',panel.horaire)),
          CE('div',{className:'sp-info-row'},CE('span',null,'Commune'),CE('span',null,panel.commune)),
          CE('div',{className:'sp-info-row'},CE('span',null,'Lieu'),CE('span',null,panel.lieu)),
          panel.orienteur&&CE('div',{className:'sp-info-row'},CE('span',null,'Orienteur'),CE('span',null,panel.orienteur)),
          CE('div',{className:'sp-info-row'},CE('span',null,'Public'),CE('span',null,panel.public)),
          CE('div',{className:'sp-info-row'},CE('span',null,'Conseiller'),CE('span',{style:{color:conseillerColor(panel.conseiller),fontWeight:700}},panel.conseiller)),
          panel.materiel&&panel.materiel.length>0&&CE('div',{style:{marginTop:10,marginBottom:4}},
            CE('div',{className:'panel-sublbl'},'MATÉRIEL'),
            panel.materiel.map(m=>CE('span',{key:m,className:'mat-chip'},m))
          ),
          CE('hr',{style:{border:'none',borderTop:'1px solid #e2e8f0',margin:'12px 0'}}),
          CE('div',{className:'sp-field'},CE('label',null,'Statut *'),
            CE('select',{value:panelStatut,onChange:e=>setPanelStatut(e.target.value),style:{width:'100%',padding:'8px 10px',border:'1.5px solid #e2e8f0',borderRadius:6,fontSize:13}},
              STATUTS.map(s=>CE('option',{key:s,value:s},s)))),
          CE('div',{className:'sp-field'},CE('label',null,"Nombre d'inscrits"),
            CE('input',{type:'number',min:0,value:panelInscrits,onChange:e=>setPanelInscrits(e.target.value),style:{width:'100%',padding:'8px 10px',border:'1.5px solid #e2e8f0',borderRadius:6,fontSize:13},placeholder:'0'})),
          CE('div',{className:'sp-field'},CE('label',null,'Nombre de présents'),
            CE('input',{type:'number',min:0,value:panelPresents,onChange:e=>setPanelPresents(e.target.value),style:{width:'100%',padding:'8px 10px',border:'1.5px solid #e2e8f0',borderRadius:6,fontSize:13},placeholder:'0'})),
          CE('div',{className:'sp-field'},CE('label',null,'Remarques'),
            CE('textarea',{value:panelNote,onChange:e=>setPanelNote(e.target.value),rows:3,placeholder:'Ajouter une note…',style:{width:'100%',padding:'8px 10px',border:'1.5px solid #e2e8f0',borderRadius:6,fontSize:13,resize:'vertical'}}))
        ),
        CE('div',{className:'side-panel-footer'},
          canDelete&&CE('button',{className:'btn btn-danger btn-sm',onClick:()=>{setConfirmDel(panel);closePanel();}},'Supprimer'),
          onDuplicate&&CE('button',{className:'btn btn-secondary btn-sm',className:'btn btn-sm btn-dupliquer',onClick:()=>{onDuplicate(panel);closePanel();}},'📋 Dupliquer'),
          CE('button',{className:'btn btn-secondary',style:{flex:1},onClick:()=>onEdit(panel._id)},'Éditer complet'),
          CE('button',{className:'btn btn-primary',style:{flex:1},onClick:savePanel,disabled:saving},saving?'…':'💾 Enregistrer')
        )
      )
    ),
    confirmDel&&CE('div',{style:{position:'fixed',inset:0,background:'rgba(0,0,0,.5)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1000}},
      CE('div',{className:'card',style:{width:360}},
        CE('h2',null,'🗑️ Confirmer la suppression'),
        CE('p',{style:{margin:'12px 0',fontSize:13}},`Supprimer l'atelier #${confirmDel._n} — ${confirmDel.thematique} ?`),
        CE('p',{className:'panel-irrev'},'Cette action est irréversible.'),
        CE('div',{style:{display:'flex',gap:10}},
          CE('button',{className:'btn btn-danger',onClick:()=>{onDelete(confirmDel._id);setConfirmDel(null);}},'🗑️ Supprimer'),
          CE('button',{className:'btn btn-secondary',onClick:()=>setConfirmDel(null)},'Annuler')
        )
      )
    )
  );
}

// ═══════════════════════════════════════════════════════════
// ECharts — composants graphiques (migration depuis Recharts)
// ═══════════════════════════════════════════════════════════
function NoData(){return CE('p',{style:{color:'var(--text-3)',fontSize:12,textAlign:'center',paddingTop:20,fontFamily:"'IBM Plex Mono',monospace"}},'Aucune donnée');}
function trunc(s,n){return s&&s.length>n?s.slice(0,n-1)+'…':s;}
function barH(n,base){return Math.max(base,base+(Math.max(0,n-6)*8));}

// ── Base wrapper ECharts ────────────────────────────────────
const EC_ANIM={animation:true,animationDuration:800,animationEasing:'cubicOut',animationDurationUpdate:500,animationEasingUpdate:'cubicInOut'};
function EChart({option,height}){
  const ref=React.useRef(null);
  const inst=React.useRef(null);
  const optRef=React.useRef(option);
  React.useEffect(()=>{
    if(!ref.current||!window.echarts)return;
    const isNew=!inst.current;
    if(isNew){
      inst.current=window.echarts.init(ref.current,(window.GDIN_THEME||{getEChartsTheme:()=>'gdin-dark'}).getEChartsTheme());
      const ro=new ResizeObserver(()=>{if(inst.current)inst.current.resize();});
      ro.observe(ref.current);
      inst.current._ro=ro;
    }
    if(!isNew&&optRef.current===option)return;
    optRef.current=option;
    const merged={...EC_ANIM,...option};
    if(isNew){requestAnimationFrame(()=>requestAnimationFrame(()=>{if(inst.current)inst.current.setOption(merged,{notMerge:true,lazyUpdate:false});}));}
    else{inst.current.setOption(merged,{notMerge:false,lazyUpdate:false});}
  });
  React.useEffect(()=>{return()=>{if(inst.current){if(inst.current._ro)inst.current._ro.disconnect();inst.current.dispose();inst.current=null;}};},[]); 
  return CE('div',{ref,style:{width:'100%',height:height||200}});
}

function mkGrad(c1,c2,dir='v'){
  if(!window.echarts)return c1;
  const[x1,y1,x2,y2]=dir==='v'?[0,0,0,1]:[0,0,1,0];
  return new window.echarts.graphic.LinearGradient(x1,y1,x2,y2,[{offset:0,color:c1},{offset:1,color:c2}]);
}
// ── v15.0 : Style graphiques GDIN ────────────────────────────
function getEcT(){const d=isDark();return{
  TT:{backgroundColor:d?'#1a2235':'#1f2937',borderColor:d?'#1e2d45':'#374151',textStyle:{color:d?'#e8f0fe':'#f9fafb',fontSize:12},extraCssText:'border-radius:8px;padding:10px 14px;box-shadow:0 8px 24px rgba(0,0,0,.4)'},
  LABEL:{color:d?'#94a3b8':'#9ca3af',fontSize:10,fontFamily:"'IBM Plex Mono',monospace"},
  SPLIT:{lineStyle:{color:d?'rgba(255,255,255,0.06)':'rgba(0,0,0,0.06)',type:'dashed'}},
  LEGEND:{color:d?'#94a3b8':'#6b7280',fontSize:10},
  BORDER:d?'#0d1220':'#ffffff',
};}
function EC_TT(){return getEcT().TT;}
function EC_AXIS_BASE(){const t=getEcT();return{axisLine:{show:false},axisTick:{show:false},axisLabel:t.LABEL,splitLine:t.SPLIT};}
function EC_AXIS_LABEL(){return getEcT().LABEL;}
const EC_GRID={top:24,right:8,bottom:48,left:28,containLabel:true};
const EC_APN={axisPointer:{type:'none'}};

// ── BarChart vertical ───────────────────────────────────────
function BarChart({data,colors,height}){
  if(!data||data.length===0)return CE(NoData,null);
  const colArr=Array.isArray(colors)?colors:[colors||'#3b82f6'];
  const h=height||barH(data.length,200);
  const maxLbl=data.length>8?9:data.length>5?12:16;
  const labels=data.map(d=>trunc(d.label,maxLbl));
  const option={
    backgroundColor:'transparent',grid:{...EC_GRID,bottom:data.length>6?68:48},
    tooltip:{trigger:'axis',...EC_TT(),...EC_APN,
      formatter:params=>{const i=params[0];const d=data[i.dataIndex];return`<b style="color:#60a5fa">${d.label}</b><br/>${i.value} atelier(s)`+(d.tip?'<br/><span style="color:#94a3b8;font-size:11px">'+d.tip+'</span>':'');}},
    xAxis:{data:labels,...EC_AXIS_BASE(),splitLine:{show:false},axisLabel:{...EC_AXIS_LABEL(),rotate:data.length>5?-35:0,interval:0}},
    yAxis:{...EC_AXIS_BASE()},
    series:[{type:'bar',barMaxWidth:44,
      data:data.map((d,i)=>({value:d.value,itemStyle:{color:colArr[i%colArr.length],borderRadius:[4,4,0,0]}})),
      label:{show:true,position:'top',color:getEcT().LEGEND.color,fontSize:10,fontWeight:'bold'}
    }]
  };
  return CE(EChart,{option,height:h});
}

// ── LineChart simple ─────────────────────────────────────────
function LineChart({data}){
  if(!data||data.length===0)return CE(NoData,null);
  const option={
    backgroundColor:'transparent',grid:{...EC_GRID},
    tooltip:{trigger:'axis',...EC_TT(),...EC_APN,
      formatter:params=>{const i=params[0];const d=data[i.dataIndex];return d.tip||`<b style="color:#a78bfa">${d.label}</b><br/>${i.value}`;}},
    xAxis:{data:data.map(d=>d.label),...EC_AXIS_BASE(),splitLine:{show:false},axisLabel:{...EC_AXIS_LABEL(),rotate:data.length>8?-35:0,interval:0}},
    yAxis:{...EC_AXIS_BASE()},
    series:[{type:'line',data:data.map(d=>d.value),smooth:true,symbol:'circle',symbolSize:5,
      lineStyle:{width:2.5,color:'#a78bfa'},
      itemStyle:{color:'#a78bfa'},
      areaStyle:{color:mkGrad('rgba(167,139,250,0.25)','rgba(167,139,250,0.02)')},
      label:{show:true,position:'top',color:getEcT().LEGEND.color,fontSize:9,fontWeight:'bold'}
    }]
  };
  return CE(EChart,{option,height:200});
}

// ── DualLineChart inscrits/présents ──────────────────────────
function DualLineChart({data}){
  if(!data||data.length===0)return CE(NoData,null);
  const option={
    backgroundColor:'transparent',grid:{...EC_GRID,bottom:50},
    tooltip:{trigger:'axis',...EC_TT(),...EC_APN},
    legend:{data:['Inscrits','Présents'],textStyle:{color:getEcT().LEGEND.color,fontSize:11},bottom:0,icon:'circle',itemWidth:8,itemHeight:8},
    xAxis:{data:data.map(d=>d.label),...EC_AXIS_BASE(),splitLine:{show:false},axisLabel:{...EC_AXIS_LABEL(),rotate:data.length>8?-35:0,interval:0}},
    yAxis:{...EC_AXIS_BASE()},
    series:[
      {name:'Inscrits',type:'line',data:data.map(d=>d.inscrits),smooth:true,symbol:'circle',symbolSize:4,
       lineStyle:{width:2,color:'#3b82f6'},itemStyle:{color:'#3b82f6'},
       areaStyle:{color:mkGrad('rgba(59,130,246,0.2)','rgba(59,130,246,0.02)')}},
      {name:'Présents',type:'line',data:data.map(d=>d.presents),smooth:true,symbol:'circle',symbolSize:4,
       lineStyle:{width:2,color:'#22c55e'},itemStyle:{color:'#22c55e'},
       areaStyle:{color:mkGrad('rgba(34,197,94,0.2)','rgba(34,197,94,0.02)')}}
    ]
  };
  return CE(EChart,{option,height:220});
}

// ── RadialChart barres horizontales ──────────────────────────
function RadialChart({data,colors,height=220}){
  if(!data||data.length===0)return CE(NoData,null);
  const colArr=Array.isArray(colors)?colors:['#3b82f6'];
  const total=data.reduce((s,d)=>s+d.value,0);
  const option={
    backgroundColor:'transparent',grid:{top:8,right:50,bottom:8,left:8,containLabel:true},
    tooltip:{trigger:'axis',...EC_TT(),...EC_APN,
      formatter:params=>{const i=params[0];const d=data[i.dataIndex];const pct=Math.round(d.value/total*100);return`<b style="color:#60a5fa">${d.label}</b><br/>${d.value} — ${pct}%`;}},
    xAxis:{...EC_AXIS_BASE()},
    yAxis:{type:'category',data:data.map(d=>d.label),axisLabel:{...EC_AXIS_LABEL(),fontSize:11},axisLine:{show:false},axisTick:{show:false},splitLine:{show:false}},
    series:[{type:'bar',barMaxWidth:32,
      data:data.map((d,i)=>({value:d.value,itemStyle:{color:colArr[i%colArr.length],borderRadius:[0,4,4,0]}})),
      label:{show:true,position:'right',color:getEcT().LEGEND.color,fontSize:10,fontWeight:'bold'}
    }]
  };
  return CE(EChart,{option,height});
}

// ── DonutChart ───────────────────────────────────────────────
function DonutChart({data,colors,height=220}){
  if(!data||data.length===0)return CE(NoData,null);
  const colArr=Array.isArray(colors)?colors:['#3b82f6'];
  const total=data.reduce((s,d)=>s+d.value,0);
  const option={
    backgroundColor:'transparent',
    tooltip:{trigger:'item',...EC_TT(),formatter:params=>`<b style="color:${params.color}">${params.name}</b><br/>${params.value} (${Math.round(params.value/total*100)}%)`},
    legend:{orient:'horizontal',bottom:0,textStyle:{color:getEcT().LEGEND.color,fontSize:11},icon:'circle',itemWidth:8,itemHeight:8},
    series:[{type:'pie',radius:['38%','65%'],center:['50%','46%'],
      itemStyle:{borderRadius:5,borderColor:getEcT().BORDER,borderWidth:3},
      label:{show:true,position:'inside',color:'#fff',fontSize:10,fontWeight:'bold',formatter:p=>p.percent>6?Math.round(p.percent)+'%':''},
      data:data.map((d,i)=>({name:d.label,value:d.value,itemStyle:{color:colArr[i%colArr.length]}})),
      emphasis:{scale:true,scaleSize:5}
    }]
  };
  return CE(EChart,{option,height});
}

// ── StackedActivityChart barres empilées ─────────────────────
function StackedActivityChart({data}){
  if(!data||Object.keys(data).length===0)return CE(NoData,null);
  const todayYM=new Date().toISOString().slice(0,7);
  const fmtML=ym=>`${ym.slice(5,7)}/${ym.slice(2,4)}`;
  const keys=Object.keys(data).sort();
  const labels=keys.map(k=>fmtML(k));
  const option={
    backgroundColor:'transparent',grid:{top:28,right:8,bottom:48,left:28,containLabel:true},
    tooltip:{trigger:'axis',...EC_TT(),...EC_APN,
      formatter:params=>{const k=keys[params[0].dataIndex];const d=data[k];const futur=k>=todayYM?' (à venir)':'';return`<b style="color:#60a5fa">${fmtML(k)}${futur}</b><br/><span style="color:#22c55e">✅ ${d.realises} réalisés</span><br/><span style="color:#3b82f6">📅 ${d.planifies} planifiés</span><br/><span style="color:#ef4444">❌ ${d.annules} annulés</span>`;}},
    legend:{data:['Réalisés','Annulés','Planifiés'],textStyle:{color:getEcT().LEGEND.color,fontSize:10},bottom:0,icon:'roundRect',itemWidth:10,itemHeight:8},
    xAxis:{data:labels,...EC_AXIS_BASE(),splitLine:{show:false},axisLabel:{...EC_AXIS_LABEL(),rotate:-35,interval:0}},
    yAxis:{...EC_AXIS_BASE()},
    series:[
      {name:'Réalisés',type:'bar',stackId:'a',barMaxWidth:30,data:keys.map(k=>data[k].realises),
        itemStyle:{color:'#22c55e'}},
      {name:'Annulés',type:'bar',stackId:'a',barMaxWidth:30,data:keys.map(k=>data[k].annules),
        itemStyle:{color:'#ef4444'}},
      {name:'Planifiés',type:'bar',barMaxWidth:30,data:keys.map(k=>data[k].planifies),
        itemStyle:{color:'#3b82f6',borderRadius:[4,4,0,0]}}
    ]
  };
  return CE(EChart,{option,height:220});
}

// ── ConseillerBarChart groupé horizontal ─────────────────────
function ConseillerBarChart({entries}){
  if(!entries||entries.length===0)return CE(NoData,null);
  const cons={};
  entries.forEach(e=>{
    const c=e.conseiller||'?';
    if(!cons[c])cons[c]={realises:0,planifies:0,annules:0,inscrits:0,presents:0};
    if(e.statut==='Réalisé'){cons[c].realises++;cons[c].inscrits+=(parseInt(e.inscrits)||0);cons[c].presents+=(parseInt(e.presents)||0);}
    else if(e.statut==='Planifié')cons[c].planifies++;
    else if(e.statut==='Annulé')cons[c].annules++;
  });
  const data=Object.entries(cons).sort((a,b)=>b[1].realises-a[1].realises)
    .map(([name,d])=>({name:trunc(name,14),...d,tx:d.inscrits>0?Math.round(d.presents/d.inscrits*100):0}));
  if(!data.length)return CE(NoData,null);
  const h=Math.max(180,100+data.length*34);
  const option={
    backgroundColor:'transparent',grid:{top:8,right:60,bottom:30,left:8,containLabel:true},
    tooltip:{trigger:'axis',...EC_TT(),...EC_APN,
      formatter:params=>{const d=data[params[0].dataIndex];return`<b style="color:#60a5fa">${d.name}</b><br/><span style="color:#22c55e">✅ Réalisés : ${d.realises}</span><br/><span style="color:#3b82f6">📅 Planifiés : ${d.planifies}</span><br/><span style="color:#ef4444">❌ Annulés : ${d.annules}</span><br/><span style="color:#a78bfa;font-weight:700">👥 Présents : ${d.presents}/${d.inscrits} — ${d.tx}%</span>`;}},
    legend:{data:['Réalisés','Planifiés','Annulés'],textStyle:{color:getEcT().LEGEND.color,fontSize:10},bottom:0,icon:'roundRect',itemWidth:10,itemHeight:8},
    xAxis:{...EC_AXIS_BASE()},
    yAxis:{type:'category',data:data.map(d=>d.name),axisLabel:{...EC_AXIS_LABEL(),fontSize:11},axisLine:{show:false},axisTick:{show:false},splitLine:{show:false}},
    series:[
      {name:'Réalisés',type:'bar',barMaxWidth:14,data:data.map(d=>d.realises),
        itemStyle:{color:p=>conseillerColor(data[p.dataIndex].name),borderRadius:[0,4,4,0]},
        label:{show:true,position:'right',color:getEcT().LEGEND.color,fontSize:9,fontWeight:'bold'}},
      {name:'Planifiés',type:'bar',barMaxWidth:14,data:data.map(d=>d.planifies),
        itemStyle:{color:'rgba(59,130,246,0.5)',borderRadius:[0,4,4,0]}},
      {name:'Annulés',type:'bar',barMaxWidth:14,data:data.map(d=>d.annules),
        itemStyle:{color:'rgba(239,68,68,0.5)',borderRadius:[0,4,4,0]}}
    ]
  };
  return CE(EChart,{option,height:h});
}

// ── Utilitaire couleur éclaircissement ──────────────────────
function lighten(hex){try{const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);const f=n=>Math.min(255,Math.round(n+(255-n)*.35)).toString(16).padStart(2,'0');return'#'+f(r)+f(g)+f(b);}catch{return hex;}}

// ═══════════════════════════════════════════════════════════
// VUE DASHBOARD — v11.0 Tableau de bord de pilotage
// ═══════════════════════════════════════════════════════════

// DonutChart → remplacé par version ECharts ci-dessus


// ── KPI Card avec tendance ─────────────────────────────────
function KpiCard({val,lbl,sub,trend,color,icon,delay=0}){
  const up=trend>0,down=trend<0;
  const[sv,setSv]=React.useState(false);React.useEffect(()=>{const t=setTimeout(()=>setSv(true),delay*1000+20);return()=>clearTimeout(t);},[]);
  return CE('div',{className:'kpi',style:{background:'var(--bg-1)',borderLeft:'4px solid '+(color||'var(--cyan)'),textAlign:'left',padding:'14px 16px',position:'relative',overflow:'hidden',opacity:sv?1:0,transform:sv?'none':'translateY(14px)',transition:'opacity .45s ease,transform .45s ease'}},
    CE('div',{style:{position:'absolute',right:10,top:8,fontSize:28,opacity:.06}},icon),
    CE('div',{style:{display:'flex',alignItems:'flex-start',justifyContent:'space-between'}},
      CE('div',null,
        CE('div',{style:{fontSize:10,color:'var(--text-3)',fontWeight:600,marginBottom:4,fontFamily:"'IBM Plex Mono',monospace",textTransform:'uppercase',letterSpacing:'.06em'}},lbl),
        CE('div',{className:'val',style:{color:color||'var(--cyan)',fontSize:28,lineHeight:1.1,fontFamily:"'IBM Plex Mono',monospace",fontWeight:600}},val),
        sub&&CE('div',{style:{fontSize:11,color:'var(--text-3)',marginTop:3}},sub)
      ),
      trend!==undefined&&CE('div',{style:{
        fontSize:11,fontWeight:700,fontFamily:"'IBM Plex Mono',monospace",
        color:up?'var(--green)':down?'var(--red)':'var(--text-3)',
        background:up?'var(--green-dim)':down?'var(--red-dim)':'var(--bg-3)',
        padding:'2px 7px',borderRadius:8,whiteSpace:'nowrap',marginTop:2,alignSelf:'flex-start'
      }},(up?'↑ +':down?'↓ ':'')+Math.abs(trend)+'%')
    )
  );
}

// StackedActivityChart → remplacé par version ECharts ci-dessus

// ConseillerBarChart → remplacé par version ECharts ci-dessus

// ── MAIN : VueDashboard ────────────────────────────────────
function VueDashboard({entries}){
  if(!window.echarts)return CE('div',{className:'card'},CE('p',{style:{color:'var(--text-3)',textAlign:'center',padding:'40px 0'}},'⚠️ ECharts non chargé.'));

  const[periodeIdx,setPeriodeIdx]=React.useState(1); // défaut : ce mois
  const now=new Date();
  const todayStr=now.toISOString().slice(0,10);
  const todayYM=now.toISOString().slice(0,7);

  function getDateFrom(idx){
    if(idx===0)return '';
    const d=new Date(now);
    if(idx===1){d.setDate(1);return d.toISOString().slice(0,10);}
    if(idx===2){d.setMonth(d.getMonth()-3);return d.toISOString().slice(0,10);}
    if(idx===3){d.setMonth(d.getMonth()-6);return d.toISOString().slice(0,10);}
    if(idx===4){d.setFullYear(d.getFullYear()-1);return d.toISOString().slice(0,10);}
    return '';
  }
  const dateFrom=getDateFrom(periodeIdx);
  const filtered=React.useMemo(()=>dateFrom?entries.filter(e=>e.date&&e.date>=dateFrom):entries,[entries,dateFrom]);

  // Période précédente (même durée) pour tendances
  const prevFiltered=React.useMemo(()=>{
    if(periodeIdx===0)return[];
    const df=new Date(dateFrom);const prevTo=new Date(dateFrom);prevTo.setDate(prevTo.getDate()-1);
    const prevFrom=new Date(df);
    if(periodeIdx===1)prevFrom.setMonth(prevFrom.getMonth()-1);
    if(periodeIdx===2)prevFrom.setMonth(prevFrom.getMonth()-3);
    if(periodeIdx===3)prevFrom.setMonth(prevFrom.getMonth()-6);
    if(periodeIdx===4)prevFrom.setFullYear(prevFrom.getFullYear()-1);
    const pf=prevFrom.toISOString().slice(0,10);const pt=prevTo.toISOString().slice(0,10);
    return entries.filter(e=>e.date&&e.date>=pf&&e.date<=pt);
  },[entries,periodeIdx,dateFrom]);

  function mkTrend(curr,prev){
    if(periodeIdx===0||prev===0)return undefined;
    return Math.round((curr-prev)/prev*100);
  }

  // KPIs
  const realises=filtered.filter(e=>e.statut==='Réalisé');
  const annules=filtered.filter(e=>e.statut==='Annulé');
  const planifies=filtered.filter(e=>e.statut==='Planifié'&&e.date>=todayStr);
  const presents=realises.reduce((s,e)=>s+(parseInt(e.presents)||0),0);
  const inscrits=realises.reduce((s,e)=>s+(parseInt(e.inscrits)||0),0);
  const txPresence=inscrits>0?Math.round(presents/inscrits*100):0;
  const txAnnul=filtered.length>0?Math.round(annules.length/filtered.length*100):0;
  const prevR=prevFiltered.filter(e=>e.statut==='Réalisé');
  const prevPresents=prevR.reduce((s,e)=>s+(parseInt(e.presents)||0),0);

  // Statuts donut
  const STATUS_COLORS={'Réalisé':'#16a34a','Planifié':'#2563eb','Annulé':'#dc2626','Non réalisé':'#d97706','Reporté':'#9683EC'};
  const byStat={};filtered.forEach(e=>{byStat[e.statut]=(byStat[e.statut]||0)+1;});
  const dataStat=Object.entries(byStat).map(([label,value])=>({label,value}));

  // Activité mensuelle empilée
  const byMoisAct={};filtered.forEach(e=>{
    const m=e.date?e.date.slice(0,7):'?';
    if(m==='?')return;
    if(!byMoisAct[m])byMoisAct[m]={realises:0,annules:0,planifies:0};
    if(e.statut==='Réalisé')byMoisAct[m].realises++;
    else if(e.statut==='Annulé')byMoisAct[m].annules++;
    else if(e.statut==='Planifié')byMoisAct[m].planifies++;
  });

  // Top communes
  const byCommune={};realises.forEach(e=>{byCommune[e.commune]=(byCommune[e.commune]||0)+1;});
  const topCommunes=Object.entries(byCommune).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([label,value])=>({label,value}));

  // Thématiques
  const byTheme={};realises.forEach(e=>{const t=e.thematique||'Autre';byTheme[t]=(byTheme[t]||0)+1;});
  const dataTheme=Object.entries(byTheme).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([label,value])=>({label,value}));

  // Public
  const byPublic={};realises.forEach(e=>{const p=e.public||'Autres';byPublic[p]=(byPublic[p]||0)+1;});
  const dataPublic=Object.entries(byPublic).sort((a,b)=>b[1]-a[1]).map(([label,value])=>({label,value}));

  const PERIODES=[{l:'Tout'},{l:'Ce mois'},{l:'3 mois'},{l:'6 mois'},{l:'12 mois'}];
  const accent='#1e3a8a';

  return CE('div',null,

    // ── Barre période ──
    CE('div',{className:'card',style:{marginBottom:12,padding:'12px 16px'}},
      CE('div',{style:{display:'flex',alignItems:'center',gap:8,flexWrap:'wrap'}},
        CE('span',{className:'hist-filter-lbl',style:{marginBottom:0}},'Période :'),
        PERIODES.map((p,i)=>CE('button',{key:i,onClick:()=>setPeriodeIdx(i),style:{
          padding:'4px 13px',borderRadius:20,fontSize:12,fontWeight:600,cursor:'pointer',
          border:`1.5px solid ${periodeIdx===i?accent:'#e2e8f0'}`,
          background:periodeIdx===i?accent:'var(--bg-2)',
          color:periodeIdx===i?'#fff':'var(--text-3)',transition:'all .15s'
        }},p.l)),
        CE('span',{style:{marginLeft:'auto',fontSize:11,color:'#94a3b8'}},filtered.length+' ateliers · '+now.toLocaleDateString('fr-FR'))
      )
    ),

    // ── KPIs ──
    CE('div',{style:{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',gap:12,marginBottom:16}},
      CE(KpiCard,{val:realises.length,lbl:'Ateliers réalisés',icon:'✅',color:'var(--green)',bgColor:'#f0fdf4',trend:mkTrend(realises.length,prevR.length),delay:0}),
      CE(KpiCard,{val:planifies.length,lbl:'Planifiés à venir',icon:'📅',color:'#2563eb',bgColor:'#eff6ff',delay:0.08}),
      CE(KpiCard,{val:presents,lbl:'Participants présents',icon:'👥',color:'#7c3aed',bgColor:'#faf5ff',trend:mkTrend(presents,prevPresents),delay:0.16}),
      CE(KpiCard,{val:inscrits,lbl:'Inscrits total',icon:'📝',color:'var(--cyan)',bgColor:'#ecfeff',delay:0.24}),
      CE(KpiCard,{val:txPresence+'%',lbl:'Taux de présence',icon:'🎯',
        color:txPresence>=70?'#16a34a':txPresence>=50?'#d97706':'#dc2626',
        bgColor:txPresence>=70?'#f0fdf4':txPresence>=50?'#fffbeb':'#fef2f2'}),
      CE(KpiCard,{val:txAnnul+'%',lbl:'Taux d\'annulation',icon:'❌',
        color:txAnnul<=10?'#16a34a':txAnnul<=20?'#d97706':'#dc2626',
        bgColor:txAnnul<=10?'#f0fdf4':txAnnul<=20?'#fffbeb':'#fef2f2'})
    ),

    // ── Ligne 1 : Activité mensuelle + Donut statuts ──
    CE('div',{style:{display:'grid',gridTemplateColumns:'2fr 1fr',gap:16,marginBottom:16}},
      CE('div',{className:'card'},
        CE('h2',null,'📈 Activité mensuelle'),
        CE(StackedActivityChart,{data:byMoisAct})
      ),
      CE('div',{className:'card'},
        CE('h2',null,'🔵 Répartition statuts'),
        CE(DonutChart,{data:dataStat,colors:dataStat.map(d=>STATUS_COLORS[d.label]||'#718096'),height:220})
      )
    ),

    // ── Ligne 2 : Par conseiller (pleine largeur) ──
    CE('div',{className:'card',style:{marginBottom:16}},
      CE('h2',null,'👤 Performance par conseiller'),
      CE(ConseillerBarChart,{entries:filtered})
    ),

    // ── Ligne 3 : Communes + Thématiques ──
    CE('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:16}},
      CE('div',{className:'card'},
        CE('h2',null,'📍 Top communes (réalisés)'),
        CE(BarChart,{data:topCommunes,colors:['#1e3a8a','#2563eb','#3b82f6','#60a5fa','#93c5fd']})
      ),
      CE('div',{className:'card'},
        CE('h2',null,'📚 Par thématique'),
        CE(BarChart,{data:dataTheme,colors:['#7c3aed','#8b5cf6','#a78bfa','#c4b5fd']})
      )
    ),

    // ── Ligne 4 : Public + AM/PM ──
    CE('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}},
      CE('div',{className:'card'},
        CE('h2',null,'🧑‍🤝‍🧑 Par type de public'),
        CE(BarChart,{data:dataPublic,colors:['#DB2777','#ec4899','#f472b6','#fbcfe8']})
      ),
      CE('div',{className:'card'},
        CE('h2',null,'🌅 Matin vs Après-midi'),
        CE(DonutChart,{
          data:[
            {label:'Matin (AM)',value:filtered.filter(e=>e.ampm==='AM'||(!e.ampm&&e.horaire&&parseInt(e.horaire)<12)).length},
            {label:'Après-midi (PM)',value:filtered.filter(e=>e.ampm==='PM'||(!e.ampm&&e.horaire&&parseInt(e.horaire)>=12)).length}
          ],
          colors:['#f97316','#0891b2'],height:200
        })
      )
    )
  );
}

// ═══════════════════════════════════════════════════════════
// VUE GRAPHIQUES (stats détaillées — inchangé)
// ═══════════════════════════════════════════════════════════
function VueGraphiques({entries}){
  if(!window.echarts)return CE('div',{className:'card'},CE('p',{style:{color:'var(--text-3)',textAlign:'center',padding:'40px 0'}},'⚠️ ECharts non chargé — vérifiez la connexion internet.'));

  const[dateFrom,setDateFrom]=React.useState('');
  const[dateTo,setDateTo]=React.useState('');

  const filtered=React.useMemo(()=>{
    let r=entries;
    if(dateFrom)r=r.filter(e=>e.date&&e.date>=dateFrom);
    if(dateTo)r=r.filter(e=>e.date&&e.date<=dateTo);
    return r;
  },[entries,dateFrom,dateTo]);

  const hasFilter=dateFrom||dateTo;
  const passes=filtered.filter(isPasse);
  const total=passes.length;
  const totalInscrits=passes.reduce((s,e)=>s+(parseInt(e.inscrits)||0),0);
  const totalPresents=passes.reduce((s,e)=>s+(parseInt(e.presents)||0),0);
  const txPresence=totalInscrits>0?Math.round(totalPresents/totalInscrits*100):0;
  const annules=filtered.filter(e=>e.statut==='Annulé').length;
  const todayYM=new Date().toISOString().slice(0,7);
  const fmtML=ym=>ym==='?'?'?':`${ym.slice(5,7)}-${ym.slice(0,4)}`;

  const byCommune={};passes.forEach(e=>{byCommune[e.commune]=(byCommune[e.commune]||0)+1;});
  const dataCommune=Object.entries(byCommune).sort((a,b)=>b[1]-a[1]).map(([label,value])=>({label,value}));

  const byPublic={};passes.forEach(e=>{const p=e.public||'Autres';if(!byPublic[p])byPublic[p]={value:0,inscrits:0,presents:0};byPublic[p].value++;byPublic[p].inscrits+=(parseInt(e.inscrits)||0);byPublic[p].presents+=(parseInt(e.presents)||0);});
  const dataPublic=Object.entries(byPublic).sort((a,b)=>b[1].value-a[1].value).map(([label,d])=>({label,value:d.value,tip:`${label} : ${d.value} atelier(s) — ${d.inscrits} inscrits / ${d.presents} présents`}));

  const byMois={};filtered.forEach(e=>{const m=e.date?e.date.slice(0,7):'?';if(m>='2000'&&m<todayYM){if(!byMois[m])byMois[m]={realises:0,annules:0};if(e.statut==='Réalisé')byMois[m].realises++;if(e.statut==='Annulé')byMois[m].annules++;}});
  const dataMois=Object.keys(byMois).sort().map(k=>({label:fmtML(k),value:byMois[k].realises+byMois[k].annules,tip:`${fmtML(k)} : ${byMois[k].realises} réalisé(s) / ${byMois[k].annules} annulé(s)`}));

  const byMoisPresents={};passes.forEach(e=>{const m=e.date?e.date.slice(0,7):'?';if(m<todayYM)byMoisPresents[m]=(byMoisPresents[m]||0)+(parseInt(e.presents)||0);});
  const dataMoisPresents=Object.keys(byMoisPresents).sort().map(k=>({label:fmtML(k),value:byMoisPresents[k],tip:`${fmtML(k)} : ${byMoisPresents[k]} présent(s)`}));

  // v10.0 : Inscrits vs Présents par mois
  const byMoisDual={};passes.forEach(e=>{const m=e.date?e.date.slice(0,7):'?';if(m<todayYM){if(!byMoisDual[m])byMoisDual[m]={inscrits:0,presents:0};byMoisDual[m].inscrits+=(parseInt(e.inscrits)||0);byMoisDual[m].presents+=(parseInt(e.presents)||0);}});
  const dataDual=Object.keys(byMoisDual).sort().map(k=>({label:fmtML(k),...byMoisDual[k]}));

  // v10.0 : Répartition AM / PM
  const amCount=filtered.filter(e=>e.ampm==='AM'||(!e.ampm&&e.horaire&&parseInt(e.horaire)<12)).length;
  const pmCount=filtered.filter(e=>e.ampm==='PM'||(!e.ampm&&e.horaire&&parseInt(e.horaire)>=12)).length;
  const dataAmPm=[
    {label:'Matin (AM)',value:amCount,tip:`Matin : ${amCount} atelier(s) — ${filtered.length>0?Math.round(amCount/filtered.length*100):0}%`},
    {label:'Après-midi (PM)',value:pmCount,tip:`Après-midi : ${pmCount} atelier(s) — ${filtered.length>0?Math.round(pmCount/filtered.length*100):0}%`},
  ];

  const byFutur={};filtered.filter(e=>e.statut==='Planifié'&&e.date&&e.date.slice(0,7)>=todayYM).forEach(e=>{const m=e.date.slice(0,7);byFutur[m]=(byFutur[m]||0)+1;});
  const dataFutur=Object.keys(byFutur).sort().map(k=>({label:fmtML(k),value:byFutur[k],tip:`${fmtML(k)} : ${byFutur[k]} atelier(s) planifié(s)`}));

  const byStat={};filtered.forEach(e=>{byStat[e.statut]=(byStat[e.statut]||0)+1;});
  const dataStat=Object.entries(byStat).map(([label,value])=>({label,value}));

  // Années disponibles
  const annees=[...new Set(entries.map(e=>e.date?e.date.slice(0,4):'').filter(Boolean))].sort();

  return CE('div',null,
    // Barre filtre période
    CE('div',{className:'card',style:{marginBottom:12}},
      CE('div',{style:{display:'flex',alignItems:'center',gap:10,flexWrap:'wrap'}},
        CE('span',{className:'hist-filter-lbl',style:{marginBottom:0,whiteSpace:'nowrap'}},'📅 Période'),
        // Boutons années
        CE('button',{onClick:()=>{setDateFrom('');setDateTo('');},style:{padding:'5px 12px',borderRadius:6,border:`1.5px solid ${!hasFilter?'var(--blue)':'var(--border)'}`,background:!hasFilter?'var(--blue)':'var(--bg-2)',color:!hasFilter?'#fff':'var(--text-3)',fontSize:12,fontWeight:600,cursor:'pointer'}},'Tout'),
        annees.map(yr=>CE('button',{key:yr,onClick:()=>{setDateFrom(`${yr}-01-01`);setDateTo(`${yr}-12-31`);},style:{padding:'5px 12px',borderRadius:6,border:`1.5px solid ${dateFrom===`${yr}-01-01`&&dateTo===`${yr}-12-31`?'var(--blue)':'var(--border)'}`,background:dateFrom===`${yr}-01-01`&&dateTo===`${yr}-12-31`?'var(--blue)':'var(--bg-2)',color:dateFrom===`${yr}-01-01`&&dateTo===`${yr}-12-31`?'#fff':'var(--text-3)',fontSize:12,fontWeight:600,cursor:'pointer'}},yr)),
        // Saisie manuelle
        CE('div',{style:{display:'flex',alignItems:'center',gap:6,marginLeft:4}},
          CE('span',{className:'hist-du-au'},'Du'),
          CE('input',{type:'date',value:dateFrom,onChange:e=>setDateFrom(e.target.value),style:{padding:'5px 8px',border:'1.5px solid var(--border)',borderRadius:6,fontSize:12,background:'var(--bg-2)',color:'var(--text)'}}),
          CE('span',{className:'hist-du-au'},'Au'),
          CE('input',{type:'date',value:dateTo,onChange:e=>setDateTo(e.target.value),style:{padding:'5px 8px',border:'1.5px solid var(--border)',borderRadius:6,fontSize:12,background:'var(--bg-2)',color:'var(--text)'}})
        ),
        hasFilter&&CE('span',{style:{fontSize:12,color:'var(--blue)',fontWeight:600,background:'var(--blue-dim)',padding:'4px 10px',borderRadius:6}},`${filtered.length} / ${entries.length}`),
        CE('button',{className:'btn btn-print btn-sm',style:{marginLeft:'auto'},onClick:()=>window.print()},'🖨️ Imprimer')
      )
    ),
    passes.length===0
      ?CE('div',{className:'card'},CE('p',{style:{color:'var(--text-3)',textAlign:'center',padding:'40px 0'}},hasFilter?'Aucun atelier réalisé sur cette période.':'Aucun atelier réalisé.'))
      :CE('div',null,
          CE('div',{className:'kpi-grid'},
            CE(FadeItem,{delay:0,style:{display:'contents'}},CE('div',{className:'kpi',style:{borderLeft:'4px solid #16a34a',background:'#f0fdf4',textAlign:'left'}},CE('div',{className:'val',style:{color:'var(--green)'}},total),CE('div',{className:'lbl'},'Ateliers réalisés'))),
            CE(FadeItem,{delay:0.08,style:{display:'contents'}},CE('div',{className:'kpi',style:{borderLeft:'4px solid #dc2626',background:'#fff5f5',textAlign:'left'}},CE('div',{className:'val',style:{color:'#dc2626'}},annules),CE('div',{className:'lbl'},'Annulés'))),
            CE(FadeItem,{delay:0.16,style:{display:'contents'}},CE('div',{className:'kpi',style:{borderLeft:'4px solid #7c3aed',background:'#faf5ff',textAlign:'left'}},CE('div',{className:'val',style:{color:'#7c3aed'}},totalPresents),CE('div',{className:'lbl'},'Participants présents'))),
            CE(FadeItem,{delay:0.24,style:{display:'contents'}},CE('div',{className:'kpi',style:{borderLeft:'4px solid #0891b2',background:'#ecfeff',textAlign:'left'}},CE('div',{className:'val',style:{color:'var(--cyan)'}},txPresence+'%'),CE('div',{className:'lbl'},'Taux de présence')))
          ),
          CE('div',{className:'dashboard-charts',style:{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:16}},
            CE('div',{className:'card'},CE('h2',null,'Ateliers par mois (révolus)'),CE(LineChart,{data:dataMois})),
            CE('div',{className:'card'},CE('h2',null,'Présents par mois (révolus)'),CE(LineChart,{data:dataMoisPresents})),
            CE('div',{className:'card'},CE('h2',null,'Par commune'),CE(BarChart,{data:dataCommune,colors:['#1e3a8a','#3b82f6','#60a5fa','#93c5fd','#1e40af','#2563eb','#1d4ed8','#1e3a8a']})),
            CE('div',{className:'card'},CE('h2',null,'Par type de public'),CE(BarChart,{data:dataPublic,colors:['#7C3AED','#2563EB','#059669','#DB2777','#d97706','#0891b2','#65a30d','#dc2626']})),
            CE('div',{className:'card'},CE('h2',null,'📅 Planifiés — mois à venir'),CE(BarChart,{data:dataFutur,colors:['#7c3aed','#8b5cf6','#a78bfa','#c4b5fd']})),
            CE('div',{className:'card'},CE('h2',null,'Par statut'),CE(RadialChart,{data:dataStat,colors:['#276749','#2a69ac','#9b2c2c','#718096','#744210']})),
            CE('div',{className:'card',style:{gridColumn:'1 / -1'}},CE('h2',null,'📈 Inscrits vs Présents par mois'),CE(DualLineChart,{data:dataDual})),
            CE('div',{className:'card'},CE('h2',null,'🌅 Répartition Matin / Après-midi'),CE(BarChart,{data:dataAmPm,colors:['#f97316','#0891b2']}))
          )
        )
  );
}

// ═══════════════════════════════════════════════════════════
// VUE CARTE
// ═══════════════════════════════════════════════════════════
function VueCarte({entries,active}){
  const mapRef=React.useRef(null);
  React.useEffect(()=>{
    if(!active||mapRef.current)return;
    mapRef.current=L.map('map-container').setView([44.35,0.52],9);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',{attribution:'© OpenStreetMap contributors © CARTO',maxZoom:18}).addTo(mapRef.current);
    const byC={};
    entries.forEach(e=>{if(!byC[e.commune])byC[e.commune]={total:0,realises:0,planifies:0,presents:0};byC[e.commune].total++;if(e.statut==='Réalisé'){byC[e.commune].realises++;byC[e.commune].presents+=(parseInt(e.presents)||0);}if(e.statut==='Planifié')byC[e.commune].planifies++;});
    function markerColor(pct){if(pct>=70)return{fill:'#22c55e',stroke:'#166534'};if(pct>=40)return{fill:'#f97316',stroke:'#9a3412'};return{fill:'#3b82f6',stroke:'#1d4ed8'};}
    Object.entries(byC).forEach(([c,s])=>{
      const g=COMMUNES_GPS[c];if(!g)return;
      const pct=s.total>0?Math.round(s.realises/s.total*100):0;
      const mc=markerColor(pct);
      const popup=`<div style="min-width:165px;font-family:'Segoe UI',sans-serif;font-size:13px"><strong style="font-size:14px;color:#1e3a8a">${c}</strong><div style="margin:6px 0 4px;color:#4a5568">Total : ${s.total}</div><div style="color:#276749;font-weight:600">Réalisés : ${s.realises}</div><div style="color:#2a69ac;font-weight:600">Planifiés : ${s.planifies}</div><div style="color:#4a5568">Présents : ${s.presents}</div><div style="background:#e2e8f0;border-radius:4px;height:6px;margin-top:8px;overflow:hidden"><div style="background:#059669;width:${Math.max(2,pct)}%;height:100%;border-radius:4px"></div></div><div style="font-size:11px;color:#718096;margin-top:3px">${pct}% réalisé</div></div>`;
      L.circleMarker([g.lat,g.lng],{radius:Math.min(8+s.total*0.8,26),fillColor:mc.fill,color:mc.stroke,weight:2,opacity:1,fillOpacity:.82}).addTo(mapRef.current).bindPopup(popup,{maxWidth:220});
    });
  },[active]);
  return CE('div',null,
    CE('div',{style:{display:'flex',justifyContent:'flex-end',marginBottom:8}},CE('button',{className:'btn btn-print btn-sm',onClick:()=>window.print()},'🖨️ Imprimer')),
    CE('div',{className:'card'},
      CE('h2',null,'🗺️ Carte des communes'),
      CE('div',{style:{display:'flex',gap:16,marginBottom:10,flexWrap:'wrap',fontSize:12,color:'#4a5568'}},
        CE('span',null,CE('span',{style:{display:'inline-block',width:12,height:12,borderRadius:'50%',background:'#22c55e',marginRight:5,verticalAlign:'middle'}}),'≥ 70% réalisés'),
        CE('span',null,CE('span',{style:{display:'inline-block',width:12,height:12,borderRadius:'50%',background:'#f97316',marginRight:5,verticalAlign:'middle'}}),'40 – 70%'),
        CE('span',null,CE('span',{style:{display:'inline-block',width:12,height:12,borderRadius:'50%',background:'#3b82f6',marginRight:5,verticalAlign:'middle'}}),'< 40%')
      ),
      CE('div',{id:'map-container'})
    )
  );
}

// ═══════════════════════════════════════════════════════════
// VUE BINGO — par commune
// ═══════════════════════════════════════════════════════════
function VueBingo({entries}){
  const[selected,setSelected]=React.useState(null);
  const communes=React.useMemo(()=>{
    const byC={};
    entries.forEach(e=>{const c=e.commune||'Inconnue';if(!byC[c])byC[c]={total:0,realises:0,annules:0,ateliers:[]};byC[c].total++;if(e.statut==='Réalisé')byC[c].realises++;if(e.statut==='Annulé')byC[c].annules++;byC[c].ateliers.push(e);});
    return Object.entries(byC).sort((a,b)=>b[1].total-a[1].total).map(([nom,d])=>({nom,total:d.total,realises:d.realises,annules:d.annules,pct:d.total>0?Math.round(d.realises/d.total*100):0,ateliers:[...d.ateliers].sort((a,b)=>a.date>b.date?1:-1)}));
  },[entries]);
  function getCircleColor(pct){if(pct>=70)return{stroke:'#22c55e',text:'#166534',bg:'#dcfce7'};if(pct>=40)return{stroke:'#f97316',text:'#9a3412',bg:'#ffedd5'};return{stroke:'#3b82f6',text:'#1d4ed8',bg:'#dbeafe'};}
  const BADGE_COLORS={'Réalisé':'#dcfce7','Annulé':'#fee2e2','Planifié':'#dbeafe','Reporté':'#fef3c7','Non réalisé':'#f1f5f9'};
  const BADGE_TEXT={'Réalisé':'#166534','Annulé':'#991b1b','Planifié':'#1d4ed8','Reporté':'#92400e','Non réalisé':'#475569'};
  const BORDER_C={'Réalisé':'#22c55e','Annulé':'#ef4444','Planifié':'#3b82f6','Reporté':'#f59e0b','Non réalisé':'#94a3b8'};
  const sel=selected?communes.find(c=>c.nom===selected):null;
  return CE('div',null,
    CE('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}},
      CE('div',{style:{fontSize:13,color:'var(--text-3)'}},
        CE('span',{style:{marginRight:16}},CE('span',{style:{display:'inline-block',width:10,height:10,borderRadius:'50%',background:'#22c55e',border:'2px solid #22c55e',marginRight:4}}),'≥70% réalisés'),
        CE('span',{style:{marginRight:16}},CE('span',{style:{display:'inline-block',width:10,height:10,borderRadius:'50%',background:'#ffedd5',border:'2px solid #f97316',marginRight:4}}),'40-70%'),
        CE('span',null,CE('span',{style:{display:'inline-block',width:10,height:10,borderRadius:'50%',background:'#dbeafe',border:'2px solid #3b82f6',marginRight:4}}),'<40%')
      ),
      CE('button',{className:'btn btn-print btn-sm',onClick:()=>window.print()},'🖨️ Imprimer')
    ),
    CE('div',{className:'bingo-grid'},communes.map((c,ci)=>{const col=getCircleColor(c.pct);return CE(FadeItem,{key:c.nom,delay:ci*0.04},CE('div',{className:'bingo-card'+(selected===c.nom?' selected':''),style:{background:col.bg+'44',borderColor:col.stroke+'66'},onClick:()=>setSelected(selected===c.nom?null:c.nom)},CE('div',{className:'bingo-circle',style:{background:col.bg,borderColor:col.stroke,color:col.text,boxShadow:'0 0 0 4px '+col.stroke+'22'}},c.total),CE('div',{className:'bingo-nom'},c.nom),CE('div',{className:'bingo-pct',style:{color:col.text}},c.pct+'% réalisés')));})),
    sel&&CE('div',{className:'card'},
      CE('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}},
        CE('h2',{style:{borderBottom:'none',marginBottom:0,paddingBottom:0}},CE('span',{style:{color:'var(--blue)'}},'📍 '+sel.nom),CE('span',{style:{fontSize:13,fontWeight:400,color:'#718096',marginLeft:8}},'— '+sel.total+' atelier(s)')),
        CE('button',{onClick:()=>setSelected(null),className:'panel-close',style:{}},'✕')
      ),
      CE('div',{className:'bingo-list'},sel.ateliers.map((e,i)=>CE('div',{key:i,className:'bingo-list-item'},CE('span',{className:'bingo-dot',style:{background:BORDER_C[e.statut]||'#94a3b8'}}),CE('span',{className:'bingo-list-date'},fmtDate(e.date)),CE('span',{className:'bingo-list-theme'},e.thematique),CE('span',{className:'bingo-list-badge',style:{background:BADGE_COLORS[e.statut]||'#f1f5f9',color:BADGE_TEXT[e.statut]||'#475569'}},e.statut))))
    )
  );
}

// ═══════════════════════════════════════════════════════════
// VUE ADMIN
// ═══════════════════════════════════════════════════════════
function VueAdmin({entries,onRefresh,addLog,conseillersList,onSaveColors}){
  const adminRef=React.useRef(null);
  React.useEffect(()=>{
    if(!adminRef.current)return;
    const sections=adminRef.current.querySelectorAll('.admin-section');
    sections.forEach((el,i)=>{
      el.style.opacity='0';el.style.transform='translateY(14px)';el.style.transition='opacity .45s ease,transform .45s ease';
      setTimeout(()=>{el.style.opacity='1';el.style.transform='translateY(0)';},i*100+20);
    });
  },[]);
  const[resetStep,setResetStep]=React.useState(0);
  const[visibility,setVisibility]=React.useState(null);
  const[visSaving,setVisSaving]=React.useState(false);
  const[importing,setImporting]=React.useState(false);
  const[colorDraft,setColorDraft]=React.useState({...CONSEILLER_COLORS});
  const[colorSaving,setColorSaving]=React.useState(false);
  const[importProgress,setImportProgress]=React.useState(0);
  const[importMsg,setImportMsg]=React.useState('');
  const cancelRef=React.useRef(false);
  const VIS_ITEMS=[{key:'saisie',label:'✏️ Saisie',sub:'Formulaire de saisie'},{key:'historique',label:'📋 Historique',sub:'Liste des ateliers'},{key:'calendrier',label:'📅 Calendrier',sub:'Vue calendrier mensuelle'},{key:'graphiques',label:'📊 Graphiques',sub:'Tableaux de bord'},{key:'carte',label:'🗺️ Carte',sub:'Carte des communes'},{key:'bingo',label:'🎯 Bingo',sub:'Vue par commune'}];

  React.useEffect(()=>{apiFetch('getVisibility').then(res=>{if(res.ok)setVisibility(res.visibility);}).catch(()=>{});},[]);
  // v10.0 : getConfig rappels supprimé de VueAdmin (setRappelsActif non défini ici)

  // Sync colorDraft quand la liste des conseillers change
  React.useEffect(()=>{
    const draft={...CONSEILLER_COLORS};
    (conseillersList||[]).forEach(c=>{if(!draft[c])draft[c]='#6B7280';});
    setColorDraft(draft);
  },[conseillersList]);

  async function handleSaveColors(){
    setColorSaving(true);
    try{
      const res=await apiFetch('saveColors',{colors:JSON.stringify(colorDraft)});
      if(!res.ok)throw new Error(res.error);
      applyColors(colorDraft);
      if(onSaveColors)onSaveColors(colorDraft);
      showToast('✅ Couleurs sauvegardées');
      addLog('Couleurs conseillers mises à jour','ok');
    }catch(err){showToast('❌ '+err.message,false);}
    finally{setColorSaving(false);}
  }

  async function handleSaveVisibility(){
    setVisSaving(true);
    try{const res=await apiFetch('saveVisibility',{visibility:JSON.stringify(visibility)});if(res.ok){showToast('✅ Visibilité sauvegardée');addLog('Visibilité frontend mise à jour','ok');}else throw new Error(res.error);}
    catch(err){showToast('❌ '+err.message,false);}
    finally{setVisSaving(false);}
  }

  function handleReset(){if(resetStep===0){setResetStep(1);return;}if(resetStep===1){setResetStep(2);return;}addLog('Réinitialisation BDD locale','info');showToast('✅ BDD locale vidée (Google Sheet intact)');setResetStep(0);onRefresh();}

  async function handleImportCSV(e){
    const file=e.target.files[0];if(!file)return;e.target.value='';
    cancelRef.current=false;
    setImporting(true);setImportProgress(0);setImportMsg('Lecture du fichier…');
    try{
      const text=await file.text();const lines=text.split('\n').filter(l=>l.trim());
      if(lines.length<2)throw new Error('Fichier vide ou invalide');
      const firstLine=lines[0];const sep=(firstLine.split(';').length>firstLine.split(',').length)?';':',';
      function parseCSVLine(line){const res=[];let cur='',inQ=false;for(let i=0;i<line.length;i++){const c=line[i];if(c==='"')inQ=!inQ;else if(c===sep&&!inQ){res.push(cur.trim());cur='';}else cur+=c;}res.push(cur.trim());return res;}
      const headers=parseCSVLine(lines[0]).map(h=>h.replace(/^"|"$/g,'').trim());
      const entries_raw=[];
      for(let i=1;i<lines.length;i++){const vals=parseCSVLine(lines[i]);if(vals.length<3)continue;const row={};headers.forEach((h,idx)=>{row[h]=vals[idx]?vals[idx].replace(/^"|"$/g,'').trim():'';});if(!row._id&&!row.statut&&!row['Statut'])continue;
        const g=(...keys)=>{for(const k of keys){if(row[k]!==undefined&&row[k]!=='')return row[k];}return '';};
        entries_raw.push({_id:g('_id')||genId(),_n:parseInt(g('_n','N°'))||0,statut:g('statut','Statut')||'Planifié',date:normalizeDate(g('date','Date')),horaire:normalizeHoraire(g('horaire','Horaire')),ampm:g('ampm','AM/PM')||'AM',orienteur:g('orienteur','Orienteur'),commune:normalizeCommune(g('commune','Commune')),lieu:g('lieu','Lieu',"Lieu de l'atelier"),thematique:g('thematique','Thématique','Thematique'),inscrits:g('inscrits','Inscrits')===''?'':parseInt(g('inscrits','Inscrits'))||0,presents:g('presents','Présents')===''?'':parseInt(g('presents','Présents'))||0,public:g('pub','public','Public')||'Tous publics',conseiller:g('conseiller','Conseiller','Conseiller numérique'),materiel:MATERIELS.filter(m=>String(g(m)).trim().toUpperCase()==='OUI'),residence:g('residence','Résidence','Résidence des participants'),remarques:g('remarques','Remarques')});}
      setImportMsg(`${entries_raw.length} lignes parsées — envoi vers Google Sheets…`);
      const BATCH=5;let done=0;
      for(let i=0;i<entries_raw.length;i+=BATCH){
        if(cancelRef.current){showToast(`⛔ Annulé — ${done} lignes importées`,false);addLog(`Import CSV annulé à ${done}/${entries_raw.length}`,'info');return;}
        const batch=entries_raw.slice(i,i+BATCH);const params=new URLSearchParams({action:'saveMany',entries:JSON.stringify(batch)});const res=await Promise.race([fetch(`${GS_URL}?${params.toString()}`),new Promise((_,r)=>setTimeout(()=>r(new Error('timeout')),45000))]);const data=await res.json();if(!data.ok)throw new Error(data.error);done+=batch.length;setImportProgress(Math.round(done/entries_raw.length*100));setImportMsg(`${done}/${entries_raw.length} lignes importées…`);}
      addLog(`Import CSV : ${entries_raw.length} ateliers`,'ok');showToast(`✅ ${entries_raw.length} ateliers importés`);onRefresh();
    }catch(err){showToast('❌ '+err.message,false);addLog('Erreur import CSV : '+err.message,'err');}
    finally{setImporting(false);setImportProgress(0);setImportMsg('');cancelRef.current=false;}
  }

  async function handleImportXLSX(e){
    const file=e.target.files[0];if(!file)return;e.target.value='';
    cancelRef.current=false;
    setImporting(true);setImportMsg('Lecture XLSX…');
    try{
      const ab=await file.arrayBuffer();const wb=XLSX.read(ab);const ws=wb.Sheets[wb.SheetNames[0]];const rows=XLSX.utils.sheet_to_json(ws,{defval:''});
      const g=(r,...keys)=>{for(const k of keys){if(r[k]!==undefined&&r[k]!=='')return r[k];}return '';};
      const entries_raw=rows.map(r=>({
        _id:       g(r,'_id')||genId(),
        _n:        parseInt(g(r,'_n','N°','n'))||0,
        statut:    g(r,'statut','Statut')||'Planifié',
        date:      normalizeDate(g(r,'date','Date')),
        horaire:   normalizeHoraire(g(r,'horaire','Horaire')),
        ampm:      g(r,'ampm','AM/PM')||'AM',
        orienteur: g(r,'orienteur','Orienteur'),
        commune:   normalizeCommune(g(r,'commune','Commune')),
        lieu:      g(r,'lieu','Lieu',"Lieu de l'atelier"),
        thematique:g(r,'thematique','Thématique','Thematique'),
        inscrits:  g(r,'inscrits','Inscrits')===''?'':parseInt(g(r,'inscrits','Inscrits'))||0,
        presents:  g(r,'presents','Présents','Presents')===''?'':parseInt(g(r,'presents','Présents','Presents'))||0,
        public:    g(r,'public','Public')||'Tous publics',
        conseiller:g(r,'conseiller','Conseiller','Conseiller numérique'),
        materiel:  MATERIELS.filter(m=>String(g(r,m)).trim().toUpperCase()==='OUI'),
        residence: g(r,'residence','Résidence','Résidence des participants'),
        remarques: g(r,'remarques','Remarques'),
      })).filter(r=>r.statut);
      const BATCH=5;let done=0;
      for(let i=0;i<entries_raw.length;i+=BATCH){
        if(cancelRef.current){showToast(`⛔ Annulé — ${done} lignes importées`,false);addLog(`Import XLSX annulé à ${done}/${entries_raw.length}`,'info');return;}
        const batch=entries_raw.slice(i,i+BATCH);const params=new URLSearchParams({action:'saveMany',entries:JSON.stringify(batch)});const res=await Promise.race([fetch(`${GS_URL}?${params.toString()}`),new Promise((_,r)=>setTimeout(()=>r(new Error('timeout')),45000))]);const data=await res.json();if(!data.ok)throw new Error(data.error);done+=batch.length;setImportProgress(Math.round(done/entries_raw.length*100));}
      addLog(`Import XLSX : ${entries_raw.length} ateliers`,'ok');showToast(`✅ ${entries_raw.length} ateliers importés`);onRefresh();
    }catch(err){showToast('❌ '+err.message,false);addLog('Erreur import XLSX : '+err.message,'err');}
    finally{setImporting(false);setImportProgress(0);setImportMsg('');cancelRef.current=false;}
  }

  const resetLabels=['🗑️ Réinitialiser la BDD locale','⚠️ Confirmer (1/2)','🚨 Confirmer définitivement (2/2)'];

  return CE('div',{ref:adminRef},
    CE('div',{className:'card'},
      CE('h2',null,'⚙️ Panneau Administrateur'),
      CE('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:8}},
        CE(FadeItem,{delay:0,style:{display:'contents'}},CE('div',{className:'kpi',style:{borderLeft:'4px solid #1e3a8a',background:'#f0f4ff',textAlign:'left'}},CE('div',{className:'val',style:{color:'var(--blue)'}},entries.length),CE('div',{className:'lbl'},'Total ateliers'))),
        CE(FadeItem,{delay:0.1},CE('div',{className:'kpi',style:{borderLeft:'4px solid #16a34a',background:'#f0fdf4',textAlign:'left'}},CE('div',{className:'val',style:{color:'var(--green)'}},entries.filter(e=>e.statut==='Réalisé').length),CE('div',{className:'lbl'},'Réalisés')))
      )
    ),
    // Couleurs conseillers
    CE('div',{className:'admin-section'},
      CE('h3',null,'🎨 Couleurs des conseillers'),
      CE('p',{style:{fontSize:12,color:'#4a5568',marginBottom:16}},'Personnalisez la couleur de chaque conseiller numérique. S\'applique au bandeau, au formulaire et aux cartes.'),
      CE('div',{style:{display:'flex',flexDirection:'column',gap:10}},
        (conseillersList||Object.keys(CONSEILLER_COLORS)).map(c=>{
          const hexVal=(colorDraft[c]||'#6B7280').toUpperCase();
          return CE('div',{key:c,className:'admin-color-row'},
            // Color picker visuel
            CE('input',{type:'color',value:(colorDraft[c]||'#6B7280').toLowerCase(),
              onChange:e=>setColorDraft(d=>({...d,[c]:e.target.value.toUpperCase()})),
              style:{width:44,height:44,borderRadius:8,border:'none',cursor:'pointer',padding:2,background:'none',flexShrink:0}}),
            // Preview carré
            CE('div',{style:{width:36,height:36,borderRadius:8,background:colorDraft[c]||'#6B7280',flexShrink:0,boxShadow:'0 2px 6px rgba(0,0,0,.15)'}}),
            // Nom
            CE('span',{className:'admin-color-name'},c),
            // Input hex éditable
            CE('input',{type:'text',value:hexVal,maxLength:7,
              onChange:e=>{
                const v=e.target.value.toUpperCase();
                setColorDraft(d=>({...d,[c]:v}));
              },
              onBlur:e=>{
                // Valider et corriger au blur
                const v=e.target.value;
                if(/^#[0-9A-Fa-f]{6}$/.test(v))setColorDraft(d=>({...d,[c]:v.toUpperCase()}));
                else setColorDraft(d=>({...d,[c]:colorDraft[c]||'#6B7280'}));
              },
              className:'admin-color-hex'}),
            // Bouton reset
            CE('button',{onClick:()=>{const orig=CONSEILLER_COLORS[c]||'#6B7280';setColorDraft(d=>({...d,[c]:orig}));},
              className:'admin-color-reset',style:{flexShrink:0}},'↩ Reset')
          );
        })
      ),
      CE('button',{className:'btn btn-primary',style:{marginTop:16},onClick:handleSaveColors,disabled:colorSaving},colorSaving?'…':'💾 Sauvegarder les couleurs')
    ),
    visibility&&CE('div',{className:'admin-section'},
      CE('h3',null,'👁️ Visibilité — Frontend conseillers'),
      CE('p',{style:{fontSize:12,color:'#4a5568',marginBottom:12}},'Choisissez les onglets visibles dans l\'interface conseiller.'),
      VIS_ITEMS.map(item=>CE('div',{key:item.key,className:'toggle-row'},
        CE('div',null,CE('div',{className:'toggle-label'},item.label),CE('div',{className:'toggle-sub'},item.sub)),
        CE('label',{className:'tgl'},CE('input',{type:'checkbox',checked:!!visibility[item.key],onChange:()=>setVisibility(v=>({...v,[item.key]:!v[item.key]}))}),CE('span',{className:'tgl-track'}))
      )),
      CE('button',{className:'btn btn-primary',style:{marginTop:16},onClick:handleSaveVisibility,disabled:visSaving},visSaving?'…':'💾 Enregistrer la visibilité')
    ),
    CE('div',{className:'admin-section'},
      CE('h3',null,'📥 Import CSV'),
      CE('p',{style:{fontSize:12,color:'#4a5568',marginBottom:12}},'Importe un fichier CSV compatible. Les entrées existantes sont fusionnées.'),
      importing?CE('div',null,CE('p',{style:{fontSize:12,color:'var(--text-2)',marginBottom:6}},importMsg),CE('div',{className:'progress-bar'},CE('div',{className:'progress-fill',style:{width:importProgress+'%'}})),CE('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:6}},CE('p',{style:{fontSize:11,color:'#718096'}},importProgress+'%'),CE('button',{className:'btn btn-danger btn-sm',onClick:()=>cancelRef.current=true},'⛔ Annuler'))):CE('label',{style:{display:'inline-block',cursor:'pointer'}},CE('span',{className:'btn btn-primary'},'📂 Choisir un fichier CSV'),CE('input',{type:'file',accept:'.csv',style:{display:'none'},onChange:handleImportCSV}))
    ),
    CE('div',{className:'admin-section'},
      CE('h3',null,'📊 Import XLSX'),
      CE('p',{style:{fontSize:12,color:'#4a5568',marginBottom:12}},'Réimporte un fichier .xlsx précédemment exporté.'),
      importing?CE('div',null,CE('p',{style:{fontSize:12,color:'var(--text-2)',marginBottom:6}},importMsg||'Import en cours…'),CE('div',{className:'progress-bar'},CE('div',{className:'progress-fill',style:{width:importProgress+'%'}})),CE('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:6}},CE('p',{style:{fontSize:11,color:'#718096'}},importProgress+'%'),CE('button',{className:'btn btn-danger btn-sm',onClick:()=>cancelRef.current=true},'⛔ Annuler'))):CE('label',{style:{display:'inline-block',cursor:'pointer'}},CE('span',{className:'btn btn-warn'},'📂 Choisir un fichier XLSX'),CE('input',{type:'file',accept:'.xlsx',style:{display:'none'},onChange:handleImportXLSX}))
    ),
    CE('div',{className:'admin-section'},
      CE('h3',null,'🗑️ Réinitialiser la base de données'),
      CE('p',{style:{fontSize:12,color:'#4a5568',marginBottom:12}},'Vide uniquement le cache local. Le Google Sheet reste intact.'),
      resetStep>0&&CE('div',{className:'confirm-box'},CE('p',null,resetStep===1?'Êtes-vous sûr ? Cette action vide le cache local.':'Dernière confirmation — cliquez pour confirmer.')),
      CE('div',{style:{display:'flex',gap:10}},
        CE('button',{className:'btn btn-danger',onClick:handleReset},resetLabels[resetStep]),
        resetStep>0&&CE('button',{className:'btn btn-secondary',onClick:()=>setResetStep(0)},'Annuler')
      )
    )
  );
}

// ═══════════════════════════════════════════════════════════
// VUE ACCUEIL — frontend uniquement
// ═══════════════════════════════════════════════════════════
function VueAccueil({conseillers,onChoix,loading}){
  const[choix,setChoix]=React.useState('');
  return CE('div',{className:'accueil-wrap'},
    CE('div',{className:'accueil-card'},
      CE('div',{className:'accueil-logo'},'🖥️'),
      CE('div',{className:'accueil-title'},'Ateliers Inclusion Numérique'),
      CE('div',{className:'accueil-sub'},'Conseil Départemental du Lot-et-Garonne'),
      CE('label',{className:'accueil-label'},'Qui êtes-vous ?'),
      CE('select',{className:'accueil-select',value:choix,onChange:e=>setChoix(e.target.value)},
        CE('option',{value:''},'— Sélectionner votre nom —'),
        conseillers.map(c=>CE('option',{key:c,value:c},c))
      ),
      CE('button',{className:'accueil-btn',disabled:!choix||loading,onClick:()=>onChoix(choix)},
        loading?CE('span',null,CE('span',{className:'spinner'}),'Chargement…'):'📋 Accéder à mes ateliers'),
      CE('button',{className:'accueil-skip',disabled:loading,onClick:()=>onChoix(null),style:{opacity:loading?.4:1}},'Voir tous les ateliers')
    )
  );
}

// ═══════════════════════════════════════════════════════════
// VuePowerBI — Dashboard Territoire (commun index + admin)
// ═══════════════════════════════════════════════════════════
// ── VuePowerBI ──────────────────────────────────────────────
function VuePowerBI({entries, conseillers: conseillersList}){
  const CONS = conseillersList && conseillersList.length ? conseillersList : CONSEILLERS_DEFAULT;
  const CONS_COLORS_PBI = ['#7C3AED','#2563EB','#059669','#DB2777','#d97706','#0891b2','#65a30d','#dc2626'];
  function cColor(c){ return CONSEILLER_COLORS[c]||CONS_COLORS_PBI[CONS.indexOf(c)%CONS_COLORS_PBI.length]||'#6B7280'; }

  const S_COL_PBI={'Réalisé':'#22c55e','Planifié':'#3b82f6','Annulé':'#ef4444','Non réalisé':'#94a3b8','Reporté':'#f97316'};
  const MOIS_PBI=['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
  const STATUTS_PBI=['Réalisé','Planifié','Annulé','Non réalisé','Reporté'];

  const[page,setPage]=React.useState('general');
  const[fCons,setFCons]=React.useState([]);
  const[fStat,setFStat]=React.useState([]);
  const[fMois,setFMois]=React.useState([]);
  const[showF,setShowF]=React.useState(false);

  function togF(arr,setArr,v){ setArr(p=>p.includes(v)?p.filter(x=>x!==v):[...p,v]); }
  const hasF=fCons.length||fStat.length||fMois.length;

  const fd=React.useMemo(()=>entries.filter(d=>{
    if(fCons.length&&!fCons.includes(d.conseiller))return false;
    if(fStat.length&&!fStat.includes(d.statut))return false;
    if(fMois.length){const m=d.date?parseInt(d.date.split('-')[1]):0;if(!fMois.includes(m))return false;}
    return true;
  }),[entries,fCons,fStat,fMois]);

  const getMois=d=>d.date?parseInt(d.date.split('-')[1]):0;

  // KPIs
  const total=fd.length;
  const real=fd.filter(d=>d.statut==='Réalisé').length;
  const tReal=total?Math.round(real/total*100):0;
  const totPre=fd.reduce((s,d)=>s+(parseInt(d.presents)||0),0);
  const totIns=fd.reduce((s,d)=>s+(parseInt(d.inscrits)||0),0);
  const tPres=totIns?Math.round(totPre/totIns*100):0;

  // Par mois
  const pMois=MOIS_PBI.map((l,i)=>{
    const m=i+1,r=fd.filter(d=>getMois(d)===m);
    return{mois:l,
      Réalisés:r.filter(d=>d.statut==='Réalisé').length,
      Planifiés:r.filter(d=>d.statut==='Planifié').length,
      Annulés:r.filter(d=>d.statut==='Annulé').length,
      Présents:r.reduce((s,d)=>s+(parseInt(d.presents)||0),0)
    };
  });

  // Statuts donut
  const pStat=STATUTS_PBI.map(s=>({name:s,value:fd.filter(d=>d.statut===s).length,color:S_COL_PBI[s]})).filter(d=>d.value>0);

  // Thématiques top 10
  const allThemes=[...new Set(fd.map(d=>d.thematique).filter(Boolean))];
  const pTheme=allThemes.map(t=>({name:t.length>22?t.slice(0,22)+'…':t,count:fd.filter(d=>d.thematique===t).length})).sort((a,b)=>b.count-a.count).slice(0,10);

  // Orienteurs top 8
  const allOris=[...new Set(fd.map(d=>d.orienteur).filter(Boolean))];
  const pOri=allOris.map(o=>({name:o.length>16?o.slice(0,16)+'…':o,count:fd.filter(d=>d.orienteur===o).length})).sort((a,b)=>b.count-a.count).slice(0,8);

  // Conseillers × mois (jusqu'au mois en cours)
  const _moisCourant=new Date().getMonth()+1;
  const pMoisFilt=pMois.filter((_,i)=>i+1<=_moisCourant);
  const pConsMois=MOIS_PBI.map((l,i)=>{
    const m=i+1,obj={mois:l};
    CONS.forEach(c=>{obj[c]=fd.filter(d=>getMois(d)===m&&d.conseiller===c&&d.statut==='Réalisé').length;});
    return obj;
  }).filter((_,i)=>i+1<=_moisCourant);

  // Communes top 8
  const allComm=[...new Set(fd.map(d=>d.commune).filter(Boolean))];
  const pComm=allComm.map(c=>({
    name:c.length>14?c.slice(0,14)+'…':c,fullName:c,
    presents:fd.filter(d=>d.commune===c).reduce((s,d)=>s+(parseInt(d.presents)||0),0),
    ateliers:fd.filter(d=>d.commune===c).length
  })).sort((a,b)=>b.presents-a.presents).slice(0,8);

  // ── Sous-composants ────────────────────────────────────────
  // Couleurs dark-aware pour VuePowerBI
  const isDark=document.documentElement.getAttribute('data-theme')==='dark';
  const PBI_BG    = isDark?'#1a1d27':'#ffffff';
  const PBI_BG2   = isDark?'#252836':'#f3f4f6';
  const PBI_BORDER= isDark?'#2d3148':'#e5e7eb';
  const PBI_TEXT  = isDark?'#e2e8f0':'#111827';
  const PBI_TEXT2 = isDark?'#94a3b8':'#6b7280';
  const PBI_CONT  = isDark?'rgba(255,255,255,0.06)':'#f3f4f6';

  function KpiPBI({label,value,sub,color,icon,delay=0}){
    return CE(FadeItem,{delay},CE('div',{style:{background:PBI_BG,borderRadius:6,padding:'14px',borderLeft:`4px solid ${color}`,boxShadow:'0 1px 6px rgba(0,0,0,.15)'}},
      CE('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}},
        CE('div',null,
          CE('div',{style:{fontSize:10,color:PBI_TEXT2,fontWeight:700,textTransform:'uppercase',letterSpacing:'.06em',marginBottom:5}},label),
          CE('div',{style:{fontSize:28,fontWeight:800,color:PBI_TEXT,lineHeight:1}},value),
          sub&&CE('div',{style:{fontSize:11,color:'#94a3b8',marginTop:4}},sub)
        ),
        CE('div',{style:{width:38,height:38,borderRadius:8,background:color+'22',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20}},icon)
      )
    ));
  }

  function ChipPBI({label,active,color,onClick}){
    return CE('span',{onClick,style:{
      display:'inline-block',padding:'4px 10px',borderRadius:20,fontSize:11,fontWeight:600,
      cursor:'pointer',userSelect:'none',marginRight:4,marginBottom:4,
      background:active?color:PBI_CONT,color:active?'#fff':PBI_TEXT2,
      border:`1.5px solid ${active?color:PBI_BORDER}`,transition:'all .15s'
    }},label);
  }

  function CardPBI({title,children,style={}}){
    return CE('div',{style:{background:PBI_BG,borderRadius:6,padding:14,boxShadow:'0 1px 6px rgba(0,0,0,.15)',...style}},
      CE('div',{style:{fontSize:10,fontWeight:700,color:PBI_TEXT2,textTransform:'uppercase',letterSpacing:'.06em',marginBottom:12,paddingBottom:8,borderBottom:`1px solid ${PBI_BORDER}`}},title),
      children
    );
  }

  // ── v15.0 : Style PBI aligné sur GDIN ────────────────────
  const ecTT={backgroundColor:'#111827',borderColor:'#374151',textStyle:{color:'#f1f5f9',fontSize:11},extraCssText:'border-radius:8px;padding:10px 14px;box-shadow:none'};
  const _ecAPN={axisPointer:{type:'none'}};
  // Pas de dégradé — couleurs solides pour fiabilité mobile
  function mkGradPBI(c1,c2,dir='v'){return c1;}
  // Plus d'ombre 3D
  const _bar3D={borderRadius:[3,3,0,0]};
  function PBIChart({option,height}){
    const ref=React.useRef(null);const inst=React.useRef(null);const prevOpt=React.useRef(option);
    React.useEffect(()=>{
      if(!ref.current||!window.echarts)return;
      const isNew=!inst.current;
      if(isNew){inst.current=window.echarts.init(ref.current,(window.GDIN_THEME||{getEChartsTheme:()=>'gdin-dark'}).getEChartsTheme());const ro=new ResizeObserver(()=>{if(inst.current)inst.current.resize();});ro.observe(ref.current);inst.current._ro=ro;}
      if(!isNew&&prevOpt.current===option)return;
      prevOpt.current=option;
      const merged={...EC_ANIM,...option};
      if(isNew){requestAnimationFrame(()=>requestAnimationFrame(()=>{if(inst.current)inst.current.setOption(merged,{notMerge:true,lazyUpdate:false});}));}
      else{inst.current.setOption(merged,{notMerge:false,lazyUpdate:false});}
    });
    React.useEffect(()=>{return()=>{if(inst.current){if(inst.current._ro)inst.current._ro.disconnect();inst.current.dispose();inst.current=null;}};},[]);
    return CE('div',{ref,style:{width:'100%',height:height||180}});
  }

  // ── Pages ──────────────────────────────────────────────────
  const PAGES_PBI=[{id:'general',ico:'📊',label:'Général'},{id:'conseillers',ico:'👥',label:'Conseillers'},{id:'territoire',ico:'🗺️',label:'Territoire'}];

  return CE('div',{style:{fontFamily:"'Segoe UI',system-ui,sans-serif",minHeight:'60vh'}},

    // ── Bandeau Power BI ──
    CE('div',{style:{background:'#1e2132',borderRadius:'6px 6px 0 0',padding:'0 14px',display:'flex',alignItems:'center',gap:8,minHeight:44}},
      CE('div',{style:{width:24,height:24,background:'#f2c811',borderRadius:3,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}},
        CE('div',{style:{width:12,height:12,background:'#1e2132',borderRadius:2}})
      ),
      CE('div',{style:{flex:1,minWidth:0}},
        CE('span',{style:{fontSize:12,fontWeight:700,color:'#f2c811'}},'Power BI '),
        CE('span',{style:{fontSize:11,color:'#94a3b8'}}),'· Ateliers Inclusion Numérique'
      ),
      hasF&&CE('button',{
        onClick:()=>{setFCons([]);setFStat([]);setFMois([]);},
        style:{padding:'3px 10px',borderRadius:4,border:'none',background:'#ef4444',color:'#fff',fontSize:10,fontWeight:700,cursor:'pointer'}
      },'✕ Filtres'),
      CE('button',{
        onClick:()=>setShowF(s=>!s),
        style:{padding:'4px 10px',borderRadius:4,border:`1px solid ${showF?'#f2c811':'#374151'}`,background:showF?'#2d3250':'transparent',color:showF?'#f2c811':'#9ca3af',cursor:'pointer',fontSize:11,fontWeight:showF?700:400}
      },'⚙️ '+fd.length)
    ),

    // ── Onglets pages ──
    CE('div',{style:{background:'#1e2132',display:'flex',borderBottom:'1px solid #374151',overflowX:'auto'}},
      PAGES_PBI.map(p=>CE('button',{key:p.id,onClick:()=>setPage(p.id),style:{
        padding:'8px 16px',border:'none',background:'transparent',cursor:'pointer',
        fontSize:12,fontWeight:page===p.id?700:400,whiteSpace:'nowrap',fontFamily:'inherit',
        color:page===p.id?'#f2c811':'#9ca3af',
        borderBottom:page===p.id?'2px solid #f2c811':'2px solid transparent',transition:'all .15s'
      }},p.ico+' '+p.label))
    ),

    // ── Filtres ──
    showF&&CE('div',{style:{background:PBI_BG,border:`1px solid ${PBI_BORDER}`,borderTop:'none',padding:'12px 14px'}},
      CE('div',{style:{display:'flex',gap:16,flexWrap:'wrap'}},
        CE('div',null,
          CE('div',{style:{fontSize:10,fontWeight:700,color:'#6b7280',textTransform:'uppercase',letterSpacing:'.06em',marginBottom:6}}),'Mois',
          CE('div',null,MOIS_PBI.map((m,i)=>CE(ChipPBI,{key:m,label:m,active:fMois.includes(i+1),color:'#1e40af',onClick:()=>togF(fMois,setFMois,i+1)})))
        ),
        CE('div',null,
          CE('div',{style:{fontSize:10,fontWeight:700,color:'#6b7280',textTransform:'uppercase',letterSpacing:'.06em',marginBottom:6}}),'Conseiller·ère',
          CE('div',null,CONS.map(c=>CE(ChipPBI,{key:c,label:c.split(' ')[0],active:fCons.includes(c),color:cColor(c),onClick:()=>togF(fCons,setFCons,c)})))
        ),
        CE('div',null,
          CE('div',{style:{fontSize:10,fontWeight:700,color:'#6b7280',textTransform:'uppercase',letterSpacing:'.06em',marginBottom:6}}),'Statut',
          CE('div',null,STATUTS_PBI.map(s=>CE(ChipPBI,{key:s,label:s,active:fStat.includes(s),color:S_COL_PBI[s],onClick:()=>togF(fStat,setFStat,s)})))
        )
      )
    ),

    // ── Contenu ──
    CE('div',{style:{padding:14,background:isDark?'#0f1117':PBI_BG2,borderRadius:'0 0 6px 6px'}},

      // PAGE GÉNÉRAL
      page==='general'&&CE(React.Fragment,null,
        CE('div',{style:{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:10,marginBottom:12}},
          CE(KpiPBI,{label:'Ateliers',value:total,sub:real+' réalisés',color:'#2563EB',icon:'🖥️',delay:0}),
          CE(KpiPBI,{label:'Réalisation',value:tReal+'%',sub:'Objectif 80%',color:'var(--green)',icon:'✅',delay:0.08}),
          CE(KpiPBI,{label:'Participants',value:totPre,sub:totIns+' inscrits',color:'#7C3AED',icon:'👥',delay:0.16}),
          CE(KpiPBI,{label:'Présence',value:tPres+'%',sub:'Sur réalisés',color:'#d97706',icon:'📊',delay:0.24})
        ),

        CE(CardPBI,{title:'Ateliers par mois',style:{marginBottom:12}},
          CE(PBIChart,{height:180,option:{backgroundColor:'transparent',
            grid:{top:8,right:4,bottom:36,left:0,containLabel:true},
            tooltip:{trigger:'axis',..._ecAPN,...ecTT},
            legend:{data:['Réalisés','Planifiés','Annulés'],textStyle:{color:getEcT().LEGEND.color,fontSize:9},bottom:0,icon:'roundRect',itemWidth:8,itemHeight:6},
            xAxis:{data:pMois.map(d=>d.mois),axisLine:{show:false},axisTick:{show:false},axisLabel:{color:'#94a3b8',fontSize:9}},
            yAxis:{splitLine:{lineStyle:{color:'#2d3250',type:'dashed'}},axisLabel:{color:'#94a3b8',fontSize:9},axisLine:{show:false},axisTick:{show:false}},
            series:[
              {name:'Réalisés',type:'bar',barMaxWidth:16,data:pMois.map(d=>d['Réalisés']),itemStyle:{color:mkGradPBI('#34d399','#16a34a'),..._bar3D,borderRadius:[3,3,0,0]}},
              {name:'Planifiés',type:'bar',barMaxWidth:16,data:pMois.map(d=>d['Planifiés']),itemStyle:{color:mkGradPBI('#60a5fa','#2563eb'),..._bar3D,borderRadius:[3,3,0,0]}},
              {name:'Annulés',type:'bar',barMaxWidth:16,data:pMois.map(d=>d['Annulés']),itemStyle:{color:mkGradPBI('#f87171','#dc2626'),..._bar3D,borderRadius:[3,3,0,0]}}
            ]}})
        ),

        CE('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:12}},
          CE(CardPBI,{title:'Statuts',style:{}},
            CE(PBIChart,{height:150,option:{backgroundColor:'transparent',
              tooltip:{trigger:'item',..._ecAPN,...ecTT},
              series:[{type:'pie',radius:['42%','65%'],center:['50%','50%'],
                itemStyle:{borderRadius:4,borderColor:'#1e2132',borderWidth:2},
                label:{show:false},
                data:pStat.map(d=>({name:d.name,value:d.value,itemStyle:{color:d.color,shadowColor:d.color+'66',shadowBlur:6}})),
                emphasis:{itemStyle:{shadowBlur:12},scaleSize:5}
              }]}}),
            CE('div',{style:{display:'flex',flexWrap:'wrap',gap:4,justifyContent:'center',marginTop:6}},
              pStat.map(s=>CE('div',{key:s.name,style:{display:'flex',alignItems:'center',gap:3,fontSize:9}},
                CE('div',{style:{width:7,height:7,borderRadius:'50%',background:s.color}}),
                s.name,': ',CE('b',null,s.value)
              ))
            )
          ),
          CE(CardPBI,{title:'Présents / mois',style:{}},
            CE(PBIChart,{height:150,option:{backgroundColor:'transparent',
              grid:{top:8,right:4,bottom:22,left:0,containLabel:true},
              tooltip:{trigger:'axis',..._ecAPN,...ecTT},
              xAxis:{data:pMoisFilt.map(d=>d.mois),axisLine:{show:false},axisTick:{show:false},axisLabel:{color:'#94a3b8',fontSize:9}},
              yAxis:{splitLine:{lineStyle:{color:'#2d3250',type:'dashed'}},axisLabel:{color:'#94a3b8',fontSize:9},axisLine:{show:false},axisTick:{show:false}},
              series:[{type:'line',data:pMoisFilt.map(d=>d['Présents']),smooth:true,symbol:'none',
                lineStyle:{width:2,color:'#22c55e'},
                areaStyle:{color:mkGradPBI('rgba(34,197,94,0.35)','rgba(34,197,94,0.02)')}}]}}))
        ),

        pTheme.length>0&&CE(CardPBI,{title:'Top thématiques',style:{marginBottom:12}},
          CE(PBIChart,{height:Math.max(180,pTheme.length*24),option:{backgroundColor:'transparent',
            grid:{top:8,right:50,bottom:8,left:8,containLabel:true},
            tooltip:{trigger:'axis',..._ecAPN,...ecTT},
            xAxis:{splitLine:{lineStyle:{color:'#2d3250',type:'dashed'}},axisLabel:{color:'#94a3b8',fontSize:9},axisLine:{show:false},axisTick:{show:false}},
            yAxis:{type:'category',data:pTheme.map(d=>d.name),axisLabel:{color:'#94a3b8',fontSize:9},axisLine:{show:false},axisTick:{show:false}},
            series:[{type:'bar',barMaxWidth:14,
              data:pTheme.map((d,i)=>({value:d.count,itemStyle:{color:mkGradPBI(`hsl(${230+i*10},70%,65%)`,`hsl(${230+i*10},70%,45%)`,'h'),borderRadius:[0,4,4,0]}})),
              label:{show:true,position:'right',color:getEcT().LEGEND.color,fontSize:9,fontWeight:'bold'}
            }]}})
        ),

        pOri.length>0&&CE(CardPBI,{title:'Organismes orienteurs'},
          CE(PBIChart,{height:160,option:{backgroundColor:'transparent',
            grid:{top:8,right:4,bottom:48,left:0,containLabel:true},
            tooltip:{trigger:'axis',..._ecAPN,...ecTT},
            xAxis:{data:pOri.map(d=>d.name),axisLine:{show:false},axisTick:{show:false},axisLabel:{color:'#94a3b8',fontSize:8,rotate:-20,interval:0}},
            yAxis:{splitLine:{lineStyle:{color:'#2d3250',type:'dashed'}},axisLabel:{color:'#94a3b8',fontSize:9},axisLine:{show:false},axisTick:{show:false}},
            series:[{type:'bar',barMaxWidth:20,data:pOri.map(d=>d.count),
              itemStyle:{color:mkGradPBI('#fdba74','#f97316'),..._bar3D,borderRadius:[3,3,0,0]},
              label:{show:true,position:'top',color:getEcT().LEGEND.color,fontSize:8}}]}}))
      ),

      // PAGE CONSEILLERS
      page==='conseillers'&&CE(React.Fragment,null,
        CE('div',{style:{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:10,marginBottom:12}},
          CONS.map(c=>{
            const r=fd.filter(d=>d.conseiller===c);
            const rl=r.filter(d=>d.statut==='Réalisé').length;
            const pct=r.length?Math.round(rl/r.length*100):0;
            const pre=r.reduce((s,d)=>s+(parseInt(d.presents)||0),0);
            const ann=r.filter(d=>d.statut==='Annulé').length;
            return CE('div',{key:c,style:{background:PBI_BG,borderRadius:6,padding:12,boxShadow:'0 1px 6px rgba(0,0,0,.15)',borderTop:`3px solid ${cColor(c)}`}},
              CE('div',{style:{fontSize:11,fontWeight:700,color:cColor(c),marginBottom:8,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}},c),
              CE('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6,marginBottom:8}},
                CE('div',null,CE('div',{style:{fontSize:20,fontWeight:800,color:PBI_TEXT}},r.length),CE('div',{style:{fontSize:9,color:PBI_TEXT2}},'Ateliers')),
                CE('div',null,CE('div',{style:{fontSize:20,fontWeight:800,color:cColor(c)}},pct+'%'),CE('div',{style:{fontSize:9,color:PBI_TEXT2}},'Réalisation')),
                CE('div',null,CE('div',{style:{fontSize:16,fontWeight:700,color:PBI_TEXT}},pre),CE('div',{style:{fontSize:9,color:PBI_TEXT2}},'Présents')),
                CE('div',null,CE('div',{style:{fontSize:16,fontWeight:700,color:'#ef4444'}},ann),CE('div',{style:{fontSize:9,color:PBI_TEXT2}},'Annulés'))
              ),
              CE('div',{style:{height:5,background:PBI_BG2,borderRadius:3}},
                CE('div',{style:{height:5,background:cColor(c),borderRadius:3,width:pct+'%',transition:'width .5s'}})
              )
            );
          })
        ),

        CE(CardPBI,{title:'Réalisés par conseiller·ère — par mois',style:{marginBottom:12}},
          CE(PBIChart,{height:200,option:{backgroundColor:'transparent',
            grid:{top:8,right:4,bottom:44,left:0,containLabel:true},
            tooltip:{trigger:'axis',..._ecAPN,...ecTT},
            legend:{data:CONS.map(c=>c.split(' ')[0]),textStyle:{color:getEcT().LEGEND.color,fontSize:9},bottom:0,icon:'roundRect',itemWidth:8,itemHeight:6},
            xAxis:{data:pConsMois.map(d=>d.mois),axisLine:{show:false},axisTick:{show:false},axisLabel:{color:'#94a3b8',fontSize:9}},
            yAxis:{splitLine:{lineStyle:{color:'#2d3250',type:'dashed'}},axisLabel:{color:'#94a3b8',fontSize:9},axisLine:{show:false},axisTick:{show:false}},
            series:CONS.map((c,ci)=>({name:c.split(' ')[0],type:'bar',stackId:'a',barMaxWidth:30,data:pConsMois.map(d=>d[c]||0),itemStyle:{color:cColor(c),..._bar3D,borderRadius:ci===CONS.length-1?[3,3,0,0]:[0,0,0,0]}}))}}),

        CE(CardPBI,{title:'Tableau récapitulatif'},
          CE('div',{style:{overflowX:'auto'}},
            CE('table',{style:{width:'100%',borderCollapse:'collapse',fontSize:11}},
              CE('thead',null,CE('tr',{style:{background:PBI_BG2}},
                ['','Total','Réal.','Ann.','Présents','Taux'].map(h=>CE('th',{key:h,style:{padding:'7px 8px',textAlign:'left',fontWeight:700,color:'#6b7280',borderBottom:'2px solid #e5e7eb',fontSize:10,whiteSpace:'nowrap'}},h))
              )),
              CE('tbody',null,CONS.map((c,i)=>{
                const r=fd.filter(d=>d.conseiller===c);
                const rl=r.filter(d=>d.statut==='Réalisé').length;
                const pct=r.length?Math.round(rl/r.length*100):0;
                const pre=r.reduce((s,d)=>s+(parseInt(d.presents)||0),0);
                const ann=r.filter(d=>d.statut==='Annulé').length;
                return CE('tr',{key:c,style:{background:i%2?PBI_BG2:PBI_BG}},
                  CE('td',{style:{padding:'6px 8px'}},CE('div',{style:{display:'flex',alignItems:'center',gap:5}},
                    CE('div',{style:{width:8,height:8,borderRadius:2,background:cColor(c),flexShrink:0}}),
                    CE('span',{style:{fontWeight:600,fontSize:10}},c.split(' ')[0])
                  )),
                  CE('td',{style:{padding:'6px 8px',fontWeight:700}},r.length),
                  CE('td',{style:{padding:'6px 8px',color:'var(--green)',fontWeight:600}},rl),
                  CE('td',{style:{padding:'6px 8px',color:'#dc2626',fontWeight:600}},ann),
                  CE('td',{style:{padding:'6px 8px'}},pre),
                  CE('td',{style:{padding:'6px 8px'}},CE('div',{style:{display:'flex',alignItems:'center',gap:5}},
                    CE('div',{style:{height:5,width:40,background:PBI_BG2,borderRadius:3}},
                      CE('div',{style:{height:5,background:cColor(c),borderRadius:3,width:pct+'%'}})
                    ),
                    CE('span',{style:{fontSize:10,fontWeight:700,color:cColor(c)}},pct+'%')
                  ))
                );
              }))
            )
          )
        )
      ),
      ),

      // PAGE TERRITOIRE
      page==='territoire'&&CE(React.Fragment,null,
        pComm.length>0&&CE(CardPBI,{title:'Présents par commune',style:{marginBottom:12}},
          CE(PBIChart,{height:220,option:{backgroundColor:'transparent',
            grid:{top:8,right:50,bottom:8,left:8,containLabel:true},
            tooltip:{trigger:'axis',..._ecAPN,...ecTT},
            xAxis:{splitLine:{lineStyle:{color:'#2d3250',type:'dashed'}},axisLabel:{color:'#94a3b8',fontSize:9},axisLine:{show:false},axisTick:{show:false}},
            yAxis:{type:'category',data:pComm.map(d=>d.name),axisLabel:{color:'#94a3b8',fontSize:9},axisLine:{show:false},axisTick:{show:false}},
            series:[{type:'bar',barMaxWidth:18,
              data:pComm.map((d,i)=>({value:d.presents,itemStyle:{color:mkGradPBI(`hsl(${210+i*12},70%,60%)`,`hsl(${210+i*12},70%,40%)`,'h'),borderRadius:[0,4,4,0]}})),
              label:{show:true,position:'right',color:getEcT().LEGEND.color,fontSize:9,fontWeight:'bold'}
            }]}})
        ),

        pComm.length>0&&CE(CardPBI,{title:'Ateliers par commune',style:{marginBottom:12}},
          CE(PBIChart,{height:180,option:{backgroundColor:'transparent',
            grid:{top:8,right:4,bottom:48,left:0,containLabel:true},
            tooltip:{trigger:'axis',..._ecAPN,...ecTT},
            xAxis:{data:pComm.map(d=>d.name),axisLine:{show:false},axisTick:{show:false},axisLabel:{color:'#94a3b8',fontSize:8,rotate:-20,interval:0}},
            yAxis:{splitLine:{lineStyle:{color:'#2d3250',type:'dashed'}},axisLabel:{color:'#94a3b8',fontSize:9},axisLine:{show:false},axisTick:{show:false}},
            series:[{type:'bar',barMaxWidth:22,data:pComm.map(d=>d.ateliers),
              itemStyle:{color:mkGradPBI('#c084fc','#7c3aed'),..._bar3D,borderRadius:[3,3,0,0]},
              label:{show:true,position:'top',color:getEcT().LEGEND.color,fontSize:8}}]}})        
        ),

        CE(CardPBI,{title:'Détail communes'},
          CE(TableCommunes,{fd})
        )
      ),

      CE('div',{style:{textAlign:'right',fontSize:10,color:'#94a3b8',marginTop:8}},
        fd.length+'/'+entries.length+' ateliers affichés · CD47 Inclusion Numérique'
      )
    )
  );
}
