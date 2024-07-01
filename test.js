const carouselTrack = document.querySelector('.carousel-track');
const carouselCards = document.querySelectorAll('.carousel-card');
const radius = 500; // Adjust the radius to control the size of the circle
const cardCount = carouselCards.length;
const angleStep = 360 / cardCount;

carouselCards.forEach((card, index) => {
    const angle = angleStep * index;
    const theta = (angle * Math.PI) / 180;
    const x = Math.cos(theta) * radius;
    const z = Math.sin(theta) * radius;
    card.style.transform = `translateX(${x}px) translateZ(${z}px)`;
});
