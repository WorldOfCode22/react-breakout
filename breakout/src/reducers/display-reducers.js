// @flow
import React from "react";
import {type State} from "../App";

export type DisplayType = {
  width: number,
  height: number,
  onResize: Function
}

export function getDisplayDefaults(comp: React.Component<null, State>): DisplayType {
  return {
    // add legacy
    width: window.innerWidth,
    height: window.innerHeight,
    onResize: () => {
      let {display} = comp.state;
      display.width = window.innerWidth;
      display.height = window.innerHeight;
      comp.setState({display});
    }
  }
}