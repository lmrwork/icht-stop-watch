import { initialState } from '../initialState/react-stop-watch';

export const reactStopWatch = (state = initialState, action) => {
  switch (action.type) {

	case 'GO_HOME':
		action.history.push('/');
		return {...state, lastAction: 'goHome'};

	default:
		return state;
  }
};
