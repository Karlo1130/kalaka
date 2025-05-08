class Player {

    constructor(x, y, sprite) {
        this.x = x
        this.y = y 

        this.sprite = sprite
        
        this.width = sprite.width
        this.height = sprite.height

        this.vel = 10
    }

    draw() {
        image(this.sprite, this.x, this.y)
    }

    update() {
        if (keyIsDown(65)) {
            this.x -= this.vel
        }

        if (keyIsDown(68)) {
            this.x += this.vel
        }
    }
}