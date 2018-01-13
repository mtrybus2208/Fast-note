import { state, trigger, transition, style, animate, query, stagger } from '@angular/animations';

export function fadeItems(duration: {enter: number, leave: number, stagger: number}) {
  return trigger('fadeItems', [
    transition('* => *', [

      query(':enter', [
        style({ opacity: 0 }),
        stagger(duration.stagger, [
          animate(duration.enter, style({ opacity: 1 }))
        ])
      ], {optional: true}),

      query(':leave', [
        style({ opacity: 1 }),
        stagger(duration.stagger, [
          animate(duration.leave, style({ opacity: 0 }))
        ])
      ], {optional: true}),

    ])
  ]);
}

export function simpleFade(duration: number = 200) {
  return trigger('simpleFade', [
    state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [
      animate(duration)
    ]),
  ]);
}
