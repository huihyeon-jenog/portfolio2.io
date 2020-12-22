const openButton = document.getElementById("open"),
    modal = document.querySelector(".modal"),
    overlay = modal.querySelector(".md_overlay"),
    closeButton = modal.querySelector("button");

const openModal = () =>{
    modal.classList.remove("hidden");
}

const closeModal = () =>{
    modal.classList.add("hidden");
}

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);