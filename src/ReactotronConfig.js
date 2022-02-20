import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
	.configure({
		name: 'React Native Demo',
	})
	.use(reactotronRedux())
	.useReactNative()
	.connect();

/* Reactotron.setAsyncStorageHandler(AsyncStorage)
	.configure()
	.useReactNative()
	.connect(); */

export default reactotron;
