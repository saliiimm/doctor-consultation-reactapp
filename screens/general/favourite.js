import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Favourite({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Favourite</Text>
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
});
