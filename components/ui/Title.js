import { Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const Title = ({ children }) => {
  return (
    <Text style={styles.title}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#fff",
    padding: 12,
    borderRadius: 4,
  },
});
