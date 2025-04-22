    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-right');

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('open');
    });

    // Close menu if clicked outside
    document.addEventListener('click', (e) => {
        const isClickInsideMenu = navMenu.contains(e.target);
        const isClickOnHamburger = hamburger.contains(e.target);

        if (!isClickInsideMenu && !isClickOnHamburger) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('open');
        }
    });


