import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PreferenceScreen from "./screens/PreferenceScreen";
import HomeScreen from "./screens/HomeScreen";
import ScheduleScreen from "./screens/ScheduleScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="start">
        <Stack.Screen name="start" component={HomeScreen} />
        <Stack.Screen name="preference" component={PreferenceScreen} />
        <Stack.Screen name="schedule" component={ScheduleScreen} />

        {/* <View style={styles.container}>
          <Text>FoodNut</Text>
          <Button title="Enter Preferences" />
          <StatusBar style="auto" />
        </View> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
