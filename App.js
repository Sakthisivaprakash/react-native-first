import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  };
  const addGoalInputHandler = () => {
    // console.log(enteredGoalText);
    if (enteredGoalText) {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        enteredGoalText,
      ]);
      setEnteredGoalText("");
    }
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalInputHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {courseGoals && courseGoals.length ? (
            courseGoals.map((goal, idx) => (
              <View key={idx} style={styles.goalItem}>
                <Text style={styles.goalText}>
                  {goal}
                </Text>
              </View>
            ))
          ) : (
            <Text>List of goals...</Text>
          )}
        </ScrollView>
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",  
  },
  goalText: {
    color: "#fff",
  }
});
