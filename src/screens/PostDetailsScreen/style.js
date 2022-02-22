import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	postInfoContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'flex-start',
		margin: 8,
	},
	postTitleContainer: {
		marginHorizontal: 8,
		marginTop: 8,
	},
	postTitleText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#000',
	},
	spacer: { height: 8 },
	postBodyContainer: {
		marginHorizontal: 8,
		marginBottom: 8,
	},
	postBodyText: {
		fontSize: 18,
		color: '#000',
	},
	separator: {
		width: '95%',
		height: 1,
		backgroundColor: '#808080',
	},
	listOuterContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	listInnerContainer: {
		width: '100%',
		flexGrow: 1,
	},
	listContentContainer: {
		flexGrow: 1,
		backgroundColor: '#fff',
	},
	listStyle: {
		width: Dimensions.get('screen').width + 5,
		flex: 1,
		paddingHorizontal: 8,
	},
	commentAreaContainer: {
		width: '100%',
		justifyContent: 'center',
		marginBottom: 2,
		overflow: 'visible',
	},
	commentTextInputContainer: {
		justifyContent: 'center',
		marginHorizontal: 8,
		borderRadius: 8,
		borderWidth: 2,
		borderColor: '#000',
		marginVertical: 10,
		paddingHorizontal: 4,
		paddingVertical: 2,
		overflow: 'hidden',
	},
	commentTextInput: {
		maxHeight: 200,
		minHeight: 40,
	},
	commentButtonContainer: {
		marginHorizontal: 8,
		marginBottom: 8,
	},
	commentCardContainer: {
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
	},
	commentUserInfoContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'flex-start',
		padding: 8,
	},
	commentUserNameText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#000',
	},
	commentUserEmailText: {
		fontSize: 16,
		color: '#000',
	},
	commentBodyContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'flex-start',
		padding: 8,
	},
	commentBodyText: {
		fontSize: 16,
		color: '#000',
	},
});
