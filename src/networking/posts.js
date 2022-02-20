import { get, post, del } from './axios';

export const getPostsReq = (page, options) => {
	get(`posts?page=${page}`, options);
};

export const getUserPostsReq = (userId, options) => {
	get(`${userId}/posts`, options);
};

export const addPostReq = (userId, postDetails, options) => {
	post(`${userId}/posts`, postDetails, options);
};

export const deletePostReq = (postId, options) => {
	del('posts', postId, options);
};

export const getPostCommentsReq = (postId, options) => {
	get(`posts/${postId}/comments`, options);
};
