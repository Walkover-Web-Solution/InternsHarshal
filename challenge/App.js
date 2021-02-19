import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Dimensions, ToastAndroid } from 'react-native';

var small = 30;
var logoSize = 40;

const { width, height } = Dimensions.get('window');

if (width > 800) {
  small = 15;
  logoSize = 50;
}
else {
  small = 10;
}

export default function App() {

  const [email, fillEmail] = useState('');
  const [pass, fillPass] = useState('');

  const login = () => {
    if (email.length <= 0 || pass.length <= 0) {
      ToastAndroid.show("Completely Fill Credentials", ToastAndroid.LONG);
    }
    else {
      ToastAndroid.show(email + " " + pass, ToastAndroid.LONG);
    }
  }

  const signup = () => {
    ToastAndroid.show("SignUp", ToastAndroid.LONG);
  }

  const fPass = () => {
    ToastAndroid.show("Forgot Password", ToastAndroid.LONG);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>HeyAPP</Text>
      <TextInput
        placeholder="Email..."
        style={styles.inputEmail}
        onChangeText={(entEmail) => fillEmail(entEmail)} />
      <TextInput placeholder="Password.."
        secureTextEntry={true}
        style={styles.inputPass}
        onChangeText={(entPass) => fillPass(entPass)} />
      <Text
        style={styles.FPass}
        onPress={fPass}>Forgot Password?</Text>
      <Text
        style={styles.login}
        onPress={login}>LOGIN</Text>
      <Text
        style={styles.signup}
        onPress={signup}>Signup</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05405a',
    alignItems: 'center',
    padding: 50,
    justifyContent: 'center',
  },
  inputEmail: {
    width: '95%',
    height: 55,
    padding: 15,
    paddingLeft:20,
    backgroundColor: '#465880',
    marginBottom: 20,
    borderRadius: 30,
  },
  inputPass: {
    width: '95%',
    height: 55,
    padding: 15,
    paddingLeft:20,
    backgroundColor: '#465880',
    borderRadius: 30,
  },
  logo: {
    marginBottom: '12%',
    fontSize: logoSize,
    color: '#f75c5e',
    fontWeight: 'bold'
  },
  FPass: {
    color: 'white',
    marginTop: 20,
    fontSize: small,
    marginBottom: 50
  },
  signup: {
    color: 'white',
    backgroundColor: '#05405a',
    width: '95%',
    height: 50,
    borderRadius: 30,
    textAlign: "center",
    textAlignVertical: "center",

  },
  login: {
    width: '95%',
    backgroundColor: '#f85c5e',
    height: 55,
    borderRadius: 30,
    color: 'white',
    textAlign: "center",
    textAlignVertical: "center",
  }
});
