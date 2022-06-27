import Button from "../js/button.js";
// Clase Preloads, para separar los preloads y tener mejor orden
export class Creditos extends Phaser.Scene {
  // Se extiende de Phaser.Scene porque es una escena
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Creditos");
  }
    create() {
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'principal').setScale(0.83,1);
      this.add.image(this.cameras.main.centerX, 260, 'creditos').setScale(0.65,0.75);

      const boton1 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + 250, 'atrasbutton').setInteractive({cursor: "pointer"})
      boton1.on('pointerover', function(){boton1.setTexture('atrasbutton1')})
      boton1.on('pointerout', function(){boton1.setTexture('atrasbutton')})
      boton1.on('pointerdown', () => {this.scene.start("MainMenu")})

  }

}
