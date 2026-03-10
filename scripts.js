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
            header: {
                aboutMe: "About Me",
                projects: "Projects",
                studies: "Studies",
                contact: "Contact"
            },

            aboutMe: {
                title: "Welcome to my Portfolio",
                description: "Hello! I'm Lautaro Casal, a Higher Technician in Programming with experience in sales and customer service. I enjoy building web projects and solving problems using technology. Here you can find some of the projects I have developed.",
                resume: "Download My Resume"
            },

            projects: {
                title: "Projects",
                project1: {
                    title: "Portfolio",
                    description: "Personal portfolio website developed to showcase my projects and skills."
                },
                project2: {
                    title: "M&M Multimedia",
                    description: "Web application developed with HTML, PHP and Bootstrap, focused on dynamic content and user interaction."
                },
                project3: {
                    title: "Teatro Saturno",
                    description: "Theater website created as a demonstration project for my programming technical degree, focused on basic web structure and layout."
                }
            },

            studies: {
                title: "Studies and Courses",
                study1: {
                    title: "Web Design Course with WordPress",
                    description: "Course focused on creating and managing websites using WordPress, including integration with digital tools and platforms.",
                    span: "2025 | National Technological University of Buenos Aires"
                },
                study2: {
                    title: "Higher Technician in Programming",
                    description: "Tertiary technical degree focused on software development, programming logic, and web technologies.",
                    span: "2024 - 2026 | Teclab Higher Technical Institute"
                },
                study3: {
                    title: "Microsoft Office Course",
                    description: "Training focused on the use of Microsoft Office tools including Word, Excel and PowerPoint.",
                    span: "2023 | ACE Morón Educational Community"
                },
                study4: {
                    title: "Programming Course",
                    description: "Introduction to programming concepts and development of applications using Visual Basic, HTML, PHP and MySQL.",
                    span: "2019 - 2020 | ACE Morón Educational Community"
                }
            },

            footer: {
                contact: "Contact Me!",
                copyright: "© 2026 | Designed by Lautaro Casal"
            }
        },

        es: {
            header: {
                aboutMe: "Sobre mí",
                projects: "Proyectos",
                studies: "Estudios",
                contact: "Contacto"
            },

            aboutMe: {
                title: "Bienvenido a mi Portafolio",
                description: "¡Hola! Soy Lautaro Casal, Técnico Superior en Programación con experiencia en ventas y atención al cliente. Disfruto crear proyectos web y resolver problemas utilizando tecnología. Aquí puedes ver algunos de los proyectos que he desarrollado.",
                resume: "Descargar Mi CV"
            },

            projects: {
                title: "Proyectos",
                project1: {
                    title: "Portafolio",
                    description: "Sitio web personal creado para mostrar mis proyectos y habilidades."
                },
                project2: {
                    title: "M&M Multimedia",
                    description: "Aplicación web desarrollada con HTML, PHP y Bootstrap enfocada en contenido dinámico e interacción con el usuario."
                },
                project3: {
                    title: "Teatro Saturno",
                    description: "Sitio web de teatro creado como proyecto demostrativo para mi tecnicatura en programación."
                }
            },

            studies: {
                title: "Estudios y Cursos",
                study1: {
                    title: "Curso de Diseño Web con WordPress",
                    description: "Curso enfocado en la creación y gestión de sitios web utilizando WordPress.",
                    span: "2025 | Universidad Tecnológica Nacional de Buenos Aires"
                },
                study2: {
                    title: "Técnico Superior en Programación",
                    description: "Carrera terciaria enfocada en desarrollo de software, lógica de programación y tecnologías web.",
                    span: "2024 - 2026 | Instituto Técnico Superior Teclab"
                },
                study3: {
                    title: "Curso de Microsoft Office",
                    description: "Capacitación en herramientas de Microsoft Office incluyendo Word, Excel y PowerPoint.",
                    span: "2023 | Comunidad Educativa ACE Morón"
                },
                study4: {
                    title: "Curso de Programación",
                    description: "Introducción a la programación y desarrollo de aplicaciones usando Visual Basic, HTML, PHP y MySQL.",
                    span: "2019 - 2020 | Comunidad Educativa ACE Morón"
                }
            },

            footer: {
                contact: "¡Contáctame!",
                copyright: "© 2026 | Diseñado por Lautaro Casal"
            }
        }
    };

    const switchLanguage = (language) => {

        document.querySelector('nav a[href="#aboutme"]').textContent = translations[language].header.aboutMe;
        document.querySelector('nav a[href="#projects"]').textContent = translations[language].header.projects;
        document.querySelector('nav a[href="#studies"]').textContent = translations[language].header.studies;
        document.querySelector('nav a[href="#contact"]').textContent = translations[language].header.contact;

        document.querySelector(".aboutme h1").textContent = translations[language].aboutMe.title;
        document.querySelector(".desc").textContent = translations[language].aboutMe.description;

        document.querySelector(".download-btn button").innerHTML =
            `<i class="fa-solid fa-circle-down"></i> ${translations[language].aboutMe.resume}`;

        document.getElementById("download-resume").href =
            language === "en" ? "assets/cv/resume.pdf" : "assets/cv/cv.pdf";

        document.querySelector(".projects h2").textContent = translations[language].projects.title;

        const projectItems = document.querySelectorAll(".project");

        projectItems[0].querySelector("h3").textContent = translations[language].projects.project1.title;
        projectItems[0].querySelector("p").textContent = translations[language].projects.project1.description;

        projectItems[1].querySelector("h3").textContent = translations[language].projects.project2.title;
        projectItems[1].querySelector("p").textContent = translations[language].projects.project2.description;

        projectItems[2].querySelector("h3").textContent = translations[language].projects.project3.title;
        projectItems[2].querySelector("p").textContent = translations[language].projects.project3.description;

        document.querySelector(".studies h2").textContent = translations[language].studies.title;

        const studyItems = document.querySelectorAll(".study-item");

        studyItems[0].querySelector("h3").textContent = translations[language].studies.study1.title;
        studyItems[0].querySelector("p").textContent = translations[language].studies.study1.description;
        studyItems[0].querySelector("span").textContent = translations[language].studies.study1.span;

        studyItems[1].querySelector("h3").textContent = translations[language].studies.study2.title;
        studyItems[1].querySelector("p").textContent = translations[language].studies.study2.description;
        studyItems[1].querySelector("span").textContent = translations[language].studies.study2.span;

        studyItems[2].querySelector("h3").textContent = translations[language].studies.study3.title;
        studyItems[2].querySelector("p").textContent = translations[language].studies.study3.description;
        studyItems[2].querySelector("span").textContent = translations[language].studies.study3.span;

        studyItems[3].querySelector("h3").textContent = translations[language].studies.study4.title;
        studyItems[3].querySelector("p").textContent = translations[language].studies.study4.description;
        studyItems[3].querySelector("span").textContent = translations[language].studies.study4.span;

        document.querySelector(".contact-title h4").textContent = translations[language].footer.contact;
        document.querySelector(".footer-bottom p").textContent = translations[language].footer.copyright;
    };

    languageToggle.addEventListener("click", () => {

        currentLanguage = currentLanguage === "en" ? "es" : "en";

        languageToggle.textContent = currentLanguage.toUpperCase();

        switchLanguage(currentLanguage);

    });

});