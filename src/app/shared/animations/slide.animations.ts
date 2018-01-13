import { state, trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';

export function slideToogle(duration: number = 200) {
  return trigger('slideToogle', [
    transition(':enter', [
      animate(duration, keyframes([
        style({opacity: 0, transform: 'translateY(-75px)'}),
        style({opacity: .5, transform: 'translateY(-35px)'}),
        style({opacity: 1, transform: 'translateY(0)'}),
      ]))
    ]),
    transition(':leave', [
      animate(duration - 100, keyframes([
        style({opacity: 1, transform: 'translateY(0)'}),
        style({opacity: .5, transform: 'translateY(-35px)'}),
        style({opacity: 0, transform: 'translateY(-75px)'}),
      ]))
    ]),
  ])
}

export function slideHeight(duration: number = 300) {
  return trigger('slideHeight', [
    state('void', style({ opacity: 0, height: 0 })),
    transition(':enter', [
      animate(duration, keyframes([
        style({opacity: 0, height: '0'}),
        style({opacity: .6, height: '33%'}),
        style({opacity: .8, height: '50%'}),
        style({opacity: 1, height: '100%'}),
      ]))
    ]),
    transition(':leave', [
      animate(0)
    ]),
  ]);
}