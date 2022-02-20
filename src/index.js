import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { MainNavigator } from '_navigation';
import Reactotron from 'reactotron-react-native';

const App = () => {
	Reactotron.log('The Store', store);
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<MainNavigator />
			</PersistGate>
		</Provider>
	);
};

// const App = () => <AuthScreen />;

export default App;
