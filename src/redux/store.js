import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import authReducer from './reducers/authReducer';
import postsReducer from './reducers/postsReducer';

const rootPersistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: ['posts'],
};

const authPersistConfig = {
	key: 'auth',
	storage: AsyncStorage,
};

const postsPersistConfig = {
	key: 'posts',
	storage: AsyncStorage,
};

const rootReducer = combineReducers({
	Auth: persistReducer(authPersistConfig, authReducer),
	Posts: persistReducer(postsPersistConfig, postsReducer),
});

export const store = createStore(
	persistReducer(rootPersistConfig, rootReducer),
	applyMiddleware(thunk),
);
export const persistor = persistStore(store);
