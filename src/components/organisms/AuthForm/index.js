import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import GenderRadioGroup from '../GenderRadioGroup';
import { authUser } from '../../../redux/actions/authActions';
import { styles } from './style';

const AuthForm = () => {
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [selectedGender, setSelectedGender] = useState('');

	const dispatch = useDispatch();

	const onGenderPress = (gender) => {
		setSelectedGender(gender);
	};

	const login = () => {
		if (
			userName.length === 0 &&
			userEmail.length === 0 &&
			selectedGender.length === 0
		) {
			Alert.alert('Error', 'Please Enter Some Info');
		} else if (
			userName.length === 0 &&
			(userEmail.length !== 0 || selectedGender.length !== 0)
		) {
			Alert.alert('Error', 'Please Enter Name');
		} else if (
			userEmail.length === 0 &&
			(userName.length !== 0 || selectedGender.length !== 0)
		) {
			Alert.alert('Error', 'Please Enter Email');
		} else if (
			selectedGender.length === 0 &&
			(userName.length !== 0 || userEmail.length !== 0)
		) {
			Alert.alert('Error', 'Please Select Gender');
		} else {
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
							multiline={false}
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
							multiline={false}
							placeholder='Email'
							keyboardType='email-address'
						/>
					</View>
				</View>
				<View style={radioGroupContainer}>
					<GenderRadioGroup
						onGenderPress={(gender) => onGenderPress(gender)}
						title='Select Gender'
						radioColor='#000'
						textColor='#000'
					/>
				</View>
			</View>
			<View style={submitButtonContainer}>
				<Button title='Login' color='#000' onPress={login} />
			</View>
		</View>
	);
};

export default AuthForm;
