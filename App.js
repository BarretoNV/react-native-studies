import React from "react";
import { View, StyleSheet } from "react-native";

import MinMax from "./components/C03_MinMax.js";
import Aleatorio from "./components/C04_Aleatorio";

export default () => (
  <View style={styles.App}>
    <MinMax min={50} max={20} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
  </View>
);

const styles = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
