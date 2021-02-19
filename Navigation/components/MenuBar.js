import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const MenuBar = prop =>{
    return (<TouchableWithoutFeedback onPress={() => {
        prop.navObject.navigation.toggleDrawer();
    }}>
        <FontAwesome5 name='bars' size={24} color='white' style={{ padding: 5, marginLeft:10 }} />
    </TouchableWithoutFeedback>);
}

export default MenuBar;