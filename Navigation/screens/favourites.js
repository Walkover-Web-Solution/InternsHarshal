import React from 'react';
import { Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import MealDisplay from '../components/MealDisplay';
import MenuBar from '../components/MenuBar';

const favourites = prop => {

    const renderItem = (itemData) => {
        return <MealDisplay
            itemData={itemData}
            nav={prop}
        />;
    }
    const availableData = useSelector((state) => state.meals.favMeals);

    return (<FlatList
        renderItem={renderItem}
        data={availableData} />);
}

favourites.navigationOptions = (navObject) => {
    return {
        headerLeft: <MenuBar navObject={navObject} />
    }
}

export default favourites;