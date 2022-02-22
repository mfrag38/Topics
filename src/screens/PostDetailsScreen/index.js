import React, { useEffect, useState } from 'react';
import {
	ActivityIndicator,
	View,
	Text,
	FlatList,
	TouchableWithoutFeedback,
	Keyboard,
	TextInput,
	Button,
	Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
	getPostComments,
	commentOnPost,
	getMorePostComments,
} from '../../redux/actions/postsActions';
import { styles } from './style';

const PostDetails = (props) => {
	const { post } = props.route.params;
	const AuthState = useSelector((state) => state.Auth);
	const PostsState = useSelector((state) => state.Posts);

	const [comment, setComment] = useState('');

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPostComments(post.id));
	}, []);

	const loadMoreComments = () => {
		if (PostsState.maxCommentsPages >= PostsState.currentCommentsPage) {
			dispatch(
				getMorePostComments(post.id, PostsState.currentCommentsPage),
			);
		}
	};

	const postComment = () => {
		if (comment.length === 0) {
			Alert.alert('Error', 'Please Type Some Comment.');
		} else {
			dispatch(
				commentOnPost(post.id, {
					name: AuthState.user.name,
					email: AuthState.user.email,
					body: comment,
				}),
			);
			setComment('');
		}
	};

	const {
		container,
		postInfoContainer,
		postTitleContainer,
		postTitleText,
		spacer,
		postBodyContainer,
		postBodyText,
		separator,
		listOuterContainer,
		listInnerContainer,
		listContentContainer,
		listStyle,
		commentAreaContainer,
		commentTextInputContainer,
		commentTextInput,
		commentButtonContainer,
		commentCardContainer,
		commentUserInfoContainer,
		commentUserNameText,
		commentUserEmailText,
		commentBodyContainer,
		commentBodyText,
	} = styles;

	const RenderPostComments = ({ comment }) => {
		return (
			<View style={commentCardContainer}>
				<View style={commentUserInfoContainer}>
					<Text numberOfLines={1} style={commentUserNameText}>
						{comment.name}
					</Text>
					<Text numberOfLines={1} style={commentUserEmailText}>
						{comment.email}
					</Text>
				</View>
				<View style={separator} />
				<View style={commentBodyContainer}>
					<Text numberOfLines={3} style={commentBodyText}>
						{comment.body}
					</Text>
				</View>
			</View>
		);
	};

	const emptyListComponent = () => {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: 8,
				}}
			>
				<Text
					style={{
						fontSize: 18,
						color: '#000',
					}}
				>
					This post has no comments, Add some!
				</Text>
			</View>
		);
	};

	return PostsState.isPostDetailsLoading ? (
		<View style={container}>
			<ActivityIndicator color='#000' size={75} />
		</View>
	) : (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={container}>
				<View style={postInfoContainer}>
					<View style={postTitleContainer}>
						<Text style={postTitleText}>{post.title}</Text>
					</View>
					<View style={spacer} />
					<View style={postBodyContainer}>
						<Text style={postBodyText}>{post.body}</Text>
					</View>
				</View>
				<View style={separator} />
				<View style={listOuterContainer}>
					<View style={listInnerContainer}>
						<FlatList
							keyExtractor={(comment, index) =>
								`${index}-${comment.title}`
							}
							data={PostsState.postComments}
							renderItem={({ item }) => (
								<RenderPostComments comment={item} />
							)}
							ListEmptyComponent={emptyListComponent}
							contentContainerStyle={listContentContainer}
							style={listStyle}
							onEndReachedThreshold={0.6}
							onEndReached={loadMoreComments}
						/>
					</View>
				</View>
				<View style={commentAreaContainer}>
					<View style={commentTextInputContainer}>
						<TextInput
							style={commentTextInput}
							onChangeText={(text) => setComment(text)}
							value={comment}
							multiline={true}
							placeholder='Description'
							keyboardType='default'
							autoCapitalize='words'
						/>
					</View>
					<View style={commentButtonContainer}>
						<Button
							title='POST COMMENT'
							color='#000'
							onPress={postComment}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default PostDetails;
