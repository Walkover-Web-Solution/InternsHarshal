import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import CATEGORIES from '../data/dummy-data-Categories';
import MealDisplay from '../components/MealDisplay';

const meals = prop => {

    const renderView = (itemData) => {

        return <MealDisplay
            itemData={itemData}
            nav = {prop}
        />;
    }

    const [mealTitle, setMealTitle] = useState('');

    const idMeal = prop.navigation.getParam('MealId');
    const obj = CATEGORIES.find(o => o.id === idMeal);
    const availableData = useSelector(state => state.meals.filteredMeals);
    console.log(availableData);
    const data = availableData.filter((item) => item.categoriesId === obj.id);
    return (
        <FlatList
            data={data}
            renderItem={renderView}
        />
    );

};

meals.navigationOptions = (object) => {
    const idMeal = object.navigation.getParam('MealId');
    const obj = CATEGORIES.find(o => o.id === idMeal);
    return {
        headerTitle: obj.title
    }
};



export default meals;