import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	listContainer: {
		width: '100%',
		flexGrow: 1,
	},
	listContentContainer: {
		flexGrow: 1,
		backgroundColor: '#fff',
	},
	addPostFAB: {
		width: 60,
		height: 60,
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30,
		right: 16,
		bottom: 16,
		backgroundColor: '#000',
	},
	postContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 8,
		marginVertical: 8,
		borderRadius: 8,
		elevation: 3,
		overflow: 'hidden',
		backgroundColor: '#DCDCDC',
	},
	postTitleContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'flex-start',
		padding: 8,
	},
	postTitleText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#000',
	},
	postBodyContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'flex-start',
		padding: 8,
	},
	postBodyText: {
		fontSize: 16,
		color: '#000',
	},
});
