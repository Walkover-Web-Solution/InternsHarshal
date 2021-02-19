import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const CustomTextInput = prop =>{
    return(
        <TextInput
        onChangeText={prop.onChangeText}
        placeholder={prop.placeholder}
        style={styles.input}
        value={prop.value}
        keyboardType={prop.keyboardType}
    />
    );
};

const styles = StyleSheet.create({
    input: {
        marginTop: 60,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '80%',
        textAlign: 'center'
    },
});

export default CustomTextInput;