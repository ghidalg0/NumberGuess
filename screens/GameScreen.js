import { useEffect, useState } from "react";
import { View, StyleSheet, Alert, FlatList, Text } from "react-native";
import { NumberContainer } from "../components/game/NumberContainer";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Title } from "../components/ui/Title";
import { Card } from "../components/ui/Card";
import { InstructionText } from "../components/ui/InstructionText"
import { Ionicons } from "@expo/vector-icons"
import { GuessLogItem } from "../components/game/GuessLogItem";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min ;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export const GameScreen = ({ userNumber, onGameOver }) => {

  const initialGuess = generateRandomBetween(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const [guessRounds, setGuessRounds] = useState([]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, [])

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    };
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction) => { // "lower" or "greater"
    if ((direction === "lower" && currentGuess < userNumber) || (direction === "greater" && currentGuess > userNumber))
    {
      Alert.alert(
        "Don't lie!",
        "You know that this is wrong...",
        [{ text: "Sorry!", style: "cancel" }]
      );
      return;
    };

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const nextRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(nextRndNumber);
    setGuessRounds(prevGuessRounds => [nextRndNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card>
        <InstructionText style={styles.instructionTextObject} >Higher or lower ?</InstructionText>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")} >
            <Ionicons name="remove" size={24} color={"#fff"}/>
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")} >
            <Ionicons name="add" size={24} color={"#fff"}/>
          </PrimaryButton>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} rather use flatlist */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) =>
            <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />
          }
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  instructionTextObject: {
    marginBottom: 24,
  },
  listContainer: {
    marginTop: 16,
  },
});
