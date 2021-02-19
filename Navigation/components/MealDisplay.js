import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text} from 'react-native';

import ImageDescription from './imageDescription';

const MealDisplay = (prop) => {
    return (
        <TouchableOpacity
                style={{
                    flex: 1,
                    padding:10,
                    borderRadius:50
                }}
                onPress={() => {
                    prop.nav.navigation.navigate({
                        routeName: 'Dish',
                        params: {
                            MealId: prop.itemData.item.id,
                            mealTitle: prop.itemData.item.dishName,
                        }
                    });
                }}>
                <View style={styles.ImageContainer} >
                    <ImageBackground
                        source={{ uri: prop.itemData.item.ImgUrl }}
                        style={styles.image}
                        resizeMode='cover'
                    >
                        <View style={styles.dishNameContainer}>
                            <Text style={styles.dishName}>{prop.itemData.item.dishName}</Text>
                        </View>
                        <View style={styles.description}>
                            <ImageDescription iconName="fire" color={prop.itemData.item.spicy ? 'black' : 'grey'} title='Spicy' />
                            <ImageDescription iconName="dot-circle" color={prop.itemData.item.vegeterian ? 'green' : 'red'} title={prop.itemData.item.vegeterian ? 'Veg' : 'Non Veg'} />
                            <ImageDescription iconName={prop.itemData.item.glutenFree ? "thumbs-up" : "thumbs-down"} color={prop.itemData.item.glutenFree ? 'black' : 'grey'} title='Glutten Free' />
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    ImageContainer: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 300,
        justifyContent: 'flex-end'
    },
    description: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255,255,255,0.8)',
        padding: 10
    },
    dishName: {
        color: 'black',
        fontSize: 20,
        padding: 10
    },
    dishNameContainer: {
        backgroundColor: 'rgba(255, 255, 255,0.8)',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius:500,
        borderTopLeftRadius:500
    }
});

export default MealDisplay;