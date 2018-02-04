import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { getRouterState } from './../../../core/store/reducers/index';
import * as fromAuthStore from './../../../auth/store';
import * as fromAppStore from './../../../core/store';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  auth$: Observable<fromAuthStore.AuthState>;
  sidebarStatus$: Observable<boolean>;

  constructor(private store: Store<fromAppStore.State>) { }

  ngOnInit() {
    this.auth$ = this.store.select(fromAuthStore.getAuthState);
    this.sidebarStatus$ = this.store.select(fromAppStore.getNotesSidebarState);
  }

  onSidebarToggle(event: boolean) {
    const action = event ? new fromAppStore.OpenNotesSidebar() : new fromAppStore.CloseNotesSidebar();
    this.store.dispatch(action);
  }

  onSignOut() {
    this.store.dispatch(new fromAuthStore.SignOut());
  }
}
