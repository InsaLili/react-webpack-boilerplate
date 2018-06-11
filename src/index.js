import React from "react";
import ReactDOM from "react-dom";

class MyApp extends React.Component {
  render(){
    return(
      <div>
        <p>React & webpack</p>
      </div>
    )
  }
}

ReactDOM.render(
  <MyApp />, 
  document.getElementById("app")
);
