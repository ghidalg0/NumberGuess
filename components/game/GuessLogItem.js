import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";

export const GuessLogItem = ({roundNumber, guess}) => {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess : {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 12,
    marginVertical: 8,
    borderColor: Colors.primary900,
    borderWidth: 1,
    borderRadius: 40,
    backgroundColor: Colors.secondary500,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {width : 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
