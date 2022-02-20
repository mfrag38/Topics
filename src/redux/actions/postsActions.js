import Reactotron from 'reactotron-react-native';
import {
	SET_IS_HOME_LOADING,
	SET_IS_POST_DETAILS_LOADING,
	GET_POSTS,
	GET_MORE_POSTS,
	GET_POST_COMMENTS,
	SET_POSTS_CURRENT_PAGE,
} from '../types';
import { getPostsReq, getPostCommentsReq } from '../../networking/posts';

export const getPosts = () => {
	return (dispatch) => {
		dispatch({ type: SET_IS_HOME_LOADING, payload: true });
		getPostsReq(1, {
			success: (res) => {
				Reactotron.log(res);
				dispatch({
					type: GET_POSTS,
					payload: res,
				});
				dispatch({ type: SET_IS_HOME_LOADING, payload: false });
				dispatch({ type: SET_POSTS_CURRENT_PAGE, payload: 2 });
			},
			error: (error) => {
				Reactotron.error(error);
				dispatch({ type: SET_IS_HOME_LOADING, payload: false });
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
				Reactotron.error(error);
			},
		});
	};
};

export const getPostComments = (postId) => {
	return (dispatch) => {
		dispatch({ type: SET_IS_POST_DETAILS_LOADING, payload: true });
		getPostCommentsReq(postId, {
			success: (res) => {
				Reactotron.log(res);
				dispatch({ type: GET_POST_COMMENTS, payload: res });
				dispatch({ type: SET_IS_POST_DETAILS_LOADING, payload: false });
			},
			error: (error) => {
				Reactotron.error(error);
				dispatch({ type: SET_IS_POST_DETAILS_LOADING, payload: false });
			},
		});
	};
};

export const setCurrentPage = (currentPage) => {
	return {
		type: SET_POSTS_CURRENT_PAGE,
		payload: currentPage,
	};
};
