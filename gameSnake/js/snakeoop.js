class Snake {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }



}


class Pole {
    constructor() {

    }

    box = 32;

    render() {
        const canvas = document.querySelector('canvas');
        canvas.style.cssText = `
        background-image: url(../img/background.png);
        width: 608;
        height: 608;
        background-size: cover;
        `
        const ctx = canvas.getContext('2d');
    }
}


class Food {
    constructor() {

    }


    renderFood() {
        let x = Math.floor((Math.random() * 17 + 1)) * 32;
        let y = Math.floor((Math.random() * 15 + 3)) * 32;

        let imgFoot = document.createElement('img');
        imgFoot.src = '../img/mob.png';

    }
}
let pole = new Pole;
let food = new Food;

pole.render();
food.renderFood() 
console.log(pole.box)