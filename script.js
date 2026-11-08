/**
 * Nety Sulistyorini Portfolio - Core Interactive & Visual System
 * Blueberry Palette & Professional HRD Architecture
 * Features:
 * 1. Dark/Light Mode Switcher with localStorage persistence (Default: Light Mode #F5F6F3)
 * 2. Full Bilingual Translation Engine (ID / EN) with data-i18n attributes
 * 3. Aesthetic Card Scroll Reveal using Intersection Observer API (scale 0.95 -> 1.0, opacity 0 -> 1)
 * 4. Anti-Spam Contact Form with Math Verification & Dual Dispatch
 * 5. Real-Time Local WIB Clock, Skill Bars, Filters, Modals & Toast Engine
 */

document.addEventListener('DOMContentLoaded', () => {

  // ========================================================================
  // 1. DYNAMIC YEAR
  // ========================================================================
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ========================================================================
  // 2. THEME SWITCHER (Light Mode #F5F6F3 by Default, Dark Mode #1A202C)
  // ========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle-btn');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');
  const mobileThemeToggleIcon = document.getElementById('mobile-theme-toggle-icon');

  const updateThemeUI = (theme) => {
    const isDark = theme === 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const updateIcon = (icon) => {
      if (!icon) return;
      if (isDark) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    };

    updateIcon(themeToggleIcon);
    updateIcon(mobileThemeToggleIcon);
  };

  const applyTheme = (theme) => {
    updateThemeUI(theme);
    localStorage.setItem('portfolio-theme', theme);
  };

  // Default is light mode as requested
  const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
  applyTheme(savedTheme);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  };

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', toggleTheme);


  // ========================================================================
  // 3. BILINGUAL TRANSLATION ENGINE (ID | EN)
  // ========================================================================
  const translations = {
    en: {
      // Navbar
      nav_about: 'About',
      nav_skills: 'Skills',
      nav_projects: 'Projects',
      nav_education: 'Education',
      nav_experience: 'Leadership',
      nav_achievements: 'Awards',
      nav_hire: 'Hire Me',

      // Hero
      hero_badge: 'Available for Business & System Analyst Roles',
      hero_greeting: 'Hello, I am',
      hero_role: 'Business & System Analyst Candidate',
      hero_subrole: 'Information Systems Business Student',
      hero_bio: 'A <strong>5th-semester student</strong> at <strong>State Polytechnic of Malang</strong> (D-IV Information Systems Business, GPA 3.76). Experienced as <strong>Head Coordinator of Mentors</strong> across 3 study programs and <strong>Semifinalist in 18th KATULISTIWA National Business Plan Competition</strong>. Specializing in Business Intelligence, Data Warehouse, Systems Analysis & Design (SAD), and IT Audit (COBIT 2019) — actively seeking a <strong>Business Analyst internship</strong> to deliver data-driven solutions.',
      hero_stat_gpa: 'Cumulative GPA',
      hero_stat_projects: 'Core Projects',
      hero_stat_audit: 'IT Audit Focus',
      hero_cta_projects: 'Explore Projects',
      hero_cta_cv: 'View CV / Resume',
      hero_cta_contact: 'Get in Touch',
      hero_cta_email: 'Copy Email',
      hero_connect_label: 'Direct Connect:',
      profile_academic_title: 'profile.system.json',
      profile_status: '5th Semester Active',
      profile_track: 'Business & System Analysis',
      profile_location: 'Malang & Kediri, East Java',

      // About
      about_tag: 'CORE ARCHITECTURE',
      about_title: 'Analytical Rigor Meets Enterprise Engineering',
      about_desc: 'Translating complex enterprise requirements into robust, data-backed technical architectures.',
      pillar1_title: 'Business & System Analysis',
      pillar1_desc: 'Synthesizing enterprise needs, diagramming business processes with BPMN/UML, crafting Software Requirement Specifications (SRS), and translating operational bottlenecks into clear functional solutions.',
      pillar2_title: 'Data Architecture & Governance',
      pillar2_desc: 'Designing relational schemas, building multidimensional data warehouses, optimizing SQL queries, and aligning IT capabilities with corporate objectives through COBIT 2019 framework.',
      pillar3_title: 'Agile Execution & Delivery',
      pillar3_desc: 'Collaborating in Scrum sprints, orchestrating end-to-end user acceptance testing (UAT), managing product backlogs, and bridging business requirements into seamless technical execution.',

      // Skills
      skills_tag: 'COMPETENCY MATRIX',
      skills_title: 'Technical & Analytical Arsenal',
      skills_desc: 'A comprehensive suite of tools, methodologies, and frameworks leveraged across enterprise analysis and system design.',
      skill_cat1: 'Business & Systems Analysis',
      skill_cat2: 'Data & Business Intelligence',
      skill_cat3: 'Architecture & Development',
      skill_cat4: 'Governance, ERP & Agile',

      // Projects
      projects_tag: 'PORTFOLIO HIGHLIGHTS',
      projects_title: 'Enterprise Systems & Digital Solutions',
      projects_desc: 'Real-world business systems engineered with thorough analysis, systematic data architectures, and agile delivery.',
      filter_all: 'All Projects',
      filter_sa: 'Systems Analysis',
      filter_web: 'Web Platforms',
      filter_data: 'Enterprise Data',
      proj_btn_spec: 'View System Spec',
      proj_btn_repo: 'Source Code',

      // Education
      edu_tag: 'ACADEMIC FOUNDATION',
      edu_title: 'Formal Education & Specialization',
      edu_degree: 'Applied Bachelor (D-IV) — Information Systems Business',
      edu_institution: 'State Polytechnic of Malang (Polinema)',
      edu_gpa_label: 'Current Cumulative GPA:',
      edu_coursework_title: 'Key Enterprise Coursework',
      edu_hs_degree: 'Social Sciences (IPS) Concentration',
      edu_hs_institution: 'MAN 1 Kota Kediri',
      edu_hs_score: 'Final Graduation Score:',

      // Experience
      exp_tag: 'LEADERSHIP & COLLABORATION',
      exp_title: 'Organizational Leadership',
      exp_role1: 'Head Coordinator of Mentors (3 Study Programs)',
      exp_role2: 'External Relations Staff — HMTI Polinema',
      exp_role3: 'Public Relations & Media Officer',

      // Achievements
      ach_tag: 'HONORS & RECOGNITION',
      ach_title: 'National Accolades & Competitions',
      ach_flagship_title: 'Semifinalist — 18th KATULISTIWA National Business Plan Competition',
      ach_flagship_org: 'Faculty of Economics and Business, Universitas Brawijaya (2026)',
      ach_flagship_desc: 'Authored and presented a scalable business model integrating circular economy logistics and financial forecasting. Advanced as national semifinalist competing against 100+ university teams across Indonesia.',

      // Contact
      contact_tag: 'INITIATE DIALOGUE',
      contact_title: "Let's Build Strategic Systems Together",
      contact_desc: 'Interested in discussing a Business Analyst opening, IT audit engagement, or enterprise consulting? Reach out via direct channels or leave a detailed message below.',
      form_title: 'Quick Message Form',
      form_name: 'Full Name *',
      form_email: 'Professional Email *',
      form_subject: 'Subject / Purpose *',
      form_message: 'Detailed Message *',
      form_verify: 'Security Verification *',
      form_submit: 'Dispatch Message via Gmail',
      cv_title: 'Official Curriculum Vitae',
      cv_desc: 'Verified resume highlighting academic coursework, GPA 3.76, system analysis projects, business competition achievements, and software engineering capabilities.',
      cv_btn: 'Open & Download CV (PDF)',

      // Footer
      footer_role: 'Business & System Analyst Candidate',
      footer_bio: 'Applied Bachelor (D-IV) student in Information Systems Business at Politeknik Negeri Malang. Bridging enterprise processes with robust IT architecture and data governance.',
      footer_nav: 'Site Navigation',
      footer_connect: 'Connect',
      footer_top: 'TOP',
      footer_clock_label: 'Malang, Indonesia (WIB)'
    },
    id: {
      // Navbar
      nav_about: 'Tentang',
      nav_skills: 'Keahlian',
      nav_projects: 'Proyek',
      nav_education: 'Pendidikan',
      nav_experience: 'Organisasi',
      nav_achievements: 'Prestasi',
      nav_hire: 'Hubungi Saya',

      // Hero
      hero_badge: 'Terbuka untuk Peluang Business & System Analyst',
      hero_greeting: 'Halo, saya',
      hero_role: 'Kandidat Business & System Analyst',
      hero_subrole: 'Mahasiswa Sistem Informasi Bisnis',
      hero_bio: 'Mahasiswa <strong>Semester 5</strong> di <strong>Politeknik Negeri Malang</strong> (D-IV Sistem Informasi Bisnis, IPK 3.76). Berpengalaman sebagai <strong>Koordinator Utama Mentor</strong> untuk 3 program studi dan <strong>Semifinalis Lomba Bisnis Plan Nasional KATULISTIWA ke-18</strong>. Berfokus pada Business Intelligence, Data Warehouse, Analisis & Perancangan Sistem (SAD), dan Audit TI (COBIT 2019) — aktif mencari posisi <strong>Magang Business Analyst</strong> untuk memberikan solusi berbasis data.',
      hero_stat_gpa: 'IPK Kumulatif',
      hero_stat_projects: 'Proyek Utama',
      hero_stat_audit: 'Fokus Audit TI',
      hero_cta_projects: 'Lihat Proyek',
      hero_cta_cv: 'Lihat CV / Resume',
      hero_cta_contact: 'Hubungi Saya',
      hero_cta_email: 'Salin Email',
      hero_connect_label: 'Kontak Langsung:',
      profile_academic_title: 'profile.system.json',
      profile_status: 'Semester 5 Aktif',
      profile_track: 'Analisis Bisnis & Sistem',
      profile_location: 'Malang & Kediri, Jawa Timur',

      // About
      about_tag: 'ARSITEKTUR UTAMA',
      about_title: 'Ketelitian Analitis Berpadu Rekayasa Enterprise',
      about_desc: 'Menerjemahkan kebutuhan bisnis yang kompleks menjadi arsitektur teknis yang kokoh dan berbasis data.',
      pillar1_title: 'Analisis Bisnis & Sistem',
      pillar1_desc: 'Menganalisis kebutuhan enterprise, memodelkan alur proses bisnis dengan BPMN/UML, menyusun Software Requirement Specification (SRS), dan menerjemahkan kendala operasional menjadi solusi fungsional yang terukur.',
      pillar2_title: 'Arsitektur Data & Tata Kelola',
      pillar2_desc: 'Merancang skema relasional, membangun data warehouse multidimensi, mengoptimasi query SQL, serta menyelaraskan kapabilitas TI dengan sasaran bisnis melalui framework COBIT 2019.',
      pillar3_title: 'Eksekusi Agile & Implementasi',
      pillar3_desc: 'Berkolaborasi dalam sprint Scrum, mengoordinasikan User Acceptance Testing (UAT), mengelola product backlog, dan mengawal implementasi teknis dari tahap perancangan hingga rilis produksi.',

      // Skills
      skills_tag: 'MATRIKS KOMPETENSI',
      skills_title: 'Keahlian Teknis & Analitis',
      skills_desc: 'Kumpulan metodologi, framework, dan perangkat lunak yang digunakan dalam analisis sistem dan perancangan enterprise.',
      skill_cat1: 'Analisis Bisnis & Sistem',
      skill_cat2: 'Data & Business Intelligence',
      skill_cat3: 'Arsitektur & Pengembangan',
      skill_cat4: 'Tata Kelola, ERP & Agile',

      // Projects
      projects_tag: 'PROYEK UNGGULAN',
      projects_title: 'Sistem Enterprise & Solusi Digital',
      projects_desc: 'Sistem bisnis nyata yang dibangun dengan analisis mendalam, arsitektur data terstruktur, dan metodologi pengembangan agile.',
      filter_all: 'Semua Proyek',
      filter_sa: 'Analisis Sistem',
      filter_web: 'Platform Web',
      filter_data: 'Data Enterprise',
      proj_btn_spec: 'Lihat Spesifikasi Sistem',
      proj_btn_repo: 'Kode Sumber',

      // Education
      edu_tag: 'FONDASI AKADEMIK',
      edu_title: 'Pendidikan Formal & Spesialisasi',
      edu_degree: 'Sarjana Terapan (D-IV) — Sistem Informasi Bisnis',
      edu_institution: 'Politeknik Negeri Malang (Polinema)',
      edu_gpa_label: 'IPK Kumulatif Saat Ini:',
      edu_coursework_title: 'Mata Kuliah Utama Enterprise',
      edu_hs_degree: 'Peminatan Ilmu Pengetahuan Sosial (IPS)',
      edu_hs_institution: 'MAN 1 Kota Kediri',
      edu_hs_score: 'Nilai Kelulusan Akhir:',

      // Experience
      exp_tag: 'PENGALAMAN & KEPEMIMPINAN',
      exp_title: 'Pengalaman Organisasi & Kepemimpinan',
      exp_role1: 'Koordinator Utama Mentor (3 Program Studi)',
      exp_role2: 'Staf Hubungan Luar — HMTI Polinema',
      exp_role3: 'Staf Humas & Media Dokumentasi',

      // Achievements
      ach_tag: 'PRESTASI & PENGHARGAAN',
      ach_title: 'Prestasi & Kompetisi Nasional',
      ach_flagship_title: 'Semifinalis — Lomba Bisnis Plan Nasional KATULISTIWA ke-18',
      ach_flagship_org: 'Fakultas Ekonomi dan Bisnis, Universitas Brawijaya (2026)',
      ach_flagship_desc: 'Menyusun dan mempresentasikan model bisnis skalabel yang mengintegrasikan logistik circular economy dan peramalan keuangan. Berhasil lolos sebagai semifinalis tingkat nasional di antara 100+ tim universitas se-Indonesia.',

      // Contact
      contact_tag: 'HUBUNGI SAYA',
      contact_title: 'Mari Berkolaborasi Membangun Sistem Strategis',
      contact_desc: 'Tertarik berdiskusi mengenai lowongan posisi Business Analyst, audit tata kelola TI, atau kolaborasi proyek? Hubungi melalui kontak langsung atau kirim pesan melalui formulir di bawah.',
      form_title: 'Formulir Pesan Cepat',
      form_name: 'Nama Lengkap *',
      form_email: 'Email Profesional *',
      form_subject: 'Subjek / Keperluan *',
      form_message: 'Pesan Lengkap *',
      form_verify: 'Verifikasi Keamanan *',
      form_submit: 'Kirim Pesan via Gmail',
      cv_title: 'Curriculum Vitae Resmi',
      cv_desc: 'Dokumen CV terverifikasi yang memuat riwayat pendidikan, IPK 3.76, mata kuliah analisis sistem, prestasi kompetisi bisnis, dan kemampuan rekayasa perangkat lunak.',
      cv_btn: 'Buka & Unduh CV (PDF)',

      // Footer
      footer_role: 'Kandidat Business & System Analyst',
      footer_bio: 'Mahasiswa Sarjana Terapan (D-IV) Sistem Informasi Bisnis Politeknik Negeri Malang. Menghubungkan proses enterprise dengan arsitektur TI dan tata kelola data yang andal.',
      footer_nav: 'Navigasi Halaman',
      footer_connect: 'Kontak Langsung',
      footer_top: 'ATAS',
      footer_clock_label: 'Malang, Indonesia (WIB)'
    }
  };

  const applyLanguage = (lang) => {
    const dict = translations[lang] || translations.en;

    // Replace text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Replace placeholders with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Update toggle badges
    const updateBadges = (enId, idId) => {
      const enEl = document.getElementById(enId);
      const idEl = document.getElementById(idId);
      if (enEl && idEl) {
        if (lang === 'id') {
          idEl.classList.add('font-bold', 'text-berry');
          idEl.classList.remove('opacity-60');
          enEl.classList.remove('font-bold', 'text-berry');
          enEl.classList.add('opacity-60');
        } else {
          enEl.classList.add('font-bold', 'text-berry');
          enEl.classList.remove('opacity-60');
          idEl.classList.remove('font-bold', 'text-berry');
          idEl.classList.add('opacity-60');
        }
      }
    };

    updateBadges('lang-badge-en', 'lang-badge-id');
    updateBadges('mobile-lang-badge-en', 'mobile-lang-badge-id');

    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.setAttribute('lang', lang);
  };

  const savedLang = localStorage.getItem('portfolio-lang') || 'en';
  applyLanguage(savedLang);

  const toggleLanguage = () => {
    const currentLang = localStorage.getItem('portfolio-lang') || 'en';
    const newLang = currentLang === 'en' ? 'id' : 'en';
    applyLanguage(newLang);
  };

  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const mobileLangToggleBtn = document.getElementById('mobile-lang-toggle-btn');
  if (langToggleBtn) langToggleBtn.addEventListener('click', toggleLanguage);
  if (mobileLangToggleBtn) mobileLangToggleBtn.addEventListener('click', toggleLanguage);


  // ========================================================================
  // 4. AESTHETIC CARD SCROLL REVEAL (Requirement 4: Intersection Observer)
  // Scale-up from 95% to 100% and opacity from 0 to 1
  // ========================================================================
  const initCardReveal = () => {
    const cards = document.querySelectorAll('.card-reveal, .glass-card, .stat-card-shine, .terminal-card');
    
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      cards.forEach(card => {
        card.classList.add('card-reveal');
        revealObserver.observe(card);
      });
    } else {
      cards.forEach(card => card.classList.add('is-revealed'));
    }
  };
  initCardReveal();


  // ========================================================================
  // 5. NAVBAR SCROLL & READING PROGRESS BAR
  // ========================================================================
  const navbar = document.getElementById('navbar');
  const scrollProgressBar = document.getElementById('scroll-progress-bar');
  const floatingBtn = document.getElementById('floating-back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (navbar) {
      if (scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (floatingBtn) {
      if (scrollY > 500) {
        floatingBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
        floatingBtn.classList.add('opacity-100', 'translate-y-0');
      } else {
        floatingBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
        floatingBtn.classList.remove('opacity-100', 'translate-y-0');
      }
    }

    if (scrollProgressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = (scrollY / docHeight) * 100;
        scrollProgressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      }
    }
  }, { passive: true });


  // ========================================================================
  // 6. MOBILE MENU DRAWER
  // ========================================================================
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
        if (menuIconBars) menuIconBars.classList.add('hidden');
        if (menuIconClose) menuIconClose.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        if (menuIconBars) menuIconBars.classList.remove('hidden');
        if (menuIconClose) menuIconClose.classList.add('hidden');
      }
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        if (menuIconBars) menuIconBars.classList.remove('hidden');
        if (menuIconClose) menuIconClose.classList.add('hidden');
      });
    });
  }


  // ========================================================================
  // 7. ACTIVE NAVIGATION LINK ON SCROLL
  // ========================================================================
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const navObserver = new IntersectionObserver((entries) => {
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
    }, {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    });

    sections.forEach(sec => navObserver.observe(sec));
  }


  // ========================================================================
  // 8. BACK TO TOP HANDLERS
  // ========================================================================
  const backToTopBtns = document.querySelectorAll('#back-to-top, #floating-back-to-top');
  backToTopBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });


  // ========================================================================
  // 9. PROJECT FILTER TABS
  // ========================================================================
  const filterButtons = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

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
    });
  });


  // ========================================================================
  // 10. TOAST NOTIFICATIONS & COPY EMAIL SHORTCUT
  // ========================================================================
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
          const currentLang = localStorage.getItem('portfolio-lang') || 'en';
          const msg = currentLang === 'id' ? `Email disalin: ${email}` : `Email copied: ${email}`;
          showToast(msg);
        } catch (err) {
          showToast(`Email: ${email}`);
        }
      });
    }
  });


  // ========================================================================
  // 11. REAL-TIME LOCAL CLOCK IN FOOTER (Malang, Indonesia / WIB GMT+7)
  // ========================================================================
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


  // ========================================================================
  // 12. STRICT ANTI-SPAM CONTACT FORM WITH SECURITY VERIFICATION
  // ========================================================================
  const contactForm = document.getElementById('contact-form');
  const cardBox = document.getElementById('contact-card-box');
  const successBox = document.getElementById('contact-success-box');
  const resetBtn = document.getElementById('reset-contact-form-btn');
  const captchaQuestion = document.getElementById('captcha-question');
  const msgTextarea = document.getElementById('contact-message');
  const msgCounter = document.getElementById('msg-counter');

  let captchaResult = 0;

  const generateCaptcha = () => {
    if (!captchaQuestion) return;
    const n1 = Math.floor(Math.random() * 8) + 2;
    const n2 = Math.floor(Math.random() * 7) + 1;
    captchaResult = n1 + n2;
    captchaQuestion.textContent = `${n1} + ${n2}`;
  };
  generateCaptcha();

  if (msgTextarea && msgCounter) {
    msgTextarea.addEventListener('input', () => {
      const len = msgTextarea.value.trim().length;
      msgCounter.textContent = `${len} / 25 characters`;
      if (len >= 25) {
        msgCounter.classList.remove('text-slate-400', 'text-rose-500');
        msgCounter.classList.add('text-emerald-600', 'dark:text-emerald-400');
      } else {
        msgCounter.classList.remove('text-emerald-600', 'dark:text-emerald-400');
        msgCounter.classList.add('text-slate-400');
      }
    });
  }

  const isGibberish = (str) => {
    if (/(.)\1{3,}/i.test(str)) return true;
    const mashPatterns = [/asdfgh/i, /qwerty/i, /zxcvbn/i, /hjkl/i, /12345/i];
    return mashPatterns.some(p => p.test(str));
  };

  const validateEmailFormat = (email) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    if (!emailRegex.test(email)) return false;
    const blacklisted = ['test.com', 'example.com', 'fake.com', 'asdf.com', 'temp.com'];
    const domain = email.split('@')[1].toLowerCase();
    return !blacklisted.includes(domain);
  };

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const honey = document.getElementById('contact-honeypot');
      if (honey && honey.value.trim() !== '') return;

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

      const isId = (localStorage.getItem('portfolio-lang') || 'en') === 'id';
      let isValid = true;
      let firstInvalidInput = null;

      // Validate Name
      if (name.length < 3) {
        setError(nameInput, errName, isId ? 'Nama terlalu pendek (minimal 3 huruf).' : 'Name is too short (min 3 letters).');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = nameInput;
      } else if (!/^[a-zA-Z\s.,'-]+$/.test(name)) {
        setError(nameInput, errName, isId ? 'Nama hanya boleh berupa huruf asli.' : 'Name can only contain genuine letters.');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = nameInput;
      } else if (isGibberish(name)) {
        setError(nameInput, errName, isId ? 'Nama tampak acak atau tidak valid.' : 'Name appears random or invalid.');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = nameInput;
      }

      // Validate Email
      if (!validateEmailFormat(email)) {
        setError(emailInput, errEmail, isId ? 'Format email tidak valid (contoh: nama@perusahaan.com).' : 'Please enter a valid email format.');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = emailInput;
      }

      // Validate Subject
      if (subject.length < 4) {
        setError(subjectInput, errSubject, isId ? 'Harap cantumkan subjek atau tujuan pesan yang jelas.' : 'Please enter a clear subject or purpose.');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = subjectInput;
      }

      // Validate Message
      const wordCount = message.split(/\s+/).filter(w => w.length > 0).length;
      if (message.length < 25) {
        setError(messageInput, errMessage, isId ? 'Pesan terlalu singkat (minimal 25 karakter).' : 'Message is too short (min 25 characters).');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = messageInput;
      } else if (wordCount < 4) {
        setError(messageInput, errMessage, isId ? 'Harap tuliskan kalimat lengkap (minimal 4 kata).' : 'Please write a complete thought (min 4 words).');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = messageInput;
      } else if (isGibberish(message)) {
        setError(messageInput, errMessage, isId ? 'Teks pesan tidak boleh berupa ketikan acak/asal.' : 'Message appears to be random keyboard mash.');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = messageInput;
      }

      // Validate Captcha
      if (isNaN(userCaptcha) || userCaptcha !== captchaResult) {
        setError(captchaInput, errCaptcha, isId ? 'Jawaban verifikasi matematika belum tepat.' : 'Incorrect math challenge answer.');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = captchaInput;
      }

      if (!isValid) {
        if (firstInvalidInput) firstInvalidInput.focus();
        contactForm.classList.remove('form-shake');
        void contactForm.offsetWidth;
        contactForm.classList.add('form-shake');
        return;
      }

      // Valid: Dispatch via Gmail Web Compose with mailto fallback
      const mailSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} — from ${name}`);
      const mailBody = encodeURIComponent(
        `Dear Nety Sulistyorini,\n\n` +
        `Sender Details:\n` +
        `- Name: ${name}\n` +
        `- Email: ${email}\n` +
        `- Purpose: ${subject}\n\n` +
        `Message Content:\n` +
        `${message}\n\n` +
        `---\nDispatched from verified portfolio portal (nesslty.my.id)`
      );

      const targetEmail = 'netysulistyorini.edu@gmail.com';
      const webGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${mailSubject}&body=${mailBody}`;

      try {
        const draft = `To: ${targetEmail}\nSubject: [Portfolio Inquiry] ${subject}\n\n${message}\n\nFrom: ${name} (${email})`;
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(draft);
        }
      } catch (err) {}

      window.open(webGmailUrl, '_blank', 'noopener,noreferrer');

      if (cardBox) cardBox.classList.add('hidden');
      if (successBox) successBox.classList.remove('hidden');

      showToast(isId ? 'Draf pesan dibuat & disalin ke clipboard!' : 'Message draft generated & copied to clipboard!');
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (contactForm) contactForm.reset();
      generateCaptcha();
      if (msgCounter) {
        msgCounter.textContent = '0 / 25 characters';
        msgCounter.classList.remove('text-emerald-600', 'dark:text-emerald-400');
        msgCounter.classList.add('text-slate-400');
      }
      if (successBox) successBox.classList.add('hidden');
      if (cardBox) cardBox.classList.remove('hidden');
    });
  }


  // ========================================================================
  // 13. PROJECT SPEC MODAL (Bilingual Specs)
  // ========================================================================
  const projectDetails = {
    evento: {
      en: {
        title: 'Evento — Multi-Tier Ticketing & Payment Verification',
        badge: 'Enterprise Web Platform',
        role: 'Full-Stack Developer & Backend Lead',
        period: '2026 • Malang, East Java',
        problem: 'Handling multi-session event ticketing, manual payment verifications, and participant upload proofs manually creates severe operational bottlenecks and error-prone tracking.',
        solution: 'Developed a robust web platform focused on manual payment verification for event transactions. Engineered the backend using Laravel to track payment statuses in real-time and implemented a secure file upload pipeline for participant receipts.',
        features: [
          'Manual payment verification engine for secure event transactions',
          'Laravel backend logic tracking participant payment status workflow',
          'Secure file upload system for payment proof submissions',
          'Normalized MySQL database design and seamless React UI integration'
        ],
        stack: ['Laravel 10', 'PHP 8.2', 'React.js', 'MySQL', 'Tailwind CSS', 'REST API'],
        githubUrl: 'https://github.com/PraNAtaP/evento-webapp'
      },
      id: {
        title: 'Evento — Sistem Tiket Multi-Sesi & Verifikasi Pembayaran',
        badge: 'Platform Web Enterprise',
        role: 'Full-Stack Developer & Backend Lead',
        period: '2026 • Malang, Jawa Timur',
        problem: 'Pengelolaan tiket kegiatan multi-sesi dan verifikasi manual bukti pembayaran secara konvensional menyebabkan hambatan operasional dan rawan kesalahan pencatatan.',
        solution: 'Membangun platform web terintegrasi untuk verifikasi pembayaran manual transaksi acara. Mengembangkan arsitektur backend Laravel untuk memantau status pembayaran secara real-time disertai sistem unggah berkas yang aman.',
        features: [
          'Mesin verifikasi pembayaran manual untuk transaksi tiket yang aman',
          'Logika backend Laravel yang melacak alur status pembayaran peserta',
          'Sistem unggah berkas bukti pembayaran yang terenkripsi dan terstruktur',
          'Rancangan basis data MySQL ternormalisasi berpadu antarmuka React yang responsif'
        ],
        stack: ['Laravel 10', 'PHP 8.2', 'React.js', 'MySQL', 'Tailwind CSS', 'REST API'],
        githubUrl: 'https://github.com/PraNAtaP/evento-webapp'
      }
    },
    reworth: {
      en: {
        title: 'ReWorth — Digital Waste Bank Management System',
        badge: 'Project Based Learning • Mobile & Web',
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
        stack: ['Dart (Flutter)', 'PHP (Web)', 'MySQL', 'ERP Waste Management'],
        githubUrl: 'https://github.com/jsofiah/ReWorth'
      },
      id: {
        title: 'ReWorth — Sistem Manajemen Bank Sampah Digital',
        badge: 'Project Based Learning • Mobile & Web',
        role: 'Database Architect & Backend Developer',
        period: '2026 • Malang, Jawa Timur',
        problem: 'Bank sampah masyarakat menghadapi kendala rendahnya partisipasi dan kepercayaan warga akibat pencatatan manual buku kas yang lambat dan rentan selisih.',
        solution: 'Mengembangkan sistem pengelolaan sampah terintegrasi yang mencakup portal web publik, aplikasi mobile nasabah, dan portal khusus pengepul sampah. Merancang arsitektur basis data relasional serta logika backend menggunakan PHP.',
        features: [
          'Sistem multi-platform: Web utama, aplikasi mobile, dan portal mitra pengepul',
          'Struktur basis data relasional ternormalisasi di MySQL untuk mencatat transaksi',
          'Buku kas digital otomatis di backend PHP yang mengonversi timbangan sampah secara transparan',
          'Aplikasi mobile intuitif menggunakan Flutter (Dart) untuk kemudahan nasabah'
        ],
        stack: ['Dart (Flutter)', 'PHP (Web)', 'MySQL', 'ERP Waste Management'],
        githubUrl: 'https://github.com/jsofiah/ReWorth'
      }
    },
    datalab: {
      en: {
        title: 'Data Technology Laboratory Information System',
        badge: 'Academic Enterprise System',
        role: 'Backend Developer & Database Optimizer',
        period: '2025 • Malang, East Java',
        problem: 'Laboratory equipment cataloging, member details, research publications, and facility bookings required a centralized, secure departmental platform.',
        solution: 'Built a web-based system to manage laboratory data at the Data Technology Laboratory (Polinema), including member details, facilities, publications, and gallery. Optimized MySQL with Stored Procedures and Views for rapid retrieval.',
        features: [
          'Centralized laboratory data: member records, facility inventory, research publications, and gallery',
          'Backend engineered using PHP Native with strict MVC separation',
          'Optimized MySQL relational database using Stored Procedures and SQL Views',
          'Fast and secure data querying tailored for department faculty and students'
        ],
        stack: ['PHP Native', 'MySQL (Stored Procedures & Views)', 'Laboratory ERP'],
        githubUrl: 'https://github.com/pembunuhGila/PBL'
      },
      id: {
        title: 'Sistem Informasi Laboratorium Teknologi Data',
        badge: 'Sistem Informasi Akademik',
        role: 'Backend Developer & Database Optimizer',
        period: '2025 • Malang, Jawa Timur',
        problem: 'Katalogisasi inventaris laboratorium, data anggota, publikasi riset, dan peminjaman fasilitas memerlukan platform terpusat yang aman dan terstruktur.',
        solution: 'Membangun sistem informasi berbasis web untuk mengelola data Laboratorium Teknologi Data Polinema, meliputi data anggota, fasilitas, publikasi, dan galeri. Mengoptimalkan MySQL dengan Stored Procedures dan SQL Views untuk kecepatan akses data.',
        features: [
          'Pengelolaan terpusat: data anggota lab, inventaris fasilitas, publikasi riset, dan galeri kegiatan',
          'Backend dikembangkan dengan PHP Native menerapkan pola MVC terstruktur',
          'Optimalisasi query MySQL menggunakan Stored Procedures dan SQL Views',
          'Akses data cepat dan aman bagi dosen pembina dan mahasiswa'
        ],
        stack: ['PHP Native', 'MySQL (Stored Procedures & Views)', 'Laboratory ERP'],
        githubUrl: 'https://github.com/pembunuhGila/PBL'
      }
    },
    bca_audit: {
      en: {
        title: 'BCA Bank IT Audit Simulation',
        badge: 'IT Audit • COBIT 2019 • Academic Team Project',
        role: 'IT Auditor — Academic Team Simulation',
        period: '2026 • Malang, East Java',
        problem: 'As part of an IT Audit course, our team was tasked to simulate a full audit engagement at Bank Central Asia (BCA) — assessing IT governance, information security controls, and operational risks using the COBIT 2019 framework.',
        solution: 'The team conducted a structured audit simulation: defining audit scope, identifying key IT processes (EDM, APO, BAI, DSS), evaluating control effectiveness against COBIT 2019 maturity levels, and producing a formal Audit Finding & Recommendation Report presented to an academic panel.',
        features: [
          'Control assessment based on COBIT 2019 governance domains (EDM, APO, BAI, DSS)',
          'Risk matrix: identification, likelihood & impact scoring per control objective',
          'Gap analysis between current IT maturity state and target maturity level',
          'Formal audit finding report with prioritized remediation recommendations',
          'Simulated auditor-panel presentation of findings to academic evaluators'
        ],
        stack: ['COBIT 2019', 'IT Audit Methodology', 'Risk Assessment', 'Internal Controls', 'Banking IS', 'Microsoft Excel', 'Audit Report (Word)'],
        githubUrl: null
      },
      id: {
        title: 'Simulasi Audit IT Bank BCA',
        badge: 'Audit IT • COBIT 2019 • Proyek Kelompok Akademik',
        role: 'Auditor IT — Simulasi Tim Akademik',
        period: '2026 • Malang, Jawa Timur',
        problem: 'Sebagai bagian dari mata kuliah Audit TI, kelompok kami ditugaskan mensimulasikan proses audit IT menyeluruh di Bank Central Asia (BCA) — mengevaluasi tata kelola TI, kontrol keamanan informasi, dan risiko operasional menggunakan kerangka COBIT 2019.',
        solution: 'Tim melakukan simulasi audit terstruktur: mendefinisikan ruang lingkup audit, mengidentifikasi proses TI utama (EDM, APO, BAI, DSS), mengevaluasi efektivitas kontrol terhadap tingkat maturitas COBIT 2019, dan menghasilkan Laporan Temuan Audit beserta Rekomendasi yang dipresentasikan ke panel akademik.',
        features: [
          'Penilaian kontrol berdasarkan domain tata kelola COBIT 2019 (EDM, APO, BAI, DSS)',
          'Matriks risiko: identifikasi, penilaian kemungkinan & dampak per tujuan kontrol',
          'Analisis kesenjangan antara kondisi maturitas TI saat ini dan target maturitas',
          'Laporan temuan audit formal dengan rekomendasi remediasi berprioritas',
          'Presentasi temuan audit ke panel evaluator akademik sebagai tim auditor simulasi'
        ],
        stack: ['COBIT 2019', 'Metodologi Audit TI', 'Penilaian Risiko', 'Kontrol Internal', 'Sistem Informasi Perbankan', 'Microsoft Excel', 'Laporan Audit (Word)'],
        githubUrl: null
      }
    }
  };

  const modal = document.getElementById('project-modal');
  const modalBox = document.getElementById('modal-box');
  const modalContent = document.getElementById('modal-content');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');

  const openModal = (projectId) => {
    const project = projectDetails[projectId];
    if (!project || !modal || !modalContent) return;

    const currentLang = localStorage.getItem('portfolio-lang') || 'en';
    const data = project[currentLang] || project.en;
    const hasGithub = !!(data.githubUrl);

    modalContent.innerHTML = `
      <div class="space-y-5 text-left">
        <div>
          <span class="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold border border-[var(--accent-berry-border)] bg-[var(--accent-berry-light)] text-[var(--accent-berry)] mb-2">
            ${data.badge}
          </span>
          <h3 class="text-2xl sm:text-3xl font-black text-[var(--text-main)] tracking-tight">${data.title}</h3>
          <p class="text-xs font-mono text-[var(--accent-berry)] mt-1 font-semibold">${data.role} • ${data.period}</p>
        </div>

        <div class="space-y-1.5">
          <h4 class="text-xs font-mono uppercase tracking-wider text-[var(--accent-berry)] font-bold">${currentLang === 'id' ? 'Konteks & Masalah:' : 'Problem & Context:'}</h4>
          <p class="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
            ${data.problem}
          </p>
        </div>

        <div class="space-y-1.5">
          <h4 class="text-xs font-mono uppercase tracking-wider text-[var(--accent-berry)] font-bold">${currentLang === 'id' ? 'Solusi Arsitektur:' : 'Architectural Solution:'}</h4>
          <p class="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
            ${data.solution}
          </p>
        </div>

        <div class="space-y-1.5">
          <h4 class="text-xs font-mono uppercase tracking-wider text-[var(--accent-berry)] font-bold">${currentLang === 'id' ? 'Fitur & Fungsionalitas Utama:' : 'Key Functional Highlights:'}</h4>
          <ul class="text-xs sm:text-sm text-[var(--text-secondary)] space-y-2">
            ${data.features.map(f => `
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-circle-check text-[var(--accent-berry)] mt-1 text-xs"></i>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="space-y-1.5 pt-2 border-t border-[var(--border-subtle)]">
          <h4 class="text-xs font-mono uppercase tracking-wider text-[var(--accent-berry)] font-bold">${currentLang === 'id' ? 'Teknologi Digunakan:' : 'Technology Stack:'}</h4>
          <div class="flex flex-wrap gap-2">
            ${data.stack.map(tech => `
              <span class="tech-tag">${tech}</span>
            `).join('')}
          </div>
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)]">
          ${hasGithub ? `<a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-berry px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
            <i class="fa-brands fa-github text-sm"></i>
            <span>${currentLang === 'id' ? 'Lihat Kode di GitHub' : 'View Source on GitHub'}</span>
          </a>` : `<span class="text-xs font-mono text-[var(--text-secondary)] flex items-center gap-2 italic">
            <i class="fa-solid fa-lock text-xs text-[var(--accent-berry)]"></i>
            ${currentLang === 'id' ? 'Proyek Akademik Internal' : 'Internal Academic Project'}
          </span>`}
          <button id="modal-inner-close" class="btn-outline-berry px-4 py-2 rounded-xl text-xs font-mono cursor-pointer">
            ${currentLang === 'id' ? 'Tutup Spesifikasi' : 'Close Specs'}
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
    if (innerClose) innerClose.addEventListener('click', closeModal);
  };

  const closeModal = () => {
    if (!modal || !modalBox) return;
    modalBox.classList.remove('scale-100');
    modalBox.classList.add('scale-95');
    modal.classList.add('opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 280);
  };

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      openModal(projectId);
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });


  // ========================================================================
  // 14. SKILL BAR ANIMATION ON SCROLL
  // ========================================================================
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  if ('IntersectionObserver' in window && skillBars.length > 0) {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const targetWidth = bar.getAttribute('data-width') || bar.style.width;
          bar.style.width = '0%';
          setTimeout(() => {
            bar.style.width = targetWidth;
          }, 120);
          skillObserver.unobserve(bar);
        }
      });
    }, { threshold: 0.25 });
    skillBars.forEach(bar => skillObserver.observe(bar));
  }

});
