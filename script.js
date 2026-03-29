document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('themeToggle');

  function updateButtonLabel() {
    const isLight = document.body.classList.contains('light-mode');
    themeToggle.textContent = isLight ? 'Ativar modo escuro' : 'Ativar modo claro';
  }

  function toggleTheme() {
    document.body.classList.toggle('light-mode');
    updateButtonLabel();
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
    updateButtonLabel();
  }
});
