import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
} from "react-native";

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logoApp.png")} style={styles.img} />
      <TouchableNativeFeedback
        onPress={() => navigation.navigate("GetStarted1")}
        style={styles.button}>
        <Text style={styles.title}>Doctor Hunt</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 90,
    height: 90,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
  },
});
