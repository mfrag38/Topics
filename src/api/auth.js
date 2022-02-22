import { post } from './axios';

export const authUserReq = (params, options) => {
	post('users', params, options);
};
