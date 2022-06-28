import Button from "../js/button.js";
// Clase Preloads, para separar los preloads y tener mejor orden
export class Black extends Phaser.Scene {
  // Se extiende de Phaser.Scene porque es una escena
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Black");
  }
    create() {
      this.add.image(this.cameras.main.centerX, 455, 'black').setScale(0.65,0.65);
      this.add.image(this.cameras.main.centerX, 220, 'click').setScale(0.65,0.65);

      const boton1 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'quiet').setInteractive({cursor: "pointer"});
      boton1.on('pointerdown', () => {this.scene.start("MainMenu")})

  }

}
