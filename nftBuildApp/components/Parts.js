import React from 'react';
import {useDispatch} from "react-redux";
import {Text, View, StyleSheet,TouchableOpacity,Pressable} from 'react-native';
import { DraxView } from 'react-native-drax';

import {ACTION_deleteCounter} from '../reducer/Counter';


const styles = StyleSheet.create({
	partsList : {
        position:'relative',
        width:'50%',
        paddingTop:'50%',
        paddingLeft:5,
        paddingRight:5,
	},
    partsBox: {
        position:'absolute',
        width:'100%',
        paddingTop:'100%',
        backgroundColor:'#fff',
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.06,
        shadowRadius: 6,
        elevation: 1,
    },
    partsTitle: {
        position:'absolute',
        top:15,
        left:15,
        right:'50%'
    },
    removeBtn: {
        position:'absolute',
        top:10,
        right:10,
        width:20,
        height:20,
        borderRadius:20,
        backgroundColor:'#888',
        justifyContent: 'center',
        alignItems: 'center'
    },
    removeBtn_text: {
        fontSize:10,
        color:'#fff',
        fontWeight:'bold'
    }
});

const Parts = (props) => {
    const dispatch = useDispatch();

    const partsMinus = () => {
        dispatch(ACTION_deleteCounter(props.id));
    }

    return (
        <View style={styles.partsList}>
            <View style={styles.partsBox}>
                <Text style={styles.partsTitle}>{props.name}</Text>

                <Pressable style={styles.removeBtn} onPress={()=>{partsMinus();}}>
                    <Text style={styles.removeBtn_text}>X</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Parts;