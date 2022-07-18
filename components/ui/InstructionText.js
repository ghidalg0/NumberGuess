import { Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const InstructionText = ({ children }) => {
  return (
    <Text style={styles.instructionText}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  instructionText: {
    marginBottom: 16,
    color: Colors.secondary500,
    fontSize: 24,
    alignSelf: "center",
  },
});
