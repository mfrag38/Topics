import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export const styles = StyleSheet.create({
	mainContainer: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.White,
	},
	headerContainer: {
		flex: 3,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#000',
	},
	authFormContainer: {
		flex: 6,
		width: '100%',
	},
	spacer: {
		flex: 1,
	},
});
