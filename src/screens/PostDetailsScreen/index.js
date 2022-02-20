import React, { useEffect } from 'react';
import {
	ActivityIndicator,
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Reactotron from 'reactotron-react-native';
import { getPostComments } from '../../redux/actions/postsActions';
import { styles } from './style';

const PostDetails = (props) => {
	const { post } = props.route.params;
	const PostsState = useSelector((state) => state.Posts);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPostComments(post.id));
	}, []);

	const RenderPostComments = ({ comment }) => {
		Reactotron.log('Comment:', comment);
		return (
			<TouchableOpacity
				activeOpacity={0.9}
				/* onPress={() => {
					props.navigation.navigate('PostDetails', {
						post: post,
					});
				}} */
			>
				<View
					style={{
						flex: 1,
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
							{comment.name}
						</Text>
						<Text
							numberOfLines={1}
							style={{
								fontSize: 16,
								color: '#000',
							}}
						>
							{comment.email}
						</Text>
					</View>
					<View
						style={{
							width: '100%',
							height: 1,
							backgroundColor: '#000',
						}}
					/>
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
							{comment.body}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	const { container } = styles;

	return PostsState.isPostDetailsLoading ? (
		<View style={container}>
			<ActivityIndicator size={75} />
		</View>
	) : (
		<View style={container}>
			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					margin: 8,
				}}
			>
				<Text
					style={{
						fontSize: 20,
						fontWeight: 'bold',
						color: '#000',
					}}
				>
					{post.title}
				</Text>
				<View style={{ height: 8 }} />
				<Text
					style={{
						fontSize: 18,
						color: '#000',
					}}
				>
					{post.body}
				</Text>
			</View>
			<View
				style={{ width: '100%', height: 1, backgroundColor: '#000' }}
			/>
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
						keyExtractor={(comment, index) =>
							`${index}-${comment.title}`
						}
						data={PostsState.postComments}
						renderItem={({ item }) => (
							<RenderPostComments comment={item} />
						)}
						contentContainerStyle={{
							flexGrow: 1,
							backgroundColor: '#fff',
						}}
						style={{
							width: Dimensions.get('screen').width + 5,
							height: '100%',
							paddingHorizontal: 8,
						}}
					/>
				</View>
			</View>
		</View>
	);
};

export default PostDetails;
