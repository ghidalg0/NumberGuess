import { TextInput, View, StyleSheet } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";

export const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
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
  numberInput: {
    alignSelf: "center",
    marginVertical: 8,
    height: 50,
    width: 100,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: "#ddb52f",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2, // needed to vizualize the border
  },
});
