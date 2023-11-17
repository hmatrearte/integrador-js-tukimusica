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

// -----------------volumenLoco-------------------

animate(document.getElementById('bar1'), [350, 250, 310, 150]);
                animate(document.getElementById('bar2'), [50, 150, 100, 350]);
                animate(document.getElementById('bar3'), [300, 200, 250, 100]);
                animate(document.getElementById('bar4'), [375, 145, 215, 95]);
                animate(document.getElementById('bar5'), [75, 115, 80, 235]);
                animate(document.getElementById('bar6'), [175, 45, 195, 115]);
                animate(document.getElementById('bar7'), [215, 145, 300, 95]);
                animate(document.getElementById('bar8'), [55, 345, 145, 250]);

                function animate(element, heights) {
                    let currentHeight = 0;
                    let loop = 0;

                    setInterval(function() {
                        if (currentHeight === heights[loop]) {
                            loop++;

                            if (!heights[loop]) {
                                loop = 0;
                            }
                        } else {
                            if (currentHeight > heights[loop]) {
                                currentHeight--;
                            } else {
                                currentHeight++;
                            }

                            element.style.height = currentHeight + 'px';
                        }
                    }, 5);
                }