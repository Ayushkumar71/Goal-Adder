import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";

export default function App() {
  // This is used to define the current state and function which is used to update that state.
  // the type of data inside usestate() is the same type we are storing in the state.
  const [courseGoals, setCourseGoals] = useState([]);

  // Responsible for updating the couseGoals list using the previous state and appending enteredGoalText.
  // the arrow function automatically receives existing state( of component usestate is used on) by react.
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  // JSX below
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            // props written below can be accessed using the argument there.
            // renderItem gets the data as an element by react.
            return <GoalItem text={itemData.item.text} />;
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
