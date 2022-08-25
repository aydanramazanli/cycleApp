// import run from '@cycle/rxjs-run';
// import { of } from 'rxjs';
import { div, article, h3, img, a, p } from "@cycle/dom";
import { fromFetch } from "rxjs/fetch";
import { switchMap, of, catchError, pipe, map } from "rxjs";

const data$ = fromFetch(
  `https://api.github.com/users/aydansamedova/followers`
).pipe(
  switchMap((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return of({ error: true, message: `Error ${response.status}` });
    }
  }),
  catchError((err) => {
    console.error(err);
    return of({ error: true, message: err.message });
  })
);

data$.subscribe({
  next: (result) => result.map(a=> a.login),
  complete: () => console.log("done"),
});

export function Followers() {
  return {
    DOM: view(),
   // HTTP: data$,
  };
}

function view() {
  return of(
    div(".user-info", [
      article("#users", [
        div(".users-content", [
          img({
            attrs: {
              src: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
            },
          }),
          div(".text", [h3("Aydan Samedova"), h3("@twiter name")]),
          div(
            ".follow",
            a({ attrs: { href: "https://github.com/Maharramoff" } }, ["Follow"])
          ),
        ]),
        div(".user-datas", [
          p(".bio", ["#frontend"]),
          p(".location", ["Baku"]),
          a({ attrs: { href: "https://github.com/" } }, [
            "https://github.com/",
          ]),
        ]),
      ]),
      article("#followers", [
        div(".followers-content", [
          img({
            attrs: {
              src: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
            },
          }),
          div(".text", [
            h3("Maharramoff"),
            a({ attrs: { href: "https://github.com/Maharramoff" } }, [
              "https://github.com/Maharramoff",
            ]),
          ]),
        ]),
      ]),
    ])
  );
}
