import todoData from '../../data/todoData';
import Todo from '../../models/todo';
import { ADD_TODO, SAVE_TODO } from '../actions/todoActions';


const intialState = {
    todo: todoData,
    login: {
        email: 'Walkover@gmail.com',
        pass: '12345'
    },
    idTracker: todoData.length
}

const todoReducer = (state = intialState, action) => {
    switch (action.type) {
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
            let id = state.idTracker + 1;
            const newTodo = new Todo(
                id.toString(),
                action.data.title,
                action.data.work,
                action.data.time,
                action.data.date,
                action.data.isMissed
            );
            const updatedTodoData = [newTodo, ...state.todo];
            return { ...state, todo: updatedTodoData, idTracker: id };
        default:
            return state;
    }
}

export default todoReducer;