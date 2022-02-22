import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import MainNavigator from './navigation/MainNavigator';

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<MainNavigator />
			</PersistGate>
		</Provider>
	);
};

export default App;
