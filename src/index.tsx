import * as React from "react";
import * as ReactDOM from "react-dom";

import "bootstrap";
import "./scss/main.scss";

import Nav from "./components/nav";

const ROOT = document.querySelector(".app-root");

ReactDOM.render(<Nav />, ROOT);
