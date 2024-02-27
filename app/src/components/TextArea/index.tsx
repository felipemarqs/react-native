import React, {forwardRef, useState} from "react";
import {TextInput, TextInputProps} from "react-native";
import {styles} from "./styles";

interface IInputProps extends TextInputProps {}

export const TextArea = forwardRef<TextInput, IInputProps>((props, ref) => {
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  return (
    <TextInput
      style={[styles.input, isEmailFocused && styles.inputFocused]}
      onFocus={() => setIsEmailFocused(true)}
      onBlur={() => setIsEmailFocused(false)}
      placeholderTextColor="#fff"
      textAlignVertical="top"
      {...props}
      ref={ref}
      multiline
      //onContentSizeChange={(event) => console.log(event.nativeEvent)}
    />
  );
});
