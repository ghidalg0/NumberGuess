import { View, StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/Colors";

export const Card = ({ children }) => {
  return (
    <View style={styles.card}>{children}</View>
  )
};

const deviceWidth = Dimensions.get("window").width;

const styles= StyleSheet.create({
  card: {
    marginTop: (deviceWidth < 380) ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary900,
    // Shadow for Android
    elevation: 4,
    // Shadow for IOS
    shadowColor: "black",
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
