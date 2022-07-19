import { Image, StyleSheet, Text, View, useWindowDimensions, ScrollView } from "react-native";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Title } from "../components/ui/Title";
import { Colors } from "../constants/Colors";


export const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {

  const {width, height} = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.screenContainer}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            source={require("../assets/images/success.jpg")}
            style={styles.image}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text> 🔥
        </Text>
        <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  screenContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    overflow: "hidden",
    // borderRadius: deviceWidth < 380 ? 75 : 150, // need so be half w and h to make it round
    borderWidth: 3,
    borderColor: Colors.primary900,
    alignSelf: "center",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: "open-sans",
    color: Colors.primary500,
    fontWeight: "bold",
  },
});
