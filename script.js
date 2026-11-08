/**
 * Nety Sulistyorini Portfolio - Core Interactive & Visual System
 * Bilingual Engine — EVERY text switches when language changes.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ========================================================================
  // 1. DYNAMIC YEAR
  // ========================================================================
  const yearElement = document.getElementById('current-year');
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  // ========================================================================
  // 2. THEME SWITCHER
  // ========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle-btn');
  const themeToggleIcon = document.getElementById('theme-toggle-icon');
  const mobileThemeToggleIcon = document.getElementById('mobile-theme-toggle-icon');

  const updateThemeUI = (theme) => {
    const isDark = theme === 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', isDark);
    const swap = (icon) => {
      if (!icon) return;
      icon.classList.toggle('fa-moon', !isDark);
      icon.classList.toggle('fa-sun', isDark);
    };
    swap(themeToggleIcon);
    swap(mobileThemeToggleIcon);
  };
  const applyTheme = (theme) => {
    updateThemeUI(theme);
    localStorage.setItem('portfolio-theme', theme);
  };
  applyTheme(localStorage.getItem('portfolio-theme') || 'light');
  const toggleTheme = () => {
    const cur = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(cur === 'dark' ? 'light' : 'dark');
  };
  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', toggleTheme);


  // ========================================================================
  // 3. BILINGUAL TRANSLATION ENGINE — FULL DICTIONARY
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
      nav_cv_short: 'CV',
      nav_cv_pdf: 'Official CV / Resume (PDF)',

      // Mobile profile card
      mobile_profile_sub: 'Polinema D-IV SIB • GPA 3.76',

      // Hero
      hero_badge: 'Available for Business & System Analyst Roles',
      hero_greeting: 'Hello, I am',
      hero_role: 'Business & System Analyst Candidate',
      hero_subrole: 'Information Systems Business Student',
      hero_tag_auditor: 'IT Auditor',
      hero_tag_sa: 'System Analyst',
      hero_tag_da: 'Data Analyst',
      hero_bio: 'A <strong>5th-semester student</strong> at <strong>State Polytechnic of Malang</strong> (D-IV Information Systems Business, GPA 3.76). Experienced as <strong>Head Coordinator of Mentors</strong> across 3 study programs and <strong>Semifinalist in 18th KATULISTIWA National Business Plan Competition</strong>. Specializing in Business Intelligence, Data Warehouse, Systems Analysis & Design (SAD), and IT Audit (COBIT 2019) — actively seeking a <strong>Business Analyst internship</strong> to deliver data-driven solutions.',
      hero_stat_gpa: 'Cumulative GPA',
      hero_stat_projects: 'Core Projects',
      hero_stat_audit: 'IT Audit Focus',
      hero_cta_projects: 'Explore Projects',
      hero_cta_cv: 'View CV / Resume',
      hero_cta_contact: 'Get in Touch',
      hero_connect_label: 'Direct Connect:',

      // Profile terminal
      profile_academic_title: 'profile.system.json',
      profile_status: '"5th Semester Active"',
      profile_track: '"Business & System Analysis"',
      profile_location: 'Malang & Kediri, East Java',
      profile_badge_process: 'Process Modeling',
      profile_badge_db: 'Database Design',
      profile_badge_audit: 'IT Audit',
      profile_json_status_key: '"academicStatus":',
      profile_json_inst_key: '"institution":',
      profile_json_track_key: '"primaryTrack":',
      profile_json_gov_key: '"governanceFramework":',
      profile_json_stack_key: '"coreStack":',
      profile_photo_alt: 'Nety Sulistyorini — Professional Portrait',

      // About
      about_tag: 'CORE ARCHITECTURE',
      about_title: 'Analytical Rigor Meets Enterprise Engineering',
      about_desc: 'Translating complex enterprise requirements into robust, data-backed technical architectures.',

      pillar1_badge: 'PILLAR 01',
      pillar1_title: 'Business & System Analysis',
      pillar1_desc: 'Synthesizing enterprise needs, diagramming business processes with BPMN/UML, crafting Software Requirement Specifications (SRS), and translating operational bottlenecks into clear functional solutions.',
      pillar1_b1: 'BPMN 2.0 & UML System Workflows',
      pillar1_b2: 'Software Requirement Specifications (SRS)',
      pillar1_b3: 'Gap Analysis & As-Is / To-Be Mapping',

      pillar2_badge: 'PILLAR 02',
      pillar2_title: 'Data Architecture & Governance',
      pillar2_desc: 'Designing relational schemas, building multidimensional data warehouses, optimizing SQL queries, and aligning IT capabilities with corporate objectives through COBIT 2019 framework.',
      pillar2_b1: 'Relational Schemas & Multidimensional Marts',
      pillar2_b2: 'COBIT 2019 Governance Alignment',
      pillar2_b3: 'ETL Pipelines & Executive Dashboards',

      pillar3_badge: 'PILLAR 03',
      pillar3_title: 'Agile Execution & Delivery',
      pillar3_desc: 'Collaborating in Scrum sprints, orchestrating end-to-end user acceptance testing (UAT), managing product backlogs, and bridging business requirements into seamless technical execution.',
      pillar3_b1: 'Scrum Sprints & Backlog Prioritization',
      pillar3_b2: 'User Acceptance Testing (UAT) Sign-off',
      pillar3_b3: 'Cross-Functional Engineering Alignment',

      // Skills
      skills_tag: 'COMPETENCY MATRIX',
      skills_title: 'Technical & Analytical Arsenal',
      skills_desc: 'A comprehensive suite of tools, methodologies, and frameworks leveraged across enterprise analysis and system design.',
      skill_cat1: 'Business & Systems Analysis',
      skill_ba_1: 'BPMN 2.0 & Process Modeling',
      skill_ba_2: 'System Architecture (UML, ERD, DFD)',
      skill_ba_3: 'Requirements Engineering (SRS & User Stories)',
      skill_cat2: 'Data & Business Intelligence',
      skill_data_1: 'Relational Database & SQL Optimization',
      skill_data_2: 'Data Warehouse & Star Schema Design',
      skill_data_3: 'Business Intelligence & KPI Dashboards',
      skill_cat3: 'Architecture & Development',
      skill_web_1: 'PHP & Laravel MVC Framework',
      skill_web_2: 'React.js & Front-End UI Architecture',
      skill_web_3: 'RESTful API Integration & Postman',
      skill_cat4: 'Governance, ERP & Agile',
      skill_gov_1: 'IT Governance (COBIT 2019 Framework)',
      skill_gov_2: 'IT Audit Methodology & Controls',
      skill_gov_3: 'Agile / Scrum Backlog Management',

      // Projects
      projects_tag: 'PORTFOLIO HIGHLIGHTS',
      projects_title: 'Enterprise Systems & Digital Solutions',
      projects_desc: 'Real-world business systems engineered with thorough analysis, systematic data architectures, and agile delivery.',
      filter_all: 'All Projects',
      filter_sa: 'Systems & Audit',
      filter_web: 'Web Platforms',
      proj_key_contrib: 'Key Contributions:',
      proj_btn_spec: 'View System Spec',
      proj_btn_spec_audit: 'View Audit Spec',
      proj_btn_repo: 'Source Code',
      proj1_badge: 'Full-Stack Web App',
      proj1_title: 'Evento',
      proj1_sub: 'Event Management Web App',
      proj1_desc: 'A centralized event orchestration platform designed to streamline ticketing, attendee registration, schedule management, and organizer administrative dashboards with secure authentication.',
      proj1_contrib1: 'Designed relational database schema & ERD in MySQL',
      proj1_contrib2: 'Built responsive React UI and connected Laravel REST APIs',
      proj2_badge: 'Mobile & Sustainability',
      proj2_title: 'ReWorth',
      proj2_sub: 'Waste Bank System',
      proj2_desc: 'A digital waste bank platform incentivizing community waste segregation. Converts recyclable deposits into verifiable digital points and financial balance with automated weight tracking.',
      proj2_contrib1: 'Architected normalized database for waste transactions',
      proj2_contrib2: 'Developed PHP backend ledger for waste pricing logic',
      proj3_badge: 'Academic Enterprise IS',
      proj3_title: 'Data Lab System',
      proj3_sub: 'Polinema Laboratory IS',
      proj3_desc: 'A specialized management portal for the Data Technology Laboratory at Polinema. Manages lab facilities, member profiles, research publications, and gallery media with role-based access.',
      proj3_contrib1: 'Structured backend logic in PHP Native following MVC pattern',
      proj3_contrib2: 'Engineered Stored Procedures & Views for optimized querying',
      proj4_badge: 'IT Audit Simulation',
      proj4_title: 'BCA IT Audit',
      proj4_sub: 'COBIT 2019 Simulation',
      proj4_desc: 'A collaborative academic project simulating an IT Audit engagement at Bank Central Asia (BCA). Assessed IT governance, security controls, and operational risks using the COBIT 2019 framework.',
      proj4_contrib1: 'Defined audit scope, risk matrix, and COBIT 2019 domains',
      proj4_contrib2: 'Produced formal audit finding & recommendation reports',

      // Education
      edu_tag: 'ACADEMIC FOUNDATION',
      edu_title: 'Formal Education & Specialization',
      edu_period1: '2023 — Present',
      edu_status1: 'Active • 5th Semester',
      edu_degree: 'Applied Bachelor (D-IV) — Information Systems Business',
      edu_institution: 'State Polytechnic of Malang (Polinema)',
      edu_gpa_label: 'Current Cumulative GPA:',
      edu_coursework_title: 'Key Enterprise Coursework:',
      course_bi: 'Business Intelligence',
      course_dw: 'Data Warehouse',
      course_sad: 'Systems Analysis & Design',
      course_audit: 'IT Audit (COBIT 2019)',
      course_erp: 'Enterprise Resource Planning (ERP)',
      course_dm: 'Data Mining',
      course_agile: 'Agile Software Project',
      edu_period2: 'Graduated 2023',
      edu_status2: 'Secondary Education',
      edu_hs_degree: 'Social Sciences (IPS) Concentration',
      edu_hs_institution: 'MAN 1 Kota Kediri',
      edu_hs_score: 'Final Graduation Score:',
      edu_hs_desc: 'Built a solid foundation in social dynamics, organizational behavior, business economics, and structured analysis. Active in leadership activities and student mentoring.',

      // Experience
      exp_tag: 'LEADERSHIP & COLLABORATION',
      exp_title: 'Organizational Leadership',
      exp_badge1: 'Leadership • 2024',
      exp_role1: 'Head Coordinator of Mentors',
      exp_desc1: 'Led and aligned 30+ mentors across D-IV Information Systems Business, D-IV Informatics Engineering, and D-III Informatics Engineering.',
      exp_badge2: 'Departmental • 2024',
      exp_role2: 'External Relations Staff',
      exp_desc2: 'Facilitated cross-institutional diplomacy, industry partnerships, and academic visits. Handled institutional correspondence.',
      exp_badge3: 'Media & PR • 2024',
      exp_role3: 'Public Relations Officer',
      exp_desc3: 'Formulated strategic communication briefings, drafted formal press announcements, and directed multimedia documentation teams.',

      // Achievements
      ach_tag: 'HONORS & RECOGNITION',
      ach_title: 'National Accolades & Competitions',
      ach_badge: 'National Semifinalist',
      ach_flagship_title: 'Semifinalist — 18th KATULISTIWA National Business Plan Competition',
      ach_flagship_org: 'Faculty of Economics and Business, Universitas Brawijaya (2026)',
      ach_flagship_desc: 'Authored and presented a scalable business model integrating circular economy logistics and financial forecasting. Advanced as national semifinalist competing against 100+ university teams across Indonesia.',

      // Moments
      moments_tag: 'MOMENTS',
      moments_title: 'Organizational & Leadership Gallery',
      moments_cap1: 'Laboratory Data Technology',
      moments_cap2: 'Class of MIPA',
      moments_cap3: 'PKS Handover',
      moments_cap4: 'School Organization',
      moments_cap5: 'Leadership & Team',
      moments_cap6: 'Committee Team',
      moments_cap7: 'Group Project',
      moments_cap8: 'Leadership Event',
      moments_cap9: 'Tech Seminar',
      moments_cap10: 'IT Workshop',
      moments_cap11: 'Group Photo',
      moments_cap12: 'Networking',
      moments_cap13: 'Academic Profile',
      moments_cap14: 'Academic Event',
      moments_cap15: 'Campus Life',
      moments_cap16: 'Campus Life',
      moments_cap17: 'Presentation',
      moments_cap18: 'Professional Profile',
      moments_cap19: 'Professional Profile',
      moments_cap20: 'Formal Photo',
      moments_cap21: 'Formal Photo',
      moments_cap22: 'Formal Photo',

      // Contact
      contact_tag: 'INITIATE DIALOGUE',
      contact_title: "Let's Build Strategic Systems Together",
      contact_desc: 'Interested in discussing a Business Analyst opening, IT audit engagement, or enterprise consulting? Reach out via direct channels or leave a detailed message below.',
      cv_title: 'Official Curriculum Vitae',
      cv_sub: 'Verified PDF Resume',
      cv_desc: 'Verified resume highlighting academic coursework, GPA 3.76, system analysis projects, business competition achievements, and software engineering capabilities.',
      cv_btn: 'Open & Download CV (PDF)',
      contact_channels_title: 'Direct Contact Channels',
      contact_email_title: 'Direct Email',
      contact_linkedin_title: 'LinkedIn Profile',
      contact_ig_title: 'Instagram Profile',
      form_title: 'Quick Message Form',
      form_subtitle: 'Protected with real-time spam validation & math verification challenge.',
      form_name: 'Full Name *',
      form_name_ph: 'e.g. Jane Doe',
      form_email: 'Professional Email *',
      form_email_ph: 'jane@company.com',
      form_subject: 'Subject / Purpose *',
      form_subject_ph: 'e.g. Business Analyst Internship Opening',
      form_message: 'Detailed Message *',
      form_message_ph: 'Please describe your project, inquiry, or timeline in at least 25 characters...',
      form_verify: 'Security Verification *',
      form_verify_badge: 'Anti-Spam Gate',
      form_captcha_ph: 'Enter answer',
      form_submit: 'Dispatch Message via Gmail',
      form_char_unit: 'characters',
      success_title: 'Message Draft Generated!',
      success_desc: 'Your message has been formatted into Gmail Web Compose and copied directly to your clipboard. You can send it directly or reset the form below.',
      success_reset: 'Send Another Message',

      // Footer
      footer_role: 'Business & System Analyst Candidate',
      footer_bio: 'Applied Bachelor (D-IV) student in Information Systems Business at Politeknik Negeri Malang. Bridging enterprise processes with robust IT architecture and data governance.',
      footer_nav: 'Site Navigation',
      footer_nav_cv: 'Resume (CV)',
      footer_connect: 'Connect',
      footer_top: 'TOP',
      footer_clock_label: 'Malang, Indonesia (WIB)',
      footer_copyright_suffix: 'D-IV Sistem Informasi Bisnis • Politeknik Negeri Malang',

      // Toast
      toast_copied_default: 'Copied to clipboard!',
      toast_email_copied: 'Email copied',
      toast_draft_copied: 'Message draft generated & copied to clipboard!',
      toast_copied_prefix: 'Copied:',

      // Modal
      modal_problem: 'Problem & Context:',
      modal_solution: 'Architectural Solution:',
      modal_features: 'Key Functional Highlights:',
      modal_stack: 'Technology Stack:',
      modal_view_github: 'View Source on GitHub',
      modal_internal: 'Internal Academic Project',
      modal_close: 'Close Specs',
      modal_role_sep: '•'
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
      nav_cv_short: 'CV',
      nav_cv_pdf: 'CV / Resume Resmi (PDF)',

      // Mobile profile card
      mobile_profile_sub: 'Polinema D-IV SIB • IPK 3.76',

      // Hero
      hero_badge: 'Terbuka untuk Peluang Business & System Analyst',
      hero_greeting: 'Halo, saya',
      hero_role: 'Kandidat Business & System Analyst',
      hero_subrole: 'Mahasiswa Sistem Informasi Bisnis',
      hero_tag_auditor: 'Auditor TI',
      hero_tag_sa: 'Analis Sistem',
      hero_tag_da: 'Analis Data',
      hero_bio: 'Mahasiswa <strong>Semester 5</strong> di <strong>Politeknik Negeri Malang</strong> (D-IV Sistem Informasi Bisnis, IPK 3.76). Berpengalaman sebagai <strong>Koordinator Utama Mentor</strong> untuk 3 program studi dan <strong>Semifinalis Lomba Bisnis Plan Nasional KATULISTIWA ke-18</strong>. Berfokus pada Business Intelligence, Data Warehouse, Analisis & Perancangan Sistem (SAD), dan Audit TI (COBIT 2019) — aktif mencari posisi <strong>Magang Business Analyst</strong> untuk memberikan solusi berbasis data.',
      hero_stat_gpa: 'IPK Kumulatif',
      hero_stat_projects: 'Proyek Utama',
      hero_stat_audit: 'Fokus Audit TI',
      hero_cta_projects: 'Lihat Proyek',
      hero_cta_cv: 'Lihat CV / Resume',
      hero_cta_contact: 'Hubungi Saya',
      hero_connect_label: 'Kontak Langsung:',

      // Profile terminal
      profile_academic_title: 'profile.system.json',
      profile_status: '"Semester 5 Aktif"',
      profile_track: '"Analisis Bisnis & Sistem"',
      profile_location: 'Malang & Kediri, Jawa Timur',
      profile_badge_process: 'Pemodelan Proses',
      profile_badge_db: 'Desain Database',
      profile_badge_audit: 'Audit TI',
      profile_json_status_key: '"statusAkademik":',
      profile_json_inst_key: '"institusi":',
      profile_json_track_key: '"jalurUtama":',
      profile_json_gov_key: '"frameworkTataKelola":',
      profile_json_stack_key: '"stackUtama":',
      profile_photo_alt: 'Nety Sulistyorini — Foto Profesional',

      // About
      about_tag: 'ARSITEKTUR UTAMA',
      about_title: 'Ketelitian Analitis Berpadu Rekayasa Enterprise',
      about_desc: 'Menerjemahkan kebutuhan bisnis yang kompleks menjadi arsitektur teknis yang kokoh dan berbasis data.',

      pillar1_badge: 'PILAR 01',
      pillar1_title: 'Analisis Bisnis & Sistem',
      pillar1_desc: 'Menganalisis kebutuhan enterprise, memodelkan alur proses bisnis dengan BPMN/UML, menyusun Software Requirement Specification (SRS), dan menerjemahkan kendala operasional menjadi solusi fungsional yang terukur.',
      pillar1_b1: 'Alur Kerja Sistem BPMN 2.0 & UML',
      pillar1_b2: 'Spesifikasi Kebutuhan Perangkat Lunak (SRS)',
      pillar1_b3: 'Analisis Kesenjangan & Pemetaan As-Is / To-Be',

      pillar2_badge: 'PILAR 02',
      pillar2_title: 'Arsitektur Data & Tata Kelola',
      pillar2_desc: 'Merancang skema relasional, membangun data warehouse multidimensi, mengoptimasi query SQL, serta menyelaraskan kapabilitas TI dengan sasaran bisnis melalui framework COBIT 2019.',
      pillar2_b1: 'Skema Relasional & Data Mart Multidimensi',
      pillar2_b2: 'Penyelarasan Tata Kelola COBIT 2019',
      pillar2_b3: 'Pipeline ETL & Dasbor Eksekutif',

      pillar3_badge: 'PILAR 03',
      pillar3_title: 'Eksekusi Agile & Implementasi',
      pillar3_desc: 'Berkolaborasi dalam sprint Scrum, mengoordinasikan User Acceptance Testing (UAT), mengelola product backlog, dan mengawal implementasi teknis dari tahap perancangan hingga rilis produksi.',
      pillar3_b1: 'Sprint Scrum & Prioritisasi Backlog',
      pillar3_b2: 'Penandatanganan User Acceptance Testing (UAT)',
      pillar3_b3: 'Penyelarasan Rekayasa Lintas Fungsi',

      // Skills
      skills_tag: 'MATRIKS KOMPETENSI',
      skills_title: 'Keahlian Teknis & Analitis',
      skills_desc: 'Kumpulan metodologi, framework, dan perangkat lunak yang digunakan dalam analisis sistem dan perancangan enterprise.',
      skill_cat1: 'Analisis Bisnis & Sistem',
      skill_ba_1: 'BPMN 2.0 & Pemodelan Proses',
      skill_ba_2: 'Arsitektur Sistem (UML, ERD, DFD)',
      skill_ba_3: 'Rekayasa Kebutuhan (SRS & User Stories)',
      skill_cat2: 'Data & Business Intelligence',
      skill_data_1: 'Basis Data Relasional & Optimasi SQL',
      skill_data_2: 'Data Warehouse & Desain Skema Bintang',
      skill_data_3: 'Business Intelligence & Dasbor KPI',
      skill_cat3: 'Arsitektur & Pengembangan',
      skill_web_1: 'Framework MVC PHP & Laravel',
      skill_web_2: 'React.js & Arsitektur UI Front-End',
      skill_web_3: 'Integrasi RESTful API & Postman',
      skill_cat4: 'Tata Kelola, ERP & Agile',
      skill_gov_1: 'Tata Kelola TI (Framework COBIT 2019)',
      skill_gov_2: 'Metodologi & Kontrol Audit TI',
      skill_gov_3: 'Manajemen Backlog Agile / Scrum',

      // Projects
      projects_tag: 'PROYEK UNGGULAN',
      projects_title: 'Sistem Enterprise & Solusi Digital',
      projects_desc: 'Sistem bisnis nyata yang dibangun dengan analisis mendalam, arsitektur data terstruktur, dan metodologi pengembangan agile.',
      filter_all: 'Semua Proyek',
      filter_sa: 'Sistem & Audit',
      filter_web: 'Platform Web',
      proj_key_contrib: 'Kontribusi Utama:',
      proj_btn_spec: 'Lihat Spesifikasi Sistem',
      proj_btn_spec_audit: 'Lihat Spesifikasi Audit',
      proj_btn_repo: 'Kode Sumber',
      proj1_badge: 'Aplikasi Web Full-Stack',
      proj1_title: 'Evento',
      proj1_sub: 'Aplikasi Web Manajemen Acara',
      proj1_desc: 'Platform orkestrasi acara terpusat yang dirancang untuk merampingkan penjualan tiket, pendaftaran peserta, manajemen jadwal, dan dasbor administratif penyelenggara dengan autentikasi aman.',
      proj1_contrib1: 'Merancang skema basis data relasional & ERD di MySQL',
      proj1_contrib2: 'Membangun UI React responsif dan menghubungkan REST API Laravel',
      proj2_badge: 'Mobile & Keberlanjutan',
      proj2_title: 'ReWorth',
      proj2_sub: 'Sistem Bank Sampah',
      proj2_desc: 'Platform bank sampah digital yang memberi insentif pemilahan sampah masyarakat. Mengonversi setoran daur ulang menjadi poin digital yang terverifikasi dan saldo keuangan dengan pelacakan berat otomatis.',
      proj2_contrib1: 'Merancang basis data ternormalisasi untuk transaksi sampah',
      proj2_contrib2: 'Mengembangkan buku besar backend PHP untuk logika harga sampah',
      proj3_badge: 'Sistem Informasi Akademik',
      proj3_title: 'Sistem Lab Data',
      proj3_sub: 'Sistem Informasi Laboratorium Polinema',
      proj3_desc: 'Portal manajemen khusus untuk Laboratorium Teknologi Data di Polinema. Mengelola fasilitas lab, profil anggota, publikasi riset, dan media galeri dengan akses berbasis peran.',
      proj3_contrib1: 'Logika backend terstruktur dalam PHP Native mengikuti pola MVC',
      proj3_contrib2: 'Merancang Stored Procedures & Views untuk query yang dioptimalkan',
      proj4_badge: 'Simulasi Audit TI',
      proj4_title: 'Audit TI BCA',
      proj4_sub: 'Simulasi COBIT 2019',
      proj4_desc: 'Proyek akademik kolaboratif yang mensimulasikan proses audit TI di Bank Central Asia (BCA). Mengevaluasi tata kelola TI, kontrol keamanan, dan risiko operasional menggunakan framework COBIT 2019.',
      proj4_contrib1: 'Menetapkan ruang lingkup audit, matriks risiko, dan domain COBIT 2019',
      proj4_contrib2: 'Menyusun laporan temuan audit & rekomendasi formal',

      // Education
      edu_tag: 'FONDASI AKADEMIK',
      edu_title: 'Pendidikan Formal & Spesialisasi',
      edu_period1: '2023 — Sekarang',
      edu_status1: 'Aktif • Semester 5',
      edu_degree: 'Sarjana Terapan (D-IV) — Sistem Informasi Bisnis',
      edu_institution: 'Politeknik Negeri Malang (Polinema)',
      edu_gpa_label: 'IPK Kumulatif Saat Ini:',
      edu_coursework_title: 'Mata Kuliah Utama Enterprise:',
      course_bi: 'Business Intelligence',
      course_dw: 'Data Warehouse',
      course_sad: 'Analisis & Perancangan Sistem',
      course_audit: 'Audit TI (COBIT 2019)',
      course_erp: 'Perencanaan Sumber Daya Perusahaan (ERP)',
      course_dm: 'Data Mining',
      course_agile: 'Proyek Perangkat Lunak Agile',
      edu_period2: 'Lulus 2023',
      edu_status2: 'Pendidikan Menengah',
      edu_hs_degree: 'Peminatan Ilmu Pengetahuan Sosial (IPS)',
      edu_hs_institution: 'MAN 1 Kota Kediri',
      edu_hs_score: 'Nilai Kelulusan Akhir:',
      edu_hs_desc: 'Membangun fondasi yang kuat dalam dinamika sosial, perilaku organisasi, ekonomi bisnis, dan analisis terstruktur. Aktif dalam kegiatan kepemimpinan dan pendampingan siswa.',

      // Experience
      exp_tag: 'PENGALAMAN & KEPEMIMPINAN',
      exp_title: 'Pengalaman Organisasi & Kepemimpinan',
      exp_badge1: 'Kepemimpinan • 2024',
      exp_role1: 'Koordinator Utama Pendamping',
      exp_desc1: 'Memimpin dan menyelaraskan 30+ pendamping di D-IV Sistem Informasi Bisnis, D-IV Teknik Informatika, dan D-III Teknik Informatika.',
      exp_badge2: 'Departemen • 2024',
      exp_role2: 'Staf Hubungan Eksternal',
      exp_desc2: 'Memfasilitasi diplomasi antar-lembaga, kemitraan industri, dan kunjungan akademik. Menangani korespondensi institusional.',
      exp_badge3: 'Media & Humas • 2024',
      exp_role3: 'Staf Hubungan Masyarakat',
      exp_desc3: 'Merumuskan pengarahan komunikasi strategis, menyusun pengumuman pers resmi, dan mengarahkan tim dokumentasi multimedia.',

      // Achievements
      ach_tag: 'PRESTASI & PENGHARGAAN',
      ach_title: 'Prestasi & Kompetisi Nasional',
      ach_badge: 'Semifinalis Nasional',
      ach_flagship_title: 'Semifinalis — Lomba Bisnis Plan Nasional KATULISTIWA ke-18',
      ach_flagship_org: 'Fakultas Ekonomi dan Bisnis, Universitas Brawijaya (2026)',
      ach_flagship_desc: 'Menyusun dan mempresentasikan model bisnis skalabel yang mengintegrasikan logistik circular economy dan peramalan keuangan. Berhasil lolos sebagai semifinalis tingkat nasional di antara 100+ tim universitas se-Indonesia.',

      // Moments
      moments_tag: 'MOMEN',
      moments_title: 'Galeri Organisasi & Kepemimpinan',
      moments_cap1: 'Laboratorium Teknologi Data',
      moments_cap2: 'Kelas MIPA',
      moments_cap3: 'Serah Terima PKS',
      moments_cap4: 'Organisasi Sekolah',
      moments_cap5: 'Kepemimpinan & Tim',
      moments_cap6: 'Tim Kepanitiaan',
      moments_cap7: 'Proyek Kelompok',
      moments_cap8: 'Acara Kepemimpinan',
      moments_cap9: 'Seminar Teknologi',
      moments_cap10: 'Lokakarya TI',
      moments_cap11: 'Foto Bersama',
      moments_cap12: 'Jejaring',
      moments_cap13: 'Profil Akademik',
      moments_cap14: 'Acara Akademik',
      moments_cap15: 'Kehidupan Kampus',
      moments_cap16: 'Kehidupan Kampus',
      moments_cap17: 'Presentasi',
      moments_cap18: 'Profil Profesional',
      moments_cap19: 'Profil Profesional',
      moments_cap20: 'Foto Formal',
      moments_cap21: 'Foto Formal',
      moments_cap22: 'Foto Formal',

      // Contact
      contact_tag: 'HUBUNGI SAYA',
      contact_title: 'Mari Berkolaborasi Membangun Sistem Strategis',
      contact_desc: 'Tertarik berdiskusi mengenai lowongan posisi Business Analyst, audit tata kelola TI, atau kolaborasi proyek? Hubungi melalui kontak langsung atau kirim pesan melalui formulir di bawah.',
      cv_title: 'Curriculum Vitae Resmi',
      cv_sub: 'Resume PDF Terverifikasi',
      cv_desc: 'Dokumen CV terverifikasi yang memuat riwayat pendidikan, IPK 3.76, mata kuliah analisis sistem, prestasi kompetisi bisnis, dan kemampuan rekayasa perangkat lunak.',
      cv_btn: 'Buka & Unduh CV (PDF)',
      contact_channels_title: 'Saluran Kontak Langsung',
      contact_email_title: 'Email Langsung',
      contact_linkedin_title: 'Profil LinkedIn',
      contact_ig_title: 'Profil Instagram',
      form_title: 'Formulir Pesan Cepat',
      form_subtitle: 'Dilindungi dengan validasi spam waktu nyata & tantangan verifikasi matematika.',
      form_name: 'Nama Lengkap *',
      form_name_ph: 'mis. Jane Doe',
      form_email: 'Email Profesional *',
      form_email_ph: 'jane@perusahaan.com',
      form_subject: 'Subjek / Keperluan *',
      form_subject_ph: 'mis. Lowongan Magang Business Analyst',
      form_message: 'Pesan Lengkap *',
      form_message_ph: 'Silakan jelaskan proyek, pertanyaan, atau linimasa Anda dalam minimal 25 karakter...',
      form_verify: 'Verifikasi Keamanan *',
      form_verify_badge: 'Gerbang Anti-Spam',
      form_captcha_ph: 'Masukkan jawaban',
      form_submit: 'Kirim Pesan via Gmail',
      form_char_unit: 'karakter',
      success_title: 'Draf Pesan Dibuat!',
      success_desc: 'Pesan Anda telah diformat ke Gmail Web Compose dan disalin langsung ke clipboard Anda. Anda dapat mengirimnya langsung atau mengatur ulang formulir di bawah ini.',
      success_reset: 'Kirim Pesan Lain',

      // Footer
      footer_role: 'Kandidat Business & System Analyst',
      footer_bio: 'Mahasiswa Sarjana Terapan (D-IV) Sistem Informasi Bisnis Politeknik Negeri Malang. Menghubungkan proses enterprise dengan arsitektur TI dan tata kelola data yang andal.',
      footer_nav: 'Navigasi Halaman',
      footer_nav_cv: 'Resume (CV)',
      footer_connect: 'Kontak Langsung',
      footer_top: 'ATAS',
      footer_clock_label: 'Malang, Indonesia (WIB)',
      footer_copyright_suffix: 'D-IV Sistem Informasi Bisnis • Politeknik Negeri Malang',

      // Toast
      toast_copied_default: 'Berhasil disalin ke clipboard!',
      toast_email_copied: 'Email disalin',
      toast_draft_copied: 'Draf pesan dibuat & disalin ke clipboard!',
      toast_copied_prefix: 'Disalin:',

      // Modal
      modal_problem: 'Konteks & Masalah:',
      modal_solution: 'Solusi Arsitektur:',
      modal_features: 'Fitur & Fungsionalitas Utama:',
      modal_stack: 'Teknologi Digunakan:',
      modal_view_github: 'Lihat Kode di GitHub',
      modal_internal: 'Proyek Akademik Internal',
      modal_close: 'Tutup Spesifikasi',
      modal_role_sep: '•'
    }
  };

  // ========================================================================
  // 3a. APPLY LANGUAGE — updates EVERY element (text, placeholder, alt, title)
  // ========================================================================
  const getCurrentLang = () => localStorage.getItem('portfolio-lang') || 'en';

  const applyLanguage = (lang) => {
    const dict = translations[lang] || translations.en;

    // 1. Text content / innerHTML
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    // 2. Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    // 3. Alt attributes
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
    });

    // 4. Title attributes
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) el.setAttribute('title', dict[key]);
    });

    // 5. Message counter (dynamic)
    const counterEl = document.getElementById('msg-counter');
    const msgArea = document.getElementById('contact-message');
    if (counterEl) {
      const len = msgArea ? msgArea.value.trim().length : 0;
      const unit = dict.form_char_unit || 'characters';
      counterEl.setAttribute('data-counter-unit', unit);
      counterEl.textContent = `${len} / 25 ${unit}`;
    }

    // 6. Header/footer badges
    const updateBadges = (enId, idId) => {
      const enEl = document.getElementById(enId);
      const idEl = document.getElementById(idId);
      if (!enEl || !idEl) return;
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
    };
    updateBadges('lang-badge-en', 'lang-badge-id');
    updateBadges('mobile-lang-badge-en', 'mobile-lang-badge-id');

    // 7. Title/tooltips on lang & theme buttons
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) langBtn.setAttribute('title', lang === 'id'
      ? 'Ganti Bahasa (EN / ID)'
      : 'Switch Language (EN / ID)');
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) themeBtn.setAttribute('title', lang === 'id'
      ? 'Ganti Tema Terang/Gelap'
      : 'Toggle Light/Dark Theme');

    // 8. Document title & meta description
    document.title = lang === 'id'
      ? 'Nety Sulistyorini | Portofolio Sistem Informasi & Analis Bisnis'
      : 'Nety Sulistyorini | Information Systems & Business Analyst Portfolio';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', lang === 'id'
      ? 'Portofolio Nety Sulistyorini - Mahasiswa Sistem Informasi Bisnis Politeknik Negeri Malang. Kandidat Auditor TI, Analis Sistem & Analis Data.'
      : 'Portfolio of Nety Sulistyorini - Information Systems Business Student at State Polytechnic of Malang. Aspiring IT Auditor, System Analyst & Data Analyst.');

    // 9. Persist
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.setAttribute('lang', lang);

    // 10. Notify listeners (footer clock, etc.)
    window.dispatchEvent(new CustomEvent('portfolio:lang-changed', { detail: { lang, dict } }));
  };

  applyLanguage(getCurrentLang());

  const toggleLanguage = () => {
    applyLanguage(getCurrentLang() === 'en' ? 'id' : 'en');
  };

  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const mobileLangToggleBtn = document.getElementById('mobile-lang-toggle-btn');
  if (langToggleBtn) langToggleBtn.addEventListener('click', toggleLanguage);
  if (mobileLangToggleBtn) mobileLangToggleBtn.addEventListener('click', toggleLanguage);


  // ========================================================================
  // 4. CARD SCROLL REVEAL
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
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
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
    if (navbar) navbar.classList.toggle('scrolled', scrollY > 20);

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
  // 6. MOBILE MENU
  // ========================================================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconBars = document.getElementById('menu-icon-bars');
  const menuIconClose = document.getElementById('menu-icon-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    const toggleMenu = () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', !isHidden);
      if (menuIconBars) menuIconBars.classList.toggle('hidden', isHidden);
      if (menuIconClose) menuIconClose.classList.toggle('hidden', !isHidden);
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
  // 7. ACTIVE NAV LINK
  // ========================================================================
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          desktopNavLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { root: null, rootMargin: '-20% 0px -70% 0px', threshold: 0 });
    sections.forEach(sec => navObserver.observe(sec));
  }


  // ========================================================================
  // 8. BACK TO TOP
  // ========================================================================
  document.querySelectorAll('#back-to-top, #floating-back-to-top').forEach(btn => {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
  // 10. TOAST & COPY EMAIL
  // ========================================================================
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimeout;

  const showToast = (message) => {
    if (!toast || !toastMessage) return;
    const dict = translations[getCurrentLang()];
    toastMessage.textContent = message || dict.toast_copied_default;
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
    document.getElementById('copy-email-contact-btn')
  ];
  copyButtons.forEach(btn => {
    if (!btn) return;
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'netysulistyorini.edu@gmail.com';
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          const t = document.createElement('textarea');
          t.value = email;
          t.style.position = 'fixed';
          t.style.left = '-999999px';
          document.body.appendChild(t);
          t.focus();
          t.select();
          document.execCommand('copy');
          t.remove();
        }
        const dict = translations[getCurrentLang()];
        showToast(`${dict.toast_email_copied}: ${email}`);
      } catch (err) {
        showToast(`Email: ${email}`);
      }
    });
  });


  // ========================================================================
  // 11. LIVE LOCAL CLOCK — reacts to language changes
  // ========================================================================
  const localTimeEl = document.getElementById('footer-local-time');
  const updateLocalTime = () => {
    if (!localTimeEl) return;
    try {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
      });
      const lang = getCurrentLang();
      const suffix = lang === 'id' ? 'WIB • Malang, ID' : 'WIB • Malang, ID';
      localTimeEl.textContent = `${timeStr} ${suffix}`;
    } catch (e) {
      localTimeEl.textContent = 'Malang, Indonesia (WIB)';
    }
  };
  updateLocalTime();
  setInterval(updateLocalTime, 1000);
  window.addEventListener('portfolio:lang-changed', updateLocalTime);


  // ========================================================================
  // 12. ANTI-SPAM CONTACT FORM
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

  const updateCounter = () => {
    if (!msgCounter || !msgTextarea) return;
    const len = msgTextarea.value.trim().length;
    const dict = translations[getCurrentLang()];
    const unit = dict.form_char_unit || 'characters';
    msgCounter.textContent = `${len} / 25 ${unit}`;
    if (len >= 25) {
      msgCounter.classList.remove('text-slate-400', 'text-rose-500');
      msgCounter.classList.add('text-emerald-600', 'dark:text-emerald-400');
    } else {
      msgCounter.classList.remove('text-emerald-600', 'dark:text-emerald-400');
      msgCounter.classList.add('text-slate-400');
    }
  };
  if (msgTextarea) msgTextarea.addEventListener('input', updateCounter);
  window.addEventListener('portfolio:lang-changed', updateCounter);

  const isGibberish = (str) => {
    if (/(.)\1{3,}/i.test(str)) return true;
    return [/asdfgh/i, /qwerty/i, /zxcvbn/i, /hjkl/i, /12345/i].some(p => p.test(str));
  };
  const validateEmailFormat = (email) => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    if (!re.test(email)) return false;
    const blacklisted = ['test.com', 'example.com', 'fake.com', 'asdf.com', 'temp.com'];
    return !blacklisted.includes(email.split('@')[1].toLowerCase());
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

      [ [nameInput, errName], [emailInput, errEmail], [subjectInput, errSubject],
        [messageInput, errMessage], [captchaInput, errCaptcha]
      ].forEach(([i, e]) => clearError(i, e));

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim();
      const message = messageInput.value.trim();
      const userCaptcha = parseInt(captchaInput.value.trim(), 10);
      const isId = getCurrentLang() === 'id';

      let isValid = true;
      let firstInvalidInput = null;

      if (name.length < 3) {
        setError(nameInput, errName, isId ? 'Nama terlalu pendek (minimal 3 huruf).' : 'Name is too short (min 3 letters).');
        isValid = false; if (!firstInvalidInput) firstInvalidInput = nameInput;
      } else if (!/^[a-zA-Z\s.,'-]+$/.test(name)) {
        setError(nameInput, errName, isId ? 'Nama hanya boleh berupa huruf asli.' : 'Name can only contain genuine letters.');
        isValid = false; if (!firstInvalidInput) firstInvalidInput = nameInput;
      } else if (isGibberish(name)) {
        setError(nameInput, errName, isId ? 'Nama tampak acak atau tidak valid.' : 'Name appears random or invalid.');
        isValid = false; if (!firstInvalidInput) firstInvalidInput = nameInput;
      }

      if (!validateEmailFormat(email)) {
        setError(emailInput, errEmail, isId ? 'Format email tidak valid (contoh: nama@perusahaan.com).' : 'Please enter a valid email format.');
        isValid = false; if (!firstInvalidInput) firstInvalidInput = emailInput;
      }

      if (subject.length < 4) {
        setError(subjectInput, errSubject, isId ? 'Harap cantumkan subjek atau tujuan pesan yang jelas.' : 'Please enter a clear subject or purpose.');
        isValid = false; if (!firstInvalidInput) firstInvalidInput = subjectInput;
      }

      const wordCount = message.split(/\s+/).filter(w => w.length > 0).length;
      if (message.length < 25) {
        setError(messageInput, errMessage, isId ? 'Pesan terlalu singkat (minimal 25 karakter).' : 'Message is too short (min 25 characters).');
        isValid = false; if (!firstInvalidInput) firstInvalidInput = messageInput;
      } else if (wordCount < 4) {
        setError(messageInput, errMessage, isId ? 'Harap tuliskan kalimat lengkap (minimal 4 kata).' : 'Please write a complete thought (min 4 words).');
        isValid = false; if (!firstInvalidInput) firstInvalidInput = messageInput;
      } else if (isGibberish(message)) {
        setError(messageInput, errMessage, isId ? 'Teks pesan tidak boleh berupa ketikan acak/asal.' : 'Message appears to be random keyboard mash.');
        isValid = false; if (!firstInvalidInput) firstInvalidInput = messageInput;
      }

      if (isNaN(userCaptcha) || userCaptcha !== captchaResult) {
        setError(captchaInput, errCaptcha, isId ? 'Jawaban verifikasi matematika belum tepat.' : 'Incorrect math challenge answer.');
        isValid = false; if (!firstInvalidInput) firstInvalidInput = captchaInput;
      }

      if (!isValid) {
        if (firstInvalidInput) firstInvalidInput.focus();
        contactForm.classList.remove('form-shake');
        void contactForm.offsetWidth;
        contactForm.classList.add('form-shake');
        return;
      }

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

      const dict = translations[getCurrentLang()];
      showToast(dict.toast_draft_copied);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (contactForm) contactForm.reset();
      generateCaptcha();
      updateCounter();
      if (successBox) successBox.classList.add('hidden');
      if (cardBox) cardBox.classList.remove('hidden');
    });
  }


  // ========================================================================
  // 13. PROJECT MODAL (Bilingual specs)
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
    const lang = getCurrentLang();
    const data = project[lang] || project.en;
    const dict = translations[lang];
    const hasGithub = !!(data.githubUrl);

    modalContent.innerHTML = `
      <div class="space-y-5 text-left">
        <div>
          <span class="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold border border-[var(--accent-berry-border)] bg-[var(--accent-berry-light)] text-[var(--accent-berry)] mb-2">
            ${data.badge}
          </span>
          <h3 class="text-2xl sm:text-3xl font-black text-[var(--text-main)] tracking-tight">${data.title}</h3>
          <p class="text-xs font-mono text-[var(--accent-berry)] mt-1 font-semibold">${data.role} ${dict.modal_role_sep} ${data.period}</p>
        </div>

        <div class="space-y-1.5">
          <h4 class="text-xs font-mono uppercase tracking-wider text-[var(--accent-berry)] font-bold">${dict.modal_problem}</h4>
          <p class="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
            ${data.problem}
          </p>
        </div>

        <div class="space-y-1.5">
          <h4 class="text-xs font-mono uppercase tracking-wider text-[var(--accent-berry)] font-bold">${dict.modal_solution}</h4>
          <p class="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-surface)] p-4 rounded-xl border border-[var(--border-subtle)]">
            ${data.solution}
          </p>
        </div>

        <div class="space-y-1.5">
          <h4 class="text-xs font-mono uppercase tracking-wider text-[var(--accent-berry)] font-bold">${dict.modal_features}</h4>
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
          <h4 class="text-xs font-mono uppercase tracking-wider text-[var(--accent-berry)] font-bold">${dict.modal_stack}</h4>
          <div class="flex flex-wrap gap-2">
            ${data.stack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)]">
          ${hasGithub
            ? `<a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-berry px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
                <i class="fa-brands fa-github text-sm"></i>
                <span>${dict.modal_view_github}</span>
              </a>`
            : `<span class="text-xs font-mono text-[var(--text-secondary)] flex items-center gap-2 italic">
                <i class="fa-solid fa-lock text-xs text-[var(--accent-berry)]"></i>
                ${dict.modal_internal}
              </span>`}
          <button id="modal-inner-close" class="btn-outline-berry px-4 py-2 rounded-xl text-xs font-mono cursor-pointer">
            ${dict.modal_close}
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
    setTimeout(() => modal.classList.add('hidden'), 280);
  };

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.getAttribute('data-project')));
  });
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) closeModal();
  });

  // Re-open modal (if open) on language change
  window.addEventListener('portfolio:lang-changed', () => {
    // nothing — modal text is fixed at open-time; user re-opens to see new lang
  });


  // ========================================================================
  // 14. SKILL BAR ANIMATION
  // ========================================================================
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  if ('IntersectionObserver' in window && skillBars.length > 0) {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const targetWidth = bar.getAttribute('data-width') || bar.style.width;
          bar.style.width = '0%';
          setTimeout(() => { bar.style.width = targetWidth; }, 120);
          skillObserver.unobserve(bar);
        }
      });
    }, { threshold: 0.25 });
    skillBars.forEach(bar => skillObserver.observe(bar));
  }

});