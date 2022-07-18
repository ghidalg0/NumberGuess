import { View, Text, Pressable, StyleSheet } from "react-native";

export const PrimaryButton = ({ children, onPress }) => { // here, naming onPress the prop is up to me
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={
          ({ pressed }) =>
          pressed ?
          [styles.pressed, styles.buttonInnerContainer] :
          styles.buttonInnerContainer
        } // property named pressed, cannot change the name, => boolean = true when pressed
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
    width: "45%",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2, //only on Android
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
