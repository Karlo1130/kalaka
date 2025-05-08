const width = 1200
const height = 800

var player
var playerSprite

var enemy
var enemySprite

var bullets = []
var bulletSprite

function preload() {
    playerSprite = loadImage('assets/images/player.png')
    enemySprite = loadImage('assets/images/enemy.png')
    bulletSprite = loadImage('assets/images/bullet.png')

}

function setup() {
    createCanvas(width, height)
    player = new Player(width/2, height/2, playerSprite, bulletSprite)
    enemy = new Enemy(width/2, height/4, enemySprite)
    
}

function draw() {
    background(150)


    player.draw()
    enemy.draw()

    bullets.forEach((bullet) => {
        bullet.draw()
    })
    update()
}

function update() {

    player.update()
    enemy.update()

    bullets.forEach((bullet) => {
        bullet.update()
    })

    if (keyIsDown(32)) {
        bullets.push(new Bullet(player.x, player.y, bulletSprite))
    }
}