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
        this.shootTime = 300
        this.shootTimer = 0
        this.moveTime = 200
        this.moveTimer = 0

        switch (type) {

            case enemyType.pink:

                this.n = 1
                this.dir = 1
                break;

            case enemyType.blue:
                this.life = 3
                
                break;
            case enemyType.purple:
                this.life = 2
                
                break;
            case enemyType.yellow:
                this.life = 7
                this.shootTime = 150
                this.moveTime = 100
                
                break;
        
            default:
                this.life = 1
                break;
        }
    }

    draw() {
        image(this.sprite, this.x, this.y)
    }

    update() {
        this.moveTimer++

        if(this.shootTimer > this.shootTime) {

            this.shootTimer = 0
        }

        if(this.moveTimer > this.moveTime) {
            this.y += this.height

            switch (this.type) {
                case enemyType.pink:

                    this.n = this.n - this.dir
                    if(this.n != 0) {
                        this.dir = this.dir * -1
                    }
                    
                    this.x += this.width * this.dir


                    break;
                case enemyType.blue:

                    break;
                case enemyType.purple:

                    break;
                case enemyType.yellow:

                    break;
        
                default:
                    break;
            }

            this.moveTimer = 0
        }
    }

}