import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ ...styles.titleText, fontWeight: "bold" }}>
          The first app of Sakthi
        </Text>
      </View>
      <Text style={styles.titleText}>Hello World!!!</Text>
      <Button title="Tap me !" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    margin: 15,
    borderWidth: 1,
    borderColor: "blue",
    padding: 15,
  },
});
