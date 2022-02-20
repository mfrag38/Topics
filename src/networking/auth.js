import { post } from './axios';

export const authUserReq = (params, options) => {
	console.log('Firing Request...');
	post('users', params, options);
};
