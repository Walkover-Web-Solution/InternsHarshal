import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';

const numGenerator = (start, end) => {
    var op = (Math.floor(Math.random() * (end - start)) + start);
    return op;
};
var startNum = 1, endNum = 99;

const GameScreen = prop => {


    const [guessedNum, setGuessedNum] = useState(numGenerator(startNum, endNum));

    useEffect(() => {
        if (parseInt(guessedNum) === parseInt(prop.num)) {
            startNum = 1;
            endNum=99;
            prop.gameOver();
        }
    },[guessedNum,prop.num]);

    const lowerFun = () => {
        if (guessedNum < prop.num) {
            Alert.alert('Hey', 'Dont misguide the algorithm', [{ style: 'destructive', title: 'Okay' }]);
        } else {
            endNum = guessedNum;
            setGuessedNum(numGenerator(startNum, guessedNum));
            AddTries();
        }
    }

    const AddTries= () =>
    {
        prop.tries(prop.numTries+1);
    }

    const greaterFun = () => {
        if (guessedNum > prop.num) {
            Alert.alert('Hey', 'Dont misguide the algorithm', [{ style: 'destructive', title: 'Okay' }]);
        } else {
            startNum = guessedNum
            setGuessedNum(numGenerator(guessedNum + 1, endNum));
            AddTries();
        }
    }


    return (
        <View style={styles.mainView}>
            <Card style={styles.card}>

                <View style={styles.guessNumContainer}>
                    <Text style={styles.guessNum}>{guessedNum}</Text>
                </View>

                <View style={styles.BtnContainer} >
                    <Button title='Lower' onPress={lowerFun} />
                    <Button title='Greater' onPress={greaterFun} />
                </View>

            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        width: '90%',
    },
    card: {
        height: '60%'
    },
    BtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 50,

    },
    guessNumContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    guessNum: {
        fontSize: 30,
        color: Colors.secondary,
    }
});

export default GameScreen;