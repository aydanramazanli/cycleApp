//import run from '@cycle/rxjs-run';
import { of, pluck,map, fromEvent, pipe, filter, debounceTime,switchMap,  distinctUntilChanged} from "rxjs";
import { div, button,form, h3, input } from "@cycle/dom";


export function Search(){
  const searchInput = document.getElementsByName('#search-input')
  let mydiv= document.getElementsByName('.example')

  const input$ = fromEvent(searchInput, "input");
  input$
  .pipe(
    pluck("target", "value"),
    filter((searchValue) => searchValue.length > 2),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap((searchTerm) =>
    ajax.getJSON(`https://api.github.com/users/login=${searchTerm}`).pipe(
      catchError((error, caught) => {
        console.error(`Error: ${error}. Caught ${caught}`);
        return empty();
      })
    )
  )
  ).subscribe((response) => {
    console.log(response);
    mydiv.innerHTML = response.map((b) => b.name).join("<br>");
  });


  return {
    DOM: view(),
  };
}

function view() {
  return of(
    div("#search", [
      div('.content',[
        form(div('.search-input',[
          input("#search-input", {attr: {type:"text", placeholder:"Search", value:"Search"}}),
          button(".addBtn","Search")
        ]  )),
        div(".exapmle")
      ]), 
      h3("Requests")
    ])
  );
}
