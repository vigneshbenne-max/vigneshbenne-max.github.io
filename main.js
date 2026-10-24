/**
 * ==========================================================================
 * PORTFOLIO SCRIPT
 * Author: Benne Vignesh
 * Features: Responsive Navigation, Scrollspy, Dynamic Year, Clipboard Helper
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Footer Year
  initCurrentYear();

  // 2. Responsive Mobile Navigation
  initMobileNav();

  // 3. Scrollspy for Active Navigation Links
  initScrollspy();

  // 4. One-Click Email Copy Utility
  initCopyEmail();

  // 5. Back to Top Smooth Scroll
  initBackToTop();
});

/**
 * Automatically keeps the copyright year current
 */
function initCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Handles mobile hamburger toggle and accessible drawer interactions
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('nav-toggle-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileMenu) return;

  const toggleMenu = (isOpen) => {
    const shouldOpen = typeof isOpen === 'boolean' ? isOpen : !mobileMenu.classList.contains('open');
    
    if (shouldOpen) {
      mobileMenu.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      // Toggle to close icon
      toggleBtn.innerHTML = `
        <svg class="nav-toggle-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      `;
    } else {
      mobileMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      // Toggle to hamburger icon
      toggleBtn.innerHTML = `
        <svg class="nav-toggle-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      `;
    }
  };

  toggleBtn.addEventListener('click', () => toggleMenu());

  // Close menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close menu when clicking backdrop
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      toggleMenu(false);
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });
}

/**
 * Highlights active navigation item as the user scrolls
 */
function initScrollspy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-desktop .nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!sections.length) return;

  const updateActiveLink = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const headerHeight = 90;

    let currentSectionId = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight;
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    // Default to first section (hero) if near the top
    if (scrollY < 120 && sections[0]) {
      currentSectionId = sections[0].getAttribute('id');
    }

    const setLinkState = (links) => {
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    setLinkState(desktopLinks);
    setLinkState(mobileLinks);
  };

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
}

/**
 * Copies the portfolio owner's email to clipboard with instant feedback
 */
function initCopyEmail() {
  const copyBtns = document.querySelectorAll('.btn-copy-email');
  const toast = document.getElementById('toast-notice');
  const emailToCopy = 'vigneshbenne@gmail.com';
  let toastTimeout = null;

  if (!copyBtns.length) return;

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  };

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(emailToCopy);
        } else {
          // Fallback for older browsers/contexts
          const textarea = document.createElement('textarea');
          textarea.value = emailToCopy;
          textarea.style.position = 'fixed';
          textarea.style.left = '-9999px';
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }
        showToast('Email address copied to clipboard!');
      } catch (err) {
        showToast('Direct email: ' + emailToCopy);
      }
    });
  });
}

/**
 * Smooth scroll back to top
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
