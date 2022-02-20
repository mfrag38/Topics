import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('screen').width / 1.75;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	bgCircle: {
		position: 'absolute',
		height: width * 2,
		width: width * 2,
		borderRadius: width,
		left: 0,
		top: 0,
	},
});
