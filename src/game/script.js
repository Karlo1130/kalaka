let player;
let playerImg;
let enemyImg;
let strongEnemyImg = {};
let bossImg = {};
let bullets = [];
let enemies = [];
let menu;
let score = 0;
let lives = 3;
let level = 2;
let gameState = "menu";
let gameOver = false;
let enemyBullets = [];
let levelCompleted = false;
let bossDefeated = false;
let bossSpawned = false;
let isPaused = false;
// Sonidos
let backMusic;
let shootSound;
let hitSound;

function preload() {
  playerImg = loadImage("assets/playerShip.png");
  enemyImg = loadImage("assets/normalEnemy.png");
  zigzagEnemyImg = loadImage("assets/normalEnemy.png");
  // StrongEnemy por fases
  strongEnemyImg[3] = loadImage("assets/miniBoss_3.png");
  strongEnemyImg[2] = loadImage("assets/miniBoss_2.png");
  strongEnemyImg[1] = loadImage("assets/miniBoss_1.png");

  // BossEnemy por fases
  bossImg[15] = loadImage("assets/boss_15.png");
  bossImg[10] = loadImage("assets/boss_10.png");
  bossImg[5] = loadImage("assets/boss_5.png");

  //Sonidos
  backMusic = loadSound("assets/backMusic.mp3");
  shootSound = loadSound("assets/shoot.wav");
  shootSound.setVolume(0.01);
  hitSound = loadSound("assets/hit.wav");
}

function setup() {
  createCanvas(1000, 700);
  player = new Player();
  menu = new Menu();
  initLevel1();

  backMusic.setLoop(true); // que se repita
  backMusic.setVolume(0.03); // opcional
  backMusic.play(); // comienza a sonar
}

function draw() {
  if (gameState === "menu") {
    menu.display();
  } else if (gameState === "playing") {
    background(0);

    if (isPaused) {
      fill(255, 255, 0);
      textAlign(CENTER);
      textSize(32);
      text("PAUSA", width / 2, height / 2);
      return;
    }

    player.move();
    player.show();

    for (let i = bullets.length - 1; i >= 0; i--) {
      bullets[i].update();
      bullets[i].show();
      if (bullets[i].offScreen()) {
        bullets.splice(i, 1);
      }
    }

    for (let enemy of enemies) {
      if (enemy.isAlive) {
        enemy.update();
        enemy.show();
        if (enemy.canShoot && random(1) < 0.01) {
          enemyBullets.push(new Bullet(enemy.x, enemy.y, true));
        }
      }
    }

    for (let i = enemies.length - 1; i >= 0; i--) {
      for (let j = bullets.length - 1; j >= 0; j--) {
        if (enemies[i].isAlive && enemies[i].hits(bullets[j])) {
          bullets.splice(j, 1);
          if (!enemies[i].isAlive) {
            if (enemies[i] instanceof BossEnemy) {
              score += 10;
              bossDefeated = true;
            } else if (enemies[i] instanceof StrongEnemy) {
              score += 3;
            } else {
              score += 1;
            }
          }
          break;
        }
      }
    }

    for (let enemy of enemies) {
      if (!enemy.isAlive) continue;
      let d = dist(enemy.x, enemy.y, player.x, player.y);
      if (d < enemy.size / 2 + player.width / 2 || enemy.y > height) {
        enemy.isAlive = false;
        hitSound.play();
        lives--;
      }
    }

    for (let i = enemyBullets.length - 1; i >= 0; i--) {
      enemyBullets[i].update();
      enemyBullets[i].show();
      if (enemyBullets[i].offScreen()) {
        enemyBullets.splice(i, 1);
        continue;
      }
      let d = dist(enemyBullets[i].x, enemyBullets[i].y, player.x, player.y);
      if (d < player.width / 2) {
        hitSound.play();
        lives--;
        enemyBullets.splice(i, 1);
      }
    }

    if (
      level === 3 &&
      enemies.every((e) => !e.isAlive || e instanceof BossEnemy)
    ) {
      if (!bossSpawned && !enemies.some((e) => e instanceof BossEnemy)) {
        enemies.push(new BossEnemy(width / 2, -100));
        bossSpawned = true;
      }
    }

    fill(255);
    textSize(16);
    text(`Puntaje: ${score}`, 10, 20);
    text(`Nivel: ${level}`, 10, 40);
    text(`Vidas: ${lives}`, 10, 60);

    if (lives <= 0) {
      saveScore(score);
      gameState = "gameover";
    } else if (enemies.every((e) => !e.isAlive)) {
      if (level === 3 && bossDefeated) {
        saveScore(score);
        gameState = "victory";
      } else if (level < 3) {
        gameState = "levelComplete";
      }
    }
  } else if (gameState === "levelComplete") {
    showLevelComplete(level);
  } else if (gameState === "gameover") {
    background(0);
    fill(255, 0, 0);
    textAlign(CENTER);
    textSize(32);
    text("GAME OVER", width / 2, height / 2 - 40);
    textSize(16);
    text(`Puntaje final: ${score}`, width / 2, height / 2);
    text("Presiona 'M' para volver al menú", width / 2, height / 2 + 40);
  } else if (gameState === "victory") {
    background(0);
    fill(0, 255, 0);
    textAlign(CENTER);
    textSize(32);
    text("¡Has ganado!", width / 2, height / 2 - 40);
    textSize(16);
    text(`Puntaje final: ${score}`, width / 2, height / 2);
    text("Presiona 'R' para jugar de nuevo", width / 2, height / 2 + 40);
    text("Presiona 'M' para volver al menú", width / 2, height / 2 + 70);
  }
}

function keyPressed() {
  if (key === "P" || key === "p") {
    if (gameState === "playing") {
      isPaused = !isPaused;
    }
  }
  if (gameState === "menu") {
    if (key === " ") {
      gameState = "playing";
    }
  } else if (gameState === "playing") {
    if (key === " ") {
      bullets.push(new Bullet(player.x, player.y - 20));
      shootSound.play();
    }
  } else if (gameState === "levelComplete") {
    if (keyCode === ENTER) {
      level++;
      if (level === 2) {
        initLevel2();
      } else if (level === 3) {
        initLevel3();
      }
      gameState = "playing";
    }
  } else if (gameState === "victory") {
    if (key === "R" || key === "r") {
      resetGame();
      gameState = "playing";
    } else if (key === "M" || key === "m") {
      resetGame();
      gameState = "menu";
    }
  } else if (key === "M" || key === "m") {
    resetGame();
    gameState = "menu";
  }
}

function showLevelComplete(levelNumber) {
  background(0);
  fill(255);
  textAlign(CENTER);
  textSize(32);
  text(`¡Nivel ${levelNumber} completado!`, width / 2, height / 2 - 40);
  textSize(20);
  text("Presiona ENTER para continuar", width / 2, height / 2 + 20);
}

function saveScore(newScore) {
  let scores = JSON.parse(localStorage.getItem("galagaScores")) || [];
  scores.push(newScore);
  scores.sort((a, b) => b - a);
  scores = scores.slice(0, 5);
  localStorage.setItem("galagaScores", JSON.stringify(scores));
}

function getTopScores() {
  return JSON.parse(localStorage.getItem("galagaScores")) || [];
}

function resetGame() {
  lives = 3;
  level = 1;
  score = 0;
  bullets = [];
  enemies = [];
  enemyBullets = [];
  player = new Player();
  initLevel1();
  bossDefeated = false;
}

function initLevel1() {
  bullets = [];
  enemyBullets = [];

  enemies = [];
  for (let i = 0; i < 10; i++) {
    let x = random(50, width - 50);
    let y = random(-500, -50);
    enemies.push(new Enemy(x, y));
  }
}

function initLevel2() {
  bullets = [];
  enemyBullets = [];

  enemies = [];
  for (let i = 0; i < 5; i++) {
    let x = random(50, width - 50);
    let y = random(-500, -50);
    let e = new EnemyZigzag(x, y);
    e.canShoot = i % 2 === 0;
    enemies.push(e);
  }
  enemies.push(new StrongEnemy(random(50, width - 50), random(-400, -200)));
}

function initLevel3() {
  bullets = [];
  enemyBullets = [];

  enemies = [];
  bossSpawned = false;
  bossDefeated = false;

  for (let i = 0; i < 5; i++) {
    let e = new EnemyZigzag(random(50, width - 50), random(-500, -50), 3);
    e.canShoot = true;
    enemies.push(e);
  }

  enemies.push(new StrongEnemy(random(100, 200), random(-400, -200), 3));
  enemies.push(new StrongEnemy(random(300, 500), random(-400, -200), 3));
}
