/*
function Slider(selector) {
    this.slider = document.querySelector(selector);
    this.slides = this.slider.querySelectorAll('.slider-slide');
    this.current = 0;  //nr aktualnego slide'u
    this.time = null;
    console.log("dziala");
    this.createButtons();
    this.time = setTimeout(function(){
        this.prevNext();
    }.bind(this),3000);
}



Slider.prototype.prevSlide = function () {
    for (var el of this.slides) {
        el.classList.remove("slider-slide-active")
    }
    this.current--;
    if (this.current < 0) {
        this.current = this.slides.length - 1;
    }
    this.slides[this.current].classList.add("slider-slide-active")
}

Slider.prototype.prevNext = function () {
    for (var el of this.slides) {
        el.classList.remove("slider-slide-active")
    }
    this.current++;
    if (this.current > this.slides.length - 1) {
        this.current = 0;

    }
    this.slides[this.current].classList.add("slider-slide-active")
}


Slider.prototype.createButtons = function () {
    this.btnPrev = this.slider.querySelector('.slider-prev');
    this.btnNext = this.slider.querySelector('.slider-next');
    var self = this;
    this.btnPrev.addEventListener('click', function () {
        self.prevSlide();


    });
    this.btnNext.addEventListener('click', function () {
        self.prevNext();

    });

}

var s1 = new Slider('#slider1');
var s2 = new Slider('#slider2');
*/

function Slider(selector, pauseTime) {
    this.slider = document.querySelector(selector);
    this.slides = this.slider.querySelectorAll(".slider-slide");
    this.current = 0; //nr slajdu aktualnego
    this.time = null; //tutaj podstawie interval

    if (typeof pauseTime !== "number") {
        pauseTime = 3000;
    }

    this.pauseTime = pauseTime; //opoznienie miedzy automatycznym zmienianiem slajdow

    //podpinamy i wylapujemy przyciski
    this.createButtons();

    //automatycznie przelaczamy slajd po wejsciu na strone
    this.time = setTimeout(function() {
        this.nextSlide();
    }.bind(this), this.pauseTime);
}

Slider.prototype.prevSlide = function() {
    //usuwamy klase wszystkim slajdom
    for (var el of this.slides) {
        el.classList.remove("slider-slide-active");
    }

    //liczymky obency slajd
    this.current--;
    if (this.current < 0) {
        this.current = this.slides.length - 1;
    }

    //dodajemy mu klasę active
    this.slides[this.current].classList.add("slider-slide-active");

    //po kliknięciu ustawiamy na nowo timeout
    clearTimeout(this.time);
    this.time = setTimeout(function() {
        this.nextSlide();
    }.bind(this), this.pauseTime);
}

Slider.prototype.nextSlide = function() {
    //usuwamy klase wszystkim slajdom
    for (var el of this.slides) {
        el.classList.remove("slider-slide-active");
    }

    //liczymky obency slajd
    this.current++;
    if (this.current > this.slides.length - 1) {
        this.current = 0;
    }

    //dodajemy mu klasę active
    this.slides[this.current].classList.add("slider-slide-active");

    //po kliknięciu ustawiamy na nowo timeout
    clearTimeout(this.time);
    this.time = setTimeout(function() {
        this.nextSlide();
    }.bind(this), this.pauseTime);
}

Slider.prototype.createButtons = function() {
    this.btnPrev = this.slider.querySelector('.slider-prev');
    this.btnNext = this.slider.querySelector('.slider-next');

    var self = this;

    this.btnPrev.addEventListener("click", function() {
        self.prevSlide();
    });

    this.btnNext.addEventListener("click", function() {
        self.nextSlide();
    });
}


var s1 = new Slider('#slider1', 5000);
var s2 = new Slider('#slider2');