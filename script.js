// ─── MENU MOBILE ─────────────────────────────────────────────
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
}

// Fermer le menu si on clique en dehors
document.addEventListener('click', function(e) {
  const nav = document.querySelector('nav');
  if (!nav.contains(e.target)) closeMenu();
});
