import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList, Text } from "react-native";

import AufgabenItem from "./components/AufgabenItem";
import AufgabenInput from "./components/AufgabenInput";
import AufgabenKopf from "./components/AufgabenKopf";

export default function App() {
  const [aufgabenListe, setAufgabenListe] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [erledigtCounter, setErledigtCounter] = useState(0);

  const addAufgabeHandler = aufgabenText => {
    var id = Math.random().toString();
    setAufgabenListe(currentAufgabenListe => [
      ...currentAufgabenListe,
      { key: id, value: aufgabenText, istErledigt: false }
    ]);
    setIsAddMode(false);
    countErledigteAufgaben();
  };

  const cancelAufgabenHandler = () => {
    setIsAddMode(false);
  };

  const removeAufgabeHandler = aufgabeKey => {
    setAufgabenListe(currentAufgabenListe => {
      return currentAufgabenListe.filter(aufgabe => aufgabe.key !== aufgabeKey);
    });
    countErledigteAufgaben();
  };

  const checkAufgabeHandler = aufgabeKey => {
    setAufgabenListe(currentAufgabenListe => {
      return currentAufgabenListe.map(aufgabe => {
        if (aufgabe.key === aufgabeKey) {
          aufgabe.istErledigt = true;
          return aufgabe;
        } else {
          return aufgabe;
        }
      });
    });
    countErledigteAufgaben();
  };

  const countErledigteAufgaben = () => {
    var count = 0;
    if (aufgabenListe.length > 0) {
      aufgabenListe.forEach(element => {
        if (element.istErledigt) {
          count++;
        }
      });
    }
    setErledigtCounter(count);
    console.log(aufgabenListe);
  };

  const head = "Erledigte Aufgaben:";
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <AufgabenKopf
          title={head}
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
    backgroundColor: "#eee",
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
