import * as fromLayoutActions from './layout.actions';

describe('Layout Actions', () => {

  describe('Sidebar Actions', () => {
    describe('OpenNotesSidebar', () => {
      it('should create an action', () => {
        const action = new fromLayoutActions.OpenNotesSidebar();

        expect({ ...action }).toEqual({
          type: fromLayoutActions.OPEN_NOTES_SIDEBAR,
        });
      });
    });

    describe('CloseNotesSidebar', () => {
      it('should create an action', () => {
        const action = new fromLayoutActions.CloseNotesSidebar();

        expect({ ...action }).toEqual({
          type: fromLayoutActions.CLOSE_NOTES_SIDEBAR,
        });
      });
    });
  });

  describe('Modal Actions', () => {
    describe('OpenModal', () => {
      it('should create an action', () => {
        const payload = 'open';
        const action = new fromLayoutActions.OpenModal(payload);

        expect({ ...action }).toEqual({
          type: fromLayoutActions.OPEN_MODAL,
          payload,
        });
      });
    });

    describe('CloseModal', () => {
      it('should create an action', () => {
        const payload = 'close';
        const action = new fromLayoutActions.CloseModal(payload);

        expect({ ...action }).toEqual({
          type: fromLayoutActions.CLOSE_MODAL,
          payload,
        });
      });
    });
  });

  describe('ResizeWindow', () => {
    it('should create an action', () => {
      const payload = {
        width: '100px',
        height: '100px;'
      };
      const action = new fromLayoutActions.ResizeWindow(payload);

      expect({ ...action }).toEqual({
        type: fromLayoutActions.RESIZE_WINDOW,
        payload,
      });
    });
  });

});
