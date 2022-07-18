import { Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const InstructionText = ({ children, style }) => {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.secondary500,
    fontSize: 24,
    alignSelf: "center",
  },
});
