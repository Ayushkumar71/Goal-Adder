import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    // Logical error below, all elements getting deleted.
    // and the elements are instead made undefined hindering adding new elements.
    <View style={styles.goalItem}>
      <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 14,
    padding: 6,
    borderRadius: 4,
    backgroundColor: "#877E78",
    color: "white",
  },
  goalText: {
    color: "white",
  },
});
