document.addEventListener("DOMContentLoaded", () => {
    const portrait = document.getElementById("currentCharacter");
    const buttonNoah = document.getElementById("buttonNoah");
    const buttonMio = document.getElementById("buttonMio");
    const buttonEunie = document.getElementById("buttonEunie");
    const buttonTaion = document.getElementById("buttonTaion");
    const buttonLanz = document.getElementById("buttonLanz");
    const buttonSena = document.getElementById("buttonSena");
    const buttonHero = document.getElementById("buttonHero");

    const buttonNoahOuroboros = document.getElementById("buttonNoahOuroboros");
    const buttonMioOuroboros = document.getElementById("buttonMioOuroboros");
    const buttonEunieOuroboros = document.getElementById("buttonEunieOuroboros");
    const buttonTaionOuroboros = document.getElementById("buttonTaionOuroboros");
    const buttonLanzOuroboros = document.getElementById("buttonLanzOuroboros");
    const buttonSenaOuroboros = document.getElementById("buttonSenaOuroboros");

    buttonNoah.addEventListener("click", () => {
        portrait.src = "img/portraits/NoahPortrait.png";
    });
    buttonMio.addEventListener("click", () => {
        portrait.src = "img/portraits/MioPortrait.png";
    });
    buttonEunie.addEventListener("click", () => {
        portrait.src = "img/portraits/EuniePortrait.png";
    });
    buttonTaion.addEventListener("click", () => {
        portrait.src = "img/portraits/TaionPortrait.png";
    });
    buttonLanz.addEventListener("click", () => {
        portrait.src = "img/portraits/LanzPortrait.png";
    });
    buttonSena.addEventListener("click", () => {
        portrait.src = "img/portraits/SenaPortrait.png";
    });
    buttonHero.addEventListener("click", () => {
        portrait.src = "img/portraits/heroes/EthelPortrait.png";
    });

    buttonNoahOuroboros.addEventListener("click", () => {
        portrait.src = "img/portraits/ouroboros/NoahOuroborosPortrait.png";
    });
    buttonMioOuroboros.addEventListener("click", () => {
        portrait.src = "img/portraits/ouroboros/MioOuroborosPortrait.png";
    });
    buttonEunieOuroboros.addEventListener("click", () => {
        portrait.src = "img/portraits/ouroboros/EunieOuroborosPortrait.png";
    });
    buttonTaionOuroboros.addEventListener("click", () => {
        portrait.src = "img/portraits/ouroboros/TaionOuroborosPortrait.png";
    });
    buttonLanzOuroboros.addEventListener("click", () => {
        portrait.src = "img/portraits/ouroboros/LanzOuroborosPortrait.png";
    });
    buttonSenaOuroboros.addEventListener("click", () => {
        portrait.src = "img/portraits/ouroboros/SenaOuroborosPortrait.png";
    });
});

var classMenu = document.getElementById("classModal");
var classButton = document.getElementById("classButton");
var classSpan = document.getElementById("class-close");
var heroSpan = document.getElementById("hero-close");

classButton.onclick = function() {
    classMenu.style.display = "block";
}

classSpan.onclick = function() {
    classMenu.style.display = "none";
}

heroSpan.onclick = function() {
    classMenu.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === classMenu) {
        classMenu.style.display = "none";
    }
    else if (event.target === artMenu) {
        artMenu.style.display = "none";
    }
}

// This function swaps between the Class and Hero select menus
function menuSwap(character) {
    let characterType = character.getAttribute("data-character-type");

    if (characterType === "party") {
        classMenu = document.getElementById("classModal");
    }
    else if (characterType === "hero") {
        classMenu = document.getElementById("heroModal");
    } 
}

var artMenu = document.getElementById("art-agnus-modal");
var artSpan = document.getElementById("art-agnus-close");
var artButton = document.getElementById("art-agnus");

artButton.onclick = function() {
    artMenu.style.display = "block";
}

artSpan.onclick = function() {
    artMenu.style.display = "none";
}
