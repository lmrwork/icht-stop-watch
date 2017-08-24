import { initialState } from '../initialState/react-stop-watch';

export const reactStopWatch = (state = initialState, action) => {
  switch (action.type) {

	case 'typeName':
		return { ...state };

	default:
		return state;
  }
};
