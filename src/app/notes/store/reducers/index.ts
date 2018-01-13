import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromNotesList from './notes-list.reducer';

export interface NotesState {
  notesList: fromNotesList.NotesListState;
}

export const reducers: ActionReducerMap<NotesState> = {
  notesList: fromNotesList.reducer,
};

export const getNotesState = createFeatureSelector<any>('notes');
