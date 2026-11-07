// Mark the opening before React mounts. The fallback prevents a stuck opening.
try {
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) document.documentElement.classList.add('intro-pending');
} catch (_) {}
window.setTimeout(() => document.documentElement.classList.remove('intro-pending'), 4800);
