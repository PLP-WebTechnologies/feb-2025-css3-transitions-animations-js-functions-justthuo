// Check for saved theme preference in localStorage
window.onload = () => {
  const prefersDark = localStorage.getItem('darkMode') === 'true';
  if (prefersDark) {
    document.body.classList.add('dark-mode');
  }
};

// Toggle dark mode theme and save the preference in localStorage
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
}

// Animate flight card on click
function animateCard(card) {
  card.classList.add('animated');
  setTimeout(() => card.classList.remove('animated'), 1000); // Remove animation class after 1 second
}

