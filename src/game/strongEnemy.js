class StrongEnemy extends Enemy {
  constructor(x, y) {
    super(x, y);
    this.health = 3;
    this.size = 40;
    this.img = strongEnemyImg;
  }

  hits(bullet) {
    let d = dist(this.x, this.y, bullet.x, bullet.y);
    if (d < this.size / 2) {
      hitSound.play();
      this.health--;
      if (this.health <= 0) {
        this.isAlive = false;
      }
      return true;
    }
    return false;
  }

  show() {
    if (this.isAlive) {
      imageMode(CENTER);

      // Escoge imagen por vida
      let imgToShow = strongEnemyImg[this.health] || strongEnemyImg[1];
      image(imgToShow, this.x, this.y, this.size, this.size);

      fill(255);
      textAlign(CENTER, CENTER);
      textSize(12);
      text(this.health, this.x, this.y + this.size / 2 + 10);
    }
  }
}
