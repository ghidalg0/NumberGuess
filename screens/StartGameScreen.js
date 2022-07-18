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
      <View style={styles.buttonsContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#4E0329",
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
    width: 150,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: "#ddb52f",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2, // needed to vizualize the border
  },
  buttonsContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-around"
  },
});
