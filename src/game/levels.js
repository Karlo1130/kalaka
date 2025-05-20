function startLvl1() {
    for (let i = 1; i < 10; i++) {
       enemys.push(new Enemy(width * i * 0.1, height * 0.1, greenEnemySprite, enemyTypes.green)) 
    }
    
    enemys.push(new Enemy(width * 0.4, height * 0.2, greenEnemySprite, enemyTypes.green)) 
    enemys.push(new Enemy(width * 0.5, height * 0.2, greenEnemySprite, enemyTypes.green)) 
    enemys.push(new Enemy(width * 0.6, height * 0.2, greenEnemySprite, enemyTypes.green)) 
}

function startLvl2() {
    for (let i = 1; i < 10; i++) {
       enemys.push(new Enemy(width * i * 0.1, height * 0.1, greenEnemySprite, enemyTypes.green)) 
    }
    
    enemys.push(new Enemy(width * 0.3, height * 0.2, redEnemySprite, enemyTypes.red)) 

    enemys.push(new Enemy(width * 0.4, height * 0.2, pinkEnemySprite, enemyTypes.pink)) 

    enemys.push(new Enemy(width * 0.5, height * 0.2, blueEnemySprite, enemyTypes.blue)) 

    enemys.push(new Enemy(width * 0.6, height * 0.2, pinkEnemySprite, enemyTypes.pink)) 

    enemys.push(new Enemy(width * 0.7, height * 0.2, redEnemySprite, enemyTypes.red)) 
}

function startLvl3() {
    for (let i = 1; i < 10; i++) {
       enemys.push(new Enemy(width * i * 0.1, height * 0.1, redEnemySprite, enemyTypes.red))
    }
    
    enemys.push(new Enemy(width * 0.2 - 30, height * 0.3, purpleEnemySprite, enemyTypes.purple))
    enemys.push(new Enemy(width * 0.2, height * 0.3 + 30, purpleEnemySprite, enemyTypes.purple))
    enemys.push(new Enemy(width * 0.2 + 30, height * 0.3, purpleEnemySprite, enemyTypes.purple))
    
    enemys.push(new Enemy(width * 0.3, height * 0.2, pinkEnemySprite, enemyTypes.pink))

    enemys.push(new Enemy(width * 0.4, height * 0.2, blueEnemySprite, enemyTypes.blue))

    enemys.push(new Enemy(width * 0.5, height * 0.2, yellowEnemySprite, enemyTypes.yellow))

    enemys.push(new Enemy(width * 0.6, height * 0.2, blueEnemySprite, enemyTypes.blue))

    enemys.push(new Enemy(width * 0.7, height * 0.2, pinkEnemySprite, enemyTypes.pink))

    enemys.push(new Enemy(width * 0.8 - 30, height * 0.3, purpleEnemySprite, enemyTypes.purple))
    enemys.push(new Enemy(width * 0.8, height * 0.3 + 30, purpleEnemySprite, enemyTypes.purple))
    enemys.push(new Enemy(width * 0.8 + 30, height * 0.3, purpleEnemySprite, enemyTypes.purple))
}

function drawStartMenu() {
    background(0)

    fill(255)
    textSize(25)
    text(`KALAKA`, (Width-110)/2, 100)

    text(`press 'space' to start`, (Width-110)/2, 150)

    text(`in game controls`, (Width-110)/2, 200)
    text(`press 'space' to shoot`, (Width-110)/2, 230)
    text(`press 'a' to move left`, (Width-110)/2, 260)
    text(`press 'd' to move right`, (Width-110)/2, 290)

    let y = 340
    topPunctuations.forEach((punctuations) => {
        text(`Points: ${punctuations}`, (Width-110)/2, y += 30)
    });
}

function drawLoseMenu() {
    background(0)

}

function drawWinMenu() {
    background(0)

}

function drawTransition() {
    background(0)

}