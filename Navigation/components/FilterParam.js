import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

const FilterParam = (prop) =>{
    return(
        <View style={styles.container} >
            <Text>{prop.title}</Text>
            <Switch value={prop.value}  onValueChange={prop.onValueChange}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:30
    }
});

export default FilterParam;