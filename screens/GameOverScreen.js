import { Image, StyleSheet, Text, View } from "react-native";
import { Title } from "../components/ui/Title";
import { Colors } from "../constants/Colors";


export const GameOverScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.jpg")}
          style={styles.imageStyle}
        />
      </View>
      <View>
        <Text>You phone needed x rounds to guess the number y 🔥</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    overflow: "hidden",
    borderRadius: 150, // need so be half w and h to make it round
    borderWidth: 3,
    borderColor: Colors.primary900,
    alignSelf: "center",
    margin: 36,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
});
