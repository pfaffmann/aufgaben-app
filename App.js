import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

var counter = 0;

export default function App() {
  const [outputText, setOutputText] = useState(
    "Open up App.js to start working on your app!"
  );
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button
        title="Change Text"
        onPress={() => setOutputText("The Text changed!!")}
      />
      <Text>{counter}</Text>
      <Button title="Counter++" onPress={()=>Counterplusplus()} />
    </View>
  );
}

function Counterplusplus() {
  counter++;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
