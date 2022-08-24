// import { div } from "@cycle/dom";
// import run from '@cycle/rxjs-run'
// import { of } from "rxjs";
// import { Observable } from 'rx';
import { Home } from "./pages/home";
import { Navbar } from "./companents/navbar";
//import {styles} from './style/style.css';
import { Login } from "./pages/login";

export function App(sources) {
  const navbar = Navbar(sources);
  const login = Login(sources);

  const sinks = {
    DOM: login.DOM,
    // navbar.DOM
  };
  return sinks;
}
