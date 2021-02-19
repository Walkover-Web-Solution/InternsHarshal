import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const GameOver = prop => {

    const restart= () =>{
        prop.restartGame();
    }

    return (
        <View style={{flex:1}}>
            <Text>Your device took {prop.numTries} to guess your number {prop.userNum}</Text>
            <Button title="Restart" onPress={restart}/>
        </View>
    );
};

export default GameOver;