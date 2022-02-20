import React, { useState } from 'react';
import { View, TextInput, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { GenderRadioGroup } from '_organisms';
import { authUser } from '../../../redux/actions/authActions';
import { purgeStoredState } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import { styles } from './style';

const AuthForm = () => {
	const State = useSelector((state) => state);
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [selectedGender, setSelectedGender] = useState('');

	const dispatch = useDispatch();

	const onGenderPress = (gender) => {
		setSelectedGender(gender);
	};

	const login = () => {
		// const persistConfig = {
		// key: 'root',
		// storage: AsyncStorage,
		// };
		// purgeStoredState(persistConfig);
		///////////////////
		// Reactotron.log('The State:', State);
		if (
			userName.length === 0 &&
			userEmail.length === 0 &&
			selectedGender.length === 0
		) {
			console.log('Please Enter Some Info');
		} else if (
			userName.length === 0 &&
			(userEmail.length !== 0 || selectedGender.length !== 0)
		) {
			console.log('Please Enter Name');
		} else if (
			userEmail.length === 0 &&
			(userName.length !== 0 || selectedGender.length !== 0)
		) {
			console.log('Please Enter Email');
		} else if (
			selectedGender.length === 0 &&
			(userName.length !== 0 || userEmail.length !== 0)
		) {
			console.log('Please Select Gender');
		} else {
			console.log('Authenticating...');
			dispatch(authUser(userName, userEmail, selectedGender));
		}
	};

	const {
		container,
		inputsContainer,
		textInputsContainer,
		textInputContainer,
		textInputStyle,
		radioGroupContainer,
		submitButtonContainer,
		submitButton,
		submitButtonText,
	} = styles;

	return (
		<View style={container}>
			<View style={inputsContainer}>
				<View style={textInputsContainer}>
					<View style={textInputContainer}>
						<TextInput
							style={textInputStyle}
							onChangeText={(text) => setUserName(text)}
							value={userName}
							placeholder='Name'
							keyboardType='default'
							autoCapitalize='words'
						/>
					</View>
					<View style={textInputContainer}>
						<TextInput
							style={textInputStyle}
							onChangeText={(text) => setUserEmail(text)}
							value={userEmail}
							placeholder='Email'
							keyboardType='email-address'
						/>
					</View>
				</View>
				<View style={radioGroupContainer}>
					<GenderRadioGroup
						onGenderPress={(gender) => onGenderPress(gender)}
						title='Select Gender'
						radioColor='#393486'
						textColor='#000'
					/>
				</View>
			</View>
			<View style={submitButtonContainer}>
				<Pressable style={submitButton} onPress={login}>
					<Text style={submitButtonText}>Login</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default AuthForm;
