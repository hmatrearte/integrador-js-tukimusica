// ------------- Slider / Portada------------------

const hero = document.querySelector(".hero");
const portada = hero.querySelector(".portada");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const portadaWidth = portada.clientWidth;

let portadaIndex = 0;

const moveToPortada = () => {
    portada.style.transform = `translateX(${-portadaWidth * portadaIndex}px)`;
};

const nextPortada = () => {
    if (portadaIndex === portada.children.length - 1) {
        portadaIndex = 0;
    } else {
        portadaIndex++;
    }

    moveToPortada();
};

const prevPortada = () => {
    if (portadaIndex === 0) {
        portadaIndex = portada.children.length - 1;
    } else {
        portadaIndex--;
    }

    moveToPortada();
};

nextBtn.addEventListener("click", nextPortada);
prevBtn.addEventListener("click", prevPortada);

