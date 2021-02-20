import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View, Text, Keyboard, Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../components/card';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import { addTodo, saveTodo } from '../store/actions/todoActions';


const Add = (prop) => {

    const [isVisibleDate, setDateVisible] = useState(false);
    const [isVisibleTime, setTimeVisible] = useState(false);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [defragmentedTime, setDefragmentedTime] = useState('');
    const [title, setTitle] = useState('');
    const [work, setWork] = useState('');
    const [id,setId] = useState(prop.navigation.getParam('id'));
    const [submitButtonTitle, setSubmitTitle] = useState("Add");

    const dispatch = useDispatch('');

    const isFromEdit = prop.navigation.getParam('from');
    const data = useSelector((state) => state.todo);

    const setParams = () => {
        if (isFromEdit == 'edit') {
            const todo = data.find((todo) => todo.id === id);
            setDate(todo.date);
            setTime(todo.time.hour + ':' + todo.time.min + " " + todo.time.suffix);
            setDefragmentedTime(todo.time);
            setTitle(todo.title);
            setWork(todo.work);
            setSubmitTitle("Save");
        }
    }

    useEffect(() => {
        setParams();
    },[isFromEdit])

const Add = () => {
    if (title.length <= 0 || work.length <= 0 || time.length <= 0 || date.length <= 0) {
        Alert.alert("Empty Todo", "Please fill required fields", [{ style: 'destructive', text: 'Okay' }]);
        return;
    }
    const data = {
        title: title,
        work: work,
        time: defragmentedTime,
        date: date,
        isMissed: false
    }
    Keyboard.dismiss();
    clearInputs();
    if (isFromEdit == 'edit') {
        dispatch(saveTodo({ id: id, ...data }));
        prop.navigation.pop();
        return;
    }
    dispatch(addTodo(data));
    prop.navigation.navigate({ routeName: 'home' })
};


const clearInputs = () => {
    setDate('');
    setTime('');
    setTitle('');
    setDefragmentedTime('');
    setWork('');
}

const hideDate = () => {
    setDateVisible(false);
}

const hideTime = () => {
    setTimeVisible(false);
}

const getDate = (object) => {
    const StringObject = object.toString().trim();
    var spaceCount = 0;
    for (var i = 0; i < StringObject.length; i++) {
        if (StringObject[i] == ' ') {
            spaceCount += 1;
        }
        if (spaceCount == 4) {
            break;
        }
    }
    setDate(StringObject.substring(0, i));
    hideDate();
}

const getTime = (object) => {
    const stringObject = object.toString().trim();
    var spaceCount = 0, start = 0, end = 0;
    for (var i = 0; i < stringObject.length; i++) {
        if (stringObject[i] == ' ') {
            spaceCount += 1;
        }
        if (spaceCount == 4) {
            start = i;
            break;
        }
    }
    for (; i < stringObject.length; i++) {
        if (stringObject[i] == ' ') {
            spaceCount += 1;
        }
        if (spaceCount == 5) {
            end = i;
        }
    }
    const completeTime = stringObject.substring(start, end).trim();
    const hourString = completeTime.substring(0, 2);
    var hour = parseInt(hourString);
    var suffix = 'am';
    if (hour >= 12) {
        hour -= 12;
        suffix = 'pm';
    }
    const defragmentedTime = {
        hour: hour,
        min: completeTime.substring(3, 5),
        suffix: suffix
    };
    setDefragmentedTime(defragmentedTime);
    setTime(defragmentedTime.hour + ":" + defragmentedTime.min + " " + defragmentedTime.suffix);
    hideTime();
}

return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior='height'>
        <DateTimePickerModal
            mode='date'
            isVisible={isVisibleDate}
            onConfirm={getDate}
            onCancel={hideDate} />
        <DateTimePickerModal
            mode='time'
            isVisible={isVisibleTime}
            onConfirm={getTime}
            onCancel={hideTime} />
        <Card style={styles.Card}>
            <View style={styles.inputContainer}  >
                <CustomTextInput
                    placeholder='Title'
                    onChangeText={setTitle}
                    value={title}
                />
                <CustomTextInput
                    placeholder="Work"
                    onChangeText={setWork}
                    value={work}
                />
                <View style={styles.dateTimeContainer} >
                    <View style={styles.dateTimeSubContainer}>
                        <CustomButton
                            title="Set Date"
                            style={styles.dateTime}
                            onPress={() => {
                                Keyboard.dismiss();
                                setDateVisible(true)
                            }}
                        />
                        <Text style={styles.displayText}>{date}</Text>
                    </View>
                    <View style={styles.dateTimeSubContainer}>
                        <CustomButton
                            title='Set Time'
                            style={styles.dateTime}
                            onPress={() => {
                                Keyboard.dismiss();
                                setTimeVisible(true)
                            }}
                        />
                        <Text style={styles.displayText}>{time}</Text>
                    </View>
                </View>
            </View>

            <CustomButton
                title={submitButtonTitle}
                onPress={Add}
                style={styles.add}
                textStyle={styles.addTextStyle}
            />
        </Card>
    </KeyboardAvoidingView>);
}


const styles = StyleSheet.create({
    Card: {
        height: '60%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        marginBottom: 50,
    },

    inputContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        marginBottom: 10,
        marginTop: -5
    },
    dateTimeContainer: {
        flexDirection: 'row',
        height: '50%',
        width: '100%',
        alignItems: 'flex-end'
    },
    dateTime: {
        flex: 1,
        alignSelf: 'baseline',
    },
    add: {
        height: '15%',
        elevation: 10,
    },
    addTextStyle: {
        elevation: 10
    },
    dateTimeSubContainer: {
        flex: 1,
        height: '50%',
        margin: 10,
    },
    displayText: {
        fontSize: 10,
        alignSelf: 'center',
    }
});

export default Add;