import Button from "../js/button.js";
var escena = 0;
 export class MainMenu extends Phaser.Scene {
  constructor() {

    super("MainMenu");
  }

create(){ 
  
  console.log(escena); 
  
  this.music1 = this.sound.add("musica3");
    var musicConfig = {
      mute: false,
      volume: 0.2,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    }
 
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'principal').setScale(0.83,1);
    this.add.image(this.cameras.main.centerX, 150, 'iza_logo').setScale(0.90);
   
    const boton3 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/12, 'playbutton').setInteractive({cursor: "pointer"})
    boton3.on('pointerover', function(){boton3.setTexture('playbutton1')})
    boton3.on('pointerout', function(){boton3.setTexture('playbutton')})
    boton3.on('pointerdown', () => {this.scene.start("Inter1"); this.game.sound.stopAll();} )  
   
    const boton1 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/3, 'guiabutton').setInteractive({cursor: "pointer"})
    boton1.on('pointerover', function(){boton1.setTexture('guiabutton1')})
    boton1.on('pointerout', function(){boton1.setTexture('guiabutton')})
    boton1.on('pointerdown', () => {
      escena = 1 ; 
      this.scene.start("Tuto")})
  
    const boton2 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY + this.cameras.main.centerY/1.7, 'creditosbutton').setInteractive({cursor: "pointer"})
    boton2.on('pointerover', function(){boton2.setTexture('creditosbutton1')})
    boton2.on('pointerout', function(){boton2.setTexture('creditosbutton')})
    boton2.on('pointerdown', () => {
      escena = 1 ; 
      console.log(escena); 
      this.scene.start("Creditos")})

    if(
      escena === 0 
      
    ){this.music1.play(musicConfig);
    }  
  }
}

