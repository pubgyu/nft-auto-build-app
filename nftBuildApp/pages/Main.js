import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../components/Header';
import Content from '../components/Content';

const styles = StyleSheet.create({
	container : {
		flex:1,
		alignItems: "center"
	}
});

const Main = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Header name={`NFT \nAuto Build`} />
			<Content />
		</SafeAreaView>
	);
};

export default Main;