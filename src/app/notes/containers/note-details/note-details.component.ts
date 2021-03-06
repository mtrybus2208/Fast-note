import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Note } from './../../../shared/models/note.model';
import { NotePatchInfo } from './../../../shared/services/notes-api.service';
import { simpleFade } from './../../../shared/animations';
import * as fromStore from './../../store';
import * as fromRootStore from './../../../core/store';

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
  notesListState$: Observable<fromStore.NotesState>;

  public isCollapsed = false;

  constructor(private store: Store<fromStore.NotesState>, private rootStore: Store<fromRootStore.State>) { }

  ngOnInit() {
    this.note$ = this.store.select(fromStore.getSelectedNote)
      .pipe(
        map((note: Note) => {
          return note || null;
        }),
      );
    this.openedModalName$ = this.rootStore.select(fromRootStore.getOpenedModalName);
    this.notesListState$ =  this.store.select(fromStore.getNotesList);
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
