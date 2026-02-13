const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let dino;
let obstacles;
let speed;
let score;
let animationId;
let gameStarted = false;

function init() {
    // Скидання всіх параметрів гри
    dino = {
        x: 50,
        y: 140,
        width: 40,
        height: 40,
        dy: 0,
        gravity: 0.6,
        jumpPower: -12,
        grounded: true
    };

    obstacles = [];
    speed = 6;
    score = 0;
    gameStarted = false;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.fillText("Натисни на екран, щоб почати", 200, 100);
}

// Функції відображення
function drawDino() {
    ctx.fillStyle = "black";
    ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
}

function drawObstacle(obstacle) {
    ctx.fillStyle = "green";
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
}

// Оновлення гри
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Фізика динозавра
    dino.y += dino.dy;
    dino.dy += dino.gravity;

    if (dino.y >= 150) {
        dino.y = 150;
        dino.dy = 0;
        dino.grounded = true;
    }

    drawDino();

    // Генерація перешкод
    if (Math.random() < 0.02) {
        obstacles.push({
            x: canvas.width,
            y: 150,
            width: 20,
            height: 40
        });
    }

    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].x -= speed;
        drawObstacle(obstacles[i]);

        if (
            dino.x < obstacles[i].x + obstacles[i].width &&
            dino.x + dino.width > obstacles[i].x &&
            dino.y < obstacles[i].y + obstacles[i].height &&
            dino.y + dino.height > obstacles[i].y
        ) {
            // Гра закінчена
            cancelAnimationFrame(animationId);
            showGameOver();
            return;
        }
    }

    // Рахунок
    score++;
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + score, 650, 20);

    animationId = requestAnimationFrame(update);
}

// Стрибок по пробілу
document.addEventListener("keydown", function(e) {
    if (e.code === "Space" && dino.grounded) {
        e.preventDefault();
        dino.dy = dino.jumpPower;
        dino.grounded = false;
    }
});

// Початок гри по кліку
canvas.addEventListener("click", function() {
    if (!gameStarted) {
        gameStarted = true;
        update();
    }
});

// Функція завершення гри
function showGameOver() {
    ctx.fillStyle = "red";
    ctx.font = "24px Arial";
    ctx.fillText("Гра закінчена! Натисни R для перезапуску", 150, 100);

    // Обробник клавіші R для перезапуску
    document.addEventListener("keydown", restartHandler);
}

function restartHandler(e) {
    if (e.key.toLowerCase() === "r") {
        document.removeEventListener("keydown", restartHandler);
        init();
    }
}

// Ініціалізація гри при завантаженні
init();
