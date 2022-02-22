import {
	SET_IS_HOME_LOADING,
	SET_IS_POST_DETAILS_LOADING,
	SET_IS_ADD_POST_LOADING,
	GET_POSTS,
	GET_MORE_POSTS,
	GET_POST_COMMENTS,
	GET_MORE_POST_COMMENTS,
	SET_POSTS_CURRENT_PAGE,
	SET_POST_COMMENTS_CURRENT_PAGE,
	SET_POSTS_MAX_PAGES,
	SET_POST_COMMENTS_MAX_PAGES,
} from '../types';

const initState = {
	isHomeLoading: true,
	isPostDetailsLoading: true,
	isAddPostLoading: false,
	posts: [],
	postComments: [],
	currentPostsPage: 1,
	currentCommentsPage: 1,
	maxPostsPages: 0,
	maxCommentsPages: 0,
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
		case SET_IS_ADD_POST_LOADING:
			return {
				...state,
				isAddPostLoading: action.payload,
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
		case GET_MORE_POST_COMMENTS:
			return {
				...state,
				postComments: [...state.postComments, ...action.payload],
			};
		case SET_POSTS_CURRENT_PAGE:
			return {
				...state,
				currentPostsPage: action.payload,
			};
		case SET_POST_COMMENTS_CURRENT_PAGE:
			return {
				...state,
				currentCommentsPage: action.payload,
			};
		case SET_POSTS_MAX_PAGES:
			return {
				...state,
				maxPostsPages: action.payload,
			};
		case SET_POST_COMMENTS_MAX_PAGES:
			return {
				...state,
				maxCommentsPages: action.payload,
			};
		default:
			return state;
	}
};
