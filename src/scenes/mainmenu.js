import Button from "../js/button.js";

// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class MainMenu extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("MainMenu");
  }


create(){

  // Fondo del menú principal
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'principal').setScale(0.83,1);
    this.add.image(this.cameras.main.centerX, 150, 'iza_logo').setScale(0.90);
   
    const boton3 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/12, 'playbutton').setInteractive({cursor: "pointer"})
    boton3.on('pointerover', function(){boton3.setTexture('playbutton1')})
    boton3.on('pointerout', function(){boton3.setTexture('playbutton')})
    boton3.on('pointerdown', () => {this.scene.start("Play1")})
   
    const boton1 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/3, 'guiabutton').setInteractive({cursor: "pointer"})
    boton1.on('pointerover', function(){boton1.setTexture('guiabutton1')})
    boton1.on('pointerout', function(){boton1.setTexture('guiabutton')})
    boton1.on('pointerdown', () => {this.scene.start("Tuto")})
  

    const boton2 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/1.7, 'creditosbutton').setInteractive({cursor: "pointer"})
    boton2.on('pointerover', function(){boton2.setTexture('creditosbutton1')})
    boton2.on('pointerout', function(){boton2.setTexture('creditosbutton')})
    boton2.on('pointerdown', () => {this.scene.start("Creditos")})

    
  }

}

