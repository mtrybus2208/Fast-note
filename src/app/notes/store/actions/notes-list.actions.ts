import { Action } from '@ngrx/store';

import { Note } from './../../../shared/models/note.model';
import { NotePatchInfo } from './../../../shared/services/notes-api.service';

/* Load notes */
export const LOAD_NOTES =  '[Notes] Load Notes';
export const LOAD_NOTES_FAIL =  '[Notes] Load Notes Fail';
export const LOAD_NOTES_SUCCESS =  '[Notes] Load Notes Succes';

export class LoadNotes implements Action {
  readonly type = LOAD_NOTES;
}

export class LoadNotesFail implements Action {
  readonly type = LOAD_NOTES_FAIL;
  constructor(public payload: any) {}
}

export class LoadNotesSuccess implements Action {
  readonly type = LOAD_NOTES_SUCCESS;
  constructor(public payload: Array<Note>) {}
}


/* Select note to create */
export const SELECT_NOTE_TO_CREATE = '[Notes] Select note to create';

export class SelectNoteToCreate implements Action {
  readonly type = SELECT_NOTE_TO_CREATE;
  constructor() {}
}


/* Select note to display */
export const SELECT_NOTE_TO_DISPLAY = '[Notes] Select note to display';

export class SelectNoteToDisplay implements Action {
  readonly type = SELECT_NOTE_TO_DISPLAY;
  constructor(public payload: string) {}
}


/* Create note */
export const CREATE_NOTE = '[Notes] Create Note';
export const CREATE_NOTE_FAIL =  '[Notes] Create Note Fail';
export const CREATE_NOTE_SUCCESS =  '[Notes] Create Note Succes';

export class CreateNote implements Action {
  readonly type = CREATE_NOTE;
  constructor(public payload: Note) {}
}

export class CreateNoteFail implements Action {
  readonly type = CREATE_NOTE_FAIL;
  constructor(public payload: any) {}
}

export class CreateNoteSuccess implements Action {
  readonly type = CREATE_NOTE_SUCCESS;
  constructor(public payload: Note) {}
}


/* Update note */
export const UPDATE_NOTE =  '[Notes] update Note';
export const UPDATE_NOTE_FAIL =  '[Notes] update Note Fail';
export const UPDATE_NOTE_SUCCESS =  '[Notes] update Note Succes';

export class UpdateNote implements Action {
  readonly type = UPDATE_NOTE;
  constructor(public payload: {patch: NotePatchInfo, note: Note}) {}
}

export class UpdateNoteFail implements Action {
  readonly type = UPDATE_NOTE_FAIL;
  constructor(public payload: any) {}
}

export class UpdateNoteSuccess implements Action {
  readonly type = UPDATE_NOTE_SUCCESS;
  constructor(public payload: Note) {}
}


/* Remove note */
export const REMOVE_NOTE_CONFIRMATION =  '[Notes] remove Note Confirmation';
export const REMOVE_NOTE =  '[Notes] remove Note';
export const REMOVE_NOTE_FAIL =  '[Notes] remove Note Fail';
export const REMOVE_NOTE_SUCCESS =  '[Notes] remove Note Succes';

export class RemoveNoteConfirmation implements Action {
  readonly type = REMOVE_NOTE_CONFIRMATION;
  constructor(public payload: string) {}
}

export class RemoveNote implements Action {
  readonly type = REMOVE_NOTE;
  constructor(public payload: string) {}
}

export class RemoveNoteFail implements Action {
  readonly type = REMOVE_NOTE_FAIL;
  constructor(public payload: any) {}
}

export class RemoveNoteSuccess implements Action {
  readonly type = REMOVE_NOTE_SUCCESS;
  constructor(public payload: string) {}
}


/* Clear notes after on logout */
export const CLEAR_NOTES =  '[Notes] Clear notes';

export class ClearNotes implements Action {
  readonly type = CLEAR_NOTES;
  constructor(public payload?: string) {}
}


/* Filter Notes */
export const FILTER_BY_TITLE =  '[Notes] Filter Notes by title';
export const FILTER_SUCCESS =  '[Notes] Filter Succes';

export class FilterByTitle implements Action {
  readonly type = FILTER_BY_TITLE;
  constructor(public payload: string) {}
}

export class FilterSuccess implements Action {
  readonly type = FILTER_SUCCESS;
  constructor(public payload: any) {}
}


// action types
export type NotesListAction =
  | LoadNotes
  | LoadNotesFail
  | LoadNotesSuccess
  | SelectNoteToCreate
  | SelectNoteToDisplay
  | CreateNote
  | CreateNoteFail
  | CreateNoteSuccess
  | UpdateNote
  | UpdateNoteFail
  | UpdateNoteSuccess
  | RemoveNoteConfirmation
  | RemoveNote
  | RemoveNoteFail
  | RemoveNoteSuccess
  | ClearNotes
  | FilterByTitle
  | FilterSuccess;
