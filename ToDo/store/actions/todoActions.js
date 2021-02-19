export const ADD_TODO = 'ADD_TODO';

export const addTodo = (data) =>{
    return {type:ADD_TODO, data:data};
}