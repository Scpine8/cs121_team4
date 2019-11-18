import React from 'react';
import PropTypes from 'prop-types'
import {TouchableOpacity, View, Text, Image} from 'react-native';

import styles from './styles';

// const emotionButton = ({text, onPress}) => (
// 	<TouchableOpacity> style = {styles.container} onPress ={onPress}
// 		<View style = {styles.wrapper} >
// 		<Image resizeMode = "contain" style = {styles.icon} source={require('./button/icon copy.png')}>
// 			<Text style={styles.text} text={text}>
// 			</Text>
// 		</Image>
// 		</View>
// 	</TouchableOpacity>

// );

// emotionButton.props = {
// 	text: PropTypes.string,
// 	onPress: PropTypes.func,
// }

class EmotionButton extends React.Component{
	constructor(props) {
		super(props);

		this.text=(PropTypes.string);
		this.onPress=(PropTypes.func);
	}

	render(){
		return(
		<TouchableOpacity> style = {styles.container} onPress ={this.onPress}
			<View style={styles.wrapper} >
				<Image resizeMode= "contain" style={styles.icon} source={require('./icon copy.png')}>
					<Text style={styles.text} text={this.text}>
					</Text>
				</Image>
			</View>
		</TouchableOpacity>
	);

	}
}

module.exports = EmotionButton;