import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "../../res/style.scss";

if (process.env.NODE_ENV !== "production"){
    require("../mock/Mirage").startMirage();
}

ReactDOM.render(<App/>, document.getElementById("app"));