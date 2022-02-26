import React from 'react';
import {useSelector} from "react-redux";
import {StyleSheet, ScrollView, View,Text} from 'react-native';
import { DraxProvider,DraxView,DraxList } from 'react-native-drax';

import ButtonWrap from './ButtonWrap';
import Parts from './Parts';

const styles = StyleSheet.create({
    partsScrollView : {
        position:'relative',
        width:'100%',
    },
    partsContent : {
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20,
        boxSizing:'border-box',
        flexDirection: 'row',
        flexWrap: 'wrap',
    
        // flex:1
    },
});

const Content = () => {
    const state = useSelector(state => state);

    return (
        <>
            <ButtonWrap />
            
            <ScrollView style={styles.partsScrollView}>
                <View style={styles.partsContent}>
                    {/* <DraxProvider style={styles.partsContent}> */}
                        {state.map(list => {return <Parts key={list.id} id={list.id} name={list.title} />})}
                    {/* </DraxProvider> */}
                </View>
            </ScrollView>
        </>
    );
}

export default Content;