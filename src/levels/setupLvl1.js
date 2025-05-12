function startLvl1() {
    for (let i = 1; i < 10; i++) {
       enemys.push(new Enemy(width * i * 0.1, height * 0.1, greenEnemySprite)) 
    }
    
    enemys.push(new Enemy(width * 0.4, height * 0.2, greenEnemySprite)) 
    enemys.push(new Enemy(width * 0.5, height * 0.2, greenEnemySprite)) 
    enemys.push(new Enemy(width * 0.6, height * 0.2, greenEnemySprite)) 
}