import { fromFetch } from 'rxjs/fetch';
import { switchMap, of, catchError } from 'rxjs';
 
const data$ = fromFetch(`https://api.github.com/users/aydansamedova/followers`).pipe(
  switchMap(response => {
    if (response.ok) {
      return response.json();
    } else {
      return of({ error: true, message: `Error ${ response.status }` });
    }
  }),
  catchError(err => {
    console.error(err);
    return of({ error: true, message: err.message })
  })
);
 
data$.subscribe({
  next: result => console.log(result),
  complete: () => console.log('done')
});