import { SET_POSTS_IS_LOADING, IS_AUTHENTICATED, LOGIN_USER } from '../types';
import { authUserReq } from '../../networking/auth';

export const authUser = (name, email, gender, navigation) => {
	return (dispatch) => {
		authUserReq(
			{
				name: name,
				email: email,
				gender: gender,
				status: 'active',
			},
			{
				success: (res) => {
					console.log('The Response:', res);
					dispatch({ type: LOGIN_USER, payload: res });
					dispatch({ type: IS_AUTHENTICATED, payload: true });
					navigation;
				},
				error: (err) => {
					console.log('The Error:', err);
				},
			},
		);
	};
};

export const logout = () => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER, payload: null });
		dispatch({ type: IS_AUTHENTICATED, payload: false });
	};
};
