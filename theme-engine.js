// ═══════════════════════════════════════════════════════
// theme-engine.js — GDIN Ateliers CD47
// Gestion des 6 thèmes : persistance, écran de choix,
// swap data-theme, bouton topbar.
// Doit être chargé AVANT shared.js et app.js.
// ═══════════════════════════════════════════════════════

(function(){
  'use strict';

  // ── Définition des thèmes ───────────────────────────
  window.GDIN_THEMES = [
    {
      id: 'teal',
      name: 'Cyber Teal',
      badge: 'Néon',
      desc: 'Teal électrique — ton cyan ECharts en couleur système.',
      neon: '#00d4c8',
      neonBtn: '#000',
      sidebar: 'linear-gradient(180deg,#0d1e22,#0a1820)',
      dark: true,
    },
    {
      id: 'violet',
      name: 'Plasma Violet',
      badge: 'Néon',
      desc: 'Violet plasma + magenta. Fort contraste sur fond sombre.',
      neon: '#a78bfa',
      neonBtn: '#000',
      sidebar: 'linear-gradient(180deg,#130e20,#0f0b1c)',
      dark: true,
    },
    {
      id: 'green',
      name: 'Matrix Green',
      badge: 'Terminal',
      desc: 'Vert acide sur fond charbon. Esthétique ops center.',
      neon: '#22c55e',
      neonBtn: '#000',
      sidebar: 'linear-gradient(180deg,#0c1a0e,#091509)',
      dark: true,
    },
    {
      id: 'orange',
      name: 'Solar Orange',
      badge: 'Warm',
      desc: 'Orange solaire. Seul thème néon avec chaleur humaine.',
      neon: '#f97316',
      neonBtn: '#000',
      sidebar: 'linear-gradient(180deg,#1a100a,#140d08)',
      dark: true,
    },
    {
      id: 'blue',
      name: 'Ice Blue',
      badge: 'Pro',
      desc: 'Bleu glacial. Le plus institutionnel des thèmes néon.',
      neon: '#60a5fa',
      neonBtn: '#000',
      sidebar: 'linear-gradient(180deg,#0c1220,#0a0f1c)',
      dark: true,
    },
    {
      id: 'neutral',
      name: 'Neutre Jour',
      badge: 'Classique',
      desc: 'Fond blanc, bleu marine CD47. Pour les collègues qui préfèrent le mode clair.',
      neon: '#1e3a8a',
      neonBtn: '#fff',
      sidebar: 'linear-gradient(180deg,#1e3a8a,#172d72)',
      dark: false,
    },
  ];

  var STORAGE_KEY = 'gdin_theme';
  var FIRST_LAUNCH_KEY = 'gdin_theme_chosen';

  // ── Appliquer un thème ──────────────────────────────
  window.applyTheme = function(id) {
    var t = GDIN_THEMES.find(function(x){ return x.id === id; });
    if (!t) t = GDIN_THEMES[0];
    document.documentElement.setAttribute('data-theme', t.id);
    localStorage.setItem(STORAGE_KEY, t.id);
    // Mettre à jour la CSS var --accent pour VueDashboardTabs et autres
    document.documentElement.style.setProperty('--accent', t.neon);
    window.CURRENT_THEME = t;
  };

  // ── Lire le thème sauvegardé ─────────────────────────
  window.getSavedTheme = function() {
    return localStorage.getItem(STORAGE_KEY) || null;
  };

  // ── Premier lancement ? ─────────────────────────────
  window.isFirstThemeLaunch = function() {
    return !localStorage.getItem(FIRST_LAUNCH_KEY);
  };

  window.markThemeChosen = function() {
    localStorage.setItem(FIRST_LAUNCH_KEY, '1');
  };

  // ── Appliquer immédiatement (évite le flash) ────────
  var saved = window.getSavedTheme();
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
    var t = GDIN_THEMES.find(function(x){ return x.id === saved; });
    if (t) {
      document.documentElement.style.setProperty('--accent', t.neon);
      window.CURRENT_THEME = t;
    }
  } else {
    // Défaut teal avant que l'utilisateur choisisse
    document.documentElement.setAttribute('data-theme', 'teal');
    document.documentElement.style.setProperty('--accent', '#00d4c8');
    window.CURRENT_THEME = GDIN_THEMES[0];
  }

})();
