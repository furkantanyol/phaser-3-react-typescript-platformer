import React from "react";
import Phaser from "phaser";
import PlayScene from "./scenes/playScene";

import { GAME_HEIGHT, GAME_WIDTH, GRAVITY } from "./config";

export interface IGameProps {}

export default class IGame extends React.Component<IGameProps, any> {
  componentDidMount() {
    const config: GameConfig = {
      type: Phaser.AUTO,
      width: GAME_WIDTH,
      height: GAME_HEIGHT,
      parent: "phaser-game",
      scene: [PlayScene],
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: GRAVITY },
          debug: false
        }
      }
    };

    new Phaser.Game(config);
  }

  shouldComponentUpdate() {
    return false;
  }

  public render() {
    return <div id="phaser-game" />;
  }
}
