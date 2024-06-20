const openModalButtom = document.querySelector("#open-modal");
const closeModalButtom = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

// evento padrão para varios elementos 
[openModalButtom, closeModalButtom, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});