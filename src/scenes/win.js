// Clase Preloads, para separar los preloads y tener mejor orden

// Se extiende de Phaser.Scene para que adquiera todas las caracteristicas de una escena
// -> mostrar, recargar, tener los eventos preload, create y update.

export class Win extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Win");
  }

  create() {

    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'win').setScale(0.65,0.65);
    this.add.image(300, 285, 'izawin').setScale(0.70);
    // Pasa directamente a la escena del menú principal
   
    const boton1 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + 250, 'atrasbutton').setInteractive({cursor: "pointer"})
    boton1.on('pointerover', function(){boton1.setTexture('atrasbutton1')})
    boton1.on('pointerout', function(){boton1.setTexture('atrasbutton')})
    boton1.on('pointerdown', () => {this.scene.start("MainMenu")})
   
  
  }
}
