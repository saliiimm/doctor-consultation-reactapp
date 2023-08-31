import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
export default function Profil({ navigation }) {
  const [switchActive, setSwitchactive] = useState(false);
  const handleSwitch = () => {
    setSwitchactive(!switchActive);
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 27, marginTop: 50, fontWeight: "800" }}>
        My Profile
      </Text>
      <View style={styles.btnsSwitch}>
        <TouchableOpacity
          style={{
            backgroundColor: switchActive ? "white" : "#26b280",
            width: "45%",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
          }}
          onPress={handleSwitch}>
          <Text style={{ color: switchActive ? "#26b280" : "white" }}>
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: switchActive ? "#26b280" : "white",
            width: "45%",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
          }}
          onPress={handleSwitch}>
          <Text style={{ color: switchActive ? "white" : "#26b280" }}>
            Notifications
          </Text>
        </TouchableOpacity>
      </View>
      {!switchActive ? (
        <View>
          <View style={styles.profileChange}>
            <Image
              source={require("../../assets/profilUnknown.png")}
              style={{
                borderRadius: 100,
                width: 70,
                height: 70,
                marginTop: 10,
                marginLeft: 15,
              }}
            />
            <View
              style={{
                marginLeft: 15,
                justifyContent: "space-around",
                height: "100%",
              }}>
              <Text style={{ fontSize: 19, fontWeight: "600" }}>
                Ghalem Salim
              </Text>
              <TouchableOpacity style={styles.btnModifier}>
                <Text style={{ color: "white", fontSize: 11 }}>Modify</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <View style={styles.params}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="settings-sharp" size={22} color="#26b280" />
                <Text
                  style={{ marginLeft: 15, fontSize: 18, fontWeight: "500" }}>
                  Settings
                </Text>
              </View>
              <AntDesign name="right" size={22} color="#26b280" />
            </View>

            <View style={styles.params}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="help-circle" size={24} color="#26b280" />
                <Text
                  style={{ marginLeft: 15, fontSize: 18, fontWeight: "500" }}>
                  Help and Support
                </Text>
              </View>
              <AntDesign name="right" size={22} color="#26b280" />
            </View>

            <View style={styles.params}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Entypo name="info-with-circle" size={22} color="#26b280" />
                <Text
                  style={{ marginLeft: 15, fontSize: 18, fontWeight: "500" }}>
                  About us
                </Text>
              </View>
              <AntDesign name="right" size={22} color="#26b280" />
            </View>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 2,
                width: 250,
                marginTop: 30,
                marginBottom: 20,
              }}
            />
            <View style={styles.params}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="md-log-in-outline" size={24} color="#26b280" />
                <Text
                  style={{ marginLeft: 15, fontSize: 18, fontWeight: "500" }}>
                  Disconnecting
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View style={{ marginTop: 25, alignItems: "center" }}>
          <Text>Partie notifs</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f5f5",
    alignItems: "center",
  },
  btnsSwitch: {
    flexDirection: "row",
    borderColor: "grey",
    backgroundColor: "white",
    borderRadius: 25,
    marginTop: 35,
  },
  profileChange: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 50,
    width: 280,
    height: 80,
  },
  btnModifier: {
    backgroundColor: "#26b280",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 30,
    borderRadius: 5,
  },
  params: {
    flexDirection: "row",
    margin: 15,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "white",
    height: 65,
    width: 320,
    borderRadius: 5,
  },
});
