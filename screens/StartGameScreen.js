import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";

export const StartGameScreen = () => {

  const [enteredNumber, setEnteredNumber] = useState(""); // use string since TextInput yields a string from user input !!

  const numberInputHandler = (inputText) => {
    setEnteredNumber(inputText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber); // converts string into number
    // isNaN is a function that returns a boolean => isNotANumber?
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!", // alert title
        "Number has to be a number between 1 & 99.", // alert message
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }], // alert button
      );
      return;
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={resetInputHandler} >Reset</PrimaryButton>
        <PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton>
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
    backgroundColor: "#3B021F",
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
    color: "#FCA310",
    borderBottomColor: "#FCA310",
    borderBottomWidth: 2, // needed to vizualize the border
  },
  buttonsContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-around"
  },
});
