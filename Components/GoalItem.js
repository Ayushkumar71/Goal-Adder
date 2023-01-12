import { StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 6,
    borderRadius: 8,
    backgroundColor: "#877E78",
    color: "white",
  },
  goalText: {
    color: "white",
  },
});
