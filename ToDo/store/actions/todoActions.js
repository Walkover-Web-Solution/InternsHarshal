export const ADD_TODO = 'ADD_TODO';
export const SAVE_TODO = 'SAVE_TODO';

export const addTodo = (data) =>{
    return {type:ADD_TODO, data:data};
}

export const saveTodo = (data) =>{
    return {type:SAVE_TODO, data:data};
}