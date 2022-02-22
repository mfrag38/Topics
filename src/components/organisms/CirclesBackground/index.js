import React from 'react';
import { Dimensions, View } from 'react-native';
import { styles } from './style';

const width = Dimensions.get('screen').width / 1.75;
const colors = ['#808080', '#fff', '#000'];

const CirclesBackground = () => {
	const { container, bgCircle } = styles;

	return (
		<View style={container}>
			{colors.map((x, i) => (
				<View
					style={[
						bgCircle,
						{
							backgroundColor: x,
							transform: [
								{
									translateX:
										-(width / 2) +
										(i * width) / colors.length,
								},
								{
									translateY:
										-(width * 0.75) -
										((i / 0.75) * width) / colors.length,
								},
							],
						},
					]}
					key={i.toString()}
				/>
			))}
		</View>
	);
};

export default CirclesBackground;
