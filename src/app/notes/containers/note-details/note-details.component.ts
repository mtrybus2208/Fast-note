import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Note } from './../../../shared/models/note.model';
import { NotePatchInfo } from './../../../shared/services/notes-api.service';
import * as fromStore from './../../store';
import * as fromRootStore from './../../../store';

import { simpleFade } from './../../../shared/animations';

@Component({
  selector: 'app-note-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss'],
  animations: [ simpleFade(1500) ]
})
export class NoteDetailsComponent implements OnInit {

  note$: Observable<Note>;
  openedModalName$: Observable<any>;
  openedModalName: string;
  actualNote: string;
  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;

  public isCollapsed = false;

  constructor(private store: Store<fromStore.NotesState>, private rootStore: Store<fromRootStore.State>) { }

  ngOnInit() {
    this.note$ = this.store.select(fromStore.getSelectedNote)
      .pipe(
        map((note: Note) => {
          return note || null;
        }),
      );

    // Use the selector to directly get the opened modal name from the state
    this.openedModalName$ = this.rootStore.select(fromRootStore.getOpenedModalName);

    this.loading$ = this.store.select(fromStore.getNotesLoading);
    this.loaded$ = this.store.select(fromStore.getNotesLoaded);
  }

  onCreate(event: Note) {
    this.store.dispatch(new fromStore.CreateNote(event));
  }

  onUpdate(event: any) {
    this.store.dispatch(new fromStore.UpdateNote(event));
  }

  onRemoveConfirm(event: string) {
    this.actualNote = event;
    this.rootStore.dispatch(new fromRootStore.OpenModal('templateFormModal'));
  }
  handleCloseModal(event?: any) {
    if (event) {
      this.store.dispatch(new fromStore.RemoveNoteConfirmation(this.actualNote));
    }
    this.rootStore.dispatch(new fromRootStore.CloseModal(null));
  }


}
