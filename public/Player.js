class Player {
  constructor(player) {
    this.pos = createVector(player.x,player.y)
    this.id = player.id;
    this.rgb = player.rgb;
  }


  draw() {
    fill(this.rgb.r, this.rgb.g, this.rgb.b);
    circle(this.pos.x, this.pos.y, 20);
  }
  update(){
    background(220)
    if(keyIsDown(87)){
      this.pos.y--;
    }
    if(keyIsDown(83)){
      this.pos.y++;
    }
    if(keyIsDown(65)){
      this.pos.x--;
    }
    if(keyIsDown(68)){
      this.pos.x++;
    }
    this.rgb.r++;
    if(playerExists(this)){
      this.draw()
    }
  }

}