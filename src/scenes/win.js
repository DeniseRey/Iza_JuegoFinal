// Clase Preloads, para separar los preloads y tener mejor orden
var score;
// Se extiende de Phaser.Scene para que adquiera todas las caracteristicas de una escena
// -> mostrar, recargar, tener los eventos preload, create y update.

export class Win extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Win");
  }

  init(data) {

    score = data.score;
  }





  create() {

    this.music = this.sound.add("victory");
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

    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'win').setScale(0.65,0.65);
    this.add.image(300, 265, 'izawin').setScale(0.70);
    this.add.image(this.cameras.main.centerX, 435, 'mielrecolectada').setScale(0.65,0.65);
    this.add.image(this.cameras.main.centerX, 485, 'ventanamiel').setScale(0.95,0.95);
    this.add.text(this.cameras.main.centerX, 493,
      ` ${score}`, {fontFamily: "arial",fontSize: "22px",
      fill: "#FFFFFF",}).setOrigin(0.5);
   
   
    const boton1 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + 250, 'atrasbutton').setInteractive({cursor: "pointer"})
    boton1.on('pointerover', function(){boton1.setTexture('atrasbutton1')})
    boton1.on('pointerout', function(){boton1.setTexture('atrasbutton')})
    boton1.on('pointerdown', () => {this.scene.start("MainMenu")})
   
  
  }
}
