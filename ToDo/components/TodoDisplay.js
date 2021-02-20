import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';
import Card from './card';

const TodoDisplay = (prop) =>{
    return(
        <Card style={{
            backgroundColor: prop.todo.isMissed && prop.isRed ? Colors.missed : 'white',
            height:prop.height,
            margin: 10,
            alignItems: 'center'}}>
            <Text
                style={styles.title}>
                {prop.todo.title}
            </Text>
            <Text
                style={styles.work}
                numberOfLines={prop.limit}
                ellipsizeMode='tail'>
                {prop.todo.work}
            </Text>
            <View style={styles.timeDate}>
                <Text>{prop.todo.time.hour + ":" +prop.todo.time.min+" "+prop.todo.time.suffix}</Text>
                <Text>{prop.todo.date}</Text>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: 'black',
    },
    work: {
        width: '100%',
        fontSize: 15,
        marginTop: 10,
        alignSelf:'center'
    },
    timeDate: {
        flex: 1,
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    }
});

export default TodoDisplay;