document.addEventListener("DOMContentLoaded", function () {
    // Toggle mobile menu visibility
    const menu = document.querySelector("#mobile-menu");
    const menuLinks = document.querySelector(".navbar__menu");

    if (menu && menuLinks) {
        menu.addEventListener("click", function () {
            menu.classList.toggle("is-active");
            menuLinks.classList.toggle("active");
        });
    } else {
        console.warn("Menu or menu links not found in the DOM.");
    }

    // Change header background color and all text font color on scroll
    const header = document.querySelector("header");

    if (header) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 0) {
                header.style.backgroundColor = "brown";
                header.style.color = "#003366";
                header.querySelectorAll("*").forEach(element => {
                    element.style.color = "#003366";
                });
            } else {
                header.style.backgroundColor = "#003366";
                header.style.color = "white";
                header.querySelectorAll("*").forEach(element => {
                    element.style.color = "white";
                });
            }
        });
    } else {
        console.warn("Header not found in the DOM.");
    }

    // Create an observer to detect when the contact-wrapper is in view
    const contactWrapper = document.querySelector('.contact-wrapper');
    const contactInfo = document.querySelector('.contact-info');
    const contactInfo2 = document.querySelector('.contact-info2');

    if (contactWrapper && contactInfo && contactInfo2) {
        const options = { root: null, threshold: 0.5 };

        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    contactInfo.style.animation = 'slideInLeft 1.5s ease-out forwards';
                    contactInfo2.style.animation = 'slideInRight 1.5s ease-out forwards';
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        observer.observe(contactWrapper);

        const isInView = (element) => {
            const rect = element.getBoundingClientRect();
            return rect.top < window.innerHeight && rect.bottom >= 0;
        };

        if (isInView(contactWrapper)) {
            contactInfo.style.animation = 'slideInLeft 1.5s ease-out forwards';
            contactInfo2.style.animation = 'slideInRight 1.5s ease-out forwards';
        }
    } else {
        console.warn("Contact wrapper, info, or info2 not found in the DOM.");
    }

    // Create an observer to detect when the service-container is in view
    const serviceContainer = document.querySelector('.service-container');

    if (serviceContainer) {
        const options = { root: null, threshold: 0.2 };

        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    serviceContainer.style.animation = 'slideInLeft 1.5s ease-out forwards';
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        observer.observe(serviceContainer);

        const isInView = (element) => {
            const rect = element.getBoundingClientRect();
            return rect.top < window.innerHeight && rect.bottom >= 0;
        };

        if (isInView(serviceContainer)) {
            serviceContainer.style.animation = 'slideInLeft 1.5s ease-out forwards';
        }
    } else {
        console.warn("Service container not found in the DOM.");
    }
});
