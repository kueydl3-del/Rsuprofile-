/**
 * Main JavaScript logic for Namon Karnsa-art (ณมน การสอาด) - Hand-Drawn & Digital Artist Portfolio
 * Dynamic typing, Sketch Modals, Filter, Counters, Pastel Confetti, Theme Switcher
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initTheme();
  initTypingEffect();
  renderStats();
  renderEducation();
  renderSkills();
  renderProjects();
  renderCertificates();
  renderTestimonials();
  renderContactInfo();
  initProjectFilter();
  initSkillTabs();
  initScrollSpy();
  initCounters();
  initCardTilt();
  initContactForm();
  initMobileMenu();
  initPrintCV();
});

/* ==========================================================================
   1. THEME SWITCHER (Hand-drawn Pastel & Craft Themes)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('namon_craft_theme') || 'default';
  setTheme(savedTheme);

  const themeBtns = document.querySelectorAll('[data-set-theme]');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const theme = btn.getAttribute('data-set-theme');
      setTheme(theme);
      showToast('🎨 เปลี่ยนโทนสีสำเร็จ', `สลับเป็นธีม ${getThemeName(theme)} เรียบร้อยแล้ว`, 'ri-palette-line');
    });
  });
}

function setTheme(theme) {
  if (theme === 'default') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
  localStorage.setItem('namon_craft_theme', theme);

  // Update active state in UI
  document.querySelectorAll('[data-set-theme]').forEach(btn => {
    if (btn.getAttribute('data-set-theme') === theme) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function getThemeName(theme) {
  switch (theme) {
    case 'mint': return 'Mint & Peach (มิ้นต์ & พีชสดใส)';
    case 'sky': return 'Sky & Butter (ฟ้าพาสเทล & ครีม)';
    case 'mono': return 'Monochrome Sketchbook (สมุดสเก็ตช์มินิมอล)';
    default: return 'Butter & Lavender (#FEEFC6 & #DDD5F3)';
  }
}

/* ==========================================================================
   2. DYNAMIC TYPING EFFECT (Artist & Creative Roles)
   ========================================================================== */
function initTypingEffect() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const titles = PORTFOLIO_DATA.profile.titlesTh || [
    "Digital Artist & UI/UX Designer 🎨",
    "Front-End Creative Developer 💻",
    "Hand-Drawn & Media Creator ✏️",
    "AI Arts & Innovation Explorer ✨"
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      typingElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typingElement.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 95;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      typingSpeed = 2200; // Pause when complete
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   3. RENDER STATS & ANIMATED COUNTERS
   ========================================================================== */
function renderStats() {
  const statsContainer = document.getElementById('stats-grid');
  if (!statsContainer || !PORTFOLIO_DATA.profile.stats) return;

  statsContainer.innerHTML = PORTFOLIO_DATA.profile.stats.map((stat, idx) => `
    <div class="sketch-card stat-card">
      <div class="washi-tape ${idx % 2 === 0 ? 'washi-lavender' : 'washi-peach'}"></div>
      <i class="${stat.icon} stat-icon"></i>
      <div class="stat-number-wrap">
        <span class="stat-number" data-target="${stat.number}">0</span>
        <span class="stat-suffix">${stat.suffix}</span>
      </div>
      <div class="stat-label">${stat.labelTh}</div>
    </div>
  `).join('');
}

function initCounters() {
  const counterElements = document.querySelectorAll('.stat-number');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10) || 0;
        animateNumber(el, target, 1400);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counterElements.forEach(el => observer.observe(el));
}

function animateNumber(element, target, duration) {
  let start = 0;
  const stepTime = 20;
  const totalSteps = duration / stepTime;
  const increment = target / totalSteps;

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, stepTime);
}

/* ==========================================================================
   4. RENDER EDUCATION TIMELINE
   ========================================================================== */
function renderEducation() {
  const container = document.getElementById('education-timeline');
  if (!container || !PORTFOLIO_DATA.education) return;

  container.innerHTML = PORTFOLIO_DATA.education.map(edu => `
    <div class="timeline-item">
      <div class="timeline-node"><i class="ri-pencil-line" style="font-size: 14px; color: var(--stroke-pencil);"></i></div>
      <div class="sketch-card timeline-card">
        <div class="washi-tape washi-lavender"></div>
        <div class="timeline-header">
          <span class="timeline-year-tag"><i class="ri-calendar-event-line"></i> ${edu.year}</span>
          <span class="timeline-gpa-tag"><i class="ri-star-smile-fill"></i> ${edu.gpa}</span>
        </div>
        <h3 class="timeline-degree">${edu.degree}</h3>
        <h4 class="timeline-faculty">${edu.faculty}</h4>
        <p class="timeline-institution"><i class="ri-building-line"></i> ${edu.institution}</p>
        <p class="timeline-desc">${edu.description}</p>
        <ul class="timeline-highlights">
          ${edu.highlights.map(h => `
            <li class="timeline-highlight-item">
              <i class="ri-checkbox-circle-fill"></i>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   5. RENDER SKILLS & TABS
   ========================================================================== */
function renderSkills() {
  const designContainer = document.getElementById('skills-design');
  const techContainer = document.getElementById('skills-tech');
  const aiContainer = document.getElementById('skills-ai');
  const softContainer = document.getElementById('skills-soft');

  const { design, technical, aiAndTools, softSkills } = PORTFOLIO_DATA.skills;

  if (designContainer && design) {
    designContainer.innerHTML = design.map(renderSkillItem).join('');
  }
  if (techContainer && technical) {
    techContainer.innerHTML = technical.map(renderSkillItem).join('');
  }
  if (aiContainer && aiAndTools) {
    aiContainer.innerHTML = aiAndTools.map(renderSkillItem).join('');
  }
  if (softContainer && softSkills) {
    softContainer.innerHTML = softSkills.map(s => `
      <div class="sketch-card soft-skill-card">
        <div class="soft-skill-icon"><i class="${s.icon}"></i></div>
        <h4 class="soft-skill-title">${s.name}</h4>
        <p class="soft-skill-desc">${s.desc}</p>
      </div>
    `).join('');
  }

  initSkillBarAnimation();
}

function renderSkillItem(skill) {
  return `
    <div class="sketch-card skill-card">
      <div class="skill-card-top">
        <div class="skill-info">
          <div class="skill-icon-box"><i class="${skill.icon}"></i></div>
          <div class="skill-name">${skill.name}</div>
        </div>
        <div class="skill-percent">${skill.level}%</div>
      </div>
      <div class="skill-meter-bg">
        <div class="skill-meter-fill" data-level="${skill.level}"></div>
      </div>
      <div class="skill-desc">${skill.desc}</div>
    </div>
  `;
}

function initSkillBarAnimation() {
  const fills = document.querySelectorAll('.skill-meter-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const level = fill.getAttribute('data-level');
        fill.style.width = `${level}%`;
      }
    });
  }, { threshold: 0.2 });

  fills.forEach(fill => observer.observe(fill));
}

function initSkillTabs() {
  const tabBtns = document.querySelectorAll('.skill-tab-btn');
  const panes = document.querySelectorAll('.skills-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      tabBtns.forEach(b => b.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePane = document.getElementById(targetId);
      if (activePane) {
        activePane.classList.add('active');
        activePane.querySelectorAll('.skill-meter-fill').forEach(fill => {
          const level = fill.getAttribute('data-level');
          fill.style.width = '0';
          setTimeout(() => { fill.style.width = `${level}%`; }, 50);
        });
      }
    });
  });
}

/* ==========================================================================
   6. RENDER PROJECTS & FILTER & MODAL
   ========================================================================== */
function renderProjects(category = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container || !PORTFOLIO_DATA.projects) return;

  const filtered = category === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === category);

  container.innerHTML = filtered.map(p => `
    <div class="sketch-card project-card" onclick="openProjectModal('${p.id}')">
      <div class="washi-tape washi-butter"></div>
      <div class="project-preview" style="background: ${p.gradient};">
        <i class="${p.icon} project-preview-icon"></i>
        <span class="project-badge-tag">${p.badge}</span>
        <span class="project-year-tag">${p.date}</span>
        <div class="project-preview-overlay">
          <span class="btn btn-secondary" style="padding: 6px 16px; font-size: 0.9rem;">
            <i class="ri-eye-line"></i> เปิดดูสมุดงาน
          </span>
        </div>
      </div>
      <div class="project-body">
        <div class="project-category-label">${p.categoryLabel}</div>
        <h3 class="project-title">${p.titleTh}</h3>
        <p class="project-desc">${p.shortDesc}</p>
        <div class="project-tags">
          ${p.techStack.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <div class="project-footer">
          <span class="project-view-btn">
            เปิดดูรายละเอียด <i class="ri-arrow-right-line"></i>
          </span>
        </div>
      </div>
    </div>
  `).join('');
}

function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjects(cat);
    });
  });
}

// Project Modal Handler
window.openProjectModal = function(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const modalBanner = document.getElementById('modal-banner');
  const modalTagRow = document.getElementById('modal-tag-row');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalDescFull = document.getElementById('modal-desc-full');
  const modalHighlights = document.getElementById('modal-highlights');

  modalBanner.style.background = project.gradient;
  modalBanner.innerHTML = `<i class="${project.icon}" style="font-size: 4.8rem; color: var(--stroke-pencil);"></i>`;

  modalTagRow.innerHTML = `
    <span class="project-badge-tag" style="position: static; box-shadow: none;">${project.badge}</span>
    <span class="project-year-tag" style="position: static;">${project.date}</span>
    ${project.techStack.map(t => `<span class="project-tag">${t}</span>`).join('')}
  `;

  modalTitle.textContent = project.titleTh;
  modalSubtitle.textContent = `${project.title} • ${project.categoryLabel}`;
  modalDescFull.textContent = project.fullDesc;

  modalHighlights.innerHTML = project.highlights.map(h => `
    <li>
      <i class="ri-brush-line"></i>
      <span>${h}</span>
    </li>
  `).join('');

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeProjectModal = function() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProjectModal();
});

const modalBackdrop = document.getElementById('project-modal');
if (modalBackdrop) {
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeProjectModal();
  });
}

/* ==========================================================================
   7. RENDER CERTIFICATES, TESTIMONIALS & CONTACT
   ========================================================================== */
function renderCertificates() {
  const container = document.getElementById('certs-grid');
  if (!container || !PORTFOLIO_DATA.certificates) return;

  container.innerHTML = PORTFOLIO_DATA.certificates.map(cert => `
    <div class="sketch-card cert-card">
      <div class="washi-tape washi-mint"></div>
      <div>
        <div class="cert-top">
          <div class="cert-icon-wrap" style="background: ${cert.color};">
            <i class="${cert.icon}"></i>
          </div>
          <span class="cert-badge">${cert.badge}</span>
        </div>
        <h3 class="cert-title">${cert.title}</h3>
        <div class="cert-issuer"><i class="ri-verified-badge-line"></i> ${cert.issuer} • ${cert.year}</div>
        <p class="cert-desc">${cert.desc}</p>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container || !PORTFOLIO_DATA.testimonials) return;

  container.innerHTML = PORTFOLIO_DATA.testimonials.map(t => `
    <div class="sketch-card testimonial-card">
      <div class="washi-tape washi-peach"></div>
      <i class="ri-double-quotes-l testimonial-quote-icon"></i>
      <p class="testimonial-text">"${t.quote}"</p>
      <div class="testimonial-author">
        <div class="author-avatar" style="background: ${t.avatarBg};">
          ${t.author.charAt(0)}
        </div>
        <div>
          <div class="author-name">${t.author}</div>
          <div class="author-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderContactInfo() {
  const container = document.getElementById('contact-cards');
  if (!container || !PORTFOLIO_DATA.profile) return;

  const { email, phone, lineId, location, github, linkedin } = PORTFOLIO_DATA.profile;

  container.innerHTML = `
    <a href="mailto:${email}" class="sketch-card contact-card-item">
      <div class="contact-icon-box"><i class="ri-mail-send-line"></i></div>
      <div>
        <div class="contact-item-title">อีเมลติดต่อ (Email)</div>
        <div class="contact-item-val">${email}</div>
      </div>
    </a>

    <a href="tel:${phone}" class="sketch-card contact-card-item">
      <div class="contact-icon-box"><i class="ri-phone-line"></i></div>
      <div>
        <div class="contact-item-title">เบอร์โทรศัพท์ (Phone)</div>
        <div class="contact-item-val">${phone}</div>
      </div>
    </a>

    <div class="sketch-card contact-card-item">
      <div class="contact-icon-box"><i class="ri-chat-1-line"></i></div>
      <div>
        <div class="contact-item-title">LINE ID</div>
        <div class="contact-item-val">${lineId}</div>
      </div>
    </div>

    <div class="sketch-card contact-card-item">
      <div class="contact-icon-box"><i class="ri-map-pin-line"></i></div>
      <div>
        <div class="contact-item-title">ที่อยู่สตูดิโอ (Location)</div>
        <div class="contact-item-val">${location}</div>
      </div>
    </div>

    <div class="sketch-card contact-card-item">
      <div class="contact-icon-box"><i class="ri-links-line"></i></div>
      <div>
        <div class="contact-item-title">Social & Portfolios</div>
        <div style="display: flex; gap: 10px; margin-top: 6px;">
          <a href="${github}" target="_blank" class="btn-icon" title="GitHub"><i class="ri-github-line"></i></a>
          <a href="${linkedin}" target="_blank" class="btn-icon" title="LinkedIn"><i class="ri-linkedin-line"></i></a>
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   8. CONTACT FORM WITH CELEBRATION & VALIDATION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('sender-name');
    const emailInput = document.getElementById('sender-email');
    const messageInput = document.getElementById('sender-message');

    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      showToast('⚠️ โปรดกรอกข้อมูล', 'กรุณากรอกชื่อ อีเมล และข้อความให้ครบถ้วน', 'ri-alert-line');
      return;
    }

    // Trigger celebration pastel confetti
    triggerPastelConfetti();

    showToast(
      '💌 ส่งข้อความเรียบร้อย!',
      `ขอบคุณค่ะคุณ ${nameInput.value} ข้อความได้ส่งถึงคุณณมนแล้ว`,
      'ri-checkbox-circle-line'
    );

    form.reset();
  });
}

// Pastel & Craft Confetti Particles
function triggerPastelConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#FEEFC6', '#DDD5F3', '#FFD1DC', '#D5F3E3', '#D5EAF3', '#2D2A32'];

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 15,
      vy: (Math.random() - 0.7) * 15,
      size: Math.random() * 9 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10,
      gravity: 0.35,
      opacity: 1
    });
  }

  let animationFrame;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.vRot;
      p.opacity -= 0.012;

      if (p.opacity > 0) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.strokeStyle = '#2D2A32';
        ctx.lineWidth = 1;
        ctx.globalAlpha = p.opacity;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.strokeRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (alive) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animationFrame);
      canvas.remove();
    }
  }

  animate();
}

/* ==========================================================================
   9. TOAST NOTIFICATION UTILITY
   ========================================================================== */
function showToast(title, msg, iconClass = 'ri-information-line') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="${iconClass} toast-icon"></i>
    <div>
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${msg}</div>
    </div>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 50);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

/* ==========================================================================
   10. SCROLL SPY & MOBILE MENU & PRINT CV
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

function initPrintCV() {
  const printBtns = document.querySelectorAll('.action-print-cv');
  printBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('📄 กำลังจัดหน้า CV', 'เปิดหน้าต่างสั่งพิมพ์ / บันทึก PDF ขนาด A4...', 'ri-printer-line');
      setTimeout(() => {
        window.print();
      }, 400);
    });
  });
}

/* ==========================================================================
   11. CARD TILT ON MOUSEMOVE
   ========================================================================== */
function initCardTilt() {
  const tiltCards = document.querySelectorAll('[data-tilt]');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
}
