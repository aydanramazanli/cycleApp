// import run from '@cycle/rxjs-run';
import { of } from "rxjs";
import { div, button, h4, img, a } from "@cycle/dom";

export function Navbar(sources) {
  return {
    DOM: view(),
  };
}

function view() {
  return of(
    div("#navbar", [
      div(".content", [
        img(".nav-img", {
          attrs: {
            src: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
          },
        }),
        h4("Welcome"),
        button("login", [a("Login")]),
      ]),
    ])
  );
}
