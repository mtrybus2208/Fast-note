import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRootStore from './store';
import * as layoutActions from './store/actions/layout.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class AppComponent implements OnInit {

  title = 'FastNote';

  constructor(private rootstore: Store<fromRootStore.State>) {}

  ngOnInit() {}

  onWindowResize(event){
    this.rootstore.dispatch(
      new layoutActions.ResizeWindow({
        width: event.target.innerWidth,
        height: event.target.innerHeight
      })
    );
  }
}
