import {div} from '@cycle/dom'
// import run from '@cycle/rxjs-run'
import { of } from 'rxjs';



export function App (sources) {
  const vtree$ = of(
    div('start project')
  )
  const sinks = {
    DOM: vtree$
  }

  return sinks
}
