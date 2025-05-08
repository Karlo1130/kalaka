const width = 1200
const height = 800

var player
var playerSprite

var enemy
var enemySprite

function preload() {
    playerSprite = loadImage('assets/images/player.png')
    enemySprite = loadImage('assets/images/enemy.png')

}

function setup() {
    createCanvas(width, height)
    player = new Player(width/2, height/2, playerSprite)
    enemy = new Player(width/2, height/4, enemySprite)
    
}

function draw() {
    background(150)

    player.draw()
    enemy.draw()
}