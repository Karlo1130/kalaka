class Bullet {
    
    constructor(x, y, sprite) {

        this.x = x
        this.y = y

        this.sprite = sprite

        this.vel = 20
    }

    draw() {
        image(this.sprite, this.x + 5, this.y - this.sprite.height)
    }

    update() {
        this.y -= this.vel
    }
}