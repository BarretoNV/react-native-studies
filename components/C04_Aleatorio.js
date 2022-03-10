import React from "react";
import { Text } from "react-native";
import style from "./style";

export default (props) => {
  const max = props.max;
  const min = props.min;

  const numero = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <Text style={style.fontBig}>
      Este é o número: {numero}, que está entre {min} e {max}.
    </Text>
  );
};
