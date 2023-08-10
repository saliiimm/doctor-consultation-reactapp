import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Profil({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Profil</Text>
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
