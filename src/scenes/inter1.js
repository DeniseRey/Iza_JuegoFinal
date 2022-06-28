import Button from "../js/button.js";

var score;


// Clase Preloads, para separar los preloads y tener mejor orden
export class Inter1 extends Phaser.Scene {
  // Se extiende de Phaser.Scene porque es una escena
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Inter1");
  }

  init (data) {
    score = data.score; 
  }

    create() {
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'inter1').setScale(0.83,1);


      const boton1 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/3, 'flechabutton').setInteractive({cursor: "pointer"})
    boton1.on('pointerover', function(){boton1.setTexture('flechabutton1')})
    boton1.on('pointerout', function(){boton1.setTexture('flechabutton')})
    boton1.on('pointerdown', () => {this.scene.start("Play1")})
  }

}
