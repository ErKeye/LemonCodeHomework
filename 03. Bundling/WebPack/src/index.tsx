import React from "react";
import { createRoot } from "react-dom/client";
import logo from "./images/logo_1.png";
import classes from "./styles/helloWorldStyles.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className={classes.mainTitle}>Hello World whith LemonCode</h1>
    <h2>{process.env.BUNDLE_STRING}</h2>
    <img className={classes.images} src={logo} alt="Logo" />
  </div>
);
