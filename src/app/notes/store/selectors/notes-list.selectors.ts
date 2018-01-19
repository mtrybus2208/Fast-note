import { createSelector } from '@ngrx/store';

import * as fromRoot from './../../../store';
import * as fromFeature from './../reducers';
import * as fromNotesList from './../reducers/notes-list.reducer';

import { Note } from './../../../shared/models/note.model';

/* NotesList slice */
export const getNotesList = createSelector(fromFeature.getNotesState, notes => notes.notesList);

/* Count  number */
export const getNotesCount = createSelector(getNotesList, notes => notes.count);


/* All entieties */
export const getNotesListEntities = createSelector(getNotesList, fromNotesList.getNotesListEntities);

export const getAllNotes = createSelector(getNotesListEntities, (entities) => {
  return Object.keys(entities).map(_id => entities[_id]);
});

/* Displayed notes*/
export const getDisplayedEntities = createSelector(getNotesList, fromNotesList. getDisplayedEntities);

export const getAllDisplayedNotes = createSelector(getDisplayedEntities, (entities) => {
  return Object.keys(entities).map(_id => entities[_id]);
});

// getSelectedNote find an entitie provided by router params from routerReducer
export const getSelectedNote = createSelector(getNotesListEntities, fromRoot.getRouterState, (entities, router): Note => {
  return router.state && entities[router.state.params.noteId];
});

export const getNotesLoaded = createSelector(getNotesList, fromNotesList.getNotesListLoaded);
export const getNotesLoading = createSelector(getNotesList, fromNotesList.getNotesListLoading);
export const getNotesListUpdateProgress = createSelector(getNotesList, fromNotesList.getNotesListUpdateProgress);
export const getNotesListDeleteProgress = createSelector(getNotesList, fromNotesList.getNotesListDeleteProgress);
