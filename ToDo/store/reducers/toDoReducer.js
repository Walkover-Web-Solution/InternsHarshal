import Todo from '../../models/todo';
import { ADD_TODO, SAVE_TODO, SET_TODO } from '../actions/todoActions';


const intialState = {
    todo: [],
    login: {
        email: '',
        pass: ''
    }
}

const todoReducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_TODO:
            return {...state, todo:action.todo};
        case SAVE_TODO:
            const newElement = new Todo(
                action.data.id,
                action.data.title,
                action.data.work,
                action.data.time,
                action.data.date,
                action.data.isMissed
            );
            var index = state.todo.findIndex((item) => item.id === action.data.id);
            state.todo.splice(index,1);
            const newTodoData = [newElement, ...state.todo];
            return { ...state, todo: newTodoData};

        case ADD_TODO:
            const newTodo = new Todo(
                10,
                action.data.title,
                action.data.work,
                action.data.time,
                action.data.date,
                action.data.isMissed
            );
            const updatedTodoData = [newTodo, ...state.todo];
            return { ...state, todo: updatedTodoData };
        default:
            return state;
    }
}

export default todoReducer;