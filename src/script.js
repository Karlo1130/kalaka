const Width = 1200
const Height = 800

var player
var playerSprite

var enemys = []

const enemyType = {
    green: 'green',
    red: 'red',
    pink: 'pink',
    blue: 'blue',
    purple: 'purple',
    yellow: 'yellow'
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
    player = new Player(Width/2, Height * 0.9, playerSprite, playerBulletSprite)

    startLvl3()
}

function draw() {
    background(150)

    player.draw()

    enemys.forEach((enemy) => {
        enemy.draw()
    })

    bullets.forEach((bullet) => {
        bullet.draw()
    })

    update()
}

function update() {

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

                if (enemy.life <= 0)
                    enemy.destroy = !enemy.destroy
            }

        })

        if (isColliding(bullet, player)){
            player.life--
            bullet.destroy = !bullet.destroy
        }

        if (bullet.destroy) {
            bullets.splice(bullets.findIndex(bullet => bullet.destroy), 1)
        }
        
    })

}