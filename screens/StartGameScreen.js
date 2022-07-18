import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Title } from "../components/ui/Title";
import { Colors } from "../constants/Colors";
import { Card } from "../components/ui/Card";
import { InstructionText } from "../components/ui/InstructionText";

export const StartGameScreen = ({ onPickNumber }) => {

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
    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Number Guesser</Title>
      <Card>
        <InstructionText>Pick a number</InstructionText>
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
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    alignSelf: "center",
    marginVertical: 8,
    height: 50,
    width: 150,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.secondary500,
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 2, // needed to vizualize the border
  },
  buttonsContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-around"
  },

});
