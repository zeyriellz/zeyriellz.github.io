/**
 * Nety Sulistyorini Portfolio - Core Interactive & Visual FX Script
 * Vanilla JavaScript (ES6+) with GSAP & ScrollTrigger Animation Engine
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Dynamic Year in Footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Interactive Cursor Glow Follower
  const cursorGlow = document.getElementById('cursor-glow');
  if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animateCursor = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      cursorGlow.style.left = `${currentX}px`;
      cursorGlow.style.top = `${currentY}px`;
      requestAnimationFrame(animateCursor);
    };
    requestAnimationFrame(animateCursor);
  }

  // 3. Interactive Card Spotlight Lighting (Vercel / Apple UI Effect)
  const glassCards = document.querySelectorAll('.glass-card');
  glassCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 4. Mobile Menu Navigation Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconBars = document.getElementById('menu-icon-bars');
  const menuIconClose = document.getElementById('menu-icon-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    const toggleMenu = () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuIconBars.classList.add('hidden');
        menuIconClose.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        menuIconBars.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
      }
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIconBars.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
      });
    });
  }

  // 5. Navbar Scroll State & Real-time Reading Progress Bar
  const navbar = document.getElementById('navbar');
  const scrollProgressBar = document.getElementById('scroll-progress-bar');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Toggle high-tech frosted navbar state
    if (navbar) {
      if (scrollY > 25) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Show/hide floating back to top button
    const floatingBtn = document.getElementById('floating-back-to-top');
    if (floatingBtn) {
      if (scrollY > 500) {
        floatingBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
        floatingBtn.classList.add('opacity-100', 'translate-y-0');
      } else {
        floatingBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
        floatingBtn.classList.remove('opacity-100', 'translate-y-0');
      }
    }

    // Live reading progress indicator calculation
    if (scrollProgressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = (scrollY / docHeight) * 100;
        scrollProgressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      }
    }
  }, { passive: true });

  // 6. Active Navigation Link Highlighting on Scroll (Intersection Observer)
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => observer.observe(section));

  // 7. Back to Top Buttons (Footer + Floating)
  const backToTopBtns = document.querySelectorAll('#back-to-top, #floating-back-to-top');
  backToTopBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });

  // 8. Project Filter Tabs
  const filterButtons = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active styling
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.classList.add('text-slate-400');
      });
      btn.classList.add('active');
      btn.classList.remove('text-slate-400');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transition = 'opacity 0.3s ease';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });

      // Refresh ScrollTrigger positions after layout adjustment
      if (typeof ScrollTrigger !== 'undefined') {
        setTimeout(() => ScrollTrigger.refresh(), 200);
      }
    });
  });

  // 9. Toast Notification Handler
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimeout;

  const showToast = (message = 'Copied to clipboard!') => {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-20', 'opacity-0');
    }, 3200);
  };

  // 10. Copy Email to Clipboard Handlers
  const copyButtons = [
    document.getElementById('copy-email-hero-btn'),
    document.getElementById('copy-email-contact-btn'),
    document.getElementById('footer-copy-email-btn')
  ];

  copyButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const email = btn.getAttribute('data-email') || 'netysulistyorini.edu@gmail.com';
        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(email);
          } else {
            const textArea = document.createElement('textarea');
            textArea.value = email;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            textArea.remove();
          }
          showToast(`Email copied: ${email}`);
        } catch (err) {
          showToast(`Email: ${email}`);
        }
      });
    }
  });

  // 10b. Real-Time Local Clock in Footer (Malang, Indonesia / WIB GMT+7)
  const localTimeEl = document.getElementById('footer-local-time');
  if (localTimeEl) {
    const updateLocalTime = () => {
      try {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });
        localTimeEl.textContent = `${timeStr} WIB • Malang, ID`;
      } catch (e) {
        localTimeEl.textContent = 'Malang, Indonesia (WIB)';
      }
    };
    updateLocalTime();
    setInterval(updateLocalTime, 1000);
  }

  // 11. Interactive Contact Form with Strict Anti-Spam & Math Security Verification
  const contactForm = document.getElementById('contact-form');
  const cardBox = document.getElementById('contact-card-box');
  const successBox = document.getElementById('contact-success-box');
  const resetBtn = document.getElementById('reset-contact-form-btn');
  const captchaQuestion = document.getElementById('captcha-question');
  const msgTextarea = document.getElementById('contact-message');
  const msgCounter = document.getElementById('msg-counter');

  let captchaResult = 0;

  // Generate random math challenge (e.g. 7 + 4 = 11)
  const generateCaptcha = () => {
    if (!captchaQuestion) return;
    const n1 = Math.floor(Math.random() * 9) + 2; // 2 - 10
    const n2 = Math.floor(Math.random() * 8) + 1; // 1 - 8
    captchaResult = n1 + n2;
    captchaQuestion.textContent = `${n1} + ${n2}`;
  };
  generateCaptcha();

  // Character counter for message
  if (msgTextarea && msgCounter) {
    msgTextarea.addEventListener('input', () => {
      const len = msgTextarea.value.trim().length;
      msgCounter.textContent = `${len} / 25 characters`;
      if (len >= 25) {
        msgCounter.classList.remove('text-slate-400', 'text-rose-400');
        msgCounter.classList.add('text-emerald-400');
      } else {
        msgCounter.classList.remove('text-emerald-400');
        msgCounter.classList.add('text-slate-400');
      }
    });
  }

  // Anti-Gibberish / Spam Detection Helper Functions
  const isGibberish = (str) => {
    // Check for 4 or more identical consecutive characters (e.g. "aaaaa", "zzzzz")
    if (/(.)\1{3,}/i.test(str)) return true;
    
    // Check for keyboard row mash (e.g. "asdfgh", "qwertyui", "zxcvbn")
    const mashPatterns = [/asdfgh/i, /qwerty/i, /zxcvbn/i, /hjkl/i, /12345/i];
    if (mashPatterns.some(p => p.test(str))) return true;

    return false;
  };

  const validateEmailFormat = (email) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    if (!emailRegex.test(email)) return false;
    
    // Reject dummy/test domains
    const blacklistedDomains = ['test.com', 'example.com', 'fake.com', 'asdf.com', 'temp.com'];
    const domain = email.split('@')[1].toLowerCase();
    if (blacklistedDomains.includes(domain)) return false;

    return true;
  };

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Check honeypot (bot rejection)
      const honey = document.getElementById('contact-honeypot');
      if (honey && honey.value.trim() !== '') {
        console.warn('Bot submission blocked via honeypot.');
        return;
      }

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const subjectInput = document.getElementById('contact-subject');
      const messageInput = document.getElementById('contact-message');
      const captchaInput = document.getElementById('contact-captcha');

      const errName = document.getElementById('err-name');
      const errEmail = document.getElementById('err-email');
      const errSubject = document.getElementById('err-subject');
      const errMessage = document.getElementById('err-message');
      const errCaptcha = document.getElementById('err-captcha');

      // Reset all errors
      const clearError = (input, errEl) => {
        if (input) input.classList.remove('input-invalid');
        if (errEl) errEl.classList.add('hidden');
      };
      const setError = (input, errEl, msg) => {
        if (input) input.classList.add('input-invalid');
        if (errEl) {
          if (msg) errEl.querySelector('span').textContent = msg;
          errEl.classList.remove('hidden');
        }
      };

      clearError(nameInput, errName);
      clearError(emailInput, errEmail);
      clearError(subjectInput, errSubject);
      clearError(messageInput, errMessage);
      clearError(captchaInput, errCaptcha);

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim();
      const message = messageInput.value.trim();
      const userCaptcha = parseInt(captchaInput.value.trim(), 10);

      let isValid = true;
      let firstInvalidInput = null;

      // 1. Validate Name
      if (name.length < 3) {
        setError(nameInput, errName, 'Name is too short (minimum 3 letters).');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = nameInput;
      } else if (!/^[a-zA-Z\s.,'-]+$/.test(name)) {
        setError(nameInput, errName, 'Name can only contain genuine letters and spaces.');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = nameInput;
      } else if (isGibberish(name)) {
        setError(nameInput, errName, 'Name appears random or invalid. Please enter a genuine name.');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = nameInput;
      }

      // 2. Validate Email
      if (!validateEmailFormat(email)) {
        setError(emailInput, errEmail, 'Please enter a valid email format (e.g. name@company.com).');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = emailInput;
      }

      // 3. Validate Subject
      if (subject.length < 6) {
        setError(subjectInput, errSubject, 'Subject is too short (minimum 6 characters).');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = subjectInput;
      } else if (isGibberish(subject)) {
        setError(subjectInput, errSubject, 'Subject appears random. Please provide a clear inquiry topic.');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = subjectInput;
      }

      // 4. Validate Message
      const words = message.split(/\s+/).filter(w => w.length > 0);
      if (message.length < 25) {
        setError(errMessage ? messageInput : null, errMessage, 'Message is too short (minimum 25 characters).');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = messageInput;
      } else if (words.length < 3) {
        setError(errMessage ? messageInput : null, errMessage, 'Message must contain a complete sentence (minimum 3 words).');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = messageInput;
      } else if (isGibberish(message)) {
        setError(errMessage ? messageInput : null, errMessage, 'Message appears to contain random or repetitive characters.');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = messageInput;
      }

      // 5. Validate Math Captcha (Anti-Iseng / Anti-Bot)
      if (isNaN(userCaptcha) || userCaptcha !== captchaResult) {
        setError(captchaInput, errCaptcha, `Incorrect answer. The calculation result of ${captchaQuestion.textContent} is not ${captchaInput.value}.`);
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = captchaInput;
      }

      // If invalid, apply shake animation and alert user
      if (!isValid) {
        if (cardBox) {
          cardBox.classList.remove('form-shake');
          void cardBox.offsetWidth; // trigger reflow
          cardBox.classList.add('form-shake');
        }
        if (firstInvalidInput) firstInvalidInput.focus();
        showToast('Please correct the highlighted fields according to the requirements.');
        return;
      }

      // ==========================================
      // SUCCESS STATE: PREPARE AND DISPATCH EMAIL
      // ==========================================
      const fullBodyText = `Hello Nety,

${message}

---
Sender: ${name}
Contact Email: ${email}
Date: ${new Date().toLocaleDateString('en-US', { dateStyle: 'full' })}`;
      const mailSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject}`);
      const mailBody = encodeURIComponent(fullBodyText);

      // 1. Copy to clipboard automatically as a guaranteed backup
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(fullBodyText);
        }
      } catch (err) {
        console.warn('Clipboard write skipped', err);
      }

      // 2. Prepare Web Gmail URL & Mailto URL
      const webGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=netysulistyorini.edu@gmail.com&su=${mailSubject}&body=${mailBody}`;
      const mailtoUrl = `mailto:netysulistyorini.edu@gmail.com?subject=${mailSubject}&body=${mailBody}`;

      // 3. Update Success Box in DOM
      document.getElementById('success-from').textContent = `${name} (${email})`;
      document.getElementById('success-subject').textContent = subject;
      
      const successGmailLink = document.getElementById('success-gmail-link');
      if (successGmailLink) successGmailLink.setAttribute('href', webGmailUrl);

      const successMailtoLink = document.getElementById('success-mailto-link');
      if (successMailtoLink) successMailtoLink.setAttribute('href', mailtoUrl);

      // Hide Form, Show Success Box
      contactForm.classList.add('hidden');
      if (successBox) successBox.classList.remove('hidden');

      showToast('Inquiry verified! Opening email options...');

      // Attempt to launch Web Gmail in new tab automatically
      const newWin = window.open(webGmailUrl, '_blank');
      if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
        // Fallback to mailto if popup blocked
        window.location.href = mailtoUrl;
      }
    });
  }

  // Reset form handler
  if (resetBtn && contactForm && successBox) {
    resetBtn.addEventListener('click', () => {
      contactForm.reset();
      generateCaptcha();
      if (msgCounter) msgCounter.textContent = '0 / 25 characters';
      successBox.classList.add('hidden');
      contactForm.classList.remove('hidden');
    });
  }

  // 12. Project Specification Modal Data & Logic
  const projectDetails = {
    evento: {
      title: 'Evento — Event Management Web App',
      badge: 'Project Based Learning • Web App',
      badgeColor: 'border-[#FFCA06]/50 text-[#FFCA06] bg-[#3F194D]/90 shadow-[0_0_12px_rgba(255,202,6,0.35)]',
      stack: ['React', 'Laravel', 'MySQL', 'REST API', 'Payment Verification'],
      role: 'Backend & Database Developer',
      period: '2026 – present • Malang, East Java',
      problem: 'Handling multi-session event ticketing, manual payment verifications, and participant upload proofs manually creates operational bottlenecks and error-prone tracking.',
      solution: 'Developed a robust web platform focused on manual payment verification for event transactions. Engineered the backend using Laravel to track payment statuses in real-time and implemented a secure file upload pipeline for participant receipts.',
      features: [
        'Manual payment verification engine for secure event transactions',
        'Laravel backend logic tracking participant payment status workflow',
        'Secure file upload system for payment proof submissions',
        'Normalized MySQL database design and seamless React UI integration'
      ],
      githubUrl: 'https://github.com/PraNAtaP/evento-webapp'
    },
    reworth: {
      title: 'ReWorth — Waste Bank System',
      badge: 'Project Based Learning • Mobile & Web',
      badgeColor: 'border-[#C91C7A]/50 text-[#C91C7A] bg-[#3F194D]/90 shadow-[0_0_12px_rgba(201,28,122,0.35)]',
      stack: ['Dart (Flutter)', 'PHP (Web)', 'MySQL', 'Waste Management ERP'],
      role: 'Database Architect & Backend Developer',
      period: '2026 • Malang, East Java',
      problem: 'Community waste banks face low public engagement and trust deficit due to opaque manual ledgers, inconsistent pricing, and cumbersome physical passbooks.',
      solution: 'Developed an integrated waste management system consisting of a public website, a mobile app, and a specialized portal for waste sellers. Designed the relational database architecture and implemented the backend logic using PHP.',
      features: [
        'Multi-platform system: Main website, mobile application, and waste seller portal',
        'Normalized relational database structure in MySQL managing user transactions',
        'Automated backend ledger in PHP converting waste weights into verified digital records',
        'Intuitive mobile client built with Flutter (Dart) for community users'
      ],
      githubUrl: 'https://github.com/jsofiah/ReWorth'
    },
    datalab: {
      title: 'Data Technology Laboratory Information System',
      badge: 'Project Based Learning • Academic IS',
      badgeColor: 'border-[#FFCA06]/50 text-[#FFA726] bg-[#3F194D]/90 shadow-[0_0_12px_rgba(255,202,6,0.35)]',
      stack: ['PHP Native', 'MySQL (Stored Procedures & Views)', 'Laboratory ERP'],
      role: 'Backend Developer & Database Optimizer',
      period: '2025 • Malang, East Java',
      problem: 'Laboratory equipment cataloging, member details, research publications, and facility bookings required a centralized, secure departmental platform.',
      solution: 'Built a web-based system to manage laboratory data at the Data Technology Laboratory (State Polytechnic of Malang), including member details, facilities, publications, and gallery. Optimized MySQL with Stored Procedures and Views for rapid retrieval.',
      features: [
        'Centralized laboratory data: member records, facility inventory, research publications, and gallery',
        'Backend engineered using PHP Native with strict MVC separation',
        'Optimized MySQL relational database using Stored Procedures and SQL Views',
        'Fast and secure data querying tailored for department faculty and students'
      ],
      githubUrl: 'https://github.com/pembunuhGila/PBL'
    }
  };

  const modal = document.getElementById('project-modal');
  const modalBox = document.getElementById('modal-box');
  const modalContent = document.getElementById('modal-content');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');

  const openModal = (projectId) => {
    const data = projectDetails[projectId];
    if (!data || !modal || !modalContent) return;

    modalContent.innerHTML = `
      <div class="space-y-5">
        <div class="flex flex-wrap items-center justify-between gap-3 pr-8">
          <div>
            <span class="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold border ${data.badgeColor} mb-2">
              ${data.badge}
            </span>
            <h3 class="text-2xl sm:text-3xl font-black text-white tracking-tight">${data.title}</h3>
            <p class="text-xs font-mono text-[#FFCA06] mt-1 font-semibold">${data.role} • ${data.period}</p>
          </div>
        </div>

        <div class="space-y-2">
          <h4 class="text-xs font-mono uppercase tracking-wider text-[#D8B4E2] font-bold">Problem & Context:</h4>
          <p class="text-xs sm:text-sm text-slate-200 leading-relaxed bg-[#1A0B2E]/80 p-4 rounded-2xl border border-white/10">
            ${data.problem}
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-xs font-mono uppercase tracking-wider text-[#D8B4E2] font-bold">Architectural Solution:</h4>
          <p class="text-xs sm:text-sm text-slate-200 leading-relaxed bg-[#1A0B2E]/80 p-4 rounded-2xl border border-white/10">
            ${data.solution}
          </p>
        </div>

        <div class="space-y-2">
          <h4 class="text-xs font-mono uppercase tracking-wider text-[#D8B4E2] font-bold">Key Functional Highlights:</h4>
          <ul class="text-xs sm:text-sm text-slate-200 space-y-1.5 font-medium">
            ${data.features.map(f => `
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-circle-check text-[#FFCA06] mt-1 text-xs shadow-[0_0_6px_#FFCA06]"></i>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="space-y-2 pt-2 border-t border-white/10">
          <h4 class="text-xs font-mono uppercase tracking-wider text-[#D8B4E2] font-bold">Technology Stack:</h4>
          <div class="flex flex-wrap gap-2">
            ${data.stack.map(tech => `
              <span class="modal-code-tag">${tech}</span>
            `).join('')}
          </div>
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-white/10">
          <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-connect-neon px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
            <i class="fa-brands fa-github text-sm"></i>
            <span>View Source on GitHub</span>
          </a>
          <button id="modal-inner-close" class="px-4 py-2 rounded-xl text-xs font-mono text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
            Close Specs
          </button>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.classList.remove('opacity-0');
      modalBox.classList.remove('scale-95');
      modalBox.classList.add('scale-100');
    }, 10);

    const innerClose = document.getElementById('modal-inner-close');
    if (innerClose) {
      innerClose.addEventListener('click', closeModal);
    }
  };

  const closeModal = () => {
    if (!modal || !modalBox) return;
    modalBox.classList.remove('scale-100');
    modalBox.classList.add('scale-95');
    modal.classList.add('opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300);
  };

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      openModal(projectId);
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });


  // 13. GSAP & ScrollTrigger Animation Engine
  if (typeof gsap !== 'undefined') {
    
    // Check ScrollTrigger availability — only use for parallax, NOT section reveals
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // A. Parallax Background Effect only (no content reveal triggers)
      const bgGrid = document.querySelector('.parallax-grid');
      if (bgGrid) {
        gsap.to(bgGrid, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.2
          }
        });
      }

      const parallaxOrbs = document.querySelectorAll('.parallax-orb');
      parallaxOrbs.forEach(orb => {
        const speed = parseFloat(orb.getAttribute('data-speed')) || 0.35;
        gsap.to(orb, {
          yPercent: speed * 85,
          ease: 'none',
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.8
          }
        });
      });
    }

    // B. Hero Section Entrance Animation Timeline (Page Load only — no scroll trigger)
    const heroTl = gsap.timeline({
      defaults: {
        ease: 'power3.out',
        duration: 0.95
      }
    });

    // 1. Availability Status Pill Badge
    heroTl.from('.hero-anim-badge', {
      y: 35,
      opacity: 0,
      duration: 0.8
    })
    // 2. Pre-title, Name ("Nety Sulistyorini"), Subtitle, and Short Bio
    .from('.hero-anim-text', {
      y: 45,
      opacity: 0,
      stagger: 0.13,
      duration: 0.95
    }, '-=0.45')
    // 3. Quick Metrics Glass Cards (GPA 3.76, Projects 3+, COBIT '19)
    .from('.hero-anim-metric', {
      y: 35,
      opacity: 0,
      scale: 0.94,
      stagger: 0.12,
      duration: 0.8,
      clearProps: 'transform'
    }, '-=0.5')
    // 4. Hero Action CTA Buttons
    .from('.hero-anim-cta', {
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      clearProps: 'transform'
    }, '-=0.45')
    // 5. Social Links Strip
    .from('.hero-anim-social', {
      y: 25,
      opacity: 0,
      duration: 0.7,
      clearProps: 'transform'
    }, '-=0.4')
    // 6. Right Column: Profile Cybernetic Card glides in from right
    .from('.hero-anim-profile', {
      x: 65,
      y: 20,
      opacity: 0,
      scale: 0.93,
      duration: 1.25,
      clearProps: 'transform'
    }, 0.25)
    // 7. Floating Micro-Cards
    .from('.hero-anim-float', {
      y: 30,
      opacity: 0,
      scale: 0.85,
      stagger: 0.2,
      duration: 0.9,
      clearProps: 'transform'
    }, '-=0.65');
  }

  // 14. Scroll Reveal Animation using IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal-up');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    revealElements.forEach(el => revealObserver.observe(el));
  }

  // 15. Skill bar animation on scroll
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  if (skillBars.length > 0) {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const targetWidth = bar.getAttribute('data-width') || bar.style.width;
          bar.style.width = '0%';
          setTimeout(() => {
            bar.style.width = targetWidth;
          }, 100);
          skillObserver.unobserve(bar);
        }
      });
    }, { threshold: 0.3 });
    skillBars.forEach(bar => skillObserver.observe(bar));
  }

});
