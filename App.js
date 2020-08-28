import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal,setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) =>{
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputConatiner}>
        <TextInput placeholder="Course Goal" style={styles.TextInput} onChangeText={goalInputHandler} value ={enteredGoal}/>
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <View>
  {courseGoals.map((goal) => {return <Text key={goal}> {goal}</Text>} )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  TextInput: {
    width: 200,
    borderBottomColor: 'black',
    borderBottomWidth: 1, padding: 10
  },

  inputConatiner: {
    flexDirection: 'row',
     justifyContent: 'space-between', 
     alignItems: 'center'

  }
})