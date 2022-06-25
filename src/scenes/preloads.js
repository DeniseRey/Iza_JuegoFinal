// Clase Preloads, para separar los preloads y tener mejor orden

// Se extiende de Phaser.Scene para que adquiera todas las caracteristicas de una escena
// -> mostrar, recargar, tener los eventos preload, create y update.

export class Preloads extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Preloads");
  }

  preload() {
    this.load.image("iza_logo", "public/assets/imagenes/titulo2.png");
    this.load.image("principal","public/assets/imagenes/principalIza.png");
    this.load.image("mariposa","public/assets/imagenes/Iza.png");//no anda cuando cambio los assets del pj
    this.load.image("fondo","../tilemaps/fondo1.png");
    this.load.image("miel","public/assets/imagenes/miel.png");
    this.load.image("abeja","public/assets/imagenes/avispa1.png");
    this.load.spritesheet("avispa1", "public/assets/images/spriteavispa.png", {
      frameWidth: 45,
      frameHeight: 45,
    });
  }

  create() {
      
    this.anims.create({
      key: "mala",
      frames: this.anims.generateFrameNumbers("avispa1", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    // Pasa directamente a la escena del menú principal
    this.scene.start("MainMenu");
  }
}
