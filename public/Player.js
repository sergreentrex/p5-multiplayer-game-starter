class Player {
  constructor(player) {
    this.x = player.x;
    this.y = player.y;
    this.id = player.id;
    this.rgb = player.rgb;
  }


  draw() {
    fill(this.rgb.r, this.rgb.g, this.rgb.b);
    circle(this.x, this.y, 20);
  }
  update(){
    if(keyIsDown(87)){
      this.y--;
    }
    if(keyIsDown(83)){
      this.y++;
    }
    if(keyIsDown(65)){
      this.x--;
    }
    if(keyIsDown(68)){
      this.x++;
    }
    this.rgb.r++;
    this.draw()
  }

}