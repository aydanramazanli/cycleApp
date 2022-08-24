// import run from '@cycle/rxjs-run';
import { of } from 'rxjs';
import { div } from '@cycle/dom';
import {navbar} from '../companents/navbar'

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