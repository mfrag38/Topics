import React, { useState } from 'react';
import {
	ActivityIndicator,
	View,
	Text,
	TextInput,
	Button,
	Alert,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../redux/actions/postsActions';
import { styles } from './style';

const AddPostScreen = (props) => {
	const PostsState = useSelector((state) => state.Posts);
	const [postTitle, setPostTitle] = useState('');
	const [postBody, setPostBody] = useState('');

	const dispatch = useDispatch();

	const postHandler = () => {
		if (postTitle.length === 0 && postBody.length === 0) {
			Alert.alert('Error', 'Please Type Some Post Information.');
		} else if (postTitle.length === 0) {
			Alert.alert('Error', 'Please Type Post Title.');
		} else if (postBody.length === 0) {
			Alert.alert('Error', 'Please Type Post Description.');
		} else {
			dispatch(
				addPost(
					props.route.params.userId,
					{
						title: postTitle,
						body: postBody,
					},
					props.navigation,
				),
			);
			setPostTitle('');
			setPostBody('');
		}
	};

	const {
		container,
		titleContainer,
		titleText,
		formInputsContainer,
		textInputContainer,
		textInputStyle,
		buttonContainer,
	} = styles;

	return PostsState.isAddPostLoading ? (
		<View style={container}>
			<ActivityIndicator color='#000' size={75} />
		</View>
	) : (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={container}>
				<View style={titleContainer}>
					<Text style={titleText}>What is on your mind?!</Text>
				</View>
				<View style={formInputsContainer}>
					<View style={textInputContainer}>
						<TextInput
							style={textInputStyle}
							onChangeText={(text) => setPostTitle(text)}
							value={postTitle}
							multiline={true}
							placeholder='Title'
							keyboardType='default'
							autoCapitalize='words'
						/>
					</View>
					<View style={[textInputContainer, { height: 300 }]}>
						<TextInput
							style={[
								textInputStyle,
								{
									flex: 1,
									textAlignVertical: 'top',
								},
							]}
							onChangeText={(text) => setPostBody(text)}
							value={postBody}
							multiline={true}
							placeholder='Description'
							keyboardType='default'
							autoCapitalize='words'
						/>
					</View>
				</View>
				<View style={buttonContainer}>
					<Button title='POST' onPress={postHandler} color='#000' />
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default AddPostScreen;
