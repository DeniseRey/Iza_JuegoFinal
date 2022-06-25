import Button from "../js/button.js";
// Clase Preloads, para separar los preloads y tener mejor orden
export class Creditos extends Phaser.Scene {
  // Se extiende de Phaser.Scene porque es una escena
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Creditos");
  }


    preload() {
      this.load.image("Cred", "public/assets/imagenes/EjCred.png");
    
    }
  
    create() {
     
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'Cred').setScale(1.1);

     
    const boton = new Button(this.cameras.main.centerX, this.cameras.main.centerY +250, 'Atrás', this, () => {
      // Instrucción para pasar a la escena Play
      this.scene.start("MainMenu");
  });


    


  }



}
