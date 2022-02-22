import { Alert } from 'react-native';
import { SET_IS_AUTH_LOADING, IS_AUTHENTICATED, LOGIN_USER } from '../types';
import { authUserReq } from '../../api/auth';

export const authUser = (name, email, gender) => {
	return (dispatch) => {
		dispatch({ type: SET_IS_AUTH_LOADING, payload: true });
		authUserReq(
			{
				name: name,
				email: email,
				gender: gender,
				status: 'active',
			},
			{
				success: (res) => {
					dispatch({ type: LOGIN_USER, payload: res });
					dispatch({ type: IS_AUTHENTICATED, payload: true });
					dispatch({ type: SET_IS_AUTH_LOADING, payload: false });
				},
				error: (error) => {
					dispatch({ type: SET_IS_AUTH_LOADING, payload: false });
					Alert.alert('Error', 'Some Error Occurred');
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
