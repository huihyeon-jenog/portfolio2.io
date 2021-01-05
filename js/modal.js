const modal = document.getElementById("open")
const openPop = document.querySelector(".modal");
const mobile = document.querySelector(".mobileHidden");
const closeModal = document.querySelector(".modal_overlay");
const closeClick = document.querySelector(".closeModal")


const close = () =>{
    openPop.classList.add("hidden");
    mobile.classList.remove("hidden");

}
const openModal = () =>{
    openPop.classList.remove("hidden");
    mobile.classList.add("hidden")
}

closeClick.addEventListener("click",close);
closeModal.addEventListener("click",close);
modal.addEventListener("click",openModal);