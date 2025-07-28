/*
 * JavaScript for Shubham Shastri's personal website
 *
 * Handles theme toggling between light and dark modes. The user's
 * preference is persisted using localStorage so that their choice
 * is honoured on subsequent visits. The toggle is triggered via
 * clicking the element with the `.theme-toggle` class, which
 * contains an <i> element used for the icon. When switching
 * themes, the appropriate icon (sun for light mode, moon for
 * dark mode) is displayed.
 */

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.theme-toggle');
  const icon = toggle ? toggle.querySelector('i') : null;
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');

  // Initialise theme based on saved preference or system preference
  function initTheme() {
    let useDark = false;
    if (savedTheme) {
      useDark = savedTheme === 'dark';
    } else {
      useDark = prefersDark;
    }
    setTheme(useDark);
  }

  // Apply the theme and update icon
  function setTheme(dark) {
    if (dark) {
      document.body.classList.add('dark');
      if (icon) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      }
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      if (icon) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
      localStorage.setItem('theme', 'light');
    }
  }

  // Toggle theme when the toggle element is clicked
  if (toggle) {
    toggle.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark');
      setTheme(!isDark);
    });
  }

  initTheme();
});