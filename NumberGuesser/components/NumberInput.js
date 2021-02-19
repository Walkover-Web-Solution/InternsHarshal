import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, Alert } from 'react-native';
import Colors from '../constants/Colors';

const NumberInput = prop => {

    return (
        <View style={styles.container}>
            <Text
                style={styles.text}>
                {prop.title}
            </Text>
            <TextInput
                {...prop}
                textAlign='center'
                keyboardType='number-pad'
                style={styles.TextInput}
                maxLength={2}
                blurOnSubmit
                onChangeText={prop.validateInput} 
                value={prop.enteredNum}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    TextInput: {
        marginTop: 30,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        width: '80%',
    }
});

export default NumberInput;