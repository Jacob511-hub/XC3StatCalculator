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