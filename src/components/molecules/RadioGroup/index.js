import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from '_atoms';
import { styles } from './style';

const RadioGroup = (props) => {
	const { groupTitle, values, onPress, radioColor, textColor } = props;

	const [currentSelectedItem, setCurrentSelectedItem] = useState(-1);

	const _onPress = (index) => {
		onPress(index);
		setCurrentSelectedItem(index);
	};

	const _renderRadioButtons = () => {
		return (values || []).map((item, index) => {
			let isChecked = currentSelectedItem === index ? true : false;

			return (
				<RadioButton
					key={index}
					onRadioButtonPress={() => _onPress(index)}
					isChecked={isChecked}
					text={item}
					radioColor={radioColor}
					textColor={textColor}
				/>
			);
		});
	};

	const { groupTitleContainer, groupTitleText } = styles;

	return (
		<View>
			<View style={groupTitleContainer}>
				<Text style={groupTitleText}>{groupTitle}</Text>
			</View>
			{_renderRadioButtons()}
		</View>
	);
};

export default RadioGroup;
