export const TOOGLE_FAV = 'TOOGLE_FAV';
export const SET_FILTER = 'SET_FILTER';
export const REMOVE_FILTERS = 'REMOVE_FILTER';

export const toogleFav = (id) =>{
    return {type: TOOGLE_FAV, mealId:id};
};

export const setFilter = (filterSettings) =>{
    return {type: SET_FILTER, filter:filterSettings};
};      

export const removeFilter = () =>{
    return {type: REMOVE_FILTERS}
}