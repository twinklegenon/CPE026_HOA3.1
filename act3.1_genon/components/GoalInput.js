import { Text, View, Pressable, TextInput, Button, StyleSheet} from 'react-native'; 
import React, { useState } from 'react';

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      };
    
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');

    }

  return (
    <View style={styles2.inputContainer}>
      <TextInput placeholder='Your Course Goal'style={styles2.inputText}
        onChangeText={goalInputHandler} value={enteredGoalText} />
      <Pressable style ={styles2.addButton}
        onPress = {addGoalHandler}
        unstable_pressDelay={3000}>
      <Text style={styles2.buttonText}>Add Goal</Text>
      </Pressable>
    </View>
  );
}

const styles2 = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#282321',
    },
    inputText: {
        borderWidth: 2,
        color: 'black',                         //edit
        width: '70%',
        marginRight: 12,
        padding: 13,
        borderColor: '#61564A',
        borderRadius: 8,
        backgroundColor: '#B3AEA4',
        fontSize: 16,
      }
});