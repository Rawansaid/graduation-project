
const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');

menuButton.addEventListener('click', () => {
  sidebar.classList.toggle('active'); // Toggle the 'active' class to show or hide the sidebar
});