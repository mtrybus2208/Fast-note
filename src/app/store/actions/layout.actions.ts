import { Action } from '@ngrx/store';

// notes list actions
export const OPEN_NOTES_SIDEBAR = '[Layout] Open Notes Sidebar';
export const CLOSE_NOTES_SIDEBAR = '[Layout] Close Notes Sidebar';

export class OpenNotesSidebar implements Action {
  readonly type = OPEN_NOTES_SIDEBAR;
  constructor() {}
}

export class CloseNotesSidebar implements Action {
  readonly type = CLOSE_NOTES_SIDEBAR;
  constructor() {}
}

// modal actions
export const OPEN_MODAL = '[Layout] Open Modal';
export const CLOSE_MODAL = '[Layout] Close Modal';

export class OpenModal implements Action {
  readonly type = OPEN_MODAL;
  constructor(public payload: string) {}
}

export class CloseModal implements Action {
  readonly type = CLOSE_MODAL;
  constructor(public payload: string) {}
}

// window resize
export const RESIZE_WINDOW = '[Layout] Resize window';

export class ResizeWindow implements Action {
  readonly type = RESIZE_WINDOW;
  constructor(public payload: Object) {}
}

// action types
export type LayoutActions =
  | OpenNotesSidebar
  | CloseNotesSidebar
  | OpenModal
  | CloseModal
  | ResizeWindow;

