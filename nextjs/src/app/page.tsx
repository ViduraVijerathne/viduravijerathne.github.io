
"use client";

import { useEffect } from 'react';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      {/* GSAP CDNs */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="beforeInteractive" />
      
      {/* Our local animation script */}
      <Script src="/script.js" strategy="lazyOnload" />

      
  {/* Preloader */}
  <div id="global-preloader" className="global-preloader">
    <div className="preloader-content">
      <svg viewBox="0 0 100 100" className="preloader-icon">
        {/* Mechanical: Gear Outer Ring */}
        <g className="gear-ring">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#1d1d1f" strokeWidth="4" strokeDasharray="12 12" />
          <circle cx="50" cy="50" r="34" fill="none" stroke="#1d1d1f" strokeWidth="2" />
        </g>
        {/* Robotics: Neural Nodes */}
        <g className="network-nodes">
          <line x1="50" y1="50" x2="50" y2="16" stroke="#0071e3" strokeWidth="2" />
          <line x1="50" y1="50" x2="20" y2="68" stroke="#0071e3" strokeWidth="2" />
          <line x1="50" y1="50" x2="80" y2="68" stroke="#0071e3" strokeWidth="2" />
          <circle cx="50" cy="16" r="4" fill="#0071e3" className="node-dot" />
          <circle cx="20" cy="68" r="4" fill="#0071e3" className="node-dot" />
          <circle cx="80" cy="68" r="4" fill="#0071e3" className="node-dot" />
        </g>
        {/* Software: Code Brackets */}
        <g className="code-brackets" fill="none" stroke="#1d1d1f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M42 42 L32 50 L42 58" className="bracket-left" />
          <path d="M58 42 L68 50 L58 58" className="bracket-right" />
        </g>
      </svg>
      <div className="preloader-text">
        <span className="loading-label">INITIALIZING SYSTEM</span>
        <div className="loading-bar-container">
          <div className="loading-bar-progress" id="loading-bar-progress"></div>
        </div>
      </div>
    </div>
  </div>


  {/* Global Glass Navigation */}
  <header className="global-nav" id="global-nav">
    <div className="nav-container">
      <a href="#" className="brand-logo">
        <span>VIDURA</span>
      </a>

      <nav>
        <ul className="nav-links">
          <li><a href="#hero-pin-section" className="nav-link active">Overview</a></li>
          <li><a href="#who-i-am" className="nav-link">Who I Am</a></li>
          <li><a href="#skills-section" className="nav-link">Skills</a></li>
          <li><a href="#projects-section" className="nav-link">Projects</a></li>
          <li><a href="#interactive-lab" className="nav-link">System Lab</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>

      <a href="#" className="cta-button-nav" onClick={(e) => { e.preventDefault(); document.getElementById("contactModal")?.classList.add("active"); document.body.style.overflow = "hidden"; }}>Get in Touch</a>
    </div>
  </header>

  <main className="scrollytelling-main-container">
    {/* HERO SCROLLYTELLING PINNED SECTION */}
    <div className="hero-pin-wrapper" id="hero-pin-section">
      <div className="hero-sticky-viewport">
        
        {/* Background Layer with Image */}
        <div className="hero-bg-layer">
          <img src="images/hero.webp" alt="Vidura Vijerathne - Mechanical Engineer and Software Developer Portfolio" className="hero-bg-image" id="hero-bg-img" fetchPriority="high" />
        </div>

        {/* Zoom Transition Curtain */}
        <div className="hero-curtain-overlay" id="hero-curtain"></div>

        {/* Story Content Card */}
        <div className="hero-content-container">
          <article className="hero-story-card">
            
            {/* Tagline Badge */}
            <div className="hero-tagline-badge" id="hero-badge">
              <span className="hero-tagline-text">Engineering Student</span>
              <span className="hero-tagline-dot"></span>
              <span className="hero-tagline-text">Software Developer</span>
              <span className="hero-tagline-dot"></span>
              <span className="hero-tagline-text">Robotics Enthusiast</span>
            </div>

            {/* Title */}
            <h1 className="hero-title" id="hero-title">
              Engineering the Future with <span className="hero-title-gradient">Code, Machines & Intelligence.</span>
            </h1>

            {/* Paragraph Description */}
            <div className="hero-body-text" id="hero-body">
              <p className="hero-paragraph">
                I’m a <strong>Mechanical Engineering Technology undergraduate</strong> at Uva Wellassa University, with a strong self-taught background in <strong>Software Engineering</strong>, <strong>Robotics</strong>, <strong>Electronics</strong>, and <strong>Embedded Systems</strong>.
              </p>
              <p className="hero-paragraph">
                I build software, engineer machines, and explore intelligent systems that connect the digital world with the physical world.
              </p>
            </div>

            {/* Scroll Hint */}
            <div className="hero-scroll-hint" id="hero-scroll-hint">
              <div className="mouse-icon">
                <div className="mouse-wheel"></div>
              </div>
              <span>Scroll down to explore story</span>
            </div>

          </article>
        </div>

      </div>
    </div>

    {/* SECTION 2: WHO I AM SCROLLYTELLING CANVAS SECTION */}
    <div className="whoiam-pin-wrapper" id="who-i-am">
      <div className="whoiam-sticky-viewport">
        
        {/* Canvas Layer for whoiam frames sequence */}
        <div className="whoiam-canvas-container">
          <canvas id="whoiam-canvas"></canvas>
          <div className="whoiam-gradient-overlay"></div>
        </div>

        {/* Storytelling Segments Overlay */}
        <div className="whoiam-content-container">
          
          {/* Segment 1 */}
          <div className="whoiam-segment" id="whoiam-segment-1">
            <h1 className="whoiam-eyebrow-huge">WHO I AM</h1>
          </div>

          {/* Segment 2 */}
          <div className="whoiam-segment" id="whoiam-segment-2">
            <h2 className="whoiam-headline">Engineering Technologist by Education.<br /><span className="whoiam-headline-accent">Developer by Passion.</span></h2>
          </div>

          {/* Segment 3 */}
          <div className="whoiam-segment" id="whoiam-segment-3">
            <p className="whoiam-paragraph">
              I’m currently pursuing a <strong>Bachelor of Engineering Technology Honours in Mechanical Engineering Technology</strong> at Uva Wellassa University.
            </p>
            <p className="whoiam-paragraph">
              While my academic path is focused on engineering technology, I have independently developed my skills in <strong>software engineering and computer science</strong> through continuous self-learning and hands-on development.
            </p>
          </div>

          {/* Segment 4 */}
          <div className="whoiam-segment" id="whoiam-segment-4">
            <p className="whoiam-paragraph" style={{ textAlign: "center", marginBottom: "24px" }}>
              My interests sit at the intersection of several fields:
            </p>
            {/* Premium Intersection Grid */}
            <div className="intersection-grid">
              
              <div className="intersection-field">
                <div className="field-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </div>
                <span>Mechanical Eng.</span>
              </div>

              <div className="intersection-node">
                <div className="cross-pulse"></div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </div>

              <div className="intersection-field">
                <div className="field-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
                <span>Software Eng.</span>
              </div>

              <div className="intersection-node">
                <div className="cross-pulse"></div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </div>

              <div className="intersection-field">
                <div className="field-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>
                </div>
                <span>Electronics</span>
              </div>

              <div className="intersection-node">
                <div className="cross-pulse"></div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </div>

              <div className="intersection-field">
                <div className="field-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>
                </div>
                <span>Robotics</span>
              </div>

            </div>
          </div>

        </div>

        {/* White Transition Layer (Segment 5) */}
        <div className="whoiam-white-outro" id="whoiam-white-outro">
          <blockquote className="whoiam-goal-quote">
            “My goal is to become a multidisciplinary engineer capable of designing intelligent systems from the physical hardware to the software that controls them.”
          </blockquote>
        </div>
        
      </div>
    </div>

    {/* SECTION 3: SKILLS SCROLLYTELLING PINNED CANVAS */}
    <div className="skills-pin-wrapper" id="skills-section">
      <div className="skills-sticky-viewport">
        
        {/* Canvas Background Frame Sequence Layer */}
        <div className="skills-canvas-container" id="skills-canvas-wrapper">
          <canvas id="skills-canvas"></canvas>
          <div className="skills-canvas-gradient-overlay"></div>
        </div>

        {/* Floating Palm Hologram Orb */}
        <div className="palm-hologram" id="palm-hologram">
          <div className="hologram-pulse-ring"></div>
          <div className="hologram-icon" id="hologram-icon">
            {/* Icon rendered dynamically via script.js */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2997ff" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          </div>
          <span className="hologram-label" id="hologram-label">Java / Code</span>
        </div>

        {/* Right Side Skills Category Info Panel */}
        <div className="skills-panel-container">
          <article className="skills-category-card" id="skills-category-card">
            
            <header className="skills-card-header">
              <div className="skills-eyebrow-box">
                <span className="skills-eyebrow">TECHNOLOGIES I WORK WITH</span>
                <span className="skills-step-pill" id="skills-step-pill">01 / 06</span>
              </div>
              <h2 className="skills-headline" id="skill-cat-title">Programming Languages</h2>
            </header>

            {/* Primary Language Badge */}
            <div className="skills-primary-badge" id="skill-primary-badge">
              <span className="primary-star">★</span>
              <span id="skill-primary-text">Java — Primary Language</span>
            </div>

            {/* Skills Tag Cloud */}
            <div className="skills-tags-container" id="skills-tags-container">
              {/* Dynamically populated via JS */}
            </div>

            {/* Category Indicator Dots */}
            <div className="skills-cat-dots" id="skills-cat-dots">
              <span className="cat-dot active" data-index="0"></span>
              <span className="cat-dot" data-index="1"></span>
              <span className="cat-dot" data-index="2"></span>
              <span className="cat-dot" data-index="3"></span>
              <span className="cat-dot" data-index="4"></span>
              <span className="cat-dot" data-index="5"></span>
            </div>

          </article>
        </div>

        {/* Section 1 Outro Zoom Curtain */}
        <div className="skills-outro-curtain" id="skills-curtain"></div>

      </div>
    </div>

    {/* SECTION 4: PROJECTS SCROLLYTELLING PINNED CANVAS */}
    <div className="projects-pin-wrapper" id="projects-section">
      <div className="projects-sticky-viewport">
        
        {/* Intro Text Screen */}
        <div className="projects-intro-screen" id="projects-intro-screen">
          <h1 className="projects-eyebrow-huge" id="projects-eyebrow">My Projects</h1>
          <h2 className="projects-headline-huge" id="projects-headline">Mechanical Engineering Projects</h2>
        </div>

        {/* Project Split Layout */}
        <div className="projects-split-layout" id="projects-split-layout">
          
          {/* Left Column: Fixed Image Viewer */}
          <div className="projects-left-column">
            {/* Project 1 Image */}
            <div className="projects-image-container" id="project-1-image">
              <img src="images/projects/robot-arm.webp" alt="Vidura Vijerathne - 3-Axis Robot Arm Mechanical Engineering Project" loading="lazy" />
            </div>
            {/* Project 2 Image (Dial) */}
            <div className="projects-image-container" id="project-2-image" style={{ opacity: 0, transform: "scale(0.9)" }}>
              <img src="images/projects/pid-dial.webp" alt="Vidura Vijerathne - Precision PID Motor Controller Robotics Project" loading="lazy" />
            </div>
          </div>

          {/* Right Column: Scrolling Information */}
          <div className="projects-right-column" id="projects-right-column">
            
            {/* Information Block 1 */}
            <div className="project-info-block" id="project-1-info-1">
              <span className="project-tag-pill">Mechatronics</span>
              <h3 className="project-title">3-Axis Robotic Arm Controller</h3>
              <p className="project-desc">
                A custom-built multi-axis robotic manipulator designed for precise kinematics and pick-and-place operations.
              </p>
            </div>

            {/* Information Block 2 */}
            <div className="project-info-block" id="project-1-info-2">
              <h4 className="project-subtitle">Technologies Integrated</h4>
              <div className="project-tech-grid">
                <span className="tech-badge">Raspberry Pi</span>
                <span className="tech-badge">Python</span>
                <span className="tech-badge">Arduino</span>
                <span className="tech-badge">Modbus Comm.</span>
              </div>
            </div>

            {/* Information Block 3 */}
            <div className="project-info-block" id="project-1-info-3">
              <h4 className="project-subtitle">System Architecture</h4>
              <p className="project-desc">
                The Raspberry Pi acts as the central brain orchestrating complex inverse kinematics calculations in Python. It communicates via the Modbus protocol to distributed Arduino nodes, which handle real-time low-level motor control and sensor feedback.
              </p>
            </div>

            {/* ===================== PROJECT 2: PID Controller ===================== */}
            {/* Information Block 1 */}
            <div className="project-info-block" id="project-2-info-1">
              <span className="project-tag-pill">Control Instruments</span>
              <h3 className="project-title">Precision PID Motor Controller</h3>
              <p className="project-desc">
                An advanced academic assignment focused on implementing Proportional-Integral-Derivative (PID) control algorithms to precisely rotate a motor to specific target angles with minimal overshoot and steady-state error.
              </p>
            </div>

            {/* Information Block 2 */}
            <div className="project-info-block" id="project-2-info-2">
              <h4 className="project-subtitle">Technologies Integrated</h4>
              <div className="project-tech-grid">
                <span className="tech-badge">ESP32</span>
                <span className="tech-badge">Flutter</span>
                <span className="tech-badge">Dart</span>
                <span className="tech-badge">Bluetooth LE</span>
                <span className="tech-badge">C++</span>
              </div>
            </div>

            {/* Information Block 3 */}
            <div className="project-info-block" id="project-2-info-3">
              <h4 className="project-subtitle">Hardware Integration</h4>
              <p className="project-desc">
                The internal circuitry features custom protoboard wiring to interface the ESP32 microcontroller with the motor driver and rotary encoder, ensuring a stable control loop.
              </p>
            </div>

            {/* Information Block 4 */}
            <div className="project-info-block" id="project-2-info-4">
              <h4 className="project-subtitle">Custom Mobile Telemetry</h4>
              <p className="project-desc">
                Developed a custom cross-platform mobile application using Flutter to interface directly with the ESP32 over Bluetooth. The app provides live telemetry streaming, real-time PID tuning, and dynamic graphing of angle over time vs. target.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>

    {/* SECTION 5: SOFTWARE PROJECTS SCROLLYTELLING PINNED CANVAS */}
    <div className="projects-pin-wrapper" id="software-projects-section">
      <div className="projects-sticky-viewport">
        
        {/* Intro Text Screen */}
        <div className="projects-intro-screen" id="software-projects-intro-screen">
          <h1 className="projects-eyebrow-huge" id="software-projects-eyebrow">Industrial Software</h1>
          <h2 className="projects-headline-huge" id="software-projects-headline">Software Engineering Industrial Projects</h2>
        </div>

        {/* Project Split Layout */}
        <div className="projects-split-layout" id="software-projects-split-layout">
          
          {/* Left Column: Fixed Image Viewer */}
          <div className="projects-left-column">
            {/* ERP Dashboard */}
            <div className="projects-image-container" id="erp-image">
              <img src="images/projects/erp-1.webp" alt="Vidura Vijerathne - Thennakoon Ready Mix ERP Dashboard Software Engineering Project" loading="lazy" />
            </div>
            {/* Bring Me */}
            <div className="projects-image-container" id="bringme-image" style={{ opacity: 0, transform: "scale(0.9)" }}>
              <img src="images/projects/bring-me.webp" alt="Vidura Vijerathne - Bring Me Food Ordering App Mobile Development Project" loading="lazy" />
            </div>
            {/* GymFit */}
            <div className="projects-image-container" id="gymfit-image" style={{ opacity: 0, transform: "scale(0.9)" }}>
              <img src="images/projects/gymfit-1.webp" alt="Vidura Vijerathne - GymFit Dashboard Software Engineering Project" loading="lazy" />
            </div>
            {/* NexPOS */}
            <div className="projects-image-container" id="nexpos-image" style={{ opacity: 0, transform: "scale(0.9)" }}>
              <img src="images/projects/nexpos-1.webp" alt="Vidura Vijerathne - NexPOS Business Insights Software Project" loading="lazy" />
            </div>
          </div>

          {/* Right Column: Scrolling Information */}
          <div className="projects-right-column" id="software-projects-right-column">
            
            {/* Information Block 1 */}
            <div className="project-info-block" id="erp-info-1">
              <span className="project-tag-pill">Enterprise Resource Planning</span>
              <h3 className="project-title">Thennakoon Ready Mix Pvt Ltd</h3>
              <p className="project-desc">
                A full-stack, scalable Enterprise Resource Planning (ERP) system custom-built for operations management, inventory tracking, and logistics.
              </p>
            </div>

            {/* Information Block 2 */}
            <div className="project-info-block" id="erp-info-2">
              <h4 className="project-subtitle">Core Technologies</h4>
              <div className="project-tech-grid">
                <span className="tech-badge">Next.js</span>
                <span className="tech-badge">Supabase</span>
                <span className="tech-badge">JWT Auth</span>
                <span className="tech-badge">React</span>
              </div>
            </div>

            {/* Information Block 3 */}
            <div className="project-info-block" id="erp-info-3">
              <h4 className="project-subtitle">Stock Management & Theming</h4>
              <p className="project-desc">
                Features comprehensive real-time stock management with integrated low-stock alerts, detailed reporting metrics, and full support for both Light and Dark mode user interfaces.
              </p>
            </div>

            {/* ===================== PROJECT 2: Bring Me App ===================== */}
            {/* Information Block 1 */}
            <div className="project-info-block" id="bringme-info-1">
              <span className="project-tag-pill">Food Delivery</span>
              <h3 className="project-title">Bring Me App</h3>
              <p className="project-desc">
                A high-performance cross-platform mobile application designed for seamless online food ordering, vendor management, and real-time delivery tracking.
              </p>
            </div>

            {/* Information Block 2 */}
            <div className="project-info-block" id="bringme-info-2">
              <h4 className="project-subtitle">Technologies Integrated</h4>
              <div className="project-tech-grid">
                <span className="tech-badge">Flutter</span>
                <span className="tech-badge">Spring Boot</span>
                <span className="tech-badge">Firebase</span>
                <span className="tech-badge">Google Maps API</span>
              </div>
            </div>

            {/* Information Block 3 */}
            <div className="project-info-block" id="bringme-info-3">
              <h4 className="project-subtitle">Location & Logistics</h4>
              <p className="project-desc">
                Integrates the Google Maps API for precise real-time order tracking, route optimization for drivers, and geo-fenced delivery estimates. Spring Boot powers a robust, scalable backend, with Firebase handling secure real-time state synchronization.
              </p>
            </div>

            {/* ===================== PROJECT 3: GymFit App ===================== */}
            {/* Information Block 1 */}
            <div className="project-info-block" id="gymfit-info-1">
              <span className="project-tag-pill">Management System</span>
              <h3 className="project-title">GymFit Platform</h3>
              <p className="project-desc">
                A comprehensive cross-platform gym management system designed to run seamlessly on desktop, tablet, and mobile devices, providing complete operational control.
              </p>
            </div>

            {/* Information Block 2 */}
            <div className="project-info-block" id="gymfit-info-2">
              <h4 className="project-subtitle">Core Technologies</h4>
              <div className="project-tech-grid">
                <span className="tech-badge">Flutter</span>
                <span className="tech-badge">Dart</span>
                <span className="tech-badge">Cross-Platform</span>
              </div>
            </div>

            {/* Information Block 3 */}
            <div className="project-info-block" id="gymfit-info-3">
              <h4 className="project-subtitle">Unified POS & Operations</h4>
              <p className="project-desc">
                Built natively with Flutter to ensure identical, high-performance experiences across all platforms. Features include membership tracking, attendance logging, financial reporting, and an integrated Point-Of-Sale (POS) system.
              </p>
            </div>

            {/* ===================== PROJECT 4: NexPOS App ===================== */}
            {/* Information Block 1 */}
            <div className="project-info-block" id="nexpos-info-1">
              <span className="project-tag-pill">Enterprise ERP / POS</span>
              <h3 className="project-title">NexPOS System</h3>
              <p className="project-desc">
                A massive-scale ERP and POS system currently deployed and running smoothly across 50+ supermarket locations, handling high-volume daily transactions.
              </p>
            </div>

            {/* Information Block 2 */}
            <div className="project-info-block" id="nexpos-info-2">
              <h4 className="project-subtitle">Core Technologies</h4>
              <div className="project-tech-grid">
                <span className="tech-badge">Flutter</span>
                <span className="tech-badge">Firebase</span>
                <span className="tech-badge">Cross-Platform</span>
              </div>
            </div>

            {/* Information Block 3 */}
            <div className="project-info-block" id="nexpos-info-3">
              <h4 className="project-subtitle">Offline-First Architecture</h4>
              <p className="project-desc">
                Engineered to run seamlessly on desktop, web, tablet, and mobile. It features a robust online/offline synchronization engine powered by Firebase, ensuring continuous retail operations even during network outages.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>

    {/* ============================================== */}
    {/* SECTION 5.5: OPEN SOURCE PROJECTS (SCROLLYTELLING) */}
    {/* ============================================== */}
    <div className="projects-pin-wrapper" id="opensource-projects-section">
      <div className="projects-sticky-viewport" id="opensource-projects-pin">
        
        {/* Intro Text Screen */}
        <div className="projects-intro-screen" id="opensource-projects-intro">
          <h1 className="projects-eyebrow-huge" id="opensource-eyebrow">Community Contributions</h1>
          <h2 className="projects-headline-huge" id="opensource-headline">Open Source Projects</h2>
        </div>

        {/* Project Split Layout */}
        <div className="projects-split-layout" id="opensource-projects-split-layout">
          
          {/* Left Column: Pinned Images */}
          <div className="projects-left-column">
            {/* Project 1 (Image) */}
            <div className="projects-image-container" id="os-python-image" style={{ opacity: 0, transform: "scale(0.9)" }}>
              <img src="images/projects/opensource-python.webp" alt="Vidura Vijerathne - YouTube Downloader Python Tool Open Source Project" loading="lazy" />
            </div>
            {/* Project 2 (Image) */}
            <div className="projects-image-container" id="os-java-image" style={{ opacity: 0, transform: "scale(0.9)" }}>
              <img src="images/projects/opensource-java.webp" alt="Vidura Vijerathne - Image2Json Java Library Open Source Project" loading="lazy" />
            </div>
            {/* Project 3 (Image) */}
            <div className="projects-image-container" id="os-ai-image" style={{ opacity: 0, transform: "scale(0.9)" }}>
              <img src="images/projects/opensource-ai.webp" alt="Vidura Vijerathne - AI Self-Driving Car Model Machine Learning Project" loading="lazy" />
            </div>
          </div>

          {/* Right Column: Scrolling Information */}
          <div className="projects-right-column">
            
            {/* ===================== PROJECT 1: YouTube Downloader ===================== */}
            <div className="project-info-block" id="os-python-info-1">
              <span className="project-tag-pill">Python CLI Tool</span>
              <h3 className="project-title">YouTube Downloader</h3>
              <p className="project-desc">
                An open-source Python utility allowing seamless extraction and downloading of YouTube video content natively from the command line.
              </p>
              <a href="https://github.com/ViduraVijerathne/youtube-downloader-python.git" target="_blank" className="github-link">View Repository ↗</a>
            </div>

            <div className="project-info-block" id="os-python-info-2">
              <h4 className="project-subtitle">Core Technologies</h4>
              <div className="project-tech-grid">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">CLI</span>
                <span className="tech-badge">Pytube</span>
              </div>
            </div>

            <div className="project-info-block" id="os-python-info-3">
              <h4 className="project-subtitle">Scripting & Automation</h4>
              <p className="project-desc">
                Designed for high efficiency and minimal dependencies, this tool showcases adept knowledge of Python scripting, stream handling, and API integration.
              </p>
            </div>

            {/* ===================== PROJECT 2: Image2Json ===================== */}
            <div className="project-info-block" id="os-java-info-1">
              <span className="project-tag-pill">Java Library</span>
              <h3 className="project-title">Image2Json</h3>
              <p className="project-desc">
                An open-source Java library built to serialize, convert, and safely store image data by dynamically transforming it into JSON format.
              </p>
              <a href="https://github.com/ViduraVijerathne/Image2Json-JAVA.git" target="_blank" className="github-link">View Repository ↗</a>
            </div>

            <div className="project-info-block" id="os-java-info-2">
              <h4 className="project-subtitle">Core Technologies</h4>
              <div className="project-tech-grid">
                <span className="tech-badge">Java</span>
                <span className="tech-badge">JSON</span>
                <span className="tech-badge">Base64</span>
              </div>
            </div>

            <div className="project-info-block" id="os-java-info-3">
              <h4 className="project-subtitle">Data Serialization</h4>
              <p className="project-desc">
                Solves common hurdles in data persistence by implementing robust binary-to-text encoding, making images easy to transmit across RESTful web services.
              </p>
            </div>

            {/* ===================== PROJECT 3: AI Self-Driving Car ===================== */}
            <div className="project-info-block" id="os-ai-info-1">
              <span className="project-tag-pill">Machine Learning</span>
              <h3 className="project-title">Self-Driving AI Model</h3>
              <p className="project-desc">
                An experimental open-source neural network model trained to navigate simulated environments autonomously using computer vision and reinforcement learning.
              </p>
              <a href="https://github.com/ViduraVijerathne/Ai.SelfDriving.Car.git" target="_blank" className="github-link">View Repository ↗</a>
            </div>

            <div className="project-info-block" id="os-ai-info-2">
              <h4 className="project-subtitle">Core Technologies</h4>
              <div className="project-tech-grid">
                <span className="tech-badge">AI/ML</span>
                <span className="tech-badge">Python</span>
                <span className="tech-badge">Computer Vision</span>
              </div>
            </div>

            <div className="project-info-block" id="os-ai-info-3">
              <h4 className="project-subtitle">Autonomous Navigation</h4>
              <p className="project-desc">
                Demonstrates the capacity to design reward functions, handle simulated sensory data inputs, and deploy an inference model capable of real-time trajectory decision making.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>

    {/* SECTION 6: INTERACTIVE LAB / TERMINAL */}
    <section className="section-dark-canvas" id="interactive-lab">
      <div className="section-container">
        
        <header className="section-header">
          <span className="section-eyebrow">System Architecture</span>
          <h2 className="section-headline">Where Code Meets Hardware Physics</h2>
          <p className="section-lead-paragraph">
            Demonstrating multi-threaded firmware execution and real-time sensor polling.
          </p>
        </header>

        <div className="lab-terminal-card">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <span className="terminal-title">vidura-robotics-node.cpp — RTOS Engine</span>
            <span>C++20</span>
          </div>
          <pre className="terminal-body"><code><span className="code-comment">// Vidura Robotics RTOS Task - Real-Time Control & Telemetry</span>{"\n"}
<span className="code-keyword">#include</span> <span className="code-string">&lt;FreeRTOS.h&gt;</span>{"\n"}
<span className="code-keyword">#include</span> <span className="code-string">"PID_Controller.hpp"</span>{"\n"}
<span className="code-keyword">#include</span> <span className="code-string">"TelemetryGateway.hpp"</span>{"\n"}
{"\n"}
<span className="code-keyword">void</span> <span className="code-fn">vMotorControlTask</span>(<span className="code-keyword">void</span>* pvParameters) {"{"}{"\n"}
    PIDController leftMotorPID(<span className="code-num">2.4f</span>, <span className="code-num">0.15f</span>, <span className="code-num">0.05f</span>);{"\n"}
    PIDController rightMotorPID(<span className="code-num">2.4f</span>, <span className="code-num">0.15f</span>, <span className="code-num">0.05f</span>);{"\n"}
    {"\n"}
    <span className="code-keyword">while</span> (<span className="code-keyword">true</span>) {"{"}{"\n"}
        <span className="code-keyword">float</span> leftEncoder  = ReadEncoderTicks(ENCODER_LEFT_PIN);{"\n"}
        <span className="code-keyword">float</span> rightEncoder = ReadEncoderTicks(ENCODER_RIGHT_PIN);{"\n"}
        {"\n"}
        <span className="code-keyword">float</span> pwmLeft  = leftMotorPID.Compute(targetVelocityLeft, leftEncoder);{"\n"}
        <span className="code-keyword">float</span> pwmRight = rightMotorPID.Compute(targetVelocityRight, rightEncoder);{"\n"}
        {"\n"}
        SetMotorPWM(MOTOR_LEFT_PWM, pwmLeft);{"\n"}
        SetMotorPWM(MOTOR_RIGHT_PWM, pwmRight);{"\n"}
        {"\n"}
        vTaskDelay(pdMS_TO_TICKS(<span className="code-num">10</span>)); <span className="code-comment">// 100Hz Control Loop</span>{"\n"}
    {"}"}{"\n"}
{"}"}</code></pre>
        </div>

      </div>
    </section>

    {/* FOOTER / CONTACT */}
    <footer className="footer-section" id="contact">
      <div className="section-container">
        <div className="footer-content">
          <span className="section-eyebrow">LET'S COLLABORATE</span>
          <h2 className="footer-headline">Let’s build intelligent machines & software together.</h2>
          <p style={{ maxWidth: "540px", color: "rgba(255,255,255,0.7)", fontSize: "17px" }}>
            Open to engineering internships, software development roles, robotics research, and innovative hardware-software projects.
          </p>
          <a href="#" className="footer-cta-btn" onClick={(e) => { e.preventDefault(); document.getElementById("contactModal")?.classList.add("active"); document.body.style.overflow = "hidden"; }}>Connect with Vidura</a>
          
          <div className="footer-legal">
            <span>© 2026 Vidura. Mechanical Engineering Technology, UWU.</span>
            <div style={{ display: "flex", gap: "20px" }}>
              <a href="#" style={{ color: "rgba(255,255,255,0.6)" }}>GitHub</a>
              <a href="#" style={{ color: "rgba(255,255,255,0.6)" }}>LinkedIn</a>
              <a href="#" style={{ color: "rgba(255,255,255,0.6)" }}>UWU Profile</a>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </main>

  {/* GSAP 3 & ScrollTrigger CDN */}
  
    </>
  );
}
