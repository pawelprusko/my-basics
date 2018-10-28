document.addEventListener('DOMContentLoaded', function () {

    class Insect {
        constructor(name, legs) {
            this.name = name;
            this.legs = legs;
        }
    }
    class Centipede extends Insect {
        getLegs() {
            var text = `Cześć, mam na imię ${this.name}. Jestem stonogą i mam ${this.legs} nóg`;
            return text
        }
    }

    class Spider extends Insect {
        getLegs() {
            let text = `Cześć, mam na imię ${this.name}. Jestem pająkiem i mam ${this.legs} nóg`;
            return text
        }
    }

    let centipede = new Centipede("Mikołaj", 100);
    let spider = new Spider("Jerzy", 8);

    document.querySelector(".info_spider").innerText = spider.getLegs();
    document.querySelector(".info_centipede").innerText = centipede.getLegs();
});