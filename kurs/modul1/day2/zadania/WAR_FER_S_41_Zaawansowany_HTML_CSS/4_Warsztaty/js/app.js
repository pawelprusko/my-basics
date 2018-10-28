function Slider(selector, pauseTime) {
    this.slider = document.querySelector(selector);
    this.slides = this.slider.querySelectorAll(".slider-slide");
    this.current = 0;
    this.time = null;

    if (typeof pauseTime !== "number") {
        pauseTime = 3000;
    }

    this.pauseTime = pauseTime;
    this.createButtons();
    this.time = setTimeout(function () {
        this.nextSlide();
    }.bind(this), this.pauseTime);
}

Slider.prototype.prevSlide = function () {
    for (var el of this.slides) {
        el.classList.remove("slider-slide-active");
    }

    this.current--;
    if (this.current < 0) {
        this.current = this.slides.length - 1;
    }

    this.slides[this.current].classList.add("slider-slide-active");

    clearTimeout(this.time);
    this.time = setTimeout(function () {
        this.nextSlide();
    }.bind(this), this.pauseTime);
}

Slider.prototype.nextSlide = function () {
    for (var el of this.slides) {
        el.classList.remove("slider-slide-active");
    }

    this.current++;
    if (this.current > this.slides.length - 1) {
        this.current = 0;
    }

    this.slides[this.current].classList.add("slider-slide-active");

    clearTimeout(this.time);
    this.time = setTimeout(function () {
        this.nextSlide();
    }.bind(this), this.pauseTime);
}

Slider.prototype.createButtons = function () {
    this.btnPrev = document.querySelector('.slider-prev');
    this.btnNext = document.querySelector('.slider-next');

    var self = this;

    this.btnPrev.addEventListener("click", function () {
        self.prevSlide();
    });

    this.btnNext.addEventListener("click", function () {
        self.nextSlide();
    });
}
var go = new Slider('#slider1', 7000);