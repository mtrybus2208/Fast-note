import * as fromNotesList from './../actions/notes-list.actions';
import { Note } from './../../../shared/models/note.model';

export interface NotesListState {
  entities: { [_id: string]: Note };
  displayedEntities: { [_id: string]: Note };
  loaded: boolean;
  loading: boolean;
  count: number;
}

export const initialState: NotesListState = {
  entities: {},
  displayedEntities: {}, 
  loaded: false,
  loading: false,
  count: null,
};

export function reducer(state = initialState, action: fromNotesList.NotesListAction): NotesListState {
  switch (action.type) {
    case fromNotesList.UPDATE_NOTE: {
      const note = action.payload.note;
      const entities = {
        ...state.entities,
        [note._id]: note,
      };
      return {
        ...state,
        loading: true,
        entities,
      };
    }
    case fromNotesList.REMOVE_NOTE:
    case fromNotesList.CREATE_NOTE:
    case fromNotesList.LOAD_NOTES: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromNotesList.LOAD_NOTES_SUCCESS: {
      const notes = action.payload;
      const count = action.payload.length;
      const entities = notes.reduce((entities: { [key: string]: Note }, note: Note) => {
        return {
          ...entities,
          [note._id]: note,
        };
      }, {...state.entities});

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
        displayedEntities: entities,
        count,
      };
    }
    case fromNotesList.FILTER_SUCCESS: {
      const notes = action.payload;
      const entities = notes.reduce((displayedEntities: { [key: string]: Note }, note: Note) => {
        return {
          ...displayedEntities,
          [note._id]: note,
        };
      }, {});
      return {
        ...state,
        loading: false,
        displayedEntities: entities,
      };
    }
    case fromNotesList.CREATE_NOTE_SUCCESS: {
      const note = action.payload;
      const count = Object.keys(state.entities).length + 1;
      const entities = {
        ...state.entities,
        [note._id]: note,
      };
      return {
        ...state,
        entities,
        displayedEntities: entities,
        loading: false,
        loaded: true,
        count,
      };
    }
    case fromNotesList.CREATE_NOTE_FAIL:
    case fromNotesList.LOAD_NOTES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
    case fromNotesList.UPDATE_NOTE_SUCCESS: {
      const note = action.payload;
      const entities = {
        ...state.entities,
        [note._id]: note,
      };
      return {
        ...state,
        entities,
        displayedEntities: entities,
        loading: false,
        loaded: true,
      };
    }
    case fromNotesList.REMOVE_NOTE_SUCCESS: {
      const id = action.payload;
      const { [id]: removed, ...entities } = state.entities;
      const count = Object.keys(state.entities).length - 1;

      return {
        ...state,
        entities,
        displayedEntities: entities,
        loading: false,
        count,
      };
    }
    case fromNotesList.CLEAR_NOTES: {
      return {
        ...state,
        displayedEntities: {},
        entities: {},
        loading: false,
        loaded: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}

// Selectors
export const getNotesListEntities = (state: NotesListState) => state.entities;
export const getDisplayedEntities = (state: NotesListState) => state.displayedEntities;
export const getNotesListLoading = (state: NotesListState) => state.loading;
export const getNotesListLoaded = (state: NotesListState) => state.loaded;
