// @flow
import React, { Component } from 'react';
import {Game} from "./components/game"
import { type DisplayType, getDisplayDefaults } from './reducers/display-reducers';

// overkill for this project but provide to show ability and convenience if ever scaled-up 
export const ApplicationState = React.createContext();

export type State = {
  display: DisplayType
}

class App extends Component<null, State> {
  state = {
    display: getDisplayDefaults(this),
  }

  componentDidMount(){
    window.addEventListener("resize", this.state.display.onResize);
  }
  
  render() {
    return (
      <ApplicationState.Provider value={this.state}>
        <div>
          <Game />
        </div>
      </ApplicationState.Provider>
    );
  }
}

export default App;
