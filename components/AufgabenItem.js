import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const AufgabenItem = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onLongPress={props.onDelete.bind(this, props.id)}
      onPress={props.onCheck.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: 10,
    marginRight: 10,
    backgroundColor: "#eee",
    borderWidth: 1
  }
});

export default AufgabenItem;
