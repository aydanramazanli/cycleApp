// import run from '@cycle/rxjs-run';
import { of } from "rxjs";
import { div, button, img } from "@cycle/dom";


export function Login(sources) {
  return {
    DOM: view(),
  };
}

function view() {
  return of(
    div("#login", [
      img(".login-img", {
        attrs: {
          src:"https://acad.xlri.ac.in/results/preupld/images/login.svg" ,
        },
      }),
      button("Login up/ Sign up"),
    ])
  );
}
