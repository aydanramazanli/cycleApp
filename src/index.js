// import {run} from '--RUN-LIB--';
import run from '@cycle/rxjs-run'
import {makeDOMDriver} from '@cycle/dom';
import {App} from './app'

const drivers = {
  DOM: makeDOMDriver('#app')
}

run(App, drivers);


