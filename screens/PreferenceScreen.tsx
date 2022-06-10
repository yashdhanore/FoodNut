import React, { useEffect } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { InputFields } from "../components/InputFields";

export default function PreferenceScreen({ navigation }: { navigation: any }) {
  const pref = {
    Gender: String,
    Height: Number,
    Weight: Number,
    Age: Number,
    Target: Number,
  };

  const [gender, setGender] = React.useState("");
  const [height, setHeight] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  const [age, setAge] = React.useState(0);
  const [target, setTarget] = React.useState(0);

  console.log("gender: ", gender);

  // const pull_data = (data: any) => {
  //   pref.Gender = data;
  //   pref.Height = data;
  //   console.log("from pref screen", data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  // };
  return (
    <View style={styles.container}>
      <View
        style={{
          marginBottom: "10px",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <label
            style={{
              width: "40%",
              float: "left",
            }}
          >
            Gender
          </label>
          <TextInput
            style={{
              width: "60%",
              borderWidth: 1,
              height: "30px",
            }}
            onChangeText={(value: string) => {
              setGender(value);
            }}
            placeholder={""}
          ></TextInput>
        </View>
      </View>
      <View
        style={{
          marginBottom: "10px",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <label
            style={{
              width: "40%",
              float: "left",
            }}
          >
            Height
          </label>
          <TextInput
            style={{
              width: "60%",
              borderWidth: 1,
              height: "30px",
            }}
            onChangeText={(value: string) => {
              setHeight(value as unknown as number);
            }}
            placeholder={"in cms"}
          ></TextInput>
        </View>
      </View>
      <View
        style={{
          marginBottom: "10px",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <label
            style={{
              width: "40%",
              float: "left",
            }}
          >
            Weight
          </label>
          <TextInput
            style={{
              width: "60%",
              borderWidth: 1,
              height: "30px",
            }}
            onChangeText={(value: string) => {
              setWeight(value as unknown as number);
            }}
            placeholder={"in cms"}
          ></TextInput>
        </View>
      </View>
      <View
        style={{
          marginBottom: "10px",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <label
            style={{
              width: "40%",
              float: "left",
            }}
          >
            Age
          </label>
          <TextInput
            style={{
              width: "60%",
              borderWidth: 1,
              height: "30px",
            }}
            onChangeText={(value: string) => {
              setAge(value as unknown as number);
            }}
            placeholder={"in cms"}
          ></TextInput>
        </View>
      </View>
      <View
        style={{
          marginBottom: "10px",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <label
            style={{
              width: "40%",
              float: "left",
            }}
          >
            Target
          </label>
          <TextInput
            style={{
              width: "60%",
              borderWidth: 1,
              height: "30px",
            }}
            onChangeText={(value: string) => {
              setTarget(value as unknown as number);
            }}
            placeholder={"in cms"}
          ></TextInput>
        </View>
      </View>

      {/* <InputFields
        labelName={"Gender"}
        dummyText={""}
        func={pull_data}
      ></InputFields>
      <InputFields
        labelName={"Height"}
        dummyText={"in cms"}
        func={pull_data}
      ></InputFields> */}
      {/* <InputFields labelName={"Weight"} dummyText={"in kgs"}></InputFields>
      <InputFields labelName={"Age"} dummyText={""}></InputFields>
      <InputFields
        labelName={"Target weight"}
        dummyText={"in kgs"}
      ></InputFields> */}

      <Button
        title="Schedule"
        onPress={() =>
          navigation.navigate("schedule", {
            gender: gender,
            height: height,
            weight: weight,
            age: age,
            target: target,
          })
        }
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
