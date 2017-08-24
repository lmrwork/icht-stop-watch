import { initialState } from '../initialState/react-stop-watch';

export const reactStopWatch = (state = initialState, action) => {
  switch (action.type) {

	case 'GO_HOME':
		action.history.push('/');
		return {...state, lastAction: 'GO_HOME'};
		
	case 'GO_LOG':
		action.history.push('/log');
		return {...state, lastAction: 'GO_LOG'};

	default:
		return state;
  }
};
