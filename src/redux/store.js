import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

// import rootReducer from './reducers';
import authReducer from './reducers/authReducer';
import postsReducer from './reducers/postsReducer';

import Reactotron from '../ReactotronConfig';

const rootPersistConfig = {
	key: 'root',
	storage: AsyncStorage,
	// whitelist: ['user'],
};

const authPersistConfig = {
	key: 'auth',
	storage: AsyncStorage,
	// whitelist: ['user'],
};

const postsPersistConfig = {
	key: 'posts',
	storage: AsyncStorage,
	// whitelist: ['user'],
};

const rootReducer = combineReducers({
	Auth: persistReducer(authPersistConfig, authReducer),
	Posts: persistReducer(postsPersistConfig, postsReducer),
});

// export const store = createStore(rootReducer, applyMiddleware(thunk));
export const store = createStore(
	persistReducer(rootPersistConfig, rootReducer),
	// persistReducer(persistConfig, rootReducer),
	compose(applyMiddleware(thunk), Reactotron.createEnhancer()),
);
export const persistor = persistStore(store);
