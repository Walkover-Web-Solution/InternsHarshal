import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CustomButton = prop => {
    return (
        <TouchableOpacity
            onPress={prop.onPress}
            style={{...styles.TouchableOpacity, ...prop.style }}>
            <Text style={{...styles.text, ...prop.textStyle}} >{prop.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    TouchableOpacity: {
        width:'100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    text: {
        flex: 1,
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'pink',
        textAlignVertical: 'center',
        borderRadius: 50,
    }
});

export default CustomButton;