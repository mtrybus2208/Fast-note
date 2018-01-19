import * as fromLayout from './../actions/layout.actions';

export interface LayoutState {
  notesSidebarOpened: boolean;
  openedModalName: string;
  windowHeight: number;
  windowWidth: number;
/* The description of the different parts of the layout go here */
}

export const initialState: LayoutState = {
  notesSidebarOpened: true,
  openedModalName: null,
  windowHeight: window.screen.height,
  windowWidth: window.screen.width
/* The initial values of the layout state will be initialized here */
};


export function reducer(state = initialState, action: fromLayout.LayoutActions): LayoutState {
  switch (action.type) {
    case fromLayout.OPEN_NOTES_SIDEBAR: {
      return {
        ...state,
        notesSidebarOpened: true,
      };
    }

    case fromLayout.CLOSE_NOTES_SIDEBAR: {
      return {
        ...state,
        notesSidebarOpened: false,
      };
    }

    case fromLayout.OPEN_MODAL: {
      const name = action.payload;
      return {
        ...state,
        openedModalName: name,
      };
    }

    case fromLayout.CLOSE_MODAL: {
      return {
        ...state,
        openedModalName: null,
      };
    }

    case fromLayout.RESIZE_WINDOW: {
      const height: number = action.payload['height'];
      const width: number = action.payload['width'];
      return {
        ...state,
        windowHeight: height,
        windowWidth: width,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
}

// Selectors for notes sidebar
export const getNotesSidebarState = (state: LayoutState) => state.notesSidebarOpened;

// Selectors for modal name
export const getOpenedModalName = (state: LayoutState) => state.openedModalName;

