import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const headerView = prop => {
    return (<View style={styles.headContainer}>
        <Text style={styles.headText} >{prop.title}</Text>
    </View>);
};

const styles = StyleSheet.create({
    headContainer:{
        width:'100%',
        backgroundColor: Colors.primary,
        justifyContent:'center',
        alignItems:'center',
        height:'15%',
    },
    headText:{
        marginTop:'15%',
        fontSize:30,
        color:'white'
    }
});

export default headerView;