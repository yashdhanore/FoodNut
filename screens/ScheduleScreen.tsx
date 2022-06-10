import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function PreferenceScreen({ route }) {
  const { gender, height, weight, age, target } = route.params;
  return (
    <View style={styles.container}>
      <Text>Gender: {JSON.stringify(gender)}</Text>
      <Text>Height: {JSON.stringify(height)}</Text>
      <Text>Weight: {JSON.stringify(weight)}</Text>
      <Text>Age: {JSON.stringify(age)}</Text>
      <Text>Target: {JSON.stringify(target)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
