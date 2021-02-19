import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

import Navigator from '../Navigation/MyNavigator';
import Header from '../Screens/Header';


const MyApp = prop =>{
    return(
    <View style={styles.mainContainer}>
        <Header style={styles.header}/>
        <Navigator style={styles.Navigator}/>
    </View>);
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'10%',
        borderBottomLeftRadius:100,
        borderBottomRightRadius:100
    },
    Navigator:{
        flex:1,
        width:'100%',
        height:'100%',
    },
    mainContainer:{
        flex:1,
        backgroundColor: Colors.secondary
    }
});

export default MyApp;