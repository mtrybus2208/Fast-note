import { getRouterState } from './../../../core/store/reducers/index';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as fromAppStore from './../../../core/store';
import * as fromAuthStore from './../../../auth/store';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  notesSidebarOpened$: Observable<boolean>;
  isOpened: boolean;
  notesSubscription: Subscription;
  auth$: Observable<fromAuthStore.AuthState>;

  constructor(private store: Store<fromAppStore.State>) { }

  ngOnInit() {
    this.notesSidebarOpened$ =  this.store.select(fromAppStore.getNotesSidebarState);

    this.notesSubscription = this.notesSidebarOpened$.subscribe((value) => {
      this.isOpened = value;
    });

    this.auth$ = this.store.select(fromAuthStore.getAuthState);
  }

  toogleNotesSidebar() {
    const action = this.isOpened ? new fromAppStore.CloseNotesSidebar() : new fromAppStore.OpenNotesSidebar();
    this.store.dispatch(action);
  }

  signOut() {
    this.store.dispatch(new fromAuthStore.SignOut());
  }

  ngOnDestroy() {
    this.notesSubscription.unsubscribe();
  }

}
