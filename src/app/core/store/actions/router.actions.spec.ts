import * as fromRouterActions from './router.actions';

describe('Router Actions', () => {

  describe('Go', () => {
    it('should create an action', () => {
      const payload = {
        path: [],
        query: {},
      };
      const action = new fromRouterActions.Go(payload);

      expect({ ...action }).toEqual({
        type: fromRouterActions.GO,
        payload,
      });
    });
  });

  describe('Back', () => {
    it('should create an action', () => {
      const action = new fromRouterActions.Back();

      expect({ ...action }).toEqual({
        type: fromRouterActions.BACK,
      });
    });
  });

  describe('Forward', () => {
    it('should create an action', () => {
      const action = new fromRouterActions.Forward();

      expect({ ...action }).toEqual({
        type: fromRouterActions.FORWARD,
      });
    });
  });

});
