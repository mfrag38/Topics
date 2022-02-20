import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		justifyContent: 'space-evenly',
	},
	inputsContainer: {
		justifyContent: 'space-between',
	},
	textInputsContainer: {
		justifyContent: 'space-between',
		marginHorizontal: 16,
		marginBottom: 10,
		paddingHorizontal: 16,
	},
	textInputContainer: {
		color: '#000',
		borderRadius: 40,
		borderWidth: 2,
		borderColor: '#393486',
		marginVertical: 10,
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	textInputStyle: {
		height: 40,
	},
	radioGroupContainer: {
		justifyContent: 'center',
		marginHorizontal: 16,
		marginTop: 10,
		paddingHorizontal: 16,
	},
	submitButtonContainer: {
		marginHorizontal: 16,
		paddingHorizontal: 16,
	},
	submitButton: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 40,
		elevation: 3,
		backgroundColor: '#393486',
	},
	submitButtonText: {
		color: '#fff',
		fontSize: 18,
	},
});
