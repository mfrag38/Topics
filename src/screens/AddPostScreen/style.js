import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		height: '100%',
		justifyContent: 'center',
		marginHorizontal: 8,
	},
	titleContainer: { marginVertical: 16 },
	titleText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#000',
	},
	formInputsContainer: {
		flex: 1,
		justifyContent: 'flex-start',
	},
	textInputContainer: {
		color: '#000',
		borderRadius: 8,
		borderWidth: 2,
		borderColor: '#000',
		marginVertical: 10,
		paddingHorizontal: 10,
		paddingVertical: 5,
		overflow: 'hidden',
	},
	textInputStyle: {
		height: 40,
	},
	buttonContainer: {
		marginBottom: 30,
	},
});
