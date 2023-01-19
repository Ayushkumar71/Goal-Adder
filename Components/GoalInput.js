import { useState } from "react";
import {
  TextInput,
  View,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  // provides text manually to the function in App.js(also preventing using parenthesis below)
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    // this alone doesnt let you change the textinput
    setEnteredGoalText("");
  }
  return (
    <Modal animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/Goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your goals."
          onChangeText={goalInputHandler}
          // binds textinput to the variable
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" color="#877E78" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="#877E78" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#E1DDD5",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#ADA8A8",
    width: "100%",
    padding: 10,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 25,
  },
});
