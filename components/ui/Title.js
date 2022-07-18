import { Text, StyleSheet } from "react-native";


export const Title = ({ children }) => {
  return (
    <Text style={styles.title}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#fff",
    padding: 12,
    borderRadius: 4,
  },
});
