import { Preloads } from "../scenes/preloads.js";
import { MainMenu } from "../scenes/mainmenu.js";
import { Tuto } from "../scenes/tutorial.js";
import { Creditos } from "../scenes/creditos.js";
import { Inter1 } from "../scenes/interescena1.js";
import { Inter2 } from "../scenes/interescena2.js";
import { Play1 } from "../scenes/play.js";
import { Play2 } from "../scenes/play2.js";
import { Retry } from "../scenes/retry.js";
import { Lost } from "../scenes/lost.js";
import { Win } from "../scenes/win.js";

import { DemoA } from "../scenes/score.js";


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
  scene: [Preloads, MainMenu, Tuto, Creditos, Inter1, Inter2, Play1, Play2, Retry, Lost, Win, DemoA,],
};

var game = new Phaser.Game(config);

