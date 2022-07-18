import { TextInput, View, StyleSheet } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";

export const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#72063c",
    // Shadow for Android
    elevation: 4,
    // Shadow for IOS
    shadowColor: "black",
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
