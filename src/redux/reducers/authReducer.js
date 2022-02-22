import { SET_IS_AUTH_LOADING, IS_AUTHENTICATED, LOGIN_USER } from '../types';

const initState = {
	isAuthLoading: false,
	isAuthenticated: false,
	user: {},
};

export default (state = initState, action) => {
	switch (action.type) {
		case SET_IS_AUTH_LOADING:
			return {
				...state,
				isAuthLoading: action.payload,
			};
		case IS_AUTHENTICATED:
			return { ...state, isAuthenticated: action.payload };
		case LOGIN_USER:
			return { ...state, user: action.payload };
		default:
			return state;
	}
};
