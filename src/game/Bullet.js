class Bullet {
    
    constructor(x, y, sprite, target) {

        this.x = x + 5
        this.y = y - sprite.height

        this.target = target

        this.sprite = sprite

        this.width = sprite.width
        this.height = sprite.height

        this.destroy = false;

        this.vel = 20
    }

    draw() {
        image(this.sprite, this.x, this.y)
    }

    update() {
        this.y -= this.vel

        if (this.y <= -1) {
            this.destroy = !this.destroy
        }

    }
}