// @flow
import React from "react";
import {type State} from "../App";

export type DisplayType = {
  width: number,
  height: number
}

export function getDisplayDefaults(comp: React.Component<null, State>): DisplayType {
  return {
    width: window.screen.width,
    height: window.screen.height
  }
}