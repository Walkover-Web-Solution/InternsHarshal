import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Colors from '../constants/Colors';

const Header = (prop) =>{
    return (
        <View style = {{...styles.container, ...prop.style}}>
            <Ionicons name='logo-octocat' size={38} color="black" style={styles.icon}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.primary,
        width:'100%',
        height:'100%',
        justifyContent:'flex-end',
        alignItems:'center',
        elevation:10
    },
    icon:{
        marginBottom:10,
    }
});

export default Header;