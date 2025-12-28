// hamburger menu toggle
const menuIcon = document.getElementById('menu-toggle-icon'); // Target the single image
const navMenu = document.querySelector('.header-links');
const overlay = document.querySelector('.overlay'); 

// Define the file paths
const OPEN_ICON_SRC = './images/icon-menu.svg';
const CLOSE_ICON_SRC = './images/icon-close-menu.svg';

function toggleMenu() {
  // Toggle the 'is-open' class on the menu and overlay
  navMenu.classList.toggle('is-open');
  overlay.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll'); 

  // Check the current state and swap the image
  if (navMenu.classList.contains('is-open')) {
    // Menu is OPEN -> Switch to the CLOSE icon
    menuIcon.src = CLOSE_ICON_SRC;
    menuIcon.alt = 'Close menu';
  } else {
    // Menu is CLOSED -> Switch back to the OPEN icon
    menuIcon.src = OPEN_ICON_SRC;
    menuIcon.alt = 'Open menu';
  }
}

// Attach the click event to the single icon element
menuIcon.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);



// To toggle the dropdown arrows in the menu
document.addEventListener('DOMContentLoaded', () => {
  // Get ALL elements with the class 'down-arrow'
  const toggles = document.querySelectorAll('.down-arrow');
  
  // Define the file paths for the icon swap
  const UP_ARROW_SRC = './images/icon-arrow-up.svg';
  const DOWN_ARROW_SRC = './images/icon-arrow-down.svg';

  toggles.forEach(toggleElement => {
    
    // The clickable area is the parent <p> element
    const parentToggle = toggleElement.parentElement; 
    
    const dropdownContainer = parentToggle.closest('div'); 
    const dropdown = dropdownContainer.querySelector('.link-dropdown');
    
    // Set initial ARIA state for accessibility (assuming collapsed by default)
    parentToggle.setAttribute('aria-expanded', 'false');
    
    dropdown.classList.add('collapsed');

    parentToggle.addEventListener('click', (event) => {
      // Prevent default action if the <p> were wrapped in an <a> tag
      event.preventDefault(); 
      
      // Toggle the dropdown visibility class
      dropdown.classList.toggle('collapsed');

      // Determine the new state
      const isExpanded = !dropdown.classList.contains('collapsed');
      
      // Swap the image source and update ARIA attribute
      if (isExpanded) {
        // Menu is OPEN -> Switch to UP icon
        toggleElement.src = UP_ARROW_SRC;
        toggleElement.alt = 'Collapse menu';
        parentToggle.setAttribute('aria-expanded', 'true');
      } else {
        // Menu is CLOSED -> Switch back to DOWN icon
        toggleElement.src = DOWN_ARROW_SRC;
        toggleElement.alt = 'Expand menu';
        parentToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
});