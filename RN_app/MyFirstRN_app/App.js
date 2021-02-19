import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Alert } from 'react-native';
import GoalView from './components/GoalView';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoal, fillGoal] = useState('');
  const [courseGoals, setGoals] = useState([]);
  const [visible, setVisiblity] = useState(false);

  const GoalDeleteHandler = (goalId) => {
    console.log("executed" + goalId);
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const inputTextHandler = (enteredText) => {
    fillGoal(enteredText);
  }

  const closeModal = () => {
    fillGoal('');
    setVisiblity(false);
  }

  const addGoalHandler = () => {
    if (enteredGoal.length <= 0) {
      Alert.alert('Empty Goal', 'You cannot add empty goals', [{ text: 'Okay', style: 'destructive' }]);
    }
    else {
      setVisiblity(false);
      fillGoal('');
      setGoals(currentState => [...currentState, { id: Math.random().toString(), value: enteredGoal }]);
    }
  }

  return (
    <View style={styles.main}>
      <Button title='Add new Goal' onPress={() => setVisiblity(true)} />
      <GoalInput
        placeholder='Course Goal'
        visiblity={visible}
        modalClose={closeModal}
        inputTextHandler={inputTextHandler}
        addGoalHandler={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalView
          id={itemData.item.id}
          title={itemData.item.value}
          DeleteHandler={GoalDeleteHandler}
        />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 50
  },
});
