const width = 1200
const height = 800

var player
var img

function preload() {
    img = loadImage('assets/images/player.png')

}

function setup() {
    createCanvas(width, height)
    player = new Player(width/2, height/2, img)
    
}

function draw() {
    background(150)

    player.draw()
}