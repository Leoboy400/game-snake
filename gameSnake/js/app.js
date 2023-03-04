const canvas = document.querySelector('canvas');
canvas.style.cssText = `
background-image: url(../img/background.png);
width: 608;
height: 608;
background-size: cover;
`
const ctx = canvas.getContext('2d');
const box = 32;
let score = 0;

let food = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box,
    imgFoot: document.createElement('img'),
}
food.imgFoot.src = '../img/mob.png';

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box,
}
let dir;
document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyA' && dir != 'right') {
        dir = "left";
    } else if (e.code === 'KeyW' && dir != 'button') {
        dir = 'top';
    } else if (e.code === 'KeyD' && dir != 'left') {
        dir = 'right';
    } else if (e.code === 'KeyS' && dir != 'top') {
        dir = 'button';
    }
    console.log(dir)
})

function eatTail(head, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (head.x == arr[i].x && head.y == arr[i].y) {
            clearInterval(game);
            alert('Вы проиграли, ваш счет ' + score);
            location.reload()
        }
    }

}

function drawGame() {
    ctx.clearRect(0, 0, 609, 609);
    ctx.drawImage(food.imgFoot, food.x, food.y)

    for (let o = 0; o < snake.length; o++) {
        ctx.fillStyle = o == 0 ? "red" : "gold";
        ctx.fillRect(snake[o].x, snake[o].y, box, box);
    }

    ctx.fillStyle = 'white';
    ctx.font = "50px Arial";
    ctx.fillText(score, box * 2.5, box * 1.5);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (snakeX == food.x && snakeY == food.y) {
        score++;
        food = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box,
            imgFoot: document.createElement('img'),
        };
        food.imgFoot.src = '../img/mob.png';
    } else {
        snake.pop();
    }

    if (snakeX < box || snakeX > box * 17
        || snakeY < 3 * box || snakeY > box * 17) {
        clearInterval(game);
        alert('Вы проиграли, ваш счет ' + score);
        location.reload()
    }

    if (dir == "left") snakeX -= box;
    if (dir == "right") snakeX += box;
    if (dir == "top") snakeY -= box;
    if (dir == "button") snakeY += box;

    let newHead = {
        x: snakeX,
        y: snakeY,
    }

    eatTail(newHead, snake);
    snake.unshift(newHead);
    console.log(snake)

}

let game = setInterval(drawGame, 100);