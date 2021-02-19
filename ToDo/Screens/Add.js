import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View, Text, Keyboard, Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch } from 'react-redux';

import Card from '../components/card';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import { addTodo } from '../store/actions/todoActions';


const Add = (prop) => {

    const [isVisibleDate, setDateVisible] = useState(false);
    const [isVisibleTime, setTimeVisible] = useState(false);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [title, setTitle] = useState('');
    const [work, setWork] = useState('');
    const dispatch = useDispatch('');

    const Add = () => {
        if(title.length <= 0 || work.length <=0 || time.length <= 0 || date.length <= 0)
        {
            Alert.alert("Empty Todo", "Please fill required fields", [{style:'destructive', text:'Okay'}]);
            return;
        }
        const data = {
            title: title,
            work: work,
            time: time,
            date: date,
            isMissed: false
        }
        dispatch(addTodo(data));
        Keyboard.dismiss();
        clearInputs();
        prop.navigation.navigate({routeName:'home'})
    }

    const clearInputs = () => {
        setDate('');
        setTime('');
        setTitle('');
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
        console.log(object.toString().trim());
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
        setTime(stringObject.substring(start, end));
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
                    title="Add"
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
        flex: 1,
        width: '100%',
    },
    dateTime: {
        flex: 1,
        alignSelf: 'flex-end',
        marginBottom: 0
    },
    add: {
        height: '15%',
        elevation: 10
    },
    addTextStyle: {
        elevation: 10
    },
    dateTimeSubContainer: {
        flex: 1,
        height: '70%',
        alignSelf: 'flex-end',
        margin: 10
    },
    displayText: {
        fontSize: 10,
        alignSelf: 'center',
    }
});

export default Add;