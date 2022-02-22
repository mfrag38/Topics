import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { logout } from '../redux/actions/authActions';
import AddPostScreen from '../screens/AddPostScreen';
import AuthScreen from '../screens/AuthScreen';
import HomeScreen from '../screens/HomeScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';

const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
	const AuthState = useSelector((state) => state.Auth);

	const dispatch = useDispatch();

	return (
		<NavigationContainer>
			<MainStack.Navigator>
				{AuthState.isAuthenticated == null ||
				AuthState.isAuthenticated === false ? (
					<MainStack.Screen
						name='Auth'
						component={AuthScreen}
						options={{
							headerShown: false,
						}}
					/>
				) : (
					<>
						<MainStack.Screen
							name='Home'
							component={HomeScreen}
							options={{
								headerTitle: 'Topics',
								headerRight: () => (
									<Pressable
										onPress={() => dispatch(logout())}
									>
										<Icon
											name='logout'
											color='#000'
											size={24}
										/>
									</Pressable>
								),
							}}
						/>
						<MainStack.Screen
							name='PostDetails'
							component={PostDetailsScreen}
							options={({ route }) => ({
								title: route.params.post.title,
							})}
						/>
						<MainStack.Screen
							name='AddPost'
							component={AddPostScreen}
							options={{
								headerTitle: 'Create Post',
							}}
						/>
					</>
				)}
			</MainStack.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigator;
