export const ADD_TODO = 'ADD_TODO';
export const SAVE_TODO = 'SAVE_TODO';
export const SET_TODO = 'SET_TODO';

import { useDispatch } from 'react-redux';
import Todo from '../../models/todo';



export const fetchTodo = (dispatch) => {
    return async putThisOnServer => {
        const response = await fetch('https://todo-a7e8b-default-rtdb.firebaseio.com/todos.json');
        const serverRespone = await response.json();
        const todo = [];
        for (var key in serverRespone) {
            todo.push(new Todo(
                key, serverRespone[key].title,
                serverRespone[key].work,
                serverRespone[key].time,
                serverRespone[key].date,
                serverRespone[key].isMissed
                ));
        }
        dispatch({ type: SET_TODO, todo:todo });
    }
}


export const addTodo = (data, dispatch) => {
    const title = data.title;
    const work = data.work;
    const time = data.time;
    const date = data.date;
    const isMissed = data.isMissed;
    return async putThisOnServer => {
        const response = await fetch('https://todo-a7e8b-default-rtdb.firebaseio.com/todos.json', {
            method: 'POST',
            body: JSON.stringify({
                title,
                work,
                time,
                date,
                isMissed
            })
        })

        const serverRespone = await response.json();
    }
}

export const saveTodo = (data) => {
    return { type: SAVE_TODO, data: data };
}