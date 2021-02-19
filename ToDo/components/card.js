import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = prop => {
    return (
        <View style = {{...styles.Card,...prop.style}}>
            {prop.children}
        </View>
    );
};

const styles = StyleSheet.create({
    Card:{
        elevation:10,
        backgroundColor:'white',
        borderRadius:30,
        padding:10
    }
});

export default Card;