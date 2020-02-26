import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList, Text } from "react-native";

import AufgabenItem from "./components/AufgabenItem";
import AufgabenInput from "./components/AufgabenInput";
import AufgabenKopf from "./components/AufgabenKopf";

var count;

export default function App() {
  const [aufgabenListe, setAufgabenListe] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [erledigtCounter, setErledigtCounter] = useState(0);
  const [updated, setUpdated] = useState(false);

  const addAufgabeHandler = aufgabenText => {
    var id = Math.random().toString();
    setAufgabenListe(currentAufgabenListe => [
      ...currentAufgabenListe,
      { key: id, value: aufgabenText, istErledigt: 0 }
    ]);
    setIsAddMode(false);
    setUpdated(true);
  };

  const cancelAufgabenHandler = () => {
    setIsAddMode(false);
  };

  const removeAufgabeHandler = aufgabeKey => {
    setAufgabenListe(currentAufgabenListe => {
      return currentAufgabenListe.filter(aufgabe => aufgabe.key !== aufgabeKey);
    });
    setUpdated(true);
  };

  const checkAufgabeHandler = aufgabeKey => {
    setAufgabenListe(currentAufgabenListe => {
      return currentAufgabenListe.map(aufgabe => {
        if (aufgabe.key === aufgabeKey) {
          if (aufgabe.istErledigt === 0) {
            var tmp = aufgabe.value;
            aufgabe.value = String.fromCodePoint(0x2714,0xfe0f) + " Erledigt: " + tmp; //Unicode String für grünen Haken
          }
          aufgabe.istErledigt = 1;
          return aufgabe;
        } else {
          return aufgabe;
        }
      });
    });
    setUpdated(true);
  };

  if (updated) {
    count = 0;
    aufgabenListe.forEach(element => {
      count += element.istErledigt;
    });
    setUpdated(false);
    setErledigtCounter(count);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <AufgabenKopf
          title={"Erledigte Aufgaben: "}
          anzErledigt={erledigtCounter}
          anzGesamt={aufgabenListe.length}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.list}>
          <FlatList
            data={aufgabenListe}
            renderItem={itemData => (
              <AufgabenItem
                id={itemData.item.key}
                onDelete={removeAufgabeHandler}
                onCheck={checkAufgabeHandler}
                title={itemData.item.value}
              />
            )}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Aufgabe hinzufügen"
            onPress={() => setIsAddMode(true)}
          />
        </View>

        <AufgabenInput
          visible={isAddMode}
          onAddAufgabe={addAufgabeHandler}
          onCancel={cancelAufgabenHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {},
  body: {
    flexDirection: "column",
    padding: 20
  },
  header: {
    backgroundColor: "#dedede",
    height: "10%",
    alignItems: "center",
    justifyContent: "center"
  },
  list: {
    height: "85%",
    margin: 5
  },
  button: {
    height: "5%",
    margin: 5
  }
});
