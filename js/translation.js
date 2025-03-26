// Get the language toggle button
document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("lang-toggle");

  // Set the default language
  let currentLang = "en";

  // Define translations for English and Korean
  const translations = {
    en: {
      //index translations
      projects: "Projects",
      resume: "Resume",
      about: "About",
      name: "Chloe McCracken's",
      role: "UX / UI Designer",
      portfolio: "Portfolio",
      home: "Home",
      "lang-toggle": "한국어",

      //about translations
      hello: "Hello,",
      bio1: "Hello, I’m Chloe, a budding UX/UI designer based in Busan, South Korea. I have experience in research, software development, app development, along with UX/UI design.",
      bio2: "I care deeply about people and the moments that make them. Therefore, I am interested in creating human-centered experiences that make a lasting impact and helps connect people.",
      
      
      //projects translations
      "project1-title": "Project 1",
      "project1-desc": "A brief description of project 1.",
      "project2-title": "Project 2",
      "project2-desc": "A brief description of project 2.",
      "project3-title": "Project 3",
      "project3-desc": "A brief description of project 3.",
      "project-detail-title": "Project Title",
      "project-detail-desc": "Full description of the project goes here.",
      
    },
    ko: {
      projects: "프로젝트",
      resume: "이력서",
      about: "자기소개",
      home: "홈",
      name: "클로이 맥크라켄의",
      role: "UX / UI 디자이너",
      portfolio: "포트폴리오",


      hello: "안녕하세요,",
      bio1: "부산에 거주하고 있는 신입 UX/UI 디자이너 클로이입니다.저는 UX/UI 디자인뿐만 아니라 연구, 소프트웨어 개발, 앱 개발 등의 다양한 경험을 가지고 있습니다.",
      bio2: "사람과 그들의 삶을 이루는 소중한 순간들에 깊은 관심이 있어, 사람 중심의 경험을 디자인하고 오래도록 기억에 남으며 사람들을 연결해 주는 일에 매력을 느낍니다.",

      "project1-title": "프로젝트 1",
      "project1-desc": "프로젝트 1의 간단한 설명입니다.",
      "project2-title": "프로젝트 2",
      "project2-desc": "프로젝트 2의 간단한 설명입니다.",
      "project3-title": "프로젝트 3",
      "project3-desc": "프로젝트 3의 간단한 설명입니다.",
      "project-detail-title": "프로젝트 제목",
      "project-detail-desc": "프로젝트에 대한 전체 설명이 여기에 들어갑니다.",
      
      "lang-toggle": "English",
    }
  };

  // Add an event listener to the language toggle button
  langToggle.addEventListener("click", () => {
    // Toggle the current language between English and Korean
    currentLang = currentLang === "en" ? "ko" : "en";

    // Update the button text to reflect the current language
    langToggle.textContent = translations[currentLang]["lang-toggle"];

    // Update all elements with data-i18n attributes
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[currentLang][key]) {
        // Update the text content with the translated value
        el.innerHTML = translations[currentLang][key];
      } else {
        // Log a warning if a translation key is missing
        console.warn(`Missing translation for key: ${key}`);
      }
    });

    // Update the body class based on the current language
    if (currentLang === "ko") {
      document.body.classList.add("lang-ko");
    } else {
      document.body.classList.remove("lang-ko");
    }
  });
});
