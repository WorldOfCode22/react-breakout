// @flow
import { type PaddlePropType,  } from "../components/paddle";
import { getPaddleDefaults } from "./game-reducers/paddle-reducer";
import React from "react";
import { type State } from "../App";
// @flow
export type GameType = {
  playerPaddle: PaddlePropType
}

export function getGameDefaults(comp: React.Component<null, State>): GameType {
  return {
    playerPaddle: getPaddleDefaults(comp, "red", "player")
  }
}