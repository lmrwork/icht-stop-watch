import { initialState } from '../initialState/react-stop-watch';

export const reactStopWatch = (state = initialState, action) => {
  switch (action.type) {

	case 'GO_HOME':
		action.history.push('/');
		return {...state, lastAction: 'GO_HOME'};

	case 'GO_SETTING':
		action.history.push('/setting');
		return {...state, lastAction: 'GO_SETTING'};

	case 'SAVE_WATCH_STATE':
		return {...state, watchState: action.watchState};

	default:
		return state;
  }
};
