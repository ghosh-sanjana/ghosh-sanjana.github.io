// Abstract Toggle Functionality
function toggleAbstract(abstractId) {
    const abstractContent = document.getElementById(abstractId);
    const button = document.querySelector(`button[onclick="toggleAbstract('${abstractId}')"]`);
    const icon = button.querySelector('i');
    
    if (abstractContent.classList.contains('show')) {
      // Hide abstract
      abstractContent.classList.remove('show');
      button.classList.remove('expanded');
      icon.className = 'fas fa-plus';
      button.innerHTML = '<i class="fas fa-plus"></i> Abstract';
    } else {
      // Show abstract
      abstractContent.classList.add('show');
      button.classList.add('expanded');
      icon.className = 'fas fa-minus';
      button.innerHTML = '<i class="fas fa-minus"></i> Abstract';
    }
  }
  
  // Active Navigation Highlighting
  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        currentSection = section.id;
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }
  
  // Smooth Scrolling for Navigation Links
  function initializeSmoothScrolling() {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            const offsetTop = target.offsetTop - 100;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }
  
  // Initialize all functionality when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Set initial active navigation
    updateActiveNav();
  });
  
  // Update active navigation on scroll
  window.addEventListener('scroll', updateActiveNav);
  
  // Update active navigation when page loads
  window.addEventListener('load', updateActiveNav);