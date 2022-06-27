import { Preloads } from "../scenes/preloads.js";
import { MainMenu } from "../scenes/mainmenu.js";
import { Tuto } from "../scenes/tutorial.js";
import { Creditos } from "../scenes/creditos.js";
import { Play1 } from "../scenes/play.js";
import { Play2 } from "../scenes/play2.js";
import { Play3 } from "../scenes/play3.js";
import { Lost } from "../scenes/lost.js";
import { Win } from "../scenes/win.js";




var config = {
  type: Phaser.AUTO,
  width: 640,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1250,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      
      debug: false,
    },
  },
  // Listado de todas las escenas del juego, en orden
  // La primera escena es con la cual empieza el juego
  scene: [Preloads, MainMenu, Tuto, Creditos, Play1, Play2, Play3, Lost, Win, ],
};

var game = new Phaser.Game(config);

