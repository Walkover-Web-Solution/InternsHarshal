import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Entypo } from '@expo/vector-icons';

import ImageDescription from '../components/imageDescription';
import { ScrollView } from 'react-native-gesture-handler';
import {toogleFav} from '../store/actions/MealAction';
import meal from '../models/meal';

const dish = prop => {
    const id = prop.navigation.getParam('MealId');
    const availableData = useSelector(state => state.meals.filteredMeals);
    const mealObject = availableData.find((item) => item.id === id);

    const dispatch = useDispatch();

    const makeFav = () => {
        dispatch(toogleFav(id));
    }

    useEffect(() => {
        prop.navigation.setParams({
            favFun:makeFav,
            isFav:mealObject.isFav
        });
    }, [id, mealObject.isFav]);

    return (
        <View style={styles.mainScreen}>
            <Image
                source={{ uri: mealObject.ImgUrl }}
                style={styles.image}
                resizeMode='cover'>
            </Image>
            <View style={styles.description}>
                <ImageDescription iconName="fire" color={mealObject.spicy ? 'black' : 'grey'} title='Spicy' />
                <ImageDescription iconName="dot-circle" color={mealObject.vegeterian ? 'green' : 'red'} title={mealObject.vegeterian ? 'Veg' : 'Non Veg'} />
                <ImageDescription iconName={mealObject.glutenFree ? "thumbs-up" : "thumbs-down"} color={mealObject.glutenFree ? 'black' : 'grey'} title='Glutten Free' />
            </View>
            <ScrollView>
                {mealObject.ingredients.map((ingredient) =>
                    <Text style={styles.step} key={Math.random().toString()}>{ingredient}</Text>)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        justifyContent: 'flex-end'
    },
    description: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255,255,255,0.8)',
        padding: 10
    },
    mainScreen: {
        padding: 10
    },
    step: {
        flex: 1,
        backgroundColor: 'grey',
        marginVertical: 8,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black'
    }
});

dish.navigationOptions = (object) => {
    const dishName = object.navigation.getParam('mealTitle');
    const favouriteFunction = object.navigation.getParam('favFun');
    const isFav = object.navigation.getParam('isFav');

    return {
        headerTitle: dishName,
        headerRight: (
                <TouchableWithoutFeedback onPress={favouriteFunction}>
                        <Entypo 
                        name= { isFav ? 'star' : 'star-outlined'}
                        size={24}
                        color='white'/>
                </TouchableWithoutFeedback>
        )
    };
}

export default dish;