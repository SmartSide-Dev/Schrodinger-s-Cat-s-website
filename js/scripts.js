function handleScroll() {
    const elements = document.querySelectorAll('.fade-in'); 
  
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect(); 
      const isVisible = rect.top <= window.innerHeight - 100 && rect.bottom >= 0;
  
      if (isVisible) {
        el.classList.add('visible'); 
      } else {
        el.classList.remove('visible'); 
      }
    });
  }
  
  
  window.addEventListener('scroll', handleScroll);
  
 
  document.addEventListener('DOMContentLoaded', handleScroll);
  