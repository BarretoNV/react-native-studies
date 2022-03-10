import React from "react";
import { Text } from "react-native";
import style from "./style";

export default (props) => {
  const max = props.max > props.min ? props.max : props.min;
  const min = props.min < props.max ? props.min : props.max;

  return (
    <Text style={style.fontBig}>
      O número {max} é maior que o número {min}.
    </Text>
  );
};
