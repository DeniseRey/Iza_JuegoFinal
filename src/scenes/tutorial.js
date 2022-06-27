import Button from "../js/button.js";

// Clase Preloads, para separar los preloads y tener mejor orden

// Se extiende de Phaser.Scene para que adquiera todas las caracteristicas de una escena
// -> mostrar, recargar, tener los eventos preload, create y update.

export class Tuto extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Tuto");
  }


  create() {
     
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'principal').setScale(0.83,1);
      this.add.image(this.cameras.main.centerX, 260, 'tutorial').setScale(0.65,0.75);

    const boton1 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + 250, 'atrasbutton').setInteractive({cursor: "pointer"})
    boton1.on('pointerover', function(){boton1.setTexture('atrasbutton1')})
    boton1.on('pointerout', function(){boton1.setTexture('atrasbutton')})
    boton1.on('pointerdown', () => {this.scene.start("MainMenu")})

}

}