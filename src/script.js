const Width = 1200
const Height = 800

var points = 0
var topPunctuations = [1, 2, 3, 4, 5]
var lvl = 1
var gameState

var player
var playerSprite

var enemys = []

const enemyTypes = {
    green: 'green',
    red: 'red',
    orange: 'orange',
    pink: 'pink',
    blue: 'blue',
    purple: 'purple',
    yellow: 'yellow'
}

const gameStates = {
    startMenu: 'startMenu',
    loseMenu: 'loseMenu',
    winMenu: 'winMenu',
    transition: 'transition',
    playing: 'playing'
}

var bullets = []
var playerBulletSprite

function preload() {
    playerSprite = loadImage('assets/images/player.png')
    greenEnemySprite = loadImage('assets/images/greenEnemy.png')
    redEnemySprite = loadImage('assets/images/redEnemy.png')
    pinkEnemySprite = loadImage('assets/images/pinkEnemy.png')
    blueEnemySprite = loadImage('assets/images/blueEnemy.png')
    purpleEnemySprite = loadImage('assets/images/purpleEnemy.png')
    yellowEnemySprite = loadImage('assets/images/yellowEnemy.png')
    playerBulletSprite = loadImage('assets/images/playerBullet.png')
    enemyBulletSprite = loadImage('assets/images/enemyBullet.png')

}

function setup() {
    createCanvas(Width, Height)
    player = new Player(Width / 2, Height * 0.9, playerSprite, playerBulletSprite)
    gameState = gameStates.startMenu

    startLvl3()
}

function draw() {
    background(150)

    fill(0)
    textSize(25)
    text(`POINTS: ${points}`, 10, 30)
    text(`LIFES: ${player.life}`, Width - 110, 30)
    text(`LEVEL: ${lvl}`, (Width - 110) / 2, 30)

    player.draw()

    enemys.forEach((enemy) => {
        enemy.draw()
    })

    bullets.forEach((bullet) => {
        bullet.draw()
    })

    switch (gameState) {
        case gameStates.startMenu:
            drawStartMenu()
            break;
        case gameStates.loseMenu:
            drawLoseMenu()
            break;
        case gameStates.winMenu:
            drawWinMenu()
            break;
        case gameStates.transition:
            drawTransition()
            break;

        default:
            break;
    }

    update()
}

function update() {



    switch (gameState) {
        case gameStates.startMenu:
            if (keyIsDown(32)) {
                gameState = gameStates.playing
            }
            break;
        case gameStates.loseMenu:
            break;
        case gameStates.winMenu:
            break;
        case gameStates.transition:
            break;

        default:
            player.update()

            enemys.forEach((enemy) => {
                enemy.update()
            })

            bullets.forEach((bullet) => {
                bullet.update()

                enemys.forEach((enemy) => {

                    if (bullet.target == 'Player')
                        return

                    if (isColliding(bullet, enemy)) {

                        enemy.life--
                        bullet.destroy = !bullet.destroy

                        if (enemy.life <= 1) {
                            enemy.destroy = !enemy.destroy

                            switch (enemy.type) {
                                case enemyTypes.blue:
                                    points += 3
                                    break;
                                case enemyTypes.yellow:
                                    points += 10
                                    break;

                                default:
                                    points++
                                    break;
                            }
                        }
                    }

                })

                if (isColliding(bullet, player)) {
                    player.life--
                    bullet.destroy = !bullet.destroy
                }

                if (bullet.destroy) {
                    bullets.splice(bullets.findIndex(bullet => bullet.destroy), 1)
                }

            })
            break;
    }

}