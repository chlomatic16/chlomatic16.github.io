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

      //about translations
      hello: "Hello",
      bio1: "Hello, I’m Chloe, a budding UX/UI designer based in Busan, South Korea. I have experience in research, software development, app development, along with UX/UI design.",
      bio2: "I care deeply about people - and the moments that make them. Therefore, I am interested in creating human-centered experiences that make a lasting impact and helps connect people.",
      
      
      //projects translations
      "project1-title": "Project 1",
      "project1-desc": "A brief description of project 1.",
      "project2-title": "Project 2",
      "project2-desc": "A brief description of project 2.",
      "project3-title": "Project 3",
      "project3-desc": "A brief description of project 3.",
      "project-detail-title": "Project Title",
      "project-detail-desc": "Full description of the project goes here.",
      
      "about-title": "About - Chloe McCracken",
      home: "Home",
      "lang-toggle": "한국어",
      "education-title": "Education",
      kaist: "KAIST",
      "kaist-degree": "M.S. in Computer Science<br />2021–2024",
      "indiana-university": "Indiana University",
      "indiana-degree": "B.S. in Informatics<br />B.A. in Linguistics<br />2016–2020",
      "skills-title": "Skills",
      "interactive-skills": "Interactive",
      figma: "Figma",
      "adobe-xd": "Adobe XD",
      sketch: "Sketch",
      invision: "InVision",
      "html-css": "HTML + CSS",
      javascript: "JavaScript (React Redux)",
      kotlin: "Kotlin",
      "research-skills": "Research",
      "focus-groups": "Focus Groups",
      "affinity-diagramming": "Affinity Diagramming",
      "user-testing": "User Testing",
      "design-skills": "Design",
      sketching: "Sketching",
      wireframing: "Wireframing",
      prototyping: "Prototyping",
      languages: "Languages",
      "language-proficiency": "English (Native)<br />Korean (Conversational)",
      "experience-title": "Experience",
      "kaist-researcher": "Graduate Researcher, KAIST",
      "kaist-researcher-desc": "2021–2024<br />Conducted research with a focus on creating interactive mobile computing services to enhance everyday situations.",
      "ibm-developer": "Software Developer, IBM",
      "ibm-developer-desc": "2020–2021<br />Enhanced the IBM Cloud website’s user experience by optimizing the user interface, implementing new designs, and ensuring design consistency with brand guidelines.",
      "serve-it-intern": "Web Design & Development Intern, Indiana University Serve IT",
      "serve-it-intern-desc": "2019–2020<br />Contributed to the end-to-end design and implementation of websites for local non-profit organizations, enhancing their connections with the community.",
      "mankins-intern": "UX Design Intern, Mankin’s Research",
      "mankins-intern-desc": "2019.10 – 2019.12<br />Designed initial website designs and developed into high-fidelity wireframes that were used for user-testing to ensure a user-friendly interface.",
      "contact-title": "Contact",
      "email-label": "Email",
      email: "chamccra@gmail.com",
      footer: "footer"
    },
    ko: {
      projects: "프로젝트",
      resume: "이력서",
      about: "자기소개",
      home: "홈",
      name: "클로이 맥크라켄의",
      role: "UX / UI 디자이너",


      hello: "안녕하세요",
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
      
      "about-title": "소개 - 클로이 맥크라켄",
      "lang-toggle": "English",
      "education-title": "교육",
      kaist: "KAIST",
      "kaist-degree": "컴퓨터 과학 석사<br />2021–2024",
      "indiana-university": "인디애나 대학교",
      "indiana-degree": "정보학 학사<br />언어학 학사<br />2016–2020",
      "skills-title": "기술",
      "interactive-skills": "인터랙티브",
      figma: "피그마",
      "adobe-xd": "어도비 XD",
      sketch: "스케치",
      invision: "인비전",
      "html-css": "HTML + CSS",
      javascript: "자바스크립트 (React Redux)",
      kotlin: "코틀린",
      "research-skills": "연구",
      "focus-groups": "포커스 그룹",
      "affinity-diagramming": "어피니티 다이어그램",
      "user-testing": "사용자 테스트",
      "design-skills": "디자인",
      sketching: "스케치",
      wireframing: "와이어프레임",
      prototyping: "프로토타이핑",
      languages: "언어",
      "language-proficiency": "영어 (원어민)<br />한국어 (회화 가능)",
      "experience-title": "경험",
      "kaist-researcher": "KAIST, 대학원 연구원",
      "kaist-researcher-desc": "2021–2024<br />일상 상황을 개선하기 위한 인터랙티브 모바일 컴퓨팅 서비스를 연구했습니다.",
      "ibm-developer": "IBM, 소프트웨어 개발자",
      "ibm-developer-desc": "2020–2021<br />IBM 클라우드 웹사이트의 사용자 경험을 개선하기 위해 사용자 인터페이스를 최적화하고 새로운 디자인을 구현하며 브랜드 가이드라인과 일치하도록 디자인 일관성을 보장했습니다.",
      "serve-it-intern": "인디애나 대학교 Serve IT, 웹 디자인 및 개발 인턴",
      "serve-it-intern-desc": "2019–2020<br />지역 비영리 단체를 위한 웹사이트의 디자인 및 구현을 처음부터 끝까지 기여하여 커뮤니티와의 연결을 강화했습니다.",
      "mankins-intern": "Mankin’s Research, UX 디자인 인턴",
      "mankins-intern-desc": "2019.10 – 2019.12<br />초기 웹사이트 디자인을 설계하고 사용자 테스트를 통해 사용자 친화적인 인터페이스를 보장하기 위해 고품질 와이어프레임으로 개발했습니다.",
      "contact-title": "연락처",
      "email-label": "이메일",
      email: "chamccra@gmail.com",
      footer: "푸터"
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
