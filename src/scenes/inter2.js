import Button from "../js/button.js";
// Clase Preloads, para separar los preloads y tener mejor orden

var score;
var vida;

export class Inter2 extends Phaser.Scene {
  // Se extiende de Phaser.Scene porque es una escena
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Inter2");
  }

  init (data) {
    score = data.score; 
  }

  create() {
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'inter2').setScale(0.83,1);


    const boton1 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/3, 'flechabutton').setInteractive({cursor: "pointer"})
  boton1.on('pointerover', function(){boton1.setTexture('flechabutton1')})
  boton1.on('pointerout', function(){boton1.setTexture('flechabutton')})
  boton1.on('pointerdown', () => {this.scene.start("Play2", {score, vida});
})
  }
  
}
