import React, { useState } from 'react';
import { View, StyleSheet, Button, Alert, Text, Keyboard } from 'react-native';

import Colors from '../constants/Colors';
import Card from './Card';
import NumberInput from './NumberInput';


const BodyView = prop => {

    const [enteredNum, setEnteredNum] = useState('');
    const [confirmed, setConfirmed] = useState(false);

    const checkInpt = () => {

        if (enteredNum < 0 || isNaN(enteredNum) || enteredNum > 99 || enteredNum.length <= 0) {
            Alert.alert("Invalid input",
                "Enter number between 1 and 99",
                [{ text: 'Okay', style: 'destructive', onPress: clearInput }]
            );
        }
        else {
            setConfirmed(true);
            Keyboard.dismiss();
        }
    }

    const clearInput = () => {
        setEnteredNum('');
        setConfirmed(false);
    }

    const validateInput = (inp) => {
        setEnteredNum(inp.replace(/[^0-9]/g, ''));
        setConfirmed(false);
    }

    const nextPage = () => {
        prop.setUser(enteredNum);
        prop.tries(prop.num+1);
    }

    if (confirmed) {
        startCard = <Card style={styles.startCardContainer}>
            <Text>You've Selected</Text>
            <Text style={styles.finalNum}>{enteredNum}</Text>
            <View style={styles.nextPage} >
                <Button title='Start' onPress={nextPage} />
            </View>
        </Card>
    }
    else {
        startCard = null;
    }

    let startCard;

    return (<View style={styles.mainContainer}>
        <Card style={styles.cardContainer}>
            <NumberInput
                title="Enter a Number"
                validateInput={validateInput}
                enteredNum={enteredNum} />
            <View style={styles.buttonContainer}>
                <View style={styles.reset}>
                    <Button
                        title='Reset'
                        onPress={clearInput}
                        color={Colors.primary}
                    />
                </View>
                <View style={styles.submit}>
                    <Button
                        title='Submit'
                        color={Colors.primary}
                        onPress={checkInpt} />
                </View>
            </View>
        </Card>
        <View style={styles.startCard}>
            {startCard}
        </View>
    </View>);
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.secondary,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        marginTop: 20,
        elevation: 10
    },
    cardContainer: {
        padding: 20,
        width: '70%',
        height: 300,
        marginTop: 20
    },
    buttonContainer: {
        marginTop: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    reset: {
        width: '45%'
    },
    submit: {
        width: '45%'
    },
    finalNum: {
        padding: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 20,
        borderColor: 'red',
        borderWidth: 3,
        marginVertical: 10,
        color: 'black'
    },
    nextPage: {

    },
    startCard: {
        marginTop: 20,
        backgroundColor: Colors.secondary
    },
    startCardContainer: {
        padding: 30,
        alignItems: 'center'
    }
});

export default BodyView;