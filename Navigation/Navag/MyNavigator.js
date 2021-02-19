import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { MaterialIcons } from '@expo/vector-icons';

import Categories from '../screens/Categories';
import Dish from '../screens/dish';
import Meals from '../screens/meals';
import Favourite from '../screens/favourites';
import Filter from '../screens/filter';


const MyNavigator = createStackNavigator(
    {
        Catergories: {
            screen: Categories,
        },
        Dish: {
            screen: Dish
        },
        Meals: Meals
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: 'white',
        }
    }
);

const favNavigator = createStackNavigator({
    FavMeals: {
        screen: Favourite,
        navigationOptions: {
            headerTitle: "Favourites",
        }
    },
    Dish: Dish
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'black'
            },
            headerTintColor: 'white'
        }
    });

const tabNav = createMaterialBottomTabNavigator({
    Meals: {
        screen: MyNavigator, navigationOptions:tabInfo => {
            tabBarIcon: <MaterialIcons name="food-bank" size={24} color={tabInfo.color} />
        },
    },
    Favourites: {screen: favNavigator, navigationOptions:tabInfo => {
        tabBarIcon:<MaterialIcons name="star" size={24} color={tabInfo.color}/>
    }}
}, {
    tabBarOptions:{
        activeTintColor:'white',
    },
    shifting:true,
});

const mainNavigator = createDrawerNavigator({
    Meals: tabNav,
    Filters: createStackNavigator({
        Filter: {
            screen: Filter, navigationOptions: {
                headerStyle: {
                    backgroundColor: 'black'
                },
                headerTintColor: 'white'
            }
        }
    })
})

export default createAppContainer(mainNavigator);