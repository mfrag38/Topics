import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

const RadioButton = (props) => {
	const { onRadioButtonPress, isChecked, text, radioColor, textColor } =
		props;

	const {
		mainContainer,
		radioButtonIcon,
		radioButtonIconInnerIcon,
		radioButtonTextContainer,
		radioButtonText,
	} = styles;

	const _renderCheckedView = () => {
		return isChecked ? (
			<View
				style={[
					radioButtonIconInnerIcon,
					{
						backgroundColor: radioColor,
						borderColor: 'transparent',
					},
				]}
			/>
		) : null;
	};

	return (
		<TouchableOpacity style={mainContainer} onPress={onRadioButtonPress}>
			<View style={[radioButtonIcon, { borderColor: radioColor }]}>
				{_renderCheckedView()}
			</View>
			<View style={[radioButtonTextContainer]}>
				<Text style={[radioButtonText, { color: textColor }]}>
					{text}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default RadioButton;
