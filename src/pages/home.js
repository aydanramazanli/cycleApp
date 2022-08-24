// import run from '@cycle/rxjs-run';
import { of } from 'rxjs';
import { div } from '@cycle/dom';

export function Home(sources) {
  return {
    DOM: view()
  };
}


function view(){
  return of(
    div('home companent')
  );
}