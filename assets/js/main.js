// MENU MOBILE

let iconMenu = document.querySelector('.icon-mobile');

//efect navbar mobile
iconMenu.addEventListener('click', () => {
    let menu = document.querySelector('.navbar');
    if (menu.classList.contains('hide')) {
        menu.classList.add('show');
        menu.classList.remove('hide');
    } else {
        menu.classList.add('hide');
        menu.classList.remove('show');
    }
})


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }


    if (n < 1) { slideIndex = slides.length }


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }


    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// SLIDER DEPOSITIONS
let slideDepositions = 1;
depositionsSlides(slideDepositions);

function depositionsCurrentSlide(n) {
    depositionsSlides(slideDepositions = n);
}

function depositionsSlides(n) {
    let i;
    let slides = document.getElementsByClassName("depositions-single");

    let dots = document.getElementsByClassName("depositions-dot");

    if (n > slides.length) { slideDepositions = 1 }


    if (n < 1) { slideDepositions = slides.length }


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }


    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideDepositions - 1].style.display = "block";
    dots[slideDepositions - 1].className += " active";
}

function bloqueia_mouse_teclado() {

    // CTRL V v
    $(document).ready(function() {
        $(document).keydown(function(event) {
            if (event.ctrlKey == true && (event.which == '118' || event.which == '86')) {
                event.preventDefault();
            }
        });
    });

    // CTRL C c
    $(document).ready(function() {
        $(document).keydown(function(event) {
            if (event.ctrlKey == true && (event.which == '97' || event.which == '67')) {
                event.preventDefault();
            }
        });
    });

    // CTRL U u
    $(document).ready(function() {
        $(document).keydown(function(event) {
            if (event.ctrlKey == true && (event.which == '85' || event.which == '117')) {
                event.preventDefault();
            }
        });
    });

    // CTRL A a
    $(document).ready(function() {
        $(document).keydown(function(event) {
            if (event.ctrlKey == true && (event.which == '65' || event.which == '97')) {
                event.preventDefault();
            }
        });
    });

    // CTRL S s
    $(document).ready(function() {
        $(document).keydown(function(event) {
            if (event.ctrlKey == true && (event.which == '83' || event.which == '115')) {
                event.preventDefault();
            }
        });
    });

    // CTRL X x
    $(document).ready(function() {
        $(document).keydown(function(event) {
            if (event.ctrlKey == true && (event.which == '88' || event.which == '120')) {
                event.preventDefault();
            }
        });
    });

    // CTRL J j
    $(document).ready(function() {
        $(document).keydown(function(event) {
            if (event.ctrlKey == true && (event.which == '74' || event.which == '106')) {
                event.preventDefault();
            }
        });
    });

    // Bloquear botão direito do mouse
    $(document).bind("contextmenu", function(e) {
        return false;
    });
}

bloqueia_mouse_teclado();
