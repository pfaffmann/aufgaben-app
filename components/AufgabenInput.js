import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const AufgabenInput = props => {
  const [aufgabe, setAufgabe] = useState("");

  const aufgabenInputHandler = enteredText => {
    setAufgabe(enteredText);
  };
  const addAufgabeHandler = () => {
    props.onAddAufgabe(aufgabe);
    setAufgabe("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Aufgaben"
          style={styles.textInput}
          onChangeText={aufgabenInputHandler}
          value={aufgabe}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Abbrechen" color="grey" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Hinzufügen" onPress={addAufgabeHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#333"
  },
  containerInput: {
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    marginBottom: 10,
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%"
  },
  button: {
    width: "40%"
  }
});

export default AufgabenInput;
