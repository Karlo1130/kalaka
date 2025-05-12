function isColliding(bullet, enemy){
    
    if(bullet.x < enemy.x + enemy.width 
    && bullet.x + bullet.width > enemy.x
    && bullet.y < enemy.y + enemy.height 
    && bullet.y + bullet.height > enemy.y)
        return true

    return false
}