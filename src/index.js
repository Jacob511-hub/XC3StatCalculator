const portraitsImages = [
    { name: "Noah", src: "img/portraits/NoahPortrait.png" },
    { name: "Mio", src: "img/portraits/MioPortrait.png" },
    { name: "Eunie", src: "img/portraits/EuniePortrait.png" },
    { name: "Taion", src: "img/portraits/TaionPortrait.png" },
    { name: "Lanz", src: "img/portraits/LanzPortrait.png" },
    { name: "Sena", src: "img/portraits/SenaPortrait.png" },
    { name: "Hero", src: "img/portraits/heroes/EthelPortrait.png" },
    { name: "Noah Ouroboros", src: "img/portraits/ouroboros/NoahOuroborosPortrait.png" },
    { name: "Mio Ouroboros", src: "img/portraits/ouroboros/MioOuroborosPortrait.png" },
    { name: "Eunie Ouroboros", src: "img/portraits/ouroboros/EunieOuroborosPortrait.png" },
    { name: "Taion Ouroboros", src: "img/portraits/ouroboros/TaionOuroborosPortrait.png" },
    { name: "Lanz Ouroboros", src: "img/portraits/ouroboros/LanzOuroborosPortrait.png" },
    { name: "Sena Ouroboros", src: "img/portraits/ouroboros/SenaOuroborosPortrait.png" },
 ];

document.addEventListener("DOMContentLoaded", () => {
    const portrait = document.getElementById("currentCharacter");
    const buttons = document.getElementsByClassName("icon");

    for (let index = 0; index < buttons.length; index++) {
        if (index >= portraitsImages.length){
           return;
        }
        buttons[index].setAttribute("data-portrait-img",portraitsImages[index].src);
        buttons[index].addEventListener("click", () => {
           const portraitImg = buttons[index].getAttribute("data-portrait-img");
           portrait.src = portraitImg;
        })
    }
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
var artAgnusSpan = document.getElementById("art-agnus-close");
var artKevesSpan = document.getElementById("art-keves-close");

function openArtMenu(art) {
    let artType = art.getAttribute("data-art-type");

    if (artType === "agnus") {
        artMenu = document.getElementById("art-agnus-modal");
        artMenu.style.display = "block";
    }
    else if (artType === "keves") {
        artMenu = document.getElementById("art-keves-modal");
        artMenu.style.display = "block";
    }
}

artAgnusSpan.onclick = function() {
    artMenu.style.display = "none";
}

artKevesSpan.onclick = function() {
    artMenu.style.display = "none";
}
