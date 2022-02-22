import React from 'react';
import RadioGroup from '../../molecules/RadioGroup';

const GenderRadioGroup = (props) => {
	const { title, onGenderPress, radioColor, textColor } = props;

	const genderOptions = ['Male', 'Female'];

	return (
		<RadioGroup
			groupTitle={title}
			values={genderOptions}
			onPress={(index) => {
				onGenderPress(genderOptions[index]);
			}}
			radioColor={radioColor}
			textColor={textColor}
		/>
	);
};

export default GenderRadioGroup;
