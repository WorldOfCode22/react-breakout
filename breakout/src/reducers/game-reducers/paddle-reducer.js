// @flow 
import React from "react"
import { type State } from "../../App";
import {type PaddlePropType} from "../../components/paddle"

export function getPaddleDefaults(comp: React.Component<null, State>, color: string, player: string): PaddlePropType {
  return {
    paddle: {
      width: 10,
      height: 10,
      x: window.innerWidth/2,
      y: 50,
      speed: 5,
      color,
      onMove: (event: KeyboardEvent) => {
        const {game} = comp.state;
        let paddle;
        player === "player" ? paddle = game.playerPaddle.paddle : paddle = game.playerPaddle.paddle;
        if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {
          paddle.x += paddle.speed;
          comp.setState({game});
        } else if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
          paddle.x -= paddle.speed;
          comp.setState({game});  
        }
      }
    }
  }
}