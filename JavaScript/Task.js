// create a drop down using js dropdown should be open i enter the mouse on it

const dropdown = document.getElementById('dropdown');
    const content = document.getElementById('dropdown-content');

    dropdown.addEventListener('mouseenter', () => {
      content.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
      content.style.display = 'none';
    });

//create a modal using js
    const openBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('myModal');
    const closeBtn = document.getElementById('closeModalBtn');

    // Open modal
    openBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });

    // Close modal on close button
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

//create a dark and light thame card ui.
const toggleBtn = document.getElementById('toggleTheme');
    const body = document.body;

    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark');
    });
