with open('public/script.js', 'r') as f:
    content = f.read()

# Replace the first DOMContentLoaded for the preloader
old_preloader = """document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("global-preloader");
  const progressBar = document.getElementById("loading-bar-progress");
  
  if (preloader && progressBar) {
    let progress = 0;
    // Simulate loading progress
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress > 90) progress = 90; // Hold at 90% until fully loaded
      progressBar.style.width = progress + "%";
    }, 100);

    window.addEventListener("load", () => {
      clearInterval(interval);
      progressBar.style.width = "100%";
      setTimeout(() => {
        preloader.classList.add("hidden");
        // Remove from DOM after fade out transition (0.8s in CSS)
        setTimeout(() => preloader.remove(), 800);
      }, 500); // slight delay at 100% for smooth effect
    });
  }
});"""

new_preloader = """function initPreloader() {
  const preloader = document.getElementById("global-preloader");
  const progressBar = document.getElementById("loading-bar-progress");
  
  if (preloader && progressBar) {
    let progress = 0;
    // Simulate loading progress
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress > 90) progress = 90; // Hold at 90% until fully loaded
      progressBar.style.width = progress + "%";
    }, 100);

    const finishLoading = () => {
      clearInterval(interval);
      progressBar.style.width = "100%";
      setTimeout(() => {
        preloader.classList.add("hidden");
        // Remove from DOM after fade out transition (0.8s in CSS)
        setTimeout(() => preloader.remove(), 800);
      }, 500); // slight delay at 100% for smooth effect
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
      // Fallback for Next.js routing where load might have already fired
      setTimeout(finishLoading, 1500);
    }
  }
}
initPreloader();"""

content = content.replace(old_preloader, new_preloader)

# Replace the second DOMContentLoaded for GSAP init
old_gsap_init = """document.addEventListener("DOMContentLoaded", () => {
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
});"""

new_gsap_init = """function initAllAnimations() {
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
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAllAnimations);
} else {
  initAllAnimations();
}"""

content = content.replace(old_gsap_init, new_gsap_init)

with open('public/script.js', 'w') as f:
    f.write(content)

print("Done fixing script.js")
