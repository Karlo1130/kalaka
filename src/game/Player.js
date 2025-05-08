class Player {

    constructor(x, y) {
       this.x = x
       this.y = y 

       this.width = 200
       this.height = 200

       this.vel = 10
    }

    draw() {

        fill(0)
        rect(this.x, this.y, this.width, this.height)
    }

    update() {

    }
}