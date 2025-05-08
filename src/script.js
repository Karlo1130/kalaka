const width = 1000
const height = 800

const player = new Player(width/2, height/2)

function setup() {
    createCanvas(1000, 800)

}

function draw() {
    background(150)

    player.draw()
}