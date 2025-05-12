function startLvl1() {
    for (let i = 1; i < 10; i++) {
       enemys.push(new Enemy(width * i * 0.1, height * 0.1, greenEnemySprite)) 
    }
    
    enemys.push(new Enemy(width * 0.4, height * 0.2, greenEnemySprite)) 
    enemys.push(new Enemy(width * 0.5, height * 0.2, greenEnemySprite)) 
    enemys.push(new Enemy(width * 0.6, height * 0.2, greenEnemySprite)) 
}

function startLvl2() {
    for (let i = 1; i < 10; i++) {
       enemys.push(new Enemy(width * i * 0.1, height * 0.1, greenEnemySprite)) 
    }
    
    enemys.push(new Enemy(width * 0.3, height * 0.2, redEnemySprite)) 

    enemys.push(new Enemy(width * 0.4, height * 0.2, pinkEnemySprite)) 

    enemys.push(new Enemy(width * 0.5, height * 0.2, blueEnemySprite)) 

    enemys.push(new Enemy(width * 0.6, height * 0.2, pinkEnemySprite)) 

    enemys.push(new Enemy(width * 0.7, height * 0.2, redEnemySprite)) 
}

function startLvl3() {
    for (let i = 1; i < 10; i++) {
       enemys.push(new Enemy(width * i * 0.1, height * 0.1, redEnemySprite)) 
    }
    
    enemys.push(new Enemy(width * 0.2 - 30, height * 0.3, purpleEnemySprite)) 
    enemys.push(new Enemy(width * 0.2, height * 0.3 + 30, purpleEnemySprite)) 
    enemys.push(new Enemy(width * 0.2 + 30, height * 0.3, purpleEnemySprite)) 

    enemys.push(new Enemy(width * 0.3, height * 0.2, pinkEnemySprite)) 

    enemys.push(new Enemy(width * 0.4, height * 0.2, blueEnemySprite)) 

    enemys.push(new Enemy(width * 0.5, height * 0.2, yellowEnemySprite)) 

    enemys.push(new Enemy(width * 0.6, height * 0.2, blueEnemySprite)) 

    enemys.push(new Enemy(width * 0.7, height * 0.2, pinkEnemySprite)) 

    enemys.push(new Enemy(width * 0.8 - 30, height * 0.3, purpleEnemySprite)) 
    enemys.push(new Enemy(width * 0.8, height * 0.3 + 30, purpleEnemySprite)) 
    enemys.push(new Enemy(width * 0.8 + 30, height * 0.3, purpleEnemySprite)) 
}