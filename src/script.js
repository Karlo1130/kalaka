const width = 1200
const height = 800

var player
var playerSprite
var shootTimer = 0

var enemys
var enemySprite

var bullets = []
var playerBulletSprite

function preload() {
    playerSprite = loadImage('assets/images/player.png')
    enemySprite = loadImage('assets/images/enemy.png')
    playerBulletSprite = loadImage('assets/images/bullet.png')
    enemyBulletSprite = loadImage('assets/images/bullet.png')

}

function setup() {
    createCanvas(width, height)
    player = new Player(width/2, height/2, playerSprite, playerBulletSprite)

    enemys = [
        new Enemy(width/2, height/4, enemySprite),
        new Enemy(width/3, height/4, enemySprite),
    ]

    
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
    shootTimer++

    player.update()

    enemys.forEach((enemy) => {
        enemy.update()
    })

    bullets.forEach((bullet) => {
        bullet.update()

        enemys.forEach((enemy) => {

            if (isColliding(bullet, enemy)) {
                bullet.destroy = !bullet.destroy
                enemy.destroy = !enemy.destroy
            }

            if (enemy.destroy) {
                enemys.splice(enemys.findIndex(enemy => enemy.destroy), 1)
            }
        })

        if (bullet.destroy) {
            bullets.splice(bullets.findIndex(bullet => bullet.destroy), 1)
        }
        
    })

    if (keyIsDown(32)) {
        if (shootTimer > 30) {
            bullets.push(new Bullet(player.x, player.y, playerBulletSprite, "Enemy"))
            shootTimer = 0
        }

    }
}