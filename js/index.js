let myProjects = [{
     title: "Chat Application",
        imageLink: "https://www.shutterstock.com/image-vector/chat-message-comic-text-collection-260nw-1235112490.jpg",
        status: "completed",
        description: "A real-time chat application developed to enable seamless communication between users over a network. The system allows users to sign up, log in, and exchange messages instantly. Key features include user authentication, message storage, responsive UI, and real-time message updates using technologies like WebSockets. Built with a scalable backend (e.g., Node.js/Express), a responsive frontend (e.g., HTML/CSS/JavaScript), and a NoSQL or SQL database (e.g., MongoDB/MySQL) for storing user data and chat history. Ensures secure data handling and user-friendly experience across devices.",
        websiteLink: "https://baladineshmchatapp.netlify.app",
    },
    {
        title: "AI Hand Gesture",
        imageLink: "https://th.bing.com/th/id/OIP.YLKvLby7NSQlIZL497aLSwAAAA?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
        status: "completed",
        description: "HAND GESTURE RECOGNITION DRAWING APP is a virtual drawing application that allows you to draw on the screen using just your hand gestures. By using your webcam, the app detects hand movements and lets you control drawing, erasing, and more — without touching the mouse or keyboard. This is an interactive and user-friendly application built with Python.",
        websiteLink: "https://github.com/BalaDineshM/AI-gesture",
    },
    {
        title: "Mini Wikipedia",
        imageLink: "https://res.cloudinary.com/dkbwdkthr/image/upload/v1708277960/wiki.png",
        status: "completed",
        description: "This is a custom wikipedia search application where user can searchand view curated results and can see detailed explanation in wikipedia by clicking on the specific result. <br> Tools Used : HTML , CSS , JAVASCRIPT , REST API calls, BOOTSTRAP",
        websiteLink: "https://baladineshm.github.io/wiki/",
    },
    {
         title: "Periodic Table",
        imageLink: "https://res.cloudinary.com/dkbwdkthr/image/upload/v1708262092/tamil/cghemi.png",
        status: "completed",
        description: "asa",
        websiteLink: "https://baladineshm.github.io/periodic/",
    },
];

let singleRow = document.getElementById("singleRow");

let mainBody = document.getElementById("mainBODY");

for (let i = 6; i < myProjects.length + 6; i++) {
    let mainContainer = document.createElement("div");
    mainContainer.classList.add("col-12", "col-md-6", "col-lg-3");

    let code = `
    <div class="projectSingleCard hidden" onMouseOver="this.style.boxShadow=0px 0px 15px 1px #ffffffc6;" data-toggle="modal" data-target="#exampleModal${i}">
        <div class="logoContainer">
            <div class="numberBOx">
                ${i}
            </div>
            <div class="logo">
            <img class="logoImage" src="${myProjects[i - 6].imageLink}" />
            </div>
        </div>
        <div class="projectNameContainer">
            ${myProjects[i - 6].title}
        </div>
        <div class="statusContainer">
            <p class="status">Status : <span id="current"> ✓ Completed</span></p>
        </div>
    </div>`;
    mainContainer.innerHTML = code;
    singleRow.appendChild(mainContainer);

    let modelContainer = document.createElement("div");
    modelContainer.classList.add("modal", "fade", "modal-background");
    modelContainer.setAttribute("id", `exampleModal${i}`);
    modelContainer.setAttribute("tabindex", "-1");
    modelContainer.setAttribute("aria-labelledby", `exampleModalLabel${i}`);
    modelContainer.setAttribute("aria-hidden", "true");

    let modelCode = `
    <div class="modal-dialog mt-5">
          <div class="modal-content-container ">
            <button type="button" class="modal-close-button buttonCLOSE"  data-dismiss="modal">
                ✕
             </button>
            <div class="modal-header text-center">
              <h5 class="modal-title  project-modal-title" id="exampleModalLabel">
              ${myProjects[i - 6].title}
              </h5>
            </div>
            <div class="modal-body">
              <p class="about-app">
              ${myProjects[i - 6].description}
              </p>
            </div>
        
          </div>
        </div>
        <div class="visitContainer">
            <a class="VISITbutton" target="_blank" href="${
              myProjects[i - 6].websiteLink
            }">
                Visit Website
             </a>
        </div>
    `;

    modelContainer.innerHTML = modelCode;

    mainBody.append(modelContainer);
}

/* common observer */

// const obeserver1 = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         entry.target.classList.toggle("show" , entry.isIntersecting);
//     }),
//     {
//         rootMargin: "-200px",
//         threshold: 1,
//     }
// });

function COMMONhandleIntersection(entries) {
    entries.forEach((entry) => {
        const isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}

const COMMONoptions = {
    root: null,
    rootMargin: "-100px",
    threshold: 0,
};

const COMMONobserver = new IntersectionObserver(
    COMMONhandleIntersection,
    COMMONoptions
);
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((ele) => COMMONobserver.observe(ele));

/* project observer */

const box = document.querySelector(".singleProjectsContainer");

function handleIntersection(entries) {
    entries.forEach((entry) => {
        const isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
            entry.target.classList.add("animateProjects");
        } else {
            entry.target.classList.remove("animateProjects");
        }
    });
}

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
};

const observer = new IntersectionObserver(handleIntersection, options);

observer.observe(box);

/* achievement heading observer */

const achievement = document.querySelector(".allLetterMainContainer");

function handleIntersection2(entries) {
    entries.forEach((entry) => {
        const isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
            entry.target.classList.add("achievementHeadingSectionAniamate");
        } else {
            entry.target.classList.remove("achievementHeadingSectionAniamate");
        }
    });
}

const options2 = {
    root: null,
    rootMargin: "-200px",
    threshold: 0,
};

const observer2 = new IntersectionObserver(handleIntersection2, options2);

observer2.observe(achievement);

/* single card achievement heading observer */

const achievementCARD = document.querySelectorAll(".oneAchievement");

function handleIntersection3(entries) {
    entries.forEach((entry) => {
        const isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
            entry.target.classList.add("oneAchievementANIMATE");
        } else {
            entry.target.classList.remove("oneAchievementANIMATE");
        }
    });
}

const options3 = {
    root: null,
    rootMargin: "-200px",
    threshold: 0,
};

const observer3 = new IntersectionObserver(handleIntersection3, options3);
achievementCARD.forEach((ele) => observer3.observe(ele));

/* skills piecgart heading observer */

// function handleIntersection4(entries) {
//   entries.forEach(entry => {
//     const isIntersecting = entry.isIntersecting;
//     if (isIntersecting) {
//       entry.target.classList.add('animateSKILLchart');
//     } else {
//       entry.target.classList.remove('animateSKILLchart');
//     }
//   });
// }

// const options4 = {
//   root: null,
//   rootMargin: '-500px',
//   threshold: 0
// };

// const observer4 = new IntersectionObserver(handleIntersection4, options4);
// const skillChart = document.querySelectorAll('.piechart-1-container > div');
// skillChart.forEach((ele) => observer4.observe(ele));

function updateProgressCircle(easyValue, mediumValue, hardValue, total, easyTotal, mediumTotal, hardTotal) {
    const easyAngle = (easyValue / total) * 360;
    const mediumAngle = (mediumValue / total) * 360 + easyAngle;
    const hardAngle = (hardValue / total) * 360 + mediumAngle;

    const circle = document.querySelector(".progress-circle");
    circle.style.background = `conic-gradient(
      #4caf50 0deg ${easyAngle}deg,
      #ffc107 ${easyAngle}deg ${mediumAngle}deg,
      #f44336 ${mediumAngle}deg ${hardAngle}deg,
      #2c2c2c ${hardAngle}deg 360deg
  )`;

    // Update the numbers
    document.querySelector(".progress-number").textContent = easyValue + mediumValue + hardValue;

    document.querySelector(".progress-total").textContent = total;

    document.querySelector(".easy .value").textContent = easyValue;
    document.querySelector(".medium .value").textContent = mediumValue;
    document.querySelector(".hard .value").textContent = hardValue;

    document.querySelector(".easy .total").textContent = easyTotal;
    document.querySelector(".medium .total").textContent = mediumTotal;
    document.querySelector(".hard .total").textContent = hardTotal;
}

// Example usage (replace this with your actual backend fetch)
async function fetchDataFromBackend() {
    // const response = await fetch(
    //     "https://leetcode-stats-api.herokuapp.com/GajendranA"
    // );
    // const resData = await response.json();
    // console.log(resData);

    // const data = {
    //     easy: resData.easySolved,
    //     easyTotal: resData.totalEasy,
    //     medium: resData.mediumSolved,
    //     mediumTotal: resData.totalMedium,
    //     hard: resData.hardSolved,
    //     hardTotal: resData.totalHard,
    //     total: resData.totalQuestions,
    // };

    updateProgressCircle(130,201,33,3600, 883, 1871, 846);
}

// Call this function when you want to fetch and update the data
fetchDataFromBackend();


document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;
    const slideWidth = slides[0].offsetWidth;
    const slideCount = slides.length;

    // Function to move to a specific slide
    function moveToSlide(index) {
        currentIndex = index;
        if (currentIndex < 0) {
            currentIndex = slideCount - 1; // Wrap around to the last slide
        } else if (currentIndex >= slideCount) {
            currentIndex = 0; // Wrap around to the first slide
        }
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Event listeners for arrows
    leftArrow.addEventListener('click', function() {
        moveToSlide(currentIndex - 1);
    });

    rightArrow.addEventListener('click', function() {
        moveToSlide(currentIndex + 1);
    });

    // Auto-scroll every 2 seconds
    setInterval(function() {
        moveToSlide(currentIndex + 1);
    }, 2000);
});
