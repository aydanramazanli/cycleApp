// import run from '@cycle/rxjs-run';
import { of } from "rxjs";
import { div, button,form, h3, input } from "@cycle/dom";


export function Search(sources) {
  
  return {
    DOM: view(),
  };
}

function view() {
  return of(
    div("#search", [
      div('.content',[
        form(div('.search-input',[
          input({attr: {type:"text", placeholder:"Search"}}),
          button("Search")
        ]  ))
      ]), 
      h3("Requests")
    ])
  );
}
