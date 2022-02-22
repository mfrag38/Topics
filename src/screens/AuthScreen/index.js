import React from 'react';
import {
	SafeAreaView,
	ActivityIndicator,
	View,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import { useSelector } from 'react-redux';
import AuthForm from '../../components/organisms/AuthForm';
import CirclesBackground from '../../components/organisms/CirclesBackground';
import { styles } from './style';

const AuthScreen = (props) => {
	const AuthState = useSelector((state) => state.Auth);

	const {
		mainContainer,
		headerContainer,
		headerText,
		authFormContainer,
		spacer,
	} = styles;

	return AuthState.isAuthLoading ? (
		<View style={mainContainer}>
			<ActivityIndicator color='#000' size={75} />
		</View>
	) : (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<SafeAreaView style={mainContainer}>
				<View style={headerContainer}>
					<CirclesBackground />
					<Text style={headerText}>Welcome to Topics!</Text>
				</View>
				<View style={authFormContainer}>
					<AuthForm />
				</View>
				<View style={spacer} />
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
};

export default AuthScreen;
