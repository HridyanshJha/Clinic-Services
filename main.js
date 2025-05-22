const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener(eventType, callback);
    }
  }
  
  
  
  /**
   * PRELOADER
   * 
   * preloader will be visible until document load
   */
  
  const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

  
  
  
  /**
   * MOBILE NAVBAR
   * 
   * show the mobile navbar when click menu button
   * and hidden after click menu close button or overlay
   */
  
  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");
  
  const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  }
  
  addEventOnElements(navTogglers, "click", toggleNav);
  
  
  
  /**
   * HEADER & BACK TOP BTN
   * 
   * active header & back top btn when window scroll down to 100px
   */
  
  const header = document.querySelector("[data-header]");
  const backTopBtn = document.querySelector("[data-back-top-btn]");
  let lastScroll = 0;
  
  const activeElementOnScroll = function () {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      header.classList.remove("active", "scrolled");
      return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
      // Scrolling down
      header.classList.remove("scroll-up");
      header.classList.add("scroll-down");
    } else if (currentScroll < lastScroll && header.classList.contains("scroll-down")) {
      // Scrolling up
      header.classList.remove("scroll-down");
      header.classList.add("scroll-up");
    }
    
    if (currentScroll > 100) {
      header.classList.add("active", "scrolled");
      backTopBtn.classList.add("active");
    } else {
      header.classList.remove("active", "scrolled");
      backTopBtn.classList.remove("active");
    }
    
    lastScroll = currentScroll;
  }
  
  window.addEventListener("scroll", activeElementOnScroll);
  
  
  
  /**
   * SCROLL REVEAL
   */
  
  const revealElements = document.querySelectorAll("[data-reveal]");
  
  const revealElementOnScroll = function () {
    for (let i = 0, len = revealElements.length; i < len; i++) {
      if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
        revealElements[i].classList.add("revealed");
      } else {
        revealElements[i].classList.remove("revealed");
      }
    }
  }
  
  window.addEventListener("scroll", revealElementOnScroll);
  
  window.addEventListener("load", revealElementOnScroll);

  // Enhanced scroll animations
  const scrollElements = document.querySelectorAll('[data-reveal]');

  const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= 
      ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add('revealed');
    element.style.animation = 'fadeIn 0.8s ease-out forwards';
  };

  const hideScrollElement = (element) => {
    element.classList.remove('revealed');
    element.style.animation = '';
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add hover effect to service cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.02)';
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = 'var(--shadow-1)';
    });
  });

  // Add animation to doctor cards
  const doctorCards = document.querySelectorAll('.doctor-card');
  doctorCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.02)';
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = 'var(--shadow-1)';
    });
  });

  // Initialize scroll animations
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });

  // Initial check for elements in view
  handleScrollAnimation();