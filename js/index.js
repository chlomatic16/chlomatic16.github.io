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
  const portfolioItems = document.querySelectorAll(
    "#projectSection .project-grid > *"
  ); // Fix selector

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    { threshold: 0.2 } // Trigger when 20% of the element is visible
  );

  aboutItems.forEach((item) => observer.observe(item));

  const passionItems = document.querySelectorAll(".passion-item");
  const passionHeading = document.querySelector("#passionSection h1");

  // Observe the heading
  observer.observe(passionHeading);

  // Observe each passion item
  passionItems.forEach((item) => observer.observe(item));

  portfolioItems.forEach((item) => observer.observe(item));

  const projectHeading = document.querySelector("#projectSection h1");
  const projectItems = document.querySelectorAll(".project-box");

  // Observe the heading
  observer.observe(projectHeading);

  // Observe each project item
  projectItems.forEach((item) => observer.observe(item));
});
