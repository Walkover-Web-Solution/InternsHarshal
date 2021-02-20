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
import TodoDescription from '../Screens/TodoDescription';

const homeStack = createStackNavigator({
    Home: {
        screen: Home, navigationOptions: {
            headerShown: false
        }
    },
    TodoDescription: { screen: TodoDescription }
});

const editStack = createStackNavigator({
    Edit: {
        screen: Edit, navigationOptions: {
            headerShown: false
        }
    },
    ModifiedAddScreen: { screen: Add, navigationOptions:{
        title:'Edit Todo'
    } }
});

const AppNavigator = createBottomTabNavigator({
    home: {
        screen: homeStack, navigationOptions: (tab) => {
            let tabVisible = true;
            if (tab.navigation.state.routes.length > 1) {
                tabVisible = false;
            }
            return {
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name='home' size={22} color={tabInfo.tintColor}/>;
                },
                title: 'Home',
                tabBarVisible: tabVisible
            }
        }
    },
    add: {
        screen: Add, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-add-circle' size={22} color={tabInfo.tintColor} />
            },
            title: 'Add',
        }
    },
    edit: {
        screen: editStack, navigationOptions: (tab) => {
            let tabVisible = true;
            if (tab.navigation.state.routes.length > 1) {
                tabVisible = false;
            }
            return {
                tabBarIcon: (tab) => {
                    return (<Feather name='edit' size={22} color={tab.tintColor} />);
                },
                title:'Edit',
                tabBarVisible:tabVisible
            }
        }
    }
}, {
    tabBarOptions: {
        activeBackgroundColor: Colors.primary,
        inactiveBackgroundColor: Colors.primary,
        activeTintColor: 'black',
    },
});

const stack = createStackNavigator({
    Login: Login,
    App: {
        screen: AppNavigator, navigationOptions: {
            headerShown: false
        }
    }
});

export default createAppContainer(stack);