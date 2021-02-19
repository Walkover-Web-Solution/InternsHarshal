import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalView = prop => {
    return (
        <TouchableOpacity onPress={prop.DeleteHandler.bind(this, prop.id)}>
            <View style={styles.listStyle}>
                <Text>{prop.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listStyle: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'grey',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default GoalView;