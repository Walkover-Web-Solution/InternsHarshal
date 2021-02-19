import MEALS from '../../data/dummy-data-Meals';
import { REMOVE_FILTERS, SET_FILTER, TOOGLE_FAV } from '../actions/MealAction';

const intialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favMeals: []
  };
  

const mealReducer = (state = intialState, action) => {
    switch (action.type) {
        case TOOGLE_FAV:
            const existingIndex = state.favMeals.findIndex(meal => meal.id === action.mealId);
            if(existingIndex >= 0)
            {
                const updatedFavMeals = [...state.favMeals];
                updatedFavMeals.splice(existingIndex,1);
                return {...state, favMeals:updatedFavMeals};
            }
            else{
                const newFav = state.meals.find((meal) => meal.id === action.mealId);
                newFav.isFav = true;
                const updatedFavMeals = state.favMeals.concat(newFav);
                return {...state, favMeals:updatedFavMeals};
            }
        case SET_FILTER:
            const updatedFilteredMeals = state.meals.filter((meal) =>{
                if(action.filter.isSpicy == meal.spicy && action.filter.isVeg == meal.vegeterian && action.filter.isGlutenFree == meal.glutenFree)
                {
                    return true;
                }
                return false;
            })
            return {...state, filteredMeals:updatedFilteredMeals}; 
        case REMOVE_FILTERS:
            const updatedFilMeals = state.meals;
            return {...state, filteredMeals: updatedFilMeals};
        default:
            return state;
    }
}

export default mealReducer;