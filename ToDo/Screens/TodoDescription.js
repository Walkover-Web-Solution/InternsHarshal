import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import TodoDisplay from '../components/TodoDisplay';

const TodoDescription = prop =>{
    const id = prop.navigation.getParam('id');
    const todo = useSelector((state) => state.todo.filter((item) => item.id === id));
    return (
        <View>
            <TodoDisplay todo={todo[0]} height={'90%'} limit={100} />
        </View>
    );
};

export default TodoDescription;