let slideIndex = 0;

const slides = document.querySelectorAll(".slides");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    if (index >= slides.length) {
        slideIndex = 0;
    }

    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides[slideIndex].classList.add("active");
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

showSlide(slideIndex);

setInterval(nextSlide, 3000);
function changeLanguage(lang){

document.documentElement.lang=lang;

document.documentElement.dir=
lang==="ar" ? "rtl":"ltr";

for(const id in language[lang]){

document.getElementById(id).innerHTML=
language[lang][id];

}

}
enBtn.onclick=()=>changeLanguage("en");

arBtn.onclick=()=>changeLanguage("ar");
const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});