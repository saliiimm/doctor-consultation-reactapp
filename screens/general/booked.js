import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Booked({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Booked</Text>
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
