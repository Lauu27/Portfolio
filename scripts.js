document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {

            e.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {

                const headerHeight = document.querySelector("header").offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;

                const offsetPosition =
                    elementPosition + window.scrollY - headerHeight - 10;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

            }
        });
    });

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    const gearButton = document.getElementById("gear-btn");
    const settingsMenu = document.getElementById("settings-menu");

    const closeAllMenus = () => {
        navMenu.classList.remove("active");
        settingsMenu.classList.remove("active");
    };

    menuToggle.addEventListener("click", (event) => {
        event.stopPropagation();
        settingsMenu.classList.remove("active");
        navMenu.classList.toggle("active");
    });

    gearButton.addEventListener("click", (event) => {
        event.stopPropagation();
        navMenu.classList.remove("active");
        settingsMenu.classList.toggle("active");
    });

    document.addEventListener("click", closeAllMenus);

    window.addEventListener("resize", () => {

        if (window.innerWidth > 768) {
            closeAllMenus();
            navMenu.style.display = "flex";
        } else {
            navMenu.style.display = "";
        }

    });

    const btnSwitch = document.querySelector("#switch");

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark");
        btnSwitch.classList.add("active");
    }

    btnSwitch.addEventListener("click", () => {

        document.body.classList.toggle("dark");
        btnSwitch.classList.toggle("active");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }

    });

    const languageToggle = document.getElementById("language-toggle");
    let currentLanguage = "en";

    const translations = {

        en: {
            nav_about: "About Me",
            nav_projects: "Projects",
            nav_studies: "Studies",
            nav_contact: "Contact",

            about_title: "Junior Developer | Web Developer",
            about_subtitle: "Web developer focused on building dynamic applications with HTML, PHP and JavaScript.",
            about_desc: "Hello! I'm Lautaro Casal, a Higher Technician in Programming with experience in sales and customer service. I enjoy building web projects and solving problems using technology. Currently looking for my first opportunity in IT.",
            resume_btn: "Download My Resume",
            github_btn: "View GitHub",

            projects_title: "Projects",
            project1_title: "Portfolio",
            project1_desc: "Personal portfolio developed to showcase projects, skills and technologies.",
            project2_title: "M&M Multimedia",
            project2_desc: "Dynamic web application built with HTML, PHP and Bootstrap, including interactive user features.",
            project3_title: "Teatro Saturno",
            project3_desc: "Theater website developed as an academic project, focused on structure and responsive design.",

            studies_title: "Studies and Courses",
            study1_title: "Higher Technician in Programming",
            study1_desc: "Tertiary technical degree focused on software development, programming logic, and web technologies.",
            study1_date: "2024 - 2026 | Teclab Higher Technical Institute",

            study2_title: "Web Design Course with WordPress",
            study2_desc: "Course focused on creating and managing websites using WordPress, including integration with digital tools and platforms.",
            study2_date: "2025 | National Technological University of Buenos Aires",

            study3_title: "Microsoft Office Course",
            study3_desc: "Training focused on the use of Microsoft Office tools including Word, Excel and PowerPoint.",
            study3_date: "2023 | ACE Morón Educational Community",

            study4_title: "Programming Course",
            study4_desc: "Introduction to programming concepts and development of applications using Visual Basic, HTML, PHP and MySQL.",
            study4_date: "2019 - 2020 | ACE Morón Educational Community",

            contact_title: "Contact Me!",
            copyright: "© 2026 | Designed by Lautaro Casal"
        },

        es: {
            nav_about: "Sobre mí",
            nav_projects: "Proyectos",
            nav_studies: "Estudios",
            nav_contact: "Contacto",

            about_title: "Desarrollador Web Junior",
            about_subtitle: "Desarrollador enfocado en crear aplicaciones web dinámicas con HTML, PHP y JavaScript.",
            about_desc: "¡Hola! Soy Lautaro Casal, Técnico Superior en Programación con experiencia en ventas y atención al cliente. Disfruto crear proyectos web y resolver problemas utilizando tecnología. Actualmente busco mi primera oportunidad en IT.",
            resume_btn: "Descargar Mi CV",
            github_btn: "Ver GitHub",

            projects_title: "Proyectos",
            project1_title: "Portafolio",
            project1_desc: "Portfolio personal desarrollado para presentar proyectos, habilidades y tecnologías.",
            project2_title: "M&M Multimedia",
            project2_desc: "Aplicación web dinámica desarrollada con HTML, PHP y Bootstrap con interacción de usuario.",
            project3_title: "Teatro Saturno",
            project3_desc: "Sitio web de teatro desarrollado como proyecto académico, enfocado en estructura y diseño responsive.",

            studies_title: "Estudios y Cursos",
            study1_title: "Técnico Superior en Programación",
            study1_desc: "Carrera terciaria enfocada en desarrollo de software, lógica de programación y tecnologías web.",
            study1_date: "2024 - 2026 | Instituto Técnico Superior Teclab",

            study2_title: "Curso de Diseño Web con WordPress",
            study2_desc: "Curso enfocado en la creación y gestión de sitios web utilizando WordPress.",
            study2_date: "2025 | Universidad Tecnológica Nacional de Buenos Aires",

            study3_title: "Curso de Microsoft Office",
            study3_desc: "Capacitación en herramientas de Microsoft Office incluyendo Word, Excel y PowerPoint.",
            study3_date: "2023 | Comunidad Educativa ACE Morón",

            study4_title: "Curso de Programación",
            study4_desc: "Introducción a la programación y desarrollo de aplicaciones usando Visual Basic, HTML, PHP y MySQL.",
            study4_date: "2019 - 2020 | Comunidad Educativa ACE Morón",

            contact_title: "¡Contáctame!",
            copyright: "© 2026 | Diseñado por Lautaro Casal"
        }

    };

    function applyTranslations(lang) {

        const t = translations[lang];

        document.querySelector('nav a[href="#aboutme"]').textContent = t.nav_about;
        document.querySelector('nav a[href="#projects"]').textContent = t.nav_projects;
        document.querySelector('nav a[href="#studies"]').textContent = t.nav_studies;
        document.querySelector('nav a[href="#contact"]').textContent = t.nav_contact;

        document.getElementById("about-title").textContent = t.about_title;
        document.getElementById("about-subtitle").textContent = t.about_subtitle;
        document.getElementById("about-desc").textContent = t.about_desc;

        document.querySelector(".download-btn button").innerHTML =
            `<i class="fa-solid fa-circle-down"></i> ${t.resume_btn}`;

        document.querySelector("#github-btn button").innerHTML =
            `<i class="fa-brands fa-github"></i> ${t.github_btn}`;

        document.getElementById("download-resume").href =
            lang === "en" ? "assets/cv/resume.pdf" : "assets/cv/cv.pdf";

        document.querySelector(".projects h2").textContent = t.projects_title;

        const projects = document.querySelectorAll(".project");

        projects[0].querySelector("h3").textContent = t.project1_title;
        projects[0].querySelector("p").textContent = t.project1_desc;

        projects[1].querySelector("h3").textContent = t.project2_title;
        projects[1].querySelector("p").textContent = t.project2_desc;

        projects[2].querySelector("h3").textContent = t.project3_title;
        projects[2].querySelector("p").textContent = t.project3_desc;

        document.querySelector(".studies h2").textContent = t.studies_title;

        const studies = document.querySelectorAll(".study-item");

        studies[0].querySelector("h3").textContent = t.study1_title;
        studies[0].querySelector("p").textContent = t.study1_desc;
        studies[0].querySelector("span").textContent = t.study1_date;

        studies[1].querySelector("h3").textContent = t.study2_title;
        studies[1].querySelector("p").textContent = t.study2_desc;
        studies[1].querySelector("span").textContent = t.study2_date;

        studies[2].querySelector("h3").textContent = t.study3_title;
        studies[2].querySelector("p").textContent = t.study3_desc;
        studies[2].querySelector("span").textContent = t.study3_date;

        studies[3].querySelector("h3").textContent = t.study4_title;
        studies[3].querySelector("p").textContent = t.study4_desc;
        studies[3].querySelector("span").textContent = t.study4_date;

        document.querySelector(".contact-title h4").textContent = t.contact_title;
        document.querySelector(".footer-bottom p").textContent = t.copyright;

    }

    languageToggle.addEventListener("click", () => {

        currentLanguage = currentLanguage === "en" ? "es" : "en";
        languageToggle.textContent = currentLanguage.toUpperCase();

        applyTranslations(currentLanguage);

    });

    function sortByDate(containerSelector, itemSelector) {

        const container = document.querySelector(containerSelector);
        const items = Array.from(container.querySelectorAll(itemSelector));

        items.sort((a, b) => {
            return b.dataset.date - a.dataset.date;
        });

        items.forEach(item => container.appendChild(item));
    }

    sortByDate(".studies-container", ".study-item");
    sortByDate(".projects-container", ".project");

});