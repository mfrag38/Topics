import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	mainContainer: {
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 5,
		marginHorizontal: 10,
		paddingHorizontal: 10,
		flexDirection: 'row',
	},
	radioButtonIcon: {
		height: 25,
		width: 25,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 25 / 2,
		borderWidth: 3,
		marginRight: 10,
	},
	radioButtonIconInnerIcon: {
		height: 20,
		width: 20,
		borderRadius: 20 / 2,
		borderWidth: 3,
	},
	radioButtonTextContainer: {
		flex: 5,
		height: 50,
		justifyContent: 'center',
		paddingLeft: 10,
	},
	radioButtonText: {
		fontSize: 18,
	},
});
