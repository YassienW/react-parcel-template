import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import "../../res/style.scss";

if (process.env.NODE_ENV !== "production"){
    require("../mock/Mirage").startMirage();
}

const root = createRoot(document.getElementById("app"));
root.render(<App/>);