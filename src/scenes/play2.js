// Declaracion de variables para esta escena
var player;
var stars;
var bombs;
var cursors;
var score;
var gameOver;
var scoreText;
var vidaText;
var vida;

export class Play2 extends Phaser.Scene {
  constructor() {
    super("Play2");
  }

  init (data) {
    score = data.score;
    vida = data.vida;
  }


  create() {
    //scoreText=this.game.config.scoreText;
    //console.log(this.game.config)

    this.cameras.main.setBounds(0, 0, 640, 4320);
        this.physics.world.setBounds(0, 0, 640, 4320);
    
    const map = this.make.tilemap({ key: "map2" });

    // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
    // Phaser's cache (i.e. the name you used in preload)
    const tilesetBelow = map.addTilesetImage("fondo2", "tilesBelow2");
    const tilesetPlatform = map.addTilesetImage(
      "plataformas1",
      "tilesPlatform2"
    );

    const belowLayer = map.createLayer("fondo2", tilesetBelow, 0, 0);
    const worldLayer = map.createLayer("plataformas1", tilesetPlatform, 0, 0);
    const objectsLayer = map.getObjectLayer("Objetos");
 
   //worldLayer.setCollisionByProperty({ colision: true });
    

    //worldLayer.setCollisionByProperty({ collides: true });

   // Find in the Object Layer, the name "dude" and get position
   const spawnPoint = map.findObject("Objetos", (obj) => obj.name === "IZA");
   // The player and its settings
player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "mariposa"); 
player.anims.play("caer");

//  Player physics properties. Give the little guy a slight bounce.
player.setBounce(0.02);
player.setCollideWorldBounds(true);
player.setVelocityY(300);

//  Input Events
if ((cursors = !undefined)) {
  cursors = this.input.keyboard.createCursorKeys();
}

// Create empty group of starts
stars = this.physics.add.staticGroup();
objectsLayer.objects.forEach((objData) => {
  const { x = 0, y = 0, name, type } = objData;
  switch (type) {
    case "miel": {
      // add star to scene
      // console.log("estrella agregada: ", x, y);
      stars.create(x, y, "miel");
      break;
    }

  }
});

//bombs.create(x, y, "abeja");
// Create empty group of bombs
bombs = this.physics.add.group();
objectsLayer.objects.forEach((objData) => {
  const { x = 0, y = 0, name, type } = objData;
  switch (name) {
    case "abeja": {
      bombs.create(x, y, "avispa");
      break;
    } 

  }
});

 //  Checks to see if the player overlaps with any platform
this.physics.add.overlap(player, worldLayer, this.meta, null, this);

//  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
this.physics.add.overlap(player, stars, this.collectStar, null, this);

this.physics.add.overlap(player, bombs, this.hitBomb, null, this);

gameOver = false;
score = score||0; 
vida = vida||3;
scoreText = this.add.text(0, 0, `Miel recolectada: ${score}`, {fontSize: "12px",
fill: "#000",})
scoreText.scrollFactorX=0
scoreText.scrollFactorY=0
vidaText = this.add.text(0, 15, `Vidas: ${vida}`, {fontSize: "12px",
fill: "#000",})
vidaText.scrollFactorX=0
vidaText.scrollFactorY=0

this.cameras.main.startFollow(player, true, 0.01, 0.01);

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

  //player.anims.play("turn");
}
//if (cursors.left.isUp || cursors.right.isUp){
  //player.anims.play("caer", true);
//}
// REPLACE player.body.touching.down
if (cursors.up.isDown && player.body.blocked.down) {
  player.setVelocityY(-330);
}
}

meta(player,plataforma){
  if (player.body.blocked.down) {
    this.time.delayedCall(7000, () => {
    this.scene.start("Play1"), {score, vida}; 
  })
}
}


collectStar(player, star) {
star.disableBody(true, true);

//  Add and update the score
score += 10;
console.log(score)
console.log(this.game.scene.scenes)
scoreText.setText(`Miel recolectada: ${score}`)

//DemoA.updateScore(score)
// scoreText.setText("Miel juntadas: " + score + " / Vidas restantes: " + vida);

if (stars.countActive(true) === 0) {
  //  A new batch of stars to collect
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

hitBomb(player, bomb) {
console.log(player, bomb)
bomb.destroy();
vida -= 1
vidaText.setText(`Vidas: ${vida}`)

if (vida === 0 ){
  this.physics.pause();

  player.setTint(0xff0000);

  player.anims.play("turn");

  gameOver = true;

  // Función timeout usada para llamar la instrucción que tiene adentro despues de X milisegundos
  setTimeout(() => {
    // Instrucción que sera llamada despues del segundo
    this.scene.start(
      "Lost",
      { score, vida } // se pasa el puntaje como dato a la escena RETRY
    );
  }, 1000); // Ese número es la cantidad de milisegundos
}
}


}
