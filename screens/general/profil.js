import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import {
  Ionicons,
  AntDesign,
  Entypo,
  Fontisto,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
export default function Profil({ navigation }) {
  const [switchActive, setSwitchactive] = useState(false);
  const handleSwitch = () => {
    setSwitchactive(!switchActive);
  };

  const NotifData = [
    {
      id: "01",
      sender: "Dr Ghalem",
      type: "congé",
      debutconge: "20/01/2024",
      finconge: "15/02/2024",
      message: "Je ne serais pas disponible car je serais en periode de congé.",
      time: "20 min ago",
    },
    {
      id: "02",
      sender: "Dr Ouahabbi",
      type: "maladie",
      message:
        "Je ne serais pas disponible demain car malade,nous sommes désolé du désagrement ,si vous avez prit un rendez vous pour ce jour ci il sera reporté à une date ultérieure",
      time: "2 weeks ago",
    },
    {
      id: "03",
      sender: "Dr Medjber",
      type: "confirm",
      date: "03/01/2004",
      message: "Votre rendez vous a été confirmé.",
      time: "1 hour ago",
    },
    {
      id: "04",
      sender: "Dr Chouiref",
      type: "dossier",
      message: "Vous avez reçu de nouveaux dossiers.",
      time: "2 hours ago",
    },
  ];
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
        <ScrollView>
          <View style={{ marginTop: 25, alignItems: "center", width: "100%" }}>
            <FlatList
              style={styles.notifs}
              data={NotifData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                if (item.type === "congé") {
                  return (
                    <View style={[styles.notifsCard, { marginHorizontal: 15 }]}>
                      <View style={styles.notifHeader}>
                        <View style={styles.headerIcon}>
                          <Text style={styles.HeaderColor}>{item.sender}</Text>
                          <Fontisto
                            name="holiday-village"
                            size={22}
                            color="#E0CDA9"
                            style={styles.notifIcons}
                          />
                        </View>

                        <Text style={styles.HeaderColor}>{item.time}</Text>
                      </View>

                      <Text style={styles.message}>{item.message}</Text>
                      <Text
                        style={[styles.date, { padding: 5, paddingLeft: 10 }]}>
                        Début congé:{item.debutconge}
                      </Text>
                      <Text
                        style={[
                          styles.date,
                          { padding: 5, paddingLeft: 10, paddingBottom: 10 },
                        ]}>
                        Fin congé :{item.finconge}
                      </Text>
                    </View>
                  );
                } else if (item.type === "confirm") {
                  return (
                    <View style={[styles.notifsCard, { marginHorizontal: 15 }]}>
                      <View style={styles.notifHeader}>
                        <View style={styles.headerIcon}>
                          <Text style={styles.HeaderColor}>{item.sender}</Text>
                          <Ionicons
                            name="checkmark-circle-sharp"
                            size={22}
                            color="#26b280"
                            style={styles.notifIcons}
                          />
                        </View>

                        <Text style={styles.HeaderColor}>{item.time}</Text>
                      </View>
                      <Text style={styles.message}> {item.message}</Text>
                      <Text style={styles.date}>Date du RDV : {item.date}</Text>
                    </View>
                  );
                } else if (item.type === "dossier") {
                  return (
                    <View style={[styles.notifsCard, { marginHorizontal: 15 }]}>
                      <View style={styles.notifHeader}>
                        <View style={styles.headerIcon}>
                          <Text style={styles.HeaderColor}>{item.sender}</Text>
                          <FontAwesome5
                            name="file-pdf"
                            size={22}
                            color="red"
                            style={styles.notifIcons}
                          />
                        </View>

                        <Text style={styles.HeaderColor}>{item.time}</Text>
                      </View>
                      <Text style={[styles.message, {}]}>{item.message}</Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-end",
                          paddingRight: 25,
                        }}>
                        <TouchableOpacity style={styles.btnTelecharger}>
                          <Text style={{ color: "white", fontWeight: "600" }}>
                            Télécharger
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                } else {
                  return (
                    <View style={[styles.notifsCard, { marginHorizontal: 15 }]}>
                      <View style={styles.notifHeader}>
                        <View style={styles.headerIcon}>
                          <Text style={styles.HeaderColor}>{item.sender}</Text>
                          <MaterialIcons
                            name="sick"
                            size={23}
                            color="#5472AE"
                            style={styles.notifIcons}
                          />
                        </View>

                        <Text style={styles.HeaderColor}>{item.time}</Text>
                      </View>

                      <Text style={[styles.message, {}]}>{item.message}</Text>
                    </View>
                  );
                }
              }}
            />
          </View>
        </ScrollView>
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
  notifsCard: {
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  notifHeader: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  HeaderColor: {
    color: "grey",
  },
  message: {
    color: "black",
    padding: 10,
    fontWeight: "500",
    fontSize: 15,
  },
  date: {
    color: "#26b280",
    padding: 10,
    fontWeight: "500",
    fontSize: 13,
  },
  btnTelecharger: {
    width: 110,
    height: 35,
    backgroundColor: "#26b280",
    marginBottom: 10,
    marginLeft: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  notifIcons: {
    marginLeft: 10,
  },
  headerIcon: { flexDirection: "row" },
});
