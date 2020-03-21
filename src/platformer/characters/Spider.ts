import Phaser from "phaser";

class Spider extends Phaser.Physics.Arcade.Sprite {
  public sprite: Phaser.Physics.Arcade.Sprite;
  private currentScene: Phaser.Scene;

  SPEED = 100;

  constructor(params) {
    super(params.scene, params.x, params.y, params.key, params.frame);
    this.currentScene = params.scene;
    this.setOrigin(0.5);

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.scene.physics.world.enable(this);
    this.setCollideWorldBounds(true);
    this.setVelocityX(this.SPEED);
    this.scene.events.on("update", () => {
      this.body && this.update();
    });
    this.on(
      "animationcomplete",
      function(anim) {
        if (anim.key === "die") {
          this.destroy();
        }
      },
      this
    );
    this.createAnims(this.currentScene);
    this.anims.play("crawl", true);
  }

  update() {
    // check against walls and reverse direction if necessary
    if (this.body.touching.right || this.body.blocked.right) {
      this.setVelocityX(-this.SPEED); // turn left
    } else if (this.body.touching.left || this.body.blocked.left) {
      this.setVelocityX(this.SPEED); // turn right
    }
  }

  die() {
    this.body.enable = false;

    this.scene.anims.play("die", this);
  }

  private createAnims(scene) {
    scene.anims.create({
      key: "crawl",
      frames: scene.anims.generateFrameNumbers("spider", {
        frames: [0, 1, 2]
      }),
      frameRate: 8,
      repeat: -1
    });
    scene.anims.create({
      key: "die",
      frames: scene.anims.generateFrameNumbers("spider", {
        frames: [0, 4, 0, 4, 0, 4, 3, 3, 3, 3, 3, 3]
      }),
      frameRate: 12
    });
  }
}

export default Spider;
