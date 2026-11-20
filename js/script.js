
document.addEventListener("DOMContentLoaded", () => {

    // Smooth navigation
    document.querySelectorAll('.nav-links a, .nav-logo, .nav-contact, .hero-buttons a').forEach(link => {

        link.addEventListener('click', function(e) {

            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

        });

    });

    // Active navigation link
    const sections = document.querySelectorAll('#home, #about');

    window.addEventListener('scroll', () => {

        let current = 'home';

        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 200) {
                current = section.id;
            }
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.toggle(
                'active',
                link.getAttribute('href') === '#' + current
            );
        });

    });

});




// ABOUT SECTION SCROLL REVEAL

const aboutObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            aboutObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll('.reveal-left, .reveal-right')
.forEach(element => {
    aboutObserver.observe(element);
});



/* ==========================================
   ACTING JOURNEY - SCROLL ANIMATIONS
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const journeyElements = document.querySelectorAll(
        ".journey-reveal"
    );

    if (!("IntersectionObserver" in window)) {

        journeyElements.forEach(element => {
            element.classList.add("show");
        });

        document.querySelectorAll(".journey-card").forEach(card => {
            card.classList.add("show");
        });

        return;
    }

    const journeyObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    journeyElements.forEach(element => {
        journeyObserver.observe(element);
    });

});



/* PERSONAL DETAILS SCROLL REVEAL */

const profileContactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            profileContactObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll('.profile-contact-reveal').forEach((element, index) => {
    element.style.transitionDelay = `${index * 0.12}s`;
    profileContactObserver.observe(element);
});



/* CINEMATIC PROFILE REVEAL */

const cpElements = document.querySelectorAll('.cp-reveal');

if ('IntersectionObserver' in window) {
    const cpObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('cp-visible');
                cpObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    cpElements.forEach((element, index) => {
        element.style.transitionDelay = `${Math.min(index * 0.12, 0.65)}s`;
        cpObserver.observe(element);
    });
} else {
    cpElements.forEach(element => {
        element.classList.add('cp-visible');
    });
}
