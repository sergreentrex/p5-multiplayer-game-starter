class Player {
  constructor(player) {
    this.x = player.x;
    this.y = player.y;
    this.id = player.id;
    this.rgb = player.rgb;
  }


  draw() {
    fill(this.rgb.r, this.rgb.g, this.rgb.b);
    circle(this.x, this.y, 100);
  }
  update(){
    if(keyIsDown(87)){
      this.x++;
    }
    this.rgb.r++;
    this.draw()
  }

}