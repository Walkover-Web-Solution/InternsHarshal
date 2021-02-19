import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import MenuBar from '../components/MenuBar';

import CATEGORIES from '../data/dummy-data-Categories';

const Categories = prop => {


    const renderItem = (itemData) => {

        const toMealScreen = () => {
            prop.navigation.navigate(
                {
                    routeName: 'Meals',
                    params: {
                        MealId: itemData.item.id
                    }
                }
            );
        };

        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={styles.itemGrid}
                    onPress={toMealScreen}>
                    <View style={{
                        flex: 1,
                        backgroundColor: itemData.item.color,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 30,
                    }}>

                        <View>
                            <Text style={{ fontSize: 20 }}>{itemData.item.title}</Text>
                        </View>
                    </View >
                </TouchableOpacity >
            </View>
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderItem}
            numColumns={2}
            keyExtractor={(item, index) => item.id}
        />
    );
};

Categories.navigationOptions = (navObject) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: <MenuBar navObject ={navObject}/>
    };
};

const styles = StyleSheet.create({
    itemGrid: {
        flex: 1,
        margin: 15,
        height: 200,
    }
});

export default Categories;