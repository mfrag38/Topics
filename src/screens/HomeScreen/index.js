import React, { useEffect } from 'react';
import {
	ActivityIndicator,
	View,
	Text,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getPosts, getMorePosts } from '../../redux/actions/postsActions';
import { styles } from './style';

const HomeScreen = (props) => {
	const AuthState = useSelector((state) => state.Auth);
	const PostsState = useSelector((state) => state.Posts);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	const loadMorePosts = () => {
		if (PostsState.maxPostsPages >= PostsState.currentPostsPage) {
			dispatch(getMorePosts(PostsState.currentPostsPage));
		}
	};

	const {
		container,
		listContainer,
		listContentContainer,
		addPostFAB,
		postContainer,
		postTitleContainer,
		postTitleText,
		postBodyContainer,
		postBodyText,
	} = styles;

	const RenderPosts = ({ post }) => {
		return (
			<TouchableOpacity
				activeOpacity={0.9}
				onPress={() => {
					props.navigation.navigate('PostDetails', {
						post: post,
					});
				}}
			>
				<View style={postContainer}>
					<View style={postTitleContainer}>
						<Text numberOfLines={1} style={postTitleText}>
							{post.title}
						</Text>
					</View>
					<View style={postBodyContainer}>
						<Text numberOfLines={3} style={postBodyText}>
							{post.body}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	return PostsState.isHomeLoading ? (
		<View style={container}>
			<ActivityIndicator color='#000' size={75} />
		</View>
	) : (
		<View style={container}>
			<View style={listContainer}>
				<FlatList
					keyExtractor={(post, index) => `${index}-${post.title}`}
					data={PostsState.posts}
					renderItem={({ item }) => <RenderPosts post={item} />}
					contentContainerStyle={listContentContainer}
					onEndReachedThreshold={0.6}
					onEndReached={loadMorePosts}
				/>
			</View>
			<TouchableOpacity
				style={addPostFAB}
				onPress={() => {
					props.navigation.navigate('AddPost', {
						userId: AuthState.user.id,
					});
				}}
			>
				<Icon name='plus' color='#fff' size={24} />
			</TouchableOpacity>
		</View>
	);
};

export default HomeScreen;
