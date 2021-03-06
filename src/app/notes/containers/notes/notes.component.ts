import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import * as fromNotesStore from './../../store';
import * as fromRootStore from './../../../core/store';

import { NotesApiService } from './../../../shared/services/notes-api.service';
import { Note } from './../../../shared/models/note.model';

@Component({
  selector: 'app-notes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  animations: [],
})

export class NotesComponent implements OnInit {

  notes$: Observable<Array<Note>>;
  loading$: Observable<boolean>;
  notesCount$: Observable<number>;
  notesSidebarOpened$: Observable<boolean>;
  activeNoteId$: Observable<any>;

  constructor(
    private notesService: NotesApiService,
    private notesStore: Store<fromNotesStore.NotesState>,
    private rootstore: Store<fromRootStore.State>
  ) {}

  ngOnInit() {

    this.notes$ = this.notesStore.select(fromNotesStore.getAllDisplayedNotes)
      .pipe(
        map((value) => value.reverse())
      );

    this.loading$ = this.notesStore.select(fromNotesStore.getNotesLoading);

    this.notesCount$ = this.notesStore.select(fromNotesStore.getNotesCount);

    this.notesSidebarOpened$ =  this.notesStore.select(fromRootStore.getNotesSidebarState);

    this.activeNoteId$ = this.rootstore.select(fromRootStore.getParams);

    this.notesStore.dispatch(new fromNotesStore.LoadNotes());
  }

  onSelectNoteToCreate() {
    this.rootstore.dispatch(new fromNotesStore.SelectNoteToCreate());
  }

  onSelectNoteToDisplay(id: string) {
    this.rootstore.dispatch(new fromNotesStore.SelectNoteToDisplay(id));
  }

  filter(event: any) {
    this.rootstore.dispatch(new fromNotesStore.FilterByTitle(event));
  }

}
