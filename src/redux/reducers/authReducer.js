import { IS_AUTHENTICATED, LOGIN_USER } from '../types';

const initState = {
	isAuthenticated: false,
	user: {},
};

export default (state = initState, action) => {
	switch (action.type) {
		case IS_AUTHENTICATED:
			return { ...state, isAuthenticated: action.payload };
		case LOGIN_USER:
			return { ...state, user: action.payload };
		default:
			return state;
	}
};
