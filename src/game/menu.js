class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(1, 3);
    this.speed = random(0.5, 2);
  }

  move() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = 0;
      this.x = random(width);
    }
  }

  show() {
    fill(255);
    noStroke();
    circle(this.x, this.y, this.size);
  }
}

class Menu {
  constructor() {
    this.stars = Array.from({ length: 100 }, () => new Star());
  }

  display() {
    background(0);

    

    textAlign(CENTER);
    fill(255);
    textSize(48);
    text("KALAKA", width / 2, height / 3);

    textSize(24);
    text("Presiona 'ESPACIO' para Empezar", width / 2, height / 2);
    let topScores = getTopScores();
    textSize(18);
    text("Top 5 Puntajes:", width / 2, height / 2 + 120);
    textSize(16);
    for (let i = 0; i < topScores.length; i++) {
      text(`${i + 1}. ${topScores[i]}`, width / 2, height / 2 + 150 + i * 20);
    }

  }
}
