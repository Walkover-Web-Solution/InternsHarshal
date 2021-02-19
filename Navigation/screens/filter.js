import React, { useCallback, useEffect, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import FilterParam from '../components/FilterParam';
import MenuBar from '../components/MenuBar';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { removeFilter, setFilter } from '../store/actions/MealAction';
import { TouchableOpacity } from 'react-native-gesture-handler';

const filter = prop => {

    const [isSpicy, setSpicy] = useState(false);
    const [isVeg, setVeg] = useState(false);
    const [isGlutenFree, setGluten] = useState(false);

    const dispatch = useDispatch();

    const filters = useCallback(() => {
        const userFilter = {
            isSpicy: isSpicy,
            isVeg: isVeg,
            isGlutenFree: isGlutenFree
        }
        console.log(userFilter);
        dispatch(setFilter(userFilter));
    }, [isGlutenFree, isSpicy, isVeg, dispatch]);

    const filterRemove = () =>{
        setSpicy(false);
        setGluten(false);
        setVeg(false);
        dispatch(removeFilter());
    }

    useEffect(() => {
        prop.navigation.setParams({
            filtersFun: filters
        })
    }, [filters]);

    return (
        <View style={styles.container} >
            <FilterParam value={isSpicy} title='Spicy' onValueChange={setSpicy} />
            <FilterParam value={isVeg} title='Veg' onValueChange={setVeg} />
            <FilterParam value={isGlutenFree} title='Gluten Free' onValueChange={setGluten} />
            <Button title="Remove Applied Filters" onPress={filterRemove}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 100,
        alignItems: 'center',
    }
});

filter.navigationOptions = (navObject) => {
    const filters = navObject.navigation.getParam('filtersFun');
    return {
        headerLeft: <MenuBar navObject={navObject} />,
        headerRight: (
            <TouchableOpacity onPress={filters} >
                <Ionicons name='ios-save' size={24} color='white' />
            </TouchableOpacity>
        )
    };
};

export default filter;