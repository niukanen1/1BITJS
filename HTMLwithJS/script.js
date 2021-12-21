let element = document.getElementById("points");

function Add() {
    let value = parseInt(element.innerHTML);
    element.innerHTML = value + 1;
}

function Modal() { 
    let modal = document.getElementById("modal"); 
    let body = document.querySelector("body"); 
    let backgroundModal = document.querySelector('.modal-background'); 

    if (modal.classList.contains('modal-hide')) { 
        modal.classList.remove('modal-hide')
        body.style.overflow = "hidden"
        backgroundModal.style.display = "block"
    } else { 
        modal.classList.add("modal-hide");
        body.style.overflow = "auto"
        backgroundModal.style.display = "none"
    }
}