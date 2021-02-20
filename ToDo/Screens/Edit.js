import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';
import TodoDisplay from '../components/TodoDisplay';

const Edit = (prop) =>{
    const data = useSelector((state) => state.todo);

    const toEditScreen = (id) =>{
        prop.navigation.navigate({routeName:'ModifiedAddScreen', params:{
            from:'edit',
            id:id
        }});
    }

    return (
            <ScrollView>
                {data.map((todo) => 
                <TouchableOpacity key={Math.random().toString()} onPress={toEditScreen.bind(this,todo.id)} >
                    <TodoDisplay todo={todo} height={200} limit={3} isRed={false}/>
                </TouchableOpacity>
                )}
            </ScrollView>
    );
}

export default Edit;