import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Reactotron from 'reactotron-react-native';
import { AuthScreen, HomeScreen, PostDetailsScreen } from '_screens';

const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
	const AuthState = useSelector((state) => state.Auth);

	Reactotron.log('Auth State From Navigator:', AuthState);

	return (
		<NavigationContainer>
			<MainStack.Navigator>
				{/* <MainStack.Screen name='Splash' component={SplashScreen} /> */}
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
							}}
						/>
						<MainStack.Screen
							name='PostDetails'
							component={PostDetailsScreen}
							options={({ route }) => ({
								title: route.params.post.title,
							})}
						/>
					</>
				)}
			</MainStack.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigator;
