import React, { useEffect } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TodoDisplay from '../components/TodoDisplay';
import * as TodoActions from '../store/actions/todoActions';

const Home = (prop) => {
    
    const dispatch = useDispatch();

    const data = useSelector((state) => state.todo);

    const openTodoData = (todo) =>{
        prop.navigation.navigate({routeName:'TodoDescription', params:{
            id:todo.id
        }});
    };
    var dateObj = new Date();
    const checkMissings = () =>{
        dateObj = new Date();
        for(var i=0;i<data.length;i++)
        {
           const todoDate = data[i].date.substring(8,10);
           if(parseInt(todoDate) < dateObj.getDate())
           {
               data[i].isMissed = true;
           }
           else if(parseInt(todoDate) === dateObj.getDate())
           {
               const todoHour = data[i].time.hour;
               if(data[i].time.suffix == 'pm')
               {
                   todoHour = todoHour+12;
               }
               if(dateObj.getHours() > todoHour)
               {
                   data[i].isMissed = true;
               }
               else if(dateObj.getHours() === todoHour && data[i].time.min < dateObj.getMinutes() )
               {
                   data[i].isMissed = true;
               }
           }
        }
    }

    useEffect(() =>{
        dispatch(TodoActions.fetchTodo(dispatch));
        checkMissings();
    },[dispatch]);

    return (
            <ScrollView>
                {data.map((todo) => 
                <TouchableOpacity key={Math.random().toString()} onPress={openTodoData.bind(this,todo)} >
                    <TodoDisplay todo={todo} height={200} limit={3} isRed={true}/>
                </TouchableOpacity>
                )}
            </ScrollView>
    );
}

export default Home;