  export class DemoA extends Phaser.Scene {
    constructor() {
      // Se asigna una key para despues poder llamar a la escena
      super({ key: 'demoA', active: true });
      this.scoreText
    }

    initialize() {
        Phaser.Scene.call(this, { key: 'demoA', active: true });
    }
  
    create() {
        this.scoreText = this.add.text(30, 6, "Miel juntada: 0 / Vidas: 3", {
            fontSize: "12px",
            fill: "#000",
          });
    }

    updateScore(score){
        this.scoreText.setText(score)
    }
  }