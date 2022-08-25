// import run from '@cycle/rxjs-run';
import { of } from 'rxjs';
import { div, article, h3, img, a, p } from '@cycle/dom';



export function Followers(data$) {
  console.log(data$)
  return {
    DOM: view()
  };
}


function view(){
 

  return of(
    div('.user-info',[  article('#users',[
        div(".users-content",[
            img({attrs: {
                src: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
              }}),
            div('.text',[
                h3("Aydan Samedova"),
                h3("@twiter name"),
            ]),
            div(".follow", a({attrs: {href: "https://github.com/Maharramoff"}},["Follow"]))
        ]), 
        div(".user-datas", [
            p('.bio',['#frontend']),
            p('.location',['Baku']),
            a({attrs: {href: "https://github.com/"}},["https://github.com/"])
        ])
       
    ]), article('#followers',[
        div(".followers-content",[
            img({attrs: {
                src: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
              }}),
            div('.text',[
                h3("Maharramoff"),
                a({attrs: {href: "https://github.com/Maharramoff"}},["https://github.com/Maharramoff"] )
            ])
        ])
       
    ])])
  
  );
}