import React from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = prop => {
  return (
    <Modal visible={prop.visiblity} animationType="slide">
      <View style={styles.view1}>
        <TextInput placeholder={prop.placeholder}
          style={styles.inputStyle}
          onChangeText={prop.inputTextHandler}
        />
        <View style={styles.Btn}>
          <Button
            title='Cancel'
            onPress={prop.modalClose}
          />
        </View>
        <View style={styles.Btn}>
          <Button
            title='Add'
            onPress={prop.addGoalHandler}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  view1: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputStyle: {
    padding: 10,
    borderBottomColor: 'black',
    marginBottom: 20,
    borderWidth: 1,
    width: '80%'
  },
  Btn: {
    marginVertical: 5,
    marginBottom:10,
    width: '50%'
  }
})

export default GoalInput;