const prizesAndRecognition = [
    {
        title: "1st Place - Full-Stack Web Development Hackathon",
        event: "CSX Committee, Xavier Institute of Engineering",
        date: "March 2024",
        para: [
            "Developed a full-stack web application under time constraints.",
            "Showcased frontend and backend expertise, leading to first place."
        ],
        images: [
            "csxProjectCompitetion.jpg"
        ]
    },
    {
        title: "Invited Member - Department Advisory Board (DAB)",
        event: "Xavier Institute of Engineering",
        date: "August 2024",
        para: [
            "Contributed ideas for departmental improvements and collaborations.",
            "Participated in academic and technical planning meetings."
        ],
        images: [
            "loa1.png"
        ]
    },
    {
        title: "Event Manager - Transmission",
        event: "Student Council, Xavier Institute of Engineering",
        date: "Jun 2023 - Jun-2024",
        para: [
            "Coordinated technical events and workshops during the college tech fest. Managed planning, scheduling, and on-ground execution to ensure smooth operations.",
            " Collaborated with teams and facilitators to handle logistics and technical setup effectively.."
        ],
        images: [
            "EM.png"
        ]
    },
    {
        title: "Hod - Stage and Sound",
        event: "Student Council, Xavier Institute of Engineering",
        date: "Jun 2023 - Jun-2024",
        para: [
            "Led all sound and stage operations during college festivals, overseeing equipment setup, live mixing, and coordination with performers and event hosts.",
            "Ensured seamless audio experiences and smooth transitions across multiple events."
        ],
        images: [
            "SS.png"
        ]
    },
    {
        title: "Winner - Mini Project Competitions",
        event: "Department of Information Technology, Xavier Institute of Engineering",
        date: "2023 - 2024",
        para: [
            "Demonstrated innovative technical solutions across two competitions.",
            "Recognized for creativity, execution, and presentation skills."
        ],
        images: [
            "m1.jpg",
            "m2.jpg",
        ]
    },
    {
        title: "Winner - Project Competition",
        event: "CSX Committee, Xavier Institute of Engineering",
        date: "2024",
        para: [
            "Secured first place for a high-impact, technically solid project.",
            "Excelled in technical design, usability, and innovation."
        ],
        images: [
            "images/project_competition_main.jpg",
            "images/project_competition_1.jpg",
            "images/project_competition_2.jpg"
        ]
    }
];

// Create Cards
const container = document.getElementById('prizes-container');
const modal = document.getElementById('modal');
const modalImages = document.getElementById('modal-images');
const closeModal = document.querySelector('.close');

prizesAndRecognition.forEach(item => {
    const card = document.createElement('div');
    card.className = 'prize-card';
    card.innerHTML = `
      <div class="prize-image-wrapper">
        <img src="../scr/${item.images[0]}" alt="Prize Image" class="prize-image">
        ${item.images.length > 1 ? `<div class="more-images">+${item.images.length - 1}</div>` : ''}
      </div>
      <div class="prize-content">
        <h2 class="prize-title">${item.title}</h2>
        <small>${item.event} | ${item.date}</small>
        <div class="prize-description">
          ${item.para.map(p => `<p>${p}</p>`).join('')}
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImages.innerHTML = item.images.map(img => `<img src="../scr/${img}" class="gallery-image" alt="Gallery Image">`).join('');
    });

    container.appendChild(card);
});

// Modal close
closeModal.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
// window.addEventListener('DOMContentLoaded', () => {
//     const cards = document.querySelectorAll('.prize-card');
//     cards.forEach(card => {
//         card.classList.add('visible');
//     });
// });
