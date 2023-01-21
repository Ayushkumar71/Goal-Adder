import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

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
    <View style={styles.appContainer}>
      <Button
        title="Add new Goal"
        color="#877E78"
        onPress={StartAddGoalHandler}
      />
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
    </View>
  );
}

// Stylesheet objects written using properties similar to that of CSS.
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 35,
    backgroundColor: "#E1DDD5",
  },
  goalsContainer: {
    flex: 5,
  },
});
