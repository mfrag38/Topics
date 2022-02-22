import { Alert } from 'react-native';
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
import {
	getPostsReq,
	getPostCommentsReq,
	addPostReq,
	commentOnPostReq,
} from '../../api/posts';

export const getPosts = () => {
	return (dispatch) => {
		dispatch({ type: SET_IS_HOME_LOADING, payload: true });
		getPostsReq(1, {
			success: (res, maxPages) => {
				dispatch({
					type: GET_POSTS,
					payload: res,
				});
				dispatch({ type: SET_POSTS_CURRENT_PAGE, payload: 2 });
				dispatch({ type: SET_POSTS_MAX_PAGES, payload: maxPages });
				dispatch({ type: SET_IS_HOME_LOADING, payload: false });
			},
			error: (error) => {
				dispatch({ type: SET_IS_HOME_LOADING, payload: false });
				Alert.alert('Error', 'Some Error Occurred');
			},
		});
	};
};

export const getMorePosts = (page) => {
	return (dispatch) => {
		getPostsReq(page, {
			success: (res) => {
				dispatch({
					type: GET_MORE_POSTS,
					payload: res,
				});
				dispatch({ type: SET_POSTS_CURRENT_PAGE, payload: page + 1 });
			},
			error: (error) => {
				Alert.alert('Error', 'Some Error Occurred');
			},
		});
	};
};

export const getPostComments = (postId) => {
	return (dispatch) => {
		dispatch({ type: SET_IS_POST_DETAILS_LOADING, payload: true });
		getPostCommentsReq(postId, 1, {
			success: (res, maxPages) => {
				dispatch({ type: GET_POST_COMMENTS, payload: res });
				dispatch({ type: SET_POST_COMMENTS_CURRENT_PAGE, payload: 2 });
				dispatch({
					type: SET_POST_COMMENTS_MAX_PAGES,
					payload: maxPages,
				});
				dispatch({ type: SET_IS_POST_DETAILS_LOADING, payload: false });
			},
			error: (error) => {
				dispatch({ type: SET_IS_POST_DETAILS_LOADING, payload: false });
				Alert.alert('Error', 'Some Error Occurred');
			},
		});
	};
};

export const setCurrentPostsPage = (currentPostsPage) => {
	return {
		type: SET_POSTS_CURRENT_PAGE,
		payload: currentPostsPage,
	};
};

export const addPost = (userId, post, navigation) => {
	return (dispatch) => {
		dispatch({ type: SET_IS_ADD_POST_LOADING, payload: true });
		addPostReq(userId, post, {
			success: (res) => {
				dispatch(getPosts());
				dispatch({
					type: SET_IS_ADD_POST_LOADING,
					payload: false,
				});
				navigation.goBack();
			},
			error: (error) => {
				dispatch({
					type: SET_IS_ADD_POST_LOADING,
					payload: false,
				});
				Alert.alert('Error', 'Some Error Occurred');
			},
		});
	};
};

export const commentOnPost = (postId, comment) => {
	return (dispatch) => {
		dispatch({ type: SET_IS_POST_DETAILS_LOADING, payload: true });
		commentOnPostReq(postId, comment, {
			success: (res) => {
				dispatch(getPostComments(postId));
				dispatch({ type: SET_IS_POST_DETAILS_LOADING, payload: false });
			},
			error: (error) => {
				dispatch({ type: SET_IS_POST_DETAILS_LOADING, payload: false });
				Alert.alert('Error', 'Some Error Occurred');
			},
		});
	};
};

export const setCurrentCommentsPage = (currentCommentsPage) => {
	return {
		typ: SET_POST_COMMENTS_CURRENT_PAGE,
		payload: currentCommentsPage,
	};
};

export const getMorePostComments = (postId, page) => {
	return (dispatch) => {
		getPostCommentsReq(postId, page, {
			success: (res) => {
				dispatch({
					type: GET_MORE_POST_COMMENTS,
					payload: res,
				});
				dispatch({
					type: SET_POST_COMMENTS_CURRENT_PAGE,
					payload: page + 1,
				});
			},
			error: (error) => {
				Alert.alert('Error', 'Some Error Occurred');
			},
		});
	};
};
