function startLvl1() {
    for (let i = 1; i < 10; i++) {
       enemys.push(new Enemy(width * i * 0.1, height * 0.1, greenEnemySprite, enemyType.green)) 
    }
    
    enemys.push(new Enemy(width * 0.4, height * 0.2, greenEnemySprite, enemyType.green)) 
    enemys.push(new Enemy(width * 0.5, height * 0.2, greenEnemySprite, enemyType.green)) 
    enemys.push(new Enemy(width * 0.6, height * 0.2, greenEnemySprite, enemyType.green)) 
}

function startLvl2() {
    for (let i = 1; i < 10; i++) {
       enemys.push(new Enemy(width * i * 0.1, height * 0.1, greenEnemySprite, enemyType.green)) 
    }
    
    enemys.push(new Enemy(width * 0.3, height * 0.2, redEnemySprite, enemyType.red)) 

    enemys.push(new Enemy(width * 0.4, height * 0.2, pinkEnemySprite, enemyType.pink)) 

    enemys.push(new Enemy(width * 0.5, height * 0.2, blueEnemySprite, enemyType.blue)) 

    enemys.push(new Enemy(width * 0.6, height * 0.2, pinkEnemySprite, enemyType.pink)) 

    enemys.push(new Enemy(width * 0.7, height * 0.2, redEnemySprite, enemyType.red)) 
}

function startLvl3() {
    for (let i = 1; i < 10; i++) {
       enemys.push(new Enemy(width * i * 0.1, height * 0.1, redEnemySprite, enemyType.red))
    }
    
    enemys.push(new Enemy(width * 0.2 - 30, height * 0.3, purpleEnemySprite, enemyType.purple))
    enemys.push(new Enemy(width * 0.2, height * 0.3 + 30, purpleEnemySprite, enemyType.purple))
    enemys.push(new Enemy(width * 0.2 + 30, height * 0.3, purpleEnemySprite, enemyType.purple))
    
    enemys.push(new Enemy(width * 0.3, height * 0.2, pinkEnemySprite, enemyType.pink))

    enemys.push(new Enemy(width * 0.4, height * 0.2, blueEnemySprite, enemyType.blue))

    enemys.push(new Enemy(width * 0.5, height * 0.2, yellowEnemySprite, enemyType.yellow))

    enemys.push(new Enemy(width * 0.6, height * 0.2, blueEnemySprite, enemyType.blue))

    enemys.push(new Enemy(width * 0.7, height * 0.2, pinkEnemySprite, enemyType.pink))

    enemys.push(new Enemy(width * 0.8 - 30, height * 0.3, purpleEnemySprite, enemyType.purple))
    enemys.push(new Enemy(width * 0.8, height * 0.3 + 30, purpleEnemySprite, enemyType.purple))
    enemys.push(new Enemy(width * 0.8 + 30, height * 0.3, purpleEnemySprite, enemyType.purple))
}