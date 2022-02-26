import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	header : {
		width:'100%',
		marginTop:30,
		paddingLeft:20,
		boxSizing:'border-box'
	},
	text : {
		fontSize:30,
	}
});

const Header = (props) => {
	return (
		<View style={styles.header}>
			<Text style={styles.text}>{props.name}</Text>
		</View>
	);
}

export default Header;