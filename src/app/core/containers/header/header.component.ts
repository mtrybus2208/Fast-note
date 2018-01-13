import { getRouterState } from './../../../store/reducers/index';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as fromAppStore from './../../../store';
import * as fromAuthStore from './../../../auth/store';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  notesSidebarOpened$: Observable<boolean>;
  notesSidebarOpened: boolean;
  notesSubscription: Subscription;
  toogleText: string;
  auth$: Observable<fromAuthStore.AuthState>;
  routerUrlSub: Subscription;
  routePath: string;

  constructor(private store: Store<fromAppStore.State>) { }

  ngOnInit() {
    this.notesSidebarOpened$ =  this.store.select(fromAppStore.getNotesSidebarState);

    this.notesSubscription = this.notesSidebarOpened$.subscribe((value) => {
      this.notesSidebarOpened = value;
      this.toogleText = value ? 'Hide' : 'Show';
    });

    this.auth$ = this.store.select(fromAuthStore.getAuthState);

    this.routerUrlSub =  this.store.select(fromAppStore.getRouterState)
      .subscribe((state) => {
        if(state) {
          this.routePath = state.state.url.split('/')[2] || null;
        }

    });
  }

  toogleNotesSidebar() {
    const action = this.notesSidebarOpened ? new fromAppStore.CloseNotesSidebar() : new fromAppStore.OpenNotesSidebar();
    this.store.dispatch(action);
  }

  signOut() {
    this.store.dispatch(new fromAuthStore.SignOut());
  }

  ngOnDestroy() {
    this.notesSubscription.unsubscribe();
    this.routerUrlSub.unsubscribe();
  }

}
