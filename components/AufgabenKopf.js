import React from "react";
import {Text} from "react-native";

const AufgabenKopf = props => {
  return <Text>{props.title+" "+props.anzErledigt+"/"+props.anzGesamt}</Text>;
};

export default AufgabenKopf;
