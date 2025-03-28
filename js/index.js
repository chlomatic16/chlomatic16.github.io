document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("portfolio");
  const range = 16;

  function updateShadow(event) {
    const x = Math.round((event.pageX * range) / window.innerWidth) - range / 2;
    const y =
      Math.round((event.pageY * range) / window.innerHeight) - range / 2;
    gsap.to(text, {
      "--x": x,
      "--y": y,
    });
  }

  document.body.addEventListener("mousemove", updateShadow);

  const aboutItems = document.querySelectorAll(
    "#aboutSection .aboutContent > *"
  );
  const passionItems = document.querySelectorAll(
    "#passionSection .passion-grid > *"
  );
  const portfolioItems = document.querySelectorAll(
    "#projectSection .project-grid > *"
  ); // Fix selector

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  });

  aboutItems.forEach((item) => observer.observe(item));
  passionItems.forEach((item) => observer.observe(item));
  portfolioItems.forEach((item) => observer.observe(item));
});
