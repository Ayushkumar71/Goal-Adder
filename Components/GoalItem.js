import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    // Logical error below, all elements getting deleted.
    // and the elements are instead made undefined hindering adding new elements.
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginTop: 40,
    marginHorizontal: 40,
    padding: 11,
    borderRadius: 6,
    backgroundColor: "#877E78",
    color: "white",
  },
  goalText: {
    color: "white",
    fontsize: 45,
    fontWeight: "bold",
  },
});
