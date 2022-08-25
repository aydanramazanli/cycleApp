import run from '@cycle/rxjs-run'
import {makeDOMDriver} from '@cycle/dom';
import {App} from './app'
import {makeHTTPDriver} from '@cycle/http';

const drivers = {
  DOM: makeDOMDriver('#app'),
  HTTP: makeHTTPDriver()
}

run(App, drivers);


