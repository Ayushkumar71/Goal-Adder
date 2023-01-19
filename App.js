import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
  // This is used to define the current state and function which is used to update that state.
  // the type of data inside usestate() is the same type we are storing in the state.
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function StartAddGoalHandler() {
    setModalIsVisible(true);
  }

  function EndAddGoalHandler() {
    setModalIsVisible(false);
  }

  // the error occurs when we create a new element after deleting previous ones.
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    EndAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    // seems like the below code is leaving the element undefined and not actually removing it.
    // setCourseGoals((currentCourseGoals) => {
    //   currentCourseGoals.filter((goal) => {
    //     goal.id !== id;
    //   });
    // });
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
            // renderItem gets the data as metadata element'wise by react(use .item to access the data).
            // props written below can be accessed using the argument there.
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
