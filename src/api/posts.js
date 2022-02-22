import { get, post, del } from './axios';

export const getPostsReq = (page, options) => {
	get(`posts?page=${page}`, options);
};

export const addPostReq = (userId, postDetails, options) => {
	post(`users/${userId}/posts`, postDetails, options);
};

export const deletePostReq = (postId, options) => {
	del('posts', postId, options);
};

export const getPostCommentsReq = (postId, page, options) => {
	get(`posts/${postId}/comments?page=${page}`, options);
};

export const commentOnPostReq = (postId, comment, options) => {
	post(`posts/${postId}/comments`, comment, options);
};
