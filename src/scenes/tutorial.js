import Button from "../js/button.js";

// Clase Preloads, para separar los preloads y tener mejor orden

// Se extiende de Phaser.Scene para que adquiera todas las caracteristicas de una escena
// -> mostrar, recargar, tener los eventos preload, create y update.

export class Tuto extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Tuto");
  }

  preload() {
    this.load.image("tutorial", "public/assets/imagenes/EjTuto.png");
  
  }

  create() {
     
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'tutorial').setScale(1.1);

   
  const boton = new Button(this.cameras.main.centerX, this.cameras.main.centerY +250, 'Atrás', this, () => {
    // Instrucción para pasar a la escena Play
    this.scene.start("MainMenu");
});


}

}