import {Pressable, PressableProps, Text, View} from "react-native";
import {styles} from "./styles";

interface IButtonProps extends PressableProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export const Button = ({children, disabled, ...props}: IButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        disabled={disabled}
        style={({pressed}) => {
          return [
            styles.button,
            pressed && styles.buttonActive,
            disabled && styles.buttonDisabled,
          ];
        }}
        android_ripple={{color: "#444"}}
        {...props}
      >
        {({pressed}) => (
          <Text
            style={[styles.buttonLabel, disabled && styles.buttonLabelDisabled]}
          >
            {children}
          </Text>
        )}
      </Pressable>
    </View>
  );
};
