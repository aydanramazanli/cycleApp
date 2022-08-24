// import run from '@cycle/rxjs-run'
//  import { of } from "rxjs";
// import { Observable } from 'rx';
import {Search} from './companents/search';
import { Login } from "./pages/login";
import { Navbar } from "./companents/navbar";

export function App(sources) {
  const navbar = Navbar(sources);
  const login = Login(sources);
  const search = Search(sources);Login(sources);
  //  const home = Home(sources)

  const sinks = {
    DOM: search.DOM
  };
  return sinks;
}
