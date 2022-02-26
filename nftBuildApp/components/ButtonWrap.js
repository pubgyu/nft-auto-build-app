import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {View, Text, Pressable, StyleSheet, Alert} from 'react-native';
import {ACTION_addCounter} from '../reducer/Counter';

const styles = StyleSheet.create({
    wrap : {
        width:'100%',
        height:90,
        borderBottomWidth:1,
        backgroundColor:'#fff',
        borderColor:'#ddd',
        zIndex:2
    },
	button : {
        position:'absolute',
        bottom:20,
        left:20,
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:"#fcd592",
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: "#555",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5
	},
    buttonText: {
        fontSize:25,
        lineHeight:25,
        color:"#fff"
    }
});

let partsId = 0;
const ButtonWrap = () => {    
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const partsAdd = () => {
        Alert.prompt("이름을 입력하세요","예 : 모자",partsTitle => {
            if(partsTitle) {
                partsId = partsId+1;
                dispatch(ACTION_addCounter(partsId,partsTitle));
            }
        });
    }
    
    return (
        <>
            <View style={styles.wrap}>
                <Pressable style={styles.button} onPress={()=>{partsAdd();}}>
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
                {/* <Pressable style={styles.button} onPress={()=>{partsMinus();}}>
                    <Text style={styles.buttonText}>Parts 제거</Text>
                </Pressable> */}
            </View>
        </>
    );
}

export default ButtonWrap;