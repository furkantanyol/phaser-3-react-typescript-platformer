export const loadImages = function(scene) {
  scene.load.image("background", "./assets/phaser/images/background.png");
  scene.load.image("ground", "./assets/phaser/images/ground.png");
  scene.load.image("grass:8x1", "./assets/phaser/images/grass_8x1.png");
  scene.load.image("grass:6x1", "./assets/phaser/images/grass_6x1.png");
  scene.load.image("grass:4x1", "./assets/phaser/images/grass_4x1.png");
  scene.load.image("grass:2x1", "./assets/phaser/images/grass_2x1.png");
  scene.load.image("grass:1x1", "./assets/phaser/images/grass_1x1.png");
  scene.load.image(
    "invisible-wall",
    "./assets/phaser/images/invisible_wall.png"
  );
  scene.load.image("icon:coin", "./assets/phaser/images/coin_icon.png");
  scene.load.image("font:numbers", "./assets/phaser/images/numbers.png");
  scene.load.image("key", "./assets/phaser/images/key.png");
};

export const loadSpritesheets = function(scene) {
  scene.load.spritesheet("coin", "./assets/phaser/images/coin_animated.png", {
    frameWidth: 22,
    frameHeight: 22
  });
  scene.load.spritesheet("spider", "./assets/phaser/images/spider.png", {
    frameWidth: 42,
    frameHeight: 32
  });
  scene.load.spritesheet("hero", "./assets/phaser/images/hero.png", {
    frameWidth: 36,
    frameHeight: 42
  });
  scene.load.spritesheet("door", "./assets/phaser/images/door.png", {
    frameWidth: 42,
    frameHeight: 66
  });
  scene.load.spritesheet("icon:key", "./assets/phaser/images/key_icon.png", {
    frameWidth: 34,
    frameHeight: 30
  });
  scene.load.spritesheet("decoration", "./assets/phaser/images/decor.png", {
    frameWidth: 42,
    frameHeight: 42
  });
};

export const loadAudio = function(scene) {
  scene.load.audio("sfx:jump", "./assets/phaser/audio/jump.wav");
  scene.load.audio("sfx:coin", "./assets/phaser/audio/coin.wav");
  scene.load.audio("sfx:stomp", "./assets/phaser/audio/stomp.wav");
  scene.load.audio("sfx:key", "./assets/phaser/audio/key.wav");
  scene.load.audio("sfx:door", "./assets/phaser/audio/door.wav");
  scene.load.audio("bgm", [
    "./assets/phaser/audio/bgm.mp3",
    "./assets/phaser/audio/bgm.ogg"
  ]);
};

export const loadLevels = function(scene) {
  scene.load.json("level:0", "./assets/phaser/data/level00.json");
  scene.load.json("level:1", "./assets/phaser/data/level01.json");
};

export const createSfx = function(scene) {
  const sfx = {
    key: scene.sound.add("sfx:key"),
    door: scene.sound.add("sfx:door"),
    jump: scene.sound.add("sfx:jump"),
    coin: scene.sound.add("sfx:coin"),
    stomp: scene.sound.add("sfx:stomp"),
    bgm: scene.sound.add("bgm")
  };

  return sfx;
};
