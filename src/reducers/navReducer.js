import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../navigators/AppNavigator';

const firstAction = RootNavigator.router.getActionForPathAndParams('initialStack');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);

const initialNavState = RootNavigator.router.getStateForAction(
  tempNavState
);

const nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    default:
    {
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
    }
  }
  return nextState || state;
}

export default nav;