import React, { useEffect, useState } from 'react';
import {
	ActivityIndicator,
	View,
	Text,
	Button,
	FlatList,
	Pressable,
	TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Reactotron from 'reactotron-react-native';
import { logout } from '../../redux/actions/authActions';
import { getPosts, getMorePosts } from '../../redux/actions/postsActions';
import { styles } from './style';

const HomeScreen = (props) => {
	const State = useSelector((state) => state);
	const UserState = useSelector((state) => state.User);
	const PostsState = useSelector((state) => state.Posts);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	useEffect(() => {
		Reactotron.log('The Posts:', PostsState.posts);
	}, [PostsState.posts]);

	const loadMoreData = () => {
		console.log('End Reached');
		dispatch(getMorePosts(PostsState.currentPage));
	};

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
				<View
					style={{
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						marginHorizontal: 8,
						marginVertical: 8,
						borderRadius: 8,
						elevation: 3,
						overflow: 'hidden',
						backgroundColor: '#DCDCDC',
					}}
				>
					<View
						style={{
							width: '100%',
							justifyContent: 'center',
							alignItems: 'flex-start',
							padding: 8,
						}}
					>
						<Text
							numberOfLines={1}
							style={{
								fontSize: 20,
								fontWeight: 'bold',
								color: '#000',
							}}
						>
							{post.title}
						</Text>
					</View>
					<View
						style={{
							width: '100%',
							justifyContent: 'center',
							alignItems: 'flex-start',
							padding: 8,
						}}
					>
						<Text
							numberOfLines={3}
							style={{
								fontSize: 16,
								color: '#000',
							}}
						>
							{post.body}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	const { container } = styles;

	return PostsState.isHomeLoading ? (
		<View style={container}>
			<ActivityIndicator size={75} />
		</View>
	) : (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<View
				style={{
					width: '100%',
					flexGrow: 1,
				}}
			>
				<FlatList
					keyExtractor={(post, index) => `${index}-${post.title}`}
					data={PostsState.posts}
					pagingEnabled={true}
					renderItem={({ item }) => <RenderPosts post={item} />}
					contentContainerStyle={{
						flexGrow: 1,
						backgroundColor: '#fff',
					}}
					onEndReachedThreshold={0.6}
					onEndReached={loadMoreData}
				/>
			</View>
			<TouchableOpacity
				style={{
					width: 60,
					height: 60,
					position: 'absolute',
					justifyContent: 'center',
					alignItems: 'center',
					borderRadius: 30,
					right: 16,
					bottom: 16,
					backgroundColor: '#000',
				}}
				onPress={() => console.log('FAB')}
			>
				<Icon name='plus' color='#fff' size={24} />
			</TouchableOpacity>
		</View>
	);
};

export default HomeScreen;
