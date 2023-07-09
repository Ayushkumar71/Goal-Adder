import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { SafeAreaView } from "react-native";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
  // the type of data inside usestate() is the same type we are storing in the state.
  // the usestate function gets previous state as an argument.
  // and the returned value from above is used to update the state.
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function StartAddGoalHandler() {
    setModalIsVisible(true);
  }

  function EndAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);

    console.log(enteredGoalText, " at index: ", courseGoals.length);
    EndAddGoalHandler();
  }

  // was using curly braces inside => w/o return
  // which means i wasnt providing with anything to update the courseGoals -_-
  // hence the courseGoals is undefined error -_-
  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== id)
    );
  }

  // JSX below
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.Button}
          color={"white"}
          title="Add Goal"
          onPress={StartAddGoalHandler}
        />
      </View>
      {modalIsVisible && (
        <GoalInput onAddGoal={addGoalHandler} onCancel={EndAddGoalHandler} />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            // renderItem receives the metadata element'wise by react
            // that why we use .item to access the our props.
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </SafeAreaView>
  );
}

// Stylesheet objects written using properties similar to that of CSS.
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#E1DDD5",
  },
  goalsContainer: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 100,
    marginHorizontal: 40,
    paddingVertical: 4,
    backgroundColor: "#49475B",
    borderRadius: 10,
  },
  Button: {
    flex: 1,
    borderColor: "#000000C1",
    borderRadius: 10,
    borerwidth: 1,
  },
});
