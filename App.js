import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from "react-native";

import AufgabenItem from "./components/AufgabenItem.js";

export default function App() {
  const [aufgabe, setAufgabe] = useState("");
  const [aufgabenListe, setAufgabenListe] = useState([]);

  const aufgabenInputHandler = enteredText => {
    setAufgabe(enteredText);
  };

  const addAufgabeHandler = () => {
    setAufgabenListe(currentAufgabenListe => [
      ...currentAufgabenListe,
      { key: Math.random().toString(), value: aufgabe }
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Aufgaben"
          style={styles.textInput}
          onChangeText={aufgabenInputHandler}
          value={aufgabe}
        />
        <Button title="Add" onPress={addAufgabeHandler} />
      </View>
      <FlatList
        data={aufgabenListe}
        renderItem={itemData => <AufgabenItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: "column",
    padding: 50
  },
  containerInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1
  }
});
