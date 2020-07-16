import React, { Component } from "react";
import ControlledBoard from "./ControlledBoard";

class DailyDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {}
      
  }

  

  render() {

   const board={
     lanes:
      this.props.board
     
   }
  
   
    return (
      <div>
        
        <ControlledBoard board={board} />
       
      </div>
    );
  }
}
export default DailyDisplay;
