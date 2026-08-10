/* ==========================================================================
   Apple-Style Scrollytelling & Interaction Engine (GSAP + ScrollTrigger)
   ========================================================================== */

// Register GSAP ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// Skill Categories Dataset
const SKILLS_DATA = [
  {
    step: "01 / 06",
    category: "Programming Languages",
    primary: "Java — Primary Language",
    label: "Java / Code",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2997ff" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    tags: [
      { name: "Java (Primary)", primary: true },
      { name: "C" }, { name: "C++" }, { name: "C#" }, { name: "Python" },
      { name: "Dart" }, { name: "JavaScript" }, { name: "TypeScript" }
    ]
  },
  {
    step: "02 / 06",
    category: "Software Development",
    primary: "Full-Stack & Mobile Systems",
    label: "Software Dev",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2997ff" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    tags: [
      { name: "Spring Boot", primary: true },
      { name: "Java SE / EE" }, { name: "Android SDK" }, { name: "Flutter", primary: true },
      { name: "Next.js" }, { name: "Express.js" }
    ]
  },
  {
    step: "03 / 06",
    category: "Robotics & Embedded Systems",
    primary: "Autonomous Hardware & Firmware",
    label: "Robotics / IoT",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2997ff" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>`,
    tags: [
      { name: "ROS 2", primary: true },
      { name: "Arduino" }, { name: "ESP32", primary: true }, { name: "Raspberry Pi" },
      { name: "Embedded Programming" }, { name: "Motor Control" }, { name: "Sensors" },
      { name: "Automation" }, { name: "Robotics Software" }
    ]
  },
  {
    step: "04 / 06",
    category: "Databases & Backend",
    primary: "Relational, NoSQL & BaaS",
    label: "Backend & DB",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2997ff" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    tags: [
      { name: "MySQL", primary: true },
      { name: "PostgreSQL", primary: true },
      { name: "Firebase" }, { name: "Supabase" }, { name: "Appwrite" }
    ]
  },
  {
    step: "05 / 06",
    category: "Engineering Software",
    primary: "CAD Modeling & Simulation",
    label: "CAD & Simulation",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2997ff" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    tags: [
      { name: "MATLAB", primary: true },
      { name: "AutoCAD" },
      { name: "SolidWorks", primary: true }
    ]
  },
  {
    step: "06 / 06",
    category: "Areas of Interest",
    primary: "Multidisciplinary Systems Design",
    label: "Interests & Vision",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2997ff" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    tags: [
      { name: "Robotics", primary: true },
      { name: "Automation" }, { name: "Embedded Systems" }, { name: "Mechanical Engineering" },
      { name: "Electronics" }, { name: "Software Engineering" }, { name: "Intelligent Systems", primary: true },
      { name: "Control Systems" }, { name: "System Design" }
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  // Wait a tick for fonts/layout to settle before initializing ScrollTrigger
  setTimeout(() => {
    initHeroScrollytelling();
    initWhoIAmScrollytelling();
    initSkillsScrollytelling();
    initProjectsScrollytelling();
    initSoftwareProjectsScrollytelling();
    initOpenSourceProjectsScrollytelling();
    initNavbarScrollState();
    ScrollTrigger.refresh();
  }, 100);
});

/**
 * Hero Pinned Scrollytelling Animation Sequence
 */
function initHeroScrollytelling() {
  const pinWrapper = document.getElementById("hero-pin-section");
  const bgImg = document.getElementById("hero-bg-img");
  const storyCard = document.querySelector(".hero-story-card");
  const badge = document.getElementById("hero-badge");
  const title = document.getElementById("hero-title");
  const bodyParas = document.querySelectorAll(".hero-paragraph");
  const scrollHint = document.getElementById("hero-scroll-hint");
  const curtainOverlay = document.getElementById("hero-curtain");

  if (!pinWrapper || !bgImg) return;

  // 1. Initial Page Load Animation for Text Card
  const loadTl = gsap.timeline({ defaults: { ease: "power3.out" } });
  loadTl
    .to(badge, { opacity: 1, y: 0, duration: 0.6 })
    .to(title, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
    .to(bodyParas, { opacity: 1, y: 0, stagger: 0.15, duration: 0.7 }, "-=0.4")
    .to(scrollHint, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");

  // 2. Master Scroll-Driven Pinning Timeline
  const heroTl = gsap.timeline({
    scrollTrigger: {
      trigger: pinWrapper,
      start: "top top",
      end: "+=150%", 
      scrub: 1.0,
      pin: true,
      anticipatePin: 1
    }
  });

  heroTl
    .to(storyCard, {
      opacity: 0,
      y: -80,
      scale: 0.94,
      duration: 0.3,
      ease: "power2.in"
    }, 0)
    .to(bgImg, {
      scale: 3.5,
      xPercent: 40,
      transformOrigin: "left center",
      duration: 0.8,
      ease: "power1.inOut"
    }, 0)
    .to(curtainOverlay, {
      opacity: 1, // Fade to black to seamlessly match Who I Am dark canvas
      duration: 0.2,
      ease: "power2.in"
    }, 0.8);
}

/**
 * Section 2: Who I Am Scrollytelling Engine with 58-Frame Sequence
 */
function initWhoIAmScrollytelling() {
  const pinWrapper = document.getElementById("who-i-am");
  const canvas = document.getElementById("whoiam-canvas");
  
  if (!pinWrapper || !canvas) return;

  const ctx = canvas.getContext("2d");
  const frameCount = 58; 
  const frames = [];
  const frameObj = { currentFrame: 0 };

  let loadedImages = 0;
  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    const padNum = String(i).padStart(3, "0");
    img.src = `images/whoiam/frames/frame_${padNum}.jpg`;
    img.onload = () => {
      loadedImages++;
      if (loadedImages === 1) {
        renderCanvasFrame(0);
      }
    };
    frames.push(img);
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    renderCanvasFrame(frameObj.currentFrame);
  }

  function renderCanvasFrame(index) {
    const img = frames[Math.min(index, frameCount - 1)];
    if (!img || !img.complete) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    let drawW, drawH, drawX, drawY;

    if (canvasRatio > imgRatio) {
      drawW = canvas.width;
      drawH = canvas.width / imgRatio;
      drawX = 0;
      drawY = (canvas.height - drawH) / 2;
    } else {
      drawW = canvas.height * imgRatio;
      drawH = canvas.height;
      drawX = (canvas.width - drawW) / 2;
      drawY = 0;
    }
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  // Story Segments
  const seg1 = document.getElementById("whoiam-segment-1");
  const seg2 = document.getElementById("whoiam-segment-2");
  const seg3 = document.getElementById("whoiam-segment-3");
  const seg4 = document.getElementById("whoiam-segment-4");
  const whiteOutro = document.getElementById("whoiam-white-outro");

  gsap.set([seg1, seg2, seg3, seg4, whiteOutro], { opacity: 0 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: pinWrapper,
      start: "top top",
      end: "+=600%", // Provides ample scroll distance for reading
      scrub: 1.0,
      pin: true,
      anticipatePin: 1
    }
  });

  const totalDuration = 10;

  // Play video smoothly across the whole timeline
  tl.to(frameObj, {
    currentFrame: frameCount - 1,
    roundProps: "currentFrame",
    ease: "none",
    duration: totalDuration,
    onUpdate: () => renderCanvasFrame(frameObj.currentFrame)
  }, 0);

  // Sequentially crossfade segments
  // Seg 1
  tl.fromTo(seg1, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.0 }, 0)
    .to(seg1, { opacity: 0, y: -40, duration: 1.0 }, 1.5);
  // Seg 2
  tl.fromTo(seg2, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.0 }, 2.5)
    .to(seg2, { opacity: 0, y: -40, duration: 1.0 }, 4.0);
  // Seg 3
  tl.fromTo(seg3, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.0 }, 5.0)
    .to(seg3, { opacity: 0, y: -40, duration: 1.0 }, 6.5);
  // Seg 4
  tl.fromTo(seg4, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.0 }, 7.5)
    .to(seg4, { opacity: 0, y: -40, duration: 1.0 }, 8.8);
  // Seg 5 (White Outro fades over the dark canvas to seamlessly exit)
  tl.fromTo(whiteOutro, { opacity: 0 }, { opacity: 1, duration: 1.0 }, 9.0);
}

/**
 * Section 3: Skills Scrollytelling Engine with Category Cycling
 */
function initSkillsScrollytelling() {
  const pinWrapper = document.getElementById("skills-section");
  const canvas = document.getElementById("skills-canvas");
  if (!pinWrapper || !canvas) return;

  const ctx = canvas.getContext("2d");
  const frameCount = 192;
  const frames = [];
  const frameObj = { currentFrame: 0 };

  // Load Frame Sequence Images asynchronously
  let loadedImages = 0;
  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    const padNum = String(i).padStart(3, "0");
    img.src = `images/section1/frames/frame_${padNum}.jpg`;
    img.onload = () => {
      loadedImages++;
      if (loadedImages === 1) {
        renderCanvasFrame(0);
      }
    };
    frames.push(img);
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    renderCanvasFrame(frameObj.currentFrame);
  }

  function renderCanvasFrame(index) {
    const img = frames[Math.min(index, frameCount - 1)];
    if (!img || !img.complete) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    let drawW, drawH, drawX, drawY;

    if (canvasRatio > imgRatio) {
      drawW = canvas.width;
      drawH = canvas.width / imgRatio;
      drawX = 0;
      drawY = (canvas.height - drawH) / 2;
    } else {
      drawH = canvas.height;
      drawW = canvas.height * imgRatio;
      drawX = (canvas.width - drawW) / 2;
      drawY = 0;
    }
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  const palmHologram = document.getElementById("palm-hologram");
  const hologramIcon = document.getElementById("hologram-icon");
  const hologramLabel = document.getElementById("hologram-label");
  const categoryCard = document.getElementById("skills-category-card");
  const stepPill = document.getElementById("skills-step-pill");
  const catTitle = document.getElementById("skill-cat-title");
  const primaryBadgeText = document.getElementById("skill-primary-text");
  const tagsContainer = document.getElementById("skills-tags-container");
  const catDots = document.querySelectorAll(".cat-dot");
  const outroCurtain = document.getElementById("skills-curtain");

  let activeCatIndex = -1;

  function updateSkillCategory(index) {
    if (index === activeCatIndex || index < 0 || index >= SKILLS_DATA.length) return;
    activeCatIndex = index;
    const data = SKILLS_DATA[index];

    gsap.to(categoryCard, {
      opacity: 0.7,
      scale: 0.98,
      duration: 0.15,
      onComplete: () => {
        stepPill.textContent = data.step;
        catTitle.textContent = data.category;
        primaryBadgeText.textContent = data.primary;
        hologramLabel.textContent = data.label;
        hologramIcon.innerHTML = data.icon;

        tagsContainer.innerHTML = "";
        data.tags.forEach((tag) => {
          const pill = document.createElement("span");
          pill.className = `skill-tag-pill ${tag.primary ? "tag-primary" : ""}`;
          pill.textContent = tag.name;
          tagsContainer.appendChild(pill);
        });

        catDots.forEach((dot, idx) => {
          dot.classList.toggle("active", idx === index);
        });

        gsap.to(categoryCard, { opacity: 1, scale: 1, duration: 0.2 });
      }
    });
  }

  updateSkillCategory(0);

  const skillsTl = gsap.timeline({
    scrollTrigger: {
      trigger: pinWrapper,
      start: "top top",
      end: "+=600%", // Longer duration to read 6 categories comfortably
      scrub: 1.0,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const prog = self.progress;

        // Scrub frames based on early scroll
        const targetFrame = Math.floor(gsap.utils.mapRange(0, 0.25, 0, frameCount - 1, Math.min(prog, 0.25)));
        frameObj.currentFrame = targetFrame;
        renderCanvasFrame(targetFrame);

        if (prog >= 0.23 && prog < 0.9) {
          gsap.to(palmHologram, { opacity: 1, scale: 1, duration: 0.3, overwrite: "auto" });
          gsap.to(categoryCard, { opacity: 1, x: 0, duration: 0.3, overwrite: "auto" });

          // Cycle through categories
          const catProg = gsap.utils.clamp(0, 1, (prog - 0.25) / 0.65);
          const catIdx = Math.min(5, Math.floor(catProg * 6));
          updateSkillCategory(catIdx);
        } else if (prog < 0.20) {
          gsap.to(palmHologram, { opacity: 0, scale: 0.8, duration: 0.2, overwrite: "auto" });
          gsap.to(categoryCard, { opacity: 0, x: 40, duration: 0.2, overwrite: "auto" });
        }

        // Outro Zoom transition
        if (prog >= 0.92) {
          gsap.to(categoryCard, { opacity: 0, x: 50, duration: 0.25, overwrite: "auto" });
          gsap.to(palmHologram, { opacity: 0, scale: 1.4, duration: 0.25, overwrite: "auto" });
          gsap.to(canvas, { scale: 3.5, transformOrigin: "30% 60%", duration: 0.3, overwrite: "auto" });
          gsap.to(outroCurtain, { opacity: 1, duration: 0.25, overwrite: "auto" });
        } else {
          gsap.to(canvas, { scale: 1, duration: 0.2, overwrite: "auto" });
          gsap.to(outroCurtain, { opacity: 0, duration: 0.2, overwrite: "auto" });
        }
      }
    }
  });
}

/**
 * Section 4: Projects Scrollytelling Pinned Section
 */
function initProjectsScrollytelling() {
  const pinWrapper = document.getElementById("projects-section");
  const introScreen = document.getElementById("projects-intro-screen");
  const eyebrow = document.getElementById("projects-eyebrow");
  const headline = document.getElementById("projects-headline");
  const splitLayout = document.getElementById("projects-split-layout");
  
  const p1Image = document.getElementById("project-1-image");
  const p1Info1 = document.getElementById("project-1-info-1");
  const p1Info2 = document.getElementById("project-1-info-2");
  const p1Info3 = document.getElementById("project-1-info-3");

  const p2Image1 = document.getElementById("project-2-image-1");
  const p2Image2 = document.getElementById("project-2-image-2");
  const p2Image3 = document.getElementById("project-2-image-3");
  const p2Info1 = document.getElementById("project-2-info-1");
  const p2Info2 = document.getElementById("project-2-info-2");
  const p2Info3 = document.getElementById("project-2-info-3");
  const p2Info4 = document.getElementById("project-2-info-4");

  if (!pinWrapper) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: pinWrapper,
      start: "top top",
      end: "+=700%", // Extended scrolling for 2 projects with multiple stages
      scrub: 1.0,
      pin: true,
      anticipatePin: 1
    }
  });

  // 1. Intro Screen
  tl.to(eyebrow, { opacity: 1, y: -20, duration: 1 })
    .to(headline, { opacity: 1, y: -20, duration: 1 }, "+=0.5")
    .to(introScreen, { opacity: 0, y: -50, duration: 1 }, "+=1.5"); // Fade out intro

  // 2. Bring in Split Layout & Project 1 Image
  tl.to(splitLayout, { opacity: 1, duration: 1 })
    .to(p1Image, { opacity: 1, scale: 1, duration: 1 }, "<");

  // 3. Sequentially reveal Project 1 info blocks
  tl.to(p1Info1, { opacity: 1, y: 0, duration: 1 })
    .to(p1Info1, { opacity: 0, y: -20, duration: 1 }, "+=1") // hide completely
    .to(p1Info2, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(p1Info2, { opacity: 0, y: -20, duration: 1 }, "+=1") // hide completely
    .to(p1Info3, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(p1Info3, { opacity: 0, y: -20, duration: 1 }, "+=1"); // hide completely

  // 4. Fade out project 1 image and transition to Project 2 (Image 1 & Info 1)
  tl.to(p1Image, { opacity: 0, scale: 0.9, duration: 1 })
    .to(p2Image1, { opacity: 1, scale: 1, duration: 1 }, "<") // Project 2 dial image in
    .to(p2Info1, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(p2Info1, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 5. Alternate to Image 2 (Internal) & Info 2
  tl.to(p2Image1, { opacity: 0, scale: 0.9, duration: 1 }, "<")
    .to(p2Image2, { opacity: 1, scale: 1, duration: 1 }, "<")
    .to(p2Info2, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(p2Info2, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 6. Alternate back to Image 1 (Dial) & Info 3
  tl.to(p2Image2, { opacity: 0, scale: 0.9, duration: 1 }, "<")
    .to(p2Image1, { opacity: 1, scale: 1, duration: 1 }, "<")
    .to(p2Info3, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(p2Info3, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 7. Transition to iPhone Mockup (Image 3) & Info 4
  tl.to(p2Image1, { opacity: 0, scale: 0.9, duration: 1 }, "<")
    .to(p2Image3, { opacity: 1, scale: 1, duration: 1 }, "<")
    .to(p2Info4, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(p2Info4, { opacity: 0, y: -20, duration: 1 }, "+=1.5");

  // 8. Fade out project 2 completely (prep for future project)
  tl.to([p2Image3], { opacity: 0, duration: 1 });
}

/**
 * Smooth Navigation & Active Link Highlight
 */
function initNavbarScrollState() {
  const sections = document.querySelectorAll("section, .hero-pin-wrapper, .whoiam-pin-wrapper, .skills-pin-wrapper");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 120) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });
}

/**
 * Section 5: Software Projects Scrollytelling
 */
function initSoftwareProjectsScrollytelling() {
  const pinWrapper = document.getElementById("software-projects-section");
  const introScreen = document.getElementById("software-projects-intro-screen");
  const eyebrow = document.getElementById("software-projects-eyebrow");
  const headline = document.getElementById("software-projects-headline");
  const splitLayout = document.getElementById("software-projects-split-layout");
  
  const erpImage1 = document.getElementById("erp-image-1");
  const erpImage2 = document.getElementById("erp-image-2");
  const erpImage3 = document.getElementById("erp-image-3");
  const erpInfo1 = document.getElementById("erp-info-1");
  const erpInfo2 = document.getElementById("erp-info-2");
  const erpInfo3 = document.getElementById("erp-info-3");

  const bringmeImage = document.getElementById("bringme-image");
  const bringmeInfo1 = document.getElementById("bringme-info-1");
  const bringmeInfo2 = document.getElementById("bringme-info-2");
  const bringmeInfo3 = document.getElementById("bringme-info-3");

  const gymfitImage1 = document.getElementById("gymfit-image-1");
  const gymfitImage2 = document.getElementById("gymfit-image-2");
  const gymfitInfo1 = document.getElementById("gymfit-info-1");
  const gymfitInfo2 = document.getElementById("gymfit-info-2");
  const gymfitInfo3 = document.getElementById("gymfit-info-3");

  const nexposImage1 = document.getElementById("nexpos-image-1");
  const nexposImage2 = document.getElementById("nexpos-image-2");
  const nexposInfo1 = document.getElementById("nexpos-info-1");
  const nexposInfo2 = document.getElementById("nexpos-info-2");
  const nexposInfo3 = document.getElementById("nexpos-info-3");

  if (!pinWrapper) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: pinWrapper,
      start: "top top",
      end: "+=1300%", // Scrolling for 4 projects with multiple stages
      scrub: 1.0,
      pin: true,
      anticipatePin: 1
    }
  });

  // 1. Intro Screen
  tl.to(eyebrow, { opacity: 1, y: -20, duration: 1 })
    .to(headline, { opacity: 1, y: -20, duration: 1 }, "+=0.5")
    .to(introScreen, { opacity: 0, y: -50, duration: 1 }, "+=1.5"); // Fade out intro

  // 2. Bring in Split Layout & Image 1 & Info 1
  tl.to(splitLayout, { opacity: 1, duration: 1 })
    .to(erpImage1, { opacity: 1, scale: 1, duration: 1 }, "<")
    .to(erpInfo1, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(erpInfo1, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 3. Alternate to Image 2 (Light Mode Stock) & Info 2
  tl.to(erpImage1, { opacity: 0, scale: 0.9, duration: 1 }, "<")
    .to(erpImage2, { opacity: 1, scale: 1, duration: 1 }, "<")
    .to(erpInfo2, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(erpInfo2, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 4. Alternate to Image 3 (Dark Mode Stock) & Info 3
  tl.to(erpImage2, { opacity: 0, scale: 0.9, duration: 1 }, "<")
    .to(erpImage3, { opacity: 1, scale: 1, duration: 1 }, "<")
    .to(erpInfo3, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(erpInfo3, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 5. Transition to Bring Me Project
  tl.to(erpImage3, { opacity: 0, scale: 0.9, duration: 1 }, "<")
    .to(bringmeImage, { opacity: 1, scale: 1, duration: 1 }, "<")
    .to(bringmeInfo1, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(bringmeInfo1, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 6. Bring Me Info 2
  tl.to(bringmeInfo2, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(bringmeInfo2, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 7. Bring Me Info 3
  tl.to(bringmeInfo3, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(bringmeInfo3, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 8. Transition to GymFit Project (Image 1 & Info 1)
  tl.to(bringmeImage, { opacity: 0, scale: 0.9, duration: 1 }, "<")
    .to(gymfitImage1, { opacity: 1, scale: 1, duration: 1 }, "<")
    .to(gymfitInfo1, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(gymfitInfo1, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 9. GymFit Info 2 (Keep Image 1)
  tl.to(gymfitInfo2, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(gymfitInfo2, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 10. GymFit Info 3 (Switch to Image 2 - POS)
  tl.to(gymfitImage1, { opacity: 0, scale: 0.9, duration: 1 }, "<")
    .to(gymfitImage2, { opacity: 1, scale: 1, duration: 1 }, "<")
    .to(gymfitInfo3, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(gymfitInfo3, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 11. Transition to NexPOS Project (Image 1 & Info 1)
  tl.to(gymfitImage2, { opacity: 0, scale: 0.9, duration: 1 }, "<")
    .to(nexposImage1, { opacity: 1, scale: 1, duration: 1 }, "<")
    .to(nexposInfo1, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(nexposInfo1, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 12. NexPOS Info 2 (Keep Image 1)
  tl.to(nexposInfo2, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(nexposInfo2, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 13. NexPOS Info 3 (Switch to Image 2 - POS)
  tl.to(nexposImage1, { opacity: 0, scale: 0.9, duration: 1 }, "<")
    .to(nexposImage2, { opacity: 1, scale: 1, duration: 1 }, "<")
    .to(nexposInfo3, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(nexposInfo3, { opacity: 0, y: -20, duration: 1 }, "+=1.5");

  // 14. Fade out completely
  tl.to([nexposImage2], { opacity: 0, duration: 1 });
}

/**
 * Open Source Projects Scrollytelling Animation Sequence
 */
function initOpenSourceProjectsScrollytelling() {
  // CRITICAL FIX: The trigger MUST be the wrapper to calculate pinning height properly, NOT the sticky viewport.
  const pinWrapper = document.getElementById("opensource-projects-section");
  const introScreen = document.getElementById("opensource-projects-intro");
  const eyebrow = document.getElementById("opensource-eyebrow");
  const headline = document.getElementById("opensource-headline");
  
  const splitLayout = document.getElementById("opensource-projects-split-layout");
  
  const osPythonImage = document.getElementById("os-python-image");
  const osPythonInfo1 = document.getElementById("os-python-info-1");
  const osPythonInfo2 = document.getElementById("os-python-info-2");
  const osPythonInfo3 = document.getElementById("os-python-info-3");

  const osJavaImage = document.getElementById("os-java-image");
  const osJavaInfo1 = document.getElementById("os-java-info-1");
  const osJavaInfo2 = document.getElementById("os-java-info-2");
  const osJavaInfo3 = document.getElementById("os-java-info-3");

  const osAiImage = document.getElementById("os-ai-image");
  const osAiInfo1 = document.getElementById("os-ai-info-1");
  const osAiInfo2 = document.getElementById("os-ai-info-2");
  const osAiInfo3 = document.getElementById("os-ai-info-3");

  if (!pinWrapper) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: pinWrapper, // Uses the wrapper, not the sticky viewport!
      start: "top top",
      end: "+=1000%", // Scroll distance for 3 projects
      scrub: 1.0,
      pin: true,
      anticipatePin: 1
    }
  });

  // 1. Intro Screen
  tl.to(eyebrow, { opacity: 1, y: -20, duration: 1 })
    .to(headline, { opacity: 1, y: -20, duration: 1 }, "+=0.5")
    .to(introScreen, { opacity: 0, y: -50, duration: 1 }, "+=1.5"); 

  // 2. Bring in Split Layout & Image 1 & Info 1
  tl.to(splitLayout, { opacity: 1, duration: 1 })
    .to(osPythonImage, { opacity: 1, scale: 1, duration: 1 }, "<")
    .to(osPythonInfo1, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(osPythonInfo1, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 3. Alternate Info 2
  tl.to(osPythonInfo2, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(osPythonInfo2, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 4. Alternate Info 3
  tl.to(osPythonInfo3, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(osPythonInfo3, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 5. Transition to Project 2 (Java)
  tl.to(osPythonImage, { opacity: 0, scale: 0.9, duration: 1 }, "<")
    .to(osJavaImage, { opacity: 1, scale: 1, duration: 1 }, "<")
    .to(osJavaInfo1, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(osJavaInfo1, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 6. Java Info 2
  tl.to(osJavaInfo2, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(osJavaInfo2, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 7. Java Info 3
  tl.to(osJavaInfo3, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(osJavaInfo3, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 8. Transition to Project 3 (AI)
  tl.to(osJavaImage, { opacity: 0, scale: 0.9, duration: 1 }, "<")
    .to(osAiImage, { opacity: 1, scale: 1, duration: 1 }, "<")
    .to(osAiInfo1, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(osAiInfo1, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 9. AI Info 2
  tl.to(osAiInfo2, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(osAiInfo2, { opacity: 0, y: -20, duration: 1 }, "+=1");

  // 10. AI Info 3
  tl.to(osAiInfo3, { opacity: 1, y: 0, duration: 1 }, "<")
    .to(osAiInfo3, { opacity: 0, y: -20, duration: 1 }, "+=1.5");

  // 11. Fade out completely
  tl.to([osAiImage], { opacity: 0, duration: 1 });
}

/**
 * Contact Modal Logic
 */
function openContactModal(e) {
  if (e) e.preventDefault();
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }
}

function closeContactModal(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }
}
