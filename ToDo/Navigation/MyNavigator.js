import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Ionicons, Feather } from '@expo/vector-icons';

import Home from '../Screens/Home';
import Add from '../Screens/Add';
import Edit from '../Screens/Edit';
import Login from '../Screens/LoginScreen';
import Colors from '../constants/Colors';


const AppNavigator = createBottomTabNavigator({
    home: {
        screen: Home, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='home' size={22} color={tabInfo.tintColor} />;
            },
            title:'Home',
        }
    },
    add: {screen: Add, navigationOptions:{
        tabBarIcon:(tabInfo) =>{
            return <Ionicons name='ios-add-circle' size={22} color={tabInfo.tintColor} />
        },
        title:'Add'
    }},
    edit: {screen: Edit, navigationOptions:{
        tabBarIcon: (tab) =>{
            return <Feather name='edit' size={22} color={tab.tintColor} />
        }
    }}
},{
    tabBarOptions:{
        activeBackgroundColor: Colors.primary,
        inactiveBackgroundColor:Colors.primary,
        activeTintColor:'black'
    }
});

const stack = createStackNavigator({
    Login: Login,
    App: {screen: AppNavigator, navigationOptions:{
        headerTitle:''
    }}
});

export default createAppContainer(stack);