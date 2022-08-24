import { of, map } from "rxjs";
import { div, h, style } from "@cycle/dom";

export function Info(sources) {
  return {
    DOM: view(),
  };
}

function view() {
  const items = [
    {
      class: "repos",
      label: "repos",
      value: 1,
    },
    {
      class: "followers",
      label: "followers",
      value: 4,
    },
    {
      class: "public_gists",
      label: "public_gists",
      value: 5,
    },
    {
      class: "following",
      label: "following",
      value: 4,
    },
  ];
  return of(items).pipe(
    map((e) =>
      h("div", { style: { width: "1100px", margin: "2.5rem auto" } }, [
        h(
          "div",
          {
            style: {
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            },
          },
          e.map((i) =>
            div(
              `.${i.class}`,
              {
                style: {
                  background: "white",
                  padding: " 1rem",
                  width: "25%",
                  textAlign: "center",
                  marginRight: " 1rem",
                },
              },
              [`${i.label}`, h("h3", `${i.value}`)]
            )
          )
        ),
      ])
    )
  );
}
