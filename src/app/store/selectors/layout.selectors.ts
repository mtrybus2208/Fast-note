import { createSelector } from '@ngrx/store';
import * as fromLayout from './../reducers';

// notes sidebar
export const getNotesSidebarState = createSelector(fromLayout.getLayoutState, layout => layout.notesSidebarOpened);

// modal name
export const getOpenedModalName = createSelector(fromLayout.getLayoutState, layout => layout.openedModalName);

// window size
export const getWindowWidth = createSelector(fromLayout.getLayoutState, layout => layout.windowWidth);
export const getWindowHeight = createSelector(fromLayout.getLayoutState, layout => layout.windowHeight);
