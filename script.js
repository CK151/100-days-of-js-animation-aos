
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    header.classList.toggle("sticky",window.scrollY > 0);
})


//scroll indicator

window.onscroll = () => scrollProgress()


function scrollProgress() {
    const currentState = document.body.scrollTop || document.documentElement.scrollTop;

    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollPercentage = (currentState / pageHeight) * 100

    const progresBar = document.querySelector(".progress")

    progresBar.style.visibility = "visible";

    progresBar.style.width = scrollPercentage + "%"

    //newsletter js

    const newsLetter = document.querySelector(".newsletter");

    if (scrollPercentage > 80) {
        newsLetter.style.transform = "translateX(0)"
    }
    else {
        newsLetter.style.transform = "translateX(-200%)"
    }

    const times = document.querySelector(".fa-times");

    /*times.addEventListener("click", () => {
        newsLetter.style.transform = "translateX(-200%)"
    })*/

    document.querySelector(".fa-times").addEventListener("click", () => {
        newsLetter.style.transform = "translateX(-200%)"
    })
}



  AOS.init({
    duration: 1000,
  });

