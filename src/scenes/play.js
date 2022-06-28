// Declaracion de variables para esta escena
var player;
var stars;
var bombs;
var cursors;
var score;
var gameOver;
var scoreText;
var vida;
var vidaText;
var suelo;
var tiempo = 0;
var gota;
var hit;
var miel;
var fail;
var playT;
var vidatext;
var ventana;

export class Play1 extends Phaser.Scene {
  constructor() {
    super("Play1");
  }  
  
  init (data) {
    score = data.score;
    vida = data.vida;
  }

  create() {

    this.music = this.sound.add("musica1");
    var musicConfig = {
      mute: false,
      volume: 0.5,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    }

    this.music.play(musicConfig);

    this.cameras.main.setBounds(0, 0, 640, 4288);
        this.physics.world.setBounds(0, 0, 640, 4288);
    
    const map = this.make.tilemap({ key: "map" });

    gota = this.sound.add('gota', {volume: 0.5})
    hit = this.sound.add("hit", {volume: 0.5})
    fail = this.sound.add("fail", {volume: 0.5})

    const tilesetBelow = map.addTilesetImage("fondo1", "tilesBelow");
    const tilesetPlatform = map.addTilesetImage(
      "plataformas",
      "tilesPlatform"
    );

    const belowLayer = map.createLayer("fondo1", tilesetBelow, 0, 0);
    const worldLayer = map.createLayer("plataformas", tilesetPlatform, 0, 0);
    const objectsLayer = map.getObjectLayer("Objetos"); 

    const spawnPoint = map.findObject("Objetos", (obj) => obj.name === "IZA");
    player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "mariposa"); 
    player.anims.play("caer");
 

    player.setBounce(0);
    player.setCollideWorldBounds(true);
    player.setVelocityY(90);

    suelo = this.physics.add.sprite(450,4300,"tilesPlatform").setScale(6.0,1).setVisible(false);
    suelo.setImmovable(true);
    this.physics.add.collider(player, suelo);

      
    if ((cursors = !undefined)) {
      cursors = this.input.keyboard.createCursorKeys();
    }
    stars = this.physics.add.staticGroup();
    objectsLayer.objects.forEach((objData) => {
      const { x = 0, y = 0, name, type } = objData;
      switch (type) {
        case "miel": {
          stars.create(x, y, "miel");
          break;
        }
      }
    });
    
     //avispa = this.physics.add.sprite(350, 350, "avispa1");
     /*var avispaGroup = this.add.group([ 
      { key: 'avispa1', frame: 0, setXY: { x: 300, y: 300, stepX: 52 } }, 
      { key: 'avispa1', frame: 0, setXY: { x: 32, y: 148, stepX: 52 } },
      { key: 'avispa1', frame: 0, setXY: { x: 32, y: 148 + 48, stepX: 52 } },
      { key: 'avispa2', frame: 0, setXY: { x: 350, y: 350, stepX: 52 } },
      { key: 'avispa1', frame: 0, setXY: { x: 32, y: 148 + 48, stepX: 52 } },
  ]);*/

    /*this.anims.create({
      key: "avispa1",
      frames: this.anims.generateFrameNames("avispa1", {start: 0, end: 3}),
      repeat: -1,
      frameRate: 10

    })

    /*avispaGroup.children.iterate(avispaGroup => {
      avispaGroup.play('mala') 
    })
    avispa.anims.play("avispa1");*/


    bombs = this.physics.add.group();
    objectsLayer.objects.forEach((objData) => {
      const { x = 0, y = 0, name, type } = objData;
      switch (name) {
        case "abeja": {
          bombs.create(x, y, "avispasola");
          break;
        } 

      }
    });

    this.physics.add.overlap(player, worldLayer, this.meta, null, this);
    this.physics.add.overlap(player, stars, this.collectStar, null, this);
    this.physics.add.overlap(player, bombs, this.hitBomb, null, this);
    this.physics.add.overlap(player, suelo, this.animsSuelo, null, this);
    /*this.physics.add.overlap(player, avispaGroup, this.hitAvispa, null, this);*/
  
    ventana = this.physics.add.sprite(70, 50, "ventana").setScale(0.55);
    ventana.scrollFactorX=0
    ventana.scrollFactorY=0

    gameOver = false;
    score = score||0; 
    vida = vida||3;
    miel = this.physics.add.sprite(40, 60, "miel").setScale(0.60);
    miel.scrollFactorX=0
    miel.scrollFactorY=0
    vidatext = this.physics.add.sprite(55, 35, "vidas").setScale(0.60);
    vidatext.scrollFactorX=0
    vidatext.scrollFactorY=0
 
    scoreText = this.add.text(58, 52, `X ${
      score}`, {fontFamily: "arial",fontSize: "17px",
    fill: "#FFFFFF",})
    scoreText.scrollFactorX=0
    scoreText.scrollFactorY=0
    vidaText = this.add.text(90, 25, `${vida}`, {fontFamily: "arial", fontSize: "17px",
    fill: "#FFFFFF",});
    vidaText.scrollFactorX=0
    vidaText.scrollFactorY=0
    
    this.cameras.main.startFollow(player, true, 0.25, 0.25);
    
        this.cameras.main.setZoom(1);
  }

  update() {
    if (gameOver) {
      return;
    }

    if (cursors.left.isDown) {
      player.setVelocityX(-160);
      player.anims.play("left", true);
    } else if (cursors.right.isDown) {
      player.setVelocityX(160);

      player.anims.play("right", true);
    } else {
      player.anims.play("caer", true);
      player.setVelocityX(0);

    }

    if (cursors.up.isDown && player.body.blocked.down) {
      player.setVelocityY(-330);
    }

  }

  collectStar(player, star) {
    gota.play()
    star.disableBody(true, true);
    score += 10;
    console.log(score)
    console.log(this.game.scene.scenes)
    scoreText.setText(`X ${score}`)
  }  

  meta(player,plataforma) {
  if (player.body.blocked.down) {
  this.time.delayedCall(1800, () => {
    this.game.sound.stopAll();
  this.scene.start("Inter2", {score, vida});
    })
	}

    if (stars.countActive(true) === 0) {
      stars.children.iterate(function (child) {
        child.enableBody(true, child.x, child.y + 10, true, true);
      });

      var x =
        player.x < 400
          ? Phaser.Math.Between(400, 800)
          : Phaser.Math.Between(0, 400);

      var bomb = bombs.create(x, 16, "bomb");
      bomb.setBounce(1);
      bomb.setCollideWorldBounds(true);
      bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }
  }

 animsSuelo(player, suelo){
  console.log("hola");
  player.anims.play("quieto", true);
 }

  /*hitAvispa(player, avispa){
    hit.play()
    console.log(3);
    avispa.destroy();
    vida -= 1
    vidaText.setText(`Vidas: ${vida}`)
    {player.setTint(0xff0000);this.time.delayedCall(200, () => player.clearTint())};
  }*/

  hitBomb(player, bomb) {
    hit.play()
    console.log(player, bomb)
    bomb.destroy();
    vida -= 1
    vidaText.setText(`${vida}`)
    {player.setTint(0xff0000);this.time.delayedCall(200, () => player.clearTint())};
    
    if (vida === 0 ){
      this.physics.pause();
     
      player.setTint(0xff0000);
      player.anims.play("golpe");
      gameOver = true;
      this.game.sound.stopAll();
       fail.play()
      setTimeout(() => {
        this.scene.start("Lost",{ score, vida });
      }, 2500); 
    }
  }
}




