// ==== Project Data ====
const projects = [
    {
        title: "CTC (Salary Prediction System)",
        images: ['ctc1.jpg','ctc2.jpg','ctc3.jpg','ctc4.jpg','ctc5.jpg','ctc6.jpg','ctc7.jpg','ctc8.jpg',],
        description: [
            "Developed a machine learning model to predict the salary of final-year students or freshers.",
            "Used XGBoost Regressor for model building and achieved optimal performance.",
            "Tech Stack: XGBoost, HTML, CSS, JavaScript, Node.js, Express.js, Flask, MongoDB."
        ]
    },
    {
        title: "BlueSign - Bluetooth Attendance System",
        images: ['b1.png','b2.png','b3.jpg','b4.jpg','b5.jpg'],
        description: [
            "An innovative mobile-based attendance system using Flutter and Bluetooth Low Energy (BLE).",
            "Integrated email verification, Node.js backend, and real-time attendance tracking.",
            "Tech Stack: Flutter, Node.js, Express.js, Socket.io, BLE."
        ]
    },
    {
        title: "Multi-Linguistic LAN Chat Application",
        images: ['l1.jpg','l2.jpg','l3.jpg','l4.jpg','l5.jpg','l6.jpg','l7.jpg'],
        description: [
            "Developed a LAN-based chat application with real-time multilingual support.",
            "Leveraged Google NLP for language translation between users.",
            "Tech Stack: Node.js, Express.js, Socket.io, HTML5, Bootstrap, JavaScript."
        ]
    },
    {
        title: "Easy 2 Vote (E-Voting System)",
        images: ['e3.jpg','e2.jpg','e1.png','e4.png','e5.png','e6.png','e7.jpg','e8.png','e9.jpg'
,'e10.jpg','e11.jpg','e13.png','e14.png','e15.jpg'

        ],
        description: [
            "Created a secure and user-friendly online voting platform.",
            "Enabled users to create customized polls with real-time result display.",
            "Tech Stack: PHP, HTML, CSS, MySQL."
        ]
    },
    {
        title: "SolarSense Intellilight",
        images: ['ss2.jpg','ss1.jpg','ss3.jpg','ss4.jpg','ss5.jpg','ss6.jpg'],
        description: [
            "Designed an IoT-based smart lighting system with automation and sensing features.",
            "Achieved a 40% reduction in power consumption through intelligent control.",
            "Tech Stack: IoT, Embedded Systems, Power Management, Arduino."
        ]
    },
    {
        title: "TechNanny (Smart Cradle System)",
        images: ['tc1.jpg','tc2.jpg','tc3.jpg','tc4.jpg','tc5.jpg'],
        description: [
            "Built an IoE-based smart cradle system for baby monitoring.",
            "Implemented sensors to monitor temperature and visualize health trends.",
            "Tech Stack: IoE, Embedded Systems, Health Monitoring."
        ]
    }
];
const container = document.getElementById("projects-container");
const modal = document.getElementById("image-gallery-modal");
const gallery = document.getElementById("gallery-images");
const imagePath = "../scr/";

// Create cards
projects.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    let imagesHTML = "";
    if (project.images.length > 0) {
        imagesHTML = `
            <div class="project-image-wrapper" onclick="openGallery(${index})">
                <img src="${imagePath}${project.images[0]}" alt="${project.title}" class="project-image">
                ${project.images.length > 1 ? `<div class="more-images">+${project.images.length - 1}</div>` : ""}
            </div>
        `;
    }

    const descriptionHTML = project.description.map(para => `<p>${para}</p>`).join("");

    projectCard.innerHTML = `
        ${imagesHTML}
        <div class="project-content">
            <h2 class="project-title">${project.title}</h2>
            <div class="project-description">
                ${descriptionHTML}
            </div>
        </div>
    `;

    container.appendChild(projectCard);

    // Fade-in animation
    setTimeout(() => {
        projectCard.classList.add('fade-in');
    }, 100);
});

// Open Gallery
function openGallery(projectIndex) {
    gallery.innerHTML = projects[projectIndex].images.map(img => `
        <img src="${imagePath}${img}" class="gallery-image">
    `).join("");

    modal.style.display = "flex";
}

// Close Gallery
function closeGallery() {
    modal.style.display = "none";
}
