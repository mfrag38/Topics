import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { AuthForm, CirclesBackground } from '_organisms';
import { styles } from './style';

const AuthScreen = () => {
	const {
		mainContainer,
		headerContainer,
		headerText,
		authFormContainer,
		spacer,
	} = styles;

	return (
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
	);
};

export default AuthScreen;
