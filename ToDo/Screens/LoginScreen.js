import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import Card from '../components/card';
import CustomButton from '../components/CustomButton';

import CustomTextInput from '../components/CustomTextInput';

const LoginScreen = (prop) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const setEmailInput = (text) => {
        setEmail(text);
    }

    const setPasswordInput = (text) => {
        setPassword(text);
    }

    const storeCredentials = useSelector((state) => state.login);

    const LoginToApp = () => {
        if (email == storeCredentials.email && password == storeCredentials.pass) {
            prop.navigation.replace('App');
        }
        else {
            Alert.alert('Invalid Login Credentials', 'Email is Walkover@gmail.com and password is 12345', [{ style: 'destructive', text: 'Okay' }]);
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior='height'
        >
            <Card style={styles.Card}>
                <View style={styles.inputContainer} >
                    <CustomTextInput
                        placeholder='Email'
                        onChangeText={setEmailInput}
                        keyboardType='email-address' />
                    <CustomTextInput
                        placeholder="Password"
                        onChangeText={setPasswordInput}
                        keyboardType='numeric'
                    />
                </View>
                <CustomButton 
                onPress={LoginToApp}
                title='Login'
                style={styles.add}
                textStyle = {styles.addTextStyle}/>
            </Card>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    Card: {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        marginBottom: 50
    },
    inputContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        width: '100%'
    },
    add: {
        height: '15%',
        elevation:10
    },
    addTextStyle:{
        elevation:10
    }
});

export default LoginScreen;