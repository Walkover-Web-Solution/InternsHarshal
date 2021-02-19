import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HeaderView from './components/headerView';
import BodyView from './components/BodyView';
import Colors from './constants/Colors';
import GameScreen from './Screens/GameScreen';
import GameOver from './Screens/GameOver';

export default function App() {

  const [tries, setTries] = useState(0);
  const [userNum, setUserNum] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const setUser = (num) => {
    setUserNum(num);
  }

  const endGame = () =>{
    setGameOver(true);
  }

  const addTries = (number) =>
  {
    setTries(number);
  }

  const restartGame = () =>{
    mainView = <BodyView tries={addTries} num= {tries} setUser= {setUser}/>;
    setUserNum(0);
    setGameOver(false);
    setTries(0);
  }


  let mainView = <BodyView tries={addTries} num= {tries} setUser= {setUser}/>;

  if(tries)
  {
    mainView = <GameScreen num={userNum} gameOver={endGame} tries={addTries} numTries= {tries} />
  }
  if(gameOver){
    mainView = <GameOver numTries={tries} userNum={userNum} restartGame = {restartGame}/>
    //setGameOver(false);
  }

  return (
    <View style={styles.container}>
      <HeaderView title='Game' />
      {mainView}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.primary,
    alignItems: 'center',
  },
});
