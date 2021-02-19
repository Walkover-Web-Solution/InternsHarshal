import { set } from 'react-native-reanimated';
import todoData from '../../data/todoData';
import Todo from '../../models/todo';
import { ADD_TODO } from '../actions/todoActions';


const intialState = {
    todo: todoData,
    login: {
        email: 'Walkover@gmail.com',
        pass: '12345'
    },
    idTracker:todoData.length
}

const todoReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            let id = state.idTracker+1;
            const newTodo = new Todo(id.toString(),
                action.data.title,
                action.data.work,
                action.data.time,
                action.data.date,
                action.data.isMissed
            );
            const updatedTodoData = [newTodo, ...state.todo];
            return {...state, todo:updatedTodoData, idTracker:id};
        default:
            return state;
    }
}

export default todoReducer;