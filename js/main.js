/* ============================================================
   INGRESO GC – DM FORMA  |  main.js
   Funciones compartidas en todas las páginas
   ============================================================ */

/* ── Hamburger menu ── */
function initNav() {
  const ham  = document.getElementById('hamburger');
  const menu = document.getElementById('nav-menu');
  if (!ham || !menu) return;
  ham.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    ham.setAttribute('aria-expanded', String(open));
  });
  // Cerrar al hacer clic en un enlace
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('open'));
  });
}

/* ── Scroll animations ── */
function initFadeUp() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.10 });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

/* ── Auth helpers (localStorage demo) ── */
const Auth = {
  login(usuario, pass) {
    // DEMO: cualquier usuario + pass no vacíos
    if (!usuario || !pass) return false;
    // Profesor si contiene "profesor" o "admin"
    const rol = (usuario.includes('profesor') || usuario.includes('admin')) ? 'profesor' : 'alumno';
    localStorage.setItem('gc_logged', '1');
    localStorage.setItem('gc_rol', rol);
    localStorage.setItem('gc_usuario', usuario);
    return rol;
  },
  logout() {
    localStorage.removeItem('gc_logged');
    localStorage.removeItem('gc_rol');
    localStorage.removeItem('gc_usuario');
    window.location.href = 'index.html';
  },
  isLogged()  { return localStorage.getItem('gc_logged') === '1'; },
  getRol()    { return localStorage.getItem('gc_rol') || 'alumno'; },
  getNombre() { return localStorage.getItem('gc_usuario') || 'Alumno'; },
  requireAuth(redirectIfNot = 'login.html') {
    if (!this.isLogged()) window.location.href = redirectIfNot;
  }
};

/* ── Tema completado (localStorage) ── */
const Progreso = {
  _key: 'gc_temas_completados',
  get()       { return JSON.parse(localStorage.getItem(this._key) || '[]'); },
  toggle(id)  {
    let arr = this.get();
    arr.includes(id) ? arr = arr.filter(x => x !== id) : arr.push(id);
    localStorage.setItem(this._key, JSON.stringify(arr));
    return arr.includes(id);
  },
  done(id)    { return this.get().includes(id); },
  pct(total)  { return Math.round((this.get().length / total) * 100); }
};

/* ── Init en DOMContentLoaded ── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFadeUp();
});
