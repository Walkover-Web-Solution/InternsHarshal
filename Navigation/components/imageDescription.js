import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const ImageDescription = prop => {
    return (
        <View style={styles.container}>
            <FontAwesome5 name={prop.iconName} size={24} color={prop.color} />
            <Text>{prop.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default ImageDescription;