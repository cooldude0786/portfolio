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


// Select the sections you want to animate
const sections = document.querySelectorAll('.fade-in');

// Options for the Intersection Observer
const options = {
    root: null, // viewport
    threshold: 0.5, // 50% of the element needs to be visible
};

// Callback function to handle the intersection logic
const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the animation class when the element comes into view
            entry.target.classList.add('fade-in-visible');
        } else {
            // Optionally remove the animation class if you want it to fade out when not in view
            entry.target.classList.remove('fade-in-visible');
        }
    });
};

// Create an IntersectionObserver instance
const observer = new IntersectionObserver(handleIntersection, options);

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});


const skills = [
    "Nodejs", "MongoDB", "Express", 'Javascript', 'React', 'Flutter', 'Git/Github', 'Docker'
    ,'Python','Bootstrap','jQuery','Flask','C/C++','Ardiuino'
];

const skillsGrid = document.getElementById('skillsGrid');

skills.forEach(skill => {
    const div = document.createElement('div');
    div.className = 'skill-tile';
    div.textContent = skill;
    skillsGrid.appendChild(div);
});
