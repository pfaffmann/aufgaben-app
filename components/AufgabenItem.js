import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AufgabenItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#eee",
    borderWidth: 1
  }
});

export default AufgabenItem;
