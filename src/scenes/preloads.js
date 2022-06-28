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
    this.load.image("creditos", "public/assets/imagenes/creditosback.png");
    this.load.image("tutorial", "public/assets/imagenes/tutorialback.png");
    this.load.image("principal","public/assets/imagenes/principalIza1.png");
    this.load.image("mariposa","public/assets/imagenes/Iza.png");
    this.load.image("win","public/assets/imagenes/victoria.png");
    this.load.image("lost","public/assets/imagenes/derrota.png");
    this.load.image("izawin","public/assets/imagenes/izavic.png");
    this.load.image("izalost","public/assets/imagenes/izalos.png");
    this.load.image("miel","public/assets/imagenes/miel.png");
    this.load.image("avispa","public/assets/imagenes/avispa1.png");
    this.load.image("playbutton","public/assets/imagenes/jugar.png");
    this.load.image("playbutton1","public/assets/imagenes/jugar2.png");
    this.load.image("guiabutton","public/assets/imagenes/guia.png");
    this.load.image("guiabutton1","public/assets/imagenes/guia2.png");
    this.load.image("retrybutton","public/assets/imagenes/retry.png");
    this.load.image("retrybutton1","public/assets/imagenes/retry2.png");
    this.load.image("flechabutton","public/assets/imagenes/flecha.png");
    this.load.image("flechabutton1","public/assets/imagenes/flechaclaro.png");
    this.load.image("creditosbutton","public/assets/imagenes/creditos.png");
    this.load.image("creditosbutton1","public/assets/imagenes/creditos2.png");
    this.load.image("atrasbutton","public/assets/imagenes/atras.png");
    this.load.image("hit2","public/assets/imagenes/izahit2.png");
    this.load.image("quiet","public/assets/imagenes/izaquieto.png");
    this.load.image("inter1","public/assets/imagenes/inter1.png");
    this.load.image("inter2","public/assets/imagenes/inter2.png");
    this.load.image("inter3","public/assets/imagenes/inter3.png");
    this.load.image("click","public/assets/imagenes/click.png");
    this.load.image("atrasbutton1","public/assets/imagenes/atras2.png");
    this.load.image("avispasola","public/assets/imagenes/avispa1.png");
    this.load.image("black","public/assets/imagenes/negro.png");
    this.load.image("vidas","public/assets/imagenes/vidastext.png");
    this.load.image("mielrecolectada","public/assets/imagenes/mielrecolectada.png")
    this.load.image("ventana","public/assets/imagenes/ventana.png")
    this.load.image("ventanamiel","public/assets/imagenes/ventanamiel.png")
    this.load.spritesheet("avispa1", "public/assets/imagenes/spriteavispa.png", {
      frameWidth: 45,
      frameHeight: 45,
    });
    this.load.spritesheet("cayendo", "public/assets/imagenes/sprite1.png", {
      frameWidth: 86,
      frameHeight: 65,
    });
    this.load.spritesheet("moverse", "public/assets/imagenes/sprite2.png", {
      frameWidth: 86,
      frameHeight: 65,
    });
    this.load.tilemapTiledJSON("map", "public/assets/tilemaps/mapaideaiza.json");
    this.load.image("tilesBelow", "public/assets/tilemaps/fondo1.png");
    this.load.image("tilesPlatform", "public/assets/tilemaps/plataformas.png");
    this.load.tilemapTiledJSON("map2", "public/assets/tilemaps/mapaideaiza2.json");
    this.load.image("tilesBelow2", "public/assets/tilemaps/fondo2.png");
    this.load.image("tilesPlatform2", "public/assets/tilemaps/plataformas1.png");
    this.load.tilemapTiledJSON("map3", "public/assets/tilemaps/mapaideaiza3.json");
    this.load.image("tilesBelow3", "public/assets/tilemaps/fondo3.png");
    this.load.image("tilesPlatform3", "public/assets/tilemaps/plataforma6.png");
    this.load.image("tutorial", "public/assets/imagenes/EjTuto.png");
    this.load.audio("gota", "public/assets/sounds/gota.mp3");
    this.load.audio("hit", "public/assets/sounds/hit.mp3");
    this.load.audio("musica1", "public/assets/sounds/musicalvl1.mp3");
    this.load.audio("musica2", "public/assets/sounds/musicalvl2.mp3");
    this.load.audio("musica3", "public/assets/sounds/mainmenumusic.mp3");
    this.load.audio("musica4", "public/assets/sounds/musicalvl3.mp3");
    this.load.audio("victory", "public/assets/sounds/victoriasound.mp3");
    this.load.audio("fail", "public/assets/sounds/fail.mp3");
    this.load.audio("lose", "public/assets/sounds/lose.mp3");
  }

  create() {

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("moverse", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "caer",
      frames: this.anims.generateFrameNumbers("cayendo", { start: 0, end: 5 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("moverse", { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "mala",
      frames: this.anims.generateFrameNumbers("avispa1", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "quieto",
      frames: [{ key: "quiet", frame: 0 }],
      frameRate: 20,
    });

    this.anims.create({
      key: "golpe",
      frames: [{ key: "hit2", frame: 0 }],
      frameRate: 20,
    });
  
    this.scene.start("Black");
  }
}
