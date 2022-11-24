import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  // the useState hook looks like it updates "enteredGoalText", whenever "setEnteredGoalText" is called with an argument.
  // Write this down in notes with a bracket saying that the words may be a little off.
  const [enteredGoalText, setEnteredGoalText] = useState('');


  // Handler function for input text and button.
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);

  }
  function addGoalHandler() {
    console.log(enteredGoalText);
  }

  // JSX below
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your goals.' onChangeText={goalInputHandler}/>
        <Button title='Add Goal'onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>
          List of Goals
        </Text>
      </View>
    </View>
  );
}

// Stylesheet objects written using properties similar to that of CSS.
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 35,
  },
  inputContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,   
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 4,
  },
  goalsContainer: {
    // Start from here
    flex: 5,
  },
}); 
