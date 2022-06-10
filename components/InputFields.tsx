import React, { useEffect } from "react";
import { TextInput, View } from "react-native";

export function InputFields({
  labelName,
  dummyText,
  func,
}: {
  labelName: string;
  dummyText: string;
  func: any;
}) {
  const handleInput = () => {
    func(text);
  };
  const [text, setText] = React.useState("");
  useEffect(() => {
    handleInput();
  }, [text]);
  return (
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
          {labelName}
        </label>
        <TextInput
          style={{
            width: "60%",
            borderWidth: 1,
            height: "30px",
          }}
          onChangeText={(value: string) => {
            setText(value);
          }}
          placeholder={dummyText}
        ></TextInput>
      </View>
    </View>
  );
}
