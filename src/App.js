import React from "react";
import GridItem from "./gridItem";

class App extends React.Component {
  render() {
    const gridItemArr = [<GridItem />, <GridItem />, <GridItem />];
    return (
      <div>
        <div id="board">
          <div className="grid-row">{gridItemArr}</div>
          <div className="grid-row">{gridItemArr}</div>
          <div className="grid-row">{gridItemArr}</div>
        </div>
      </div>
    );
  }
}
export default App;
