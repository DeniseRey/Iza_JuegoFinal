// Clase Preloads, para separar los preloads y tener mejor orden

// Se extiende de Phaser.Scene para que adquiera todas las caracteristicas de una escena
// -> mostrar, recargar, tener los eventos preload, create y update.

export class Inter1 extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Inter1");
  }

  preload() {
    this.load.image("phaser_logo", "public/assets/images/phaser_logo.png");
    this.load.image(
      "mainmenu_bg",
      "public/assets/images/main_menu_background.png"
    );
  }

  create() {
    // Pasa directamente a la escena del menú principal
    this.scene.start("MainMenu");
  }
}
