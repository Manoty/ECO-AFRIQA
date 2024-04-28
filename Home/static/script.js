const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active

    })
})

let nav = document.querySelector("nav")
window.addEventListener("scroll", ()=>{
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
        nav.style.backgroundColor = "rgba(64, 112, 244, 0.8)";
    }else{
        nav.classList.remove("sticky");
        nav.style.backgroundColor = "transparent";
    }

});