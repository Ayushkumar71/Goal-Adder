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
            <Button title="Add Goal" color={"white"} onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color={"white"} onPress={props.onCancel} />
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
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#49475B",
    width: "95%",
    padding: 10,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#49475B",
    borderRadius: 6,
    paddingVertical: 3,
    width: 100,
    marginHorizontal: 23,
    marginTop: 8,
  },
  image: {
    marginBottom: 50,
    width: 300,
    height: 200,
    margin: 25,
  },
});
