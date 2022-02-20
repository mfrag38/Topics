import {
	SET_IS_HOME_LOADING,
	SET_IS_POST_DETAILS_LOADING,
	GET_POSTS,
	GET_MORE_POSTS,
	GET_POST_COMMENTS,
	SET_POSTS_CURRENT_PAGE,
} from '../types';

const initState = {
	isHomeLoading: true,
	isPostDetailsLoading: true,
	posts: [],
	postComments: [],
	currentPage: 1,
};

export default (state = initState, action) => {
	switch (action.type) {
		case SET_IS_HOME_LOADING:
			return {
				...state,
				isHomeLoading: action.payload,
			};
		case SET_IS_POST_DETAILS_LOADING:
			return {
				...state,
				isPostDetailsLoading: action.payload,
			};
		case GET_POSTS:
			return {
				...state,
				posts: action.payload,
			};
		case GET_MORE_POSTS:
			return {
				...state,
				posts: [...state.posts, ...action.payload],
			};
		case GET_POST_COMMENTS:
			return {
				...state,
				postComments: action.payload,
			};
		case SET_POSTS_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload,
			};
		default:
			return state;
	}
};
