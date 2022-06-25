import Button from "../js/button.js";

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class MainMenu extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("MainMenu");
  }

preload()
{

}

create(){


  

  // Fondo del menú principal
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'principal').setScale(1);
    this.add.image(this.cameras.main.centerX, 150, 'iza_logo').setScale(0.90);
   
  
    // Boton para comenzar a jugar
    const boton = new Button(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/3, 'Play', this, () => {
        // Instrucción para pasar a la escena Play
        this.scene.start(
          "Play1", 
          {score: 0, vida: 3}
        );
    });

  
    const boton1 = new Button(this.cameras.main.centerX/1.55, this.cameras.main.centerY + this.cameras.main.centerY/1.5, 'Tutorial', this, () => {
      // Instrucción para pasar a la escena Play
      this.scene.start("Tuto");
  });

  const boton2 = new Button(this.cameras.main.centerX*1.3, this.cameras.main.centerY + this.cameras.main.centerY/1.5, 'Creditos', this, () => {
    // Instrucción para pasar a la escena Play
    this.scene.start("Creditos");
});


  


    
  }

}

