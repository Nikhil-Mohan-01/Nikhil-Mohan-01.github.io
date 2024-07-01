var tabLinks = document.getElementsByClassName("tab-links")
var tabContents = document.getElementsByClassName("tab-contents")

function opentab(tabName){
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

let slideIndex = 0;
let slideTimeout;

showSlides();

function plusSlides(n) {
    clearTimeout(slideTimeout);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(slideTimeout);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n === undefined) {
        slideIndex++;
    } else {
        slideIndex = n;
    }

    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";

    slideTimeout = setTimeout(showSlides, 5000); // Change image every 5 seconds
}


var sideMenu = document.getElementById("sideMenu");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbx_-qPhbgnTdTvQyEwPPUndlRSG86pjcHyswAcgwnoetqA5fQJZdMgRDV-YMJ_dIvRFag/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 2000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

// Photography
const carouselTrack = document.querySelector('.carousel-track');
const carouselCards = document.querySelectorAll('.carousel-card');

let radius;
if (window.matchMedia("(max-width: 600px)").matches) {
  radius = 150;
} else {
  radius = 300;
}
console.log(radius);
//const radius = 300; // Adjust the radius to control the size of the circle
const cardCount = carouselCards.length;
const angleStep = 360 / cardCount;

carouselCards.forEach((card, index) => {
    const angle = angleStep * index;
    const theta = (angle * Math.PI) / 180;
    const x = Math.cos(theta) * radius;
    const z = Math.sin(theta) * radius;
    card.style.transform = `translateX(${x}px) translateZ(${z}px)`;
});


// portfolio switch based on screen size
function handleViewportChanges() {
    var portLink = document.querySelector('.port');
    var portForPhoneLink = document.querySelector('.port-for-phone');

    if (window.matchMedia("(max-width: 600px").matches){
        if (portLink) {
            portLink.style.display = 'none';
        }
        if (portForPhoneLink) {
            portForPhoneLink.style.display = 'inline-block';
        }
    } else {
        if (portLink) {
            portLink.style.display = 'inline-block';
        }
        if (portForPhoneLink) {
            portForPhoneLink.style.display = 'none';
        }
    }
}

handleViewportChanges();
window.addEventListener('resize', handleViewportChanges);