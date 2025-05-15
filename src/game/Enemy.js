class Enemy{

    constructor(x, y, sprite, type) {
        this.x = x
        this.y = y 

        this.type = type

        this.sprite = sprite
        
        this.width = sprite.width
        this.height = sprite.height

        this.destroy = false

        this.shootTime = 300
        this.shootTimer = 0

        this.moveTime = 150
        this.moveTimer = 0

        switch (type) {

            case enemyType.pink:

                this.n = 1
                this.dir = 1
                this.life = 1
                break;

            case enemyType.blue:
                this.life = 3
                this.shootTime = 130
                
                break;
            case enemyType.purple:
                this.n = 1
                this.dir = 1
                this.life = 2
                
                break;
            case enemyType.yellow:
                this.life = 7
                this.shootTime = 70
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
        this.shootTimer++

        if (this.y >= Height - 30) {
            player.life--
            this.destroy = !this.destroy
        }

        if (this.destroy) {
            enemys.splice(enemys.findIndex(enemy => enemy.destroy), 1)
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
                case enemyType.purple:

                    this.n = this.n - this.dir
                    if(this.n != 0) {
                        this.dir = this.dir * -1
                    }
                    
                    this.x += this.width * this.dir

                    break;
                case enemyType.yellow:

                    break;
        
                default:
                    break;
            }

            this.moveTimer = 0
        }

        if(this.shootTimer > this.shootTime) {

            switch (this.type) {
                case enemyType.blue:
                case enemyType.yellow:

                    bullets.push(new Bullet(this.x, this.y, enemyBulletSprite, "Player"))
                    break;
        
                default:
                    break;
            }

            this.shootTimer = 0
        }
    }

}