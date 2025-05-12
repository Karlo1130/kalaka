class Enemy{

    constructor(x, y, sprite, type) {
        this.x = x
        this.y = y 

        this.type = type

        this.sprite = sprite
        
        this.width = sprite.width
        this.height = sprite.height

        this.destroy = false

        this.vel = 10
    }

    draw() {
        image(this.sprite, this.x, this.y)
    }

    update() {

    }
}