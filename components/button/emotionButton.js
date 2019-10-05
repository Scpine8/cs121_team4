import React, {PropTypes} from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';

import styles from './styles';

const emotionButton = ({text, onPress}) => (
	<TouchableOpacity> style = {styles.container} onPress ={onPress}
		<View style = {styles.wrapper} >
		<Image resizeMode = "contain" style = {styles.icon} source={require('./button/icon copy.png'} />
			<Text style={styles.text} {text} </Text>
		</View>
	</TouchableOpacity>






	);

	emotionButton.PropTypes = {
		text: PropTypes.string,
		onPress: PropTypes.func,
	}

export default emotionButton;