// @flow
import React from "react";
import {ApplicationState} from "../App"
export const Game = () => (
  <ApplicationState.Consumer>
    {/*$FlowFixMe*/}
    {state => {
      let {display} = state;
      return (
        <div>
          <h1>Screen Width {display.width}</h1>
          <h1>Screen Height {display.height}</h1>
        </div>
      )
    }}
  </ApplicationState.Consumer>
)