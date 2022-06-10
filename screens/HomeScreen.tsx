import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        title="Enter Preferences"
        onPress={() => navigation.navigate("preference")}
      ></Button>
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
