var score;

export class Lost extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Lost");
  }


  init(data) {

    score = data.score;
  }

  create() {

    this.music = this.sound.add("lose");
    var musicConfig = {
      mute: false,
      volume: 0.2,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    }

    this.music.play(musicConfig);
    
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'lost').setScale(0.65,0.65);
    this.add.image(this.cameras.main.centerX, 290, 'izalost').setScale(0.57);
    this.add.image(this.cameras.main.centerX, 435, 'mielrecolectada').setScale(0.65,0.65);
    this.add.image(this.cameras.main.centerX, 485, 'ventanamiel').setScale(0.95,0.95);
    this.add.text(this.cameras.main.centerX, 493,
      ` ${score}`, {fontFamily: "arial",fontSize: "22px",
      fill: "#FFFFFF",}).setOrigin(0.5);
   
    const boton1 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + 250, 'retrybutton').setInteractive({cursor: "pointer"})
    boton1.on('pointerover', function(){boton1.setTexture('retrybutton1')})
    boton1.on('pointerout', function(){boton1.setTexture('retrybutton')})
    boton1.on('pointerdown', () => {this.scene.start("Play1")})


   
  }
}
