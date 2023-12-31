import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  EvilIcons,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

export default function Home({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  const FlatListData = [
    {
      id: "01",
      image: <FontAwesome name="heartbeat" size={35} color="white" />,
      backgroundColor: "#3da4ab",
    },
    {
      id: "02",
      image: (
        <EvilIcons
          name="eye"
          size={55}
          color="white"
          style={{ marginBottom: 12 }}
        />
      ),
      backgroundColor: "#adcbe3",
    },
    {
      id: "03",
      image: <FontAwesome5 name="brain" size={35} color="white" />,
      backgroundColor: "#26b280",
    },
    {
      id: "04",
      image: <FontAwesome5 name="tooth" size={35} color="white" />,
      backgroundColor: "#FE7F44",
    },
    {
      id: "05",
      image: (
        <MaterialCommunityIcons name="account-injury" size={35} color="white" />
      ),
      backgroundColor: "#f6cd61",
    },
    {
      id: "06",
      image: <MaterialIcons name="pregnant-woman" size={40} color="white" />,
      backgroundColor: "#dec3c3",
    },
    {
      id: "07",
      image: <FontAwesome5 name="baby" size={35} color="white" />,
      backgroundColor: "#f4b6c2",
    },
  ];

  const DoctorData = [
    {
      id: "01",
      image: require("../../assets/doteurHomme.jpeg"),
      name: "Dr.Salim",
      speciality: "Neurologist",
      Stars: "⭐⭐⭐⭐⭐",
      prixHeure: "300",
    },
    {
      id: "02",
      image: require("../../assets/surgeon.jpg"),
      name: "Dr. Sidali",
      speciality: "I AM A SURGEON",
      Stars: "⭐⭐⭐⭐⭐",
      prixHeure: "150",
    },
    {
      id: "03",
      image: require("../../assets/medfemme2.jpeg"),
      name: "Dr. Soundous",
      speciality: "Gynecologist",
      Stars: "⭐⭐⭐",
      prixHeure: "99",
    },
    {
      id: "04",
      image: require("../../assets/shydoctor.jpeg"),
      name: "Dr. Mayassa",
      speciality: "Ophtalmologue",
      Stars: "⭐⭐",
      prixHeure: "17",
    },
    {
      id: "05",
      image: require("../../assets/indiandoctor.jpeg"),
      name: "Dr. Grey",
      speciality: "Psychiatry",
      Stars: "⭐",
      prixHeure: "22",
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={[styles.header, { width: screenWidth }]}>
          <View style={[styles.titresProfil, { width: "100%" }]}>
            <View style={styles.titles}>
              <Text style={styles.title1}>Hi Salim!</Text>
              <Text style={styles.title2}>Find Your Doctor</Text>
            </View>
            <Image
              source={require("../../assets/profilUnknown.png")}
              style={styles.img}
            />
          </View>
          <View style={[styles.searchBar, { width: "80%" }]}>
            <Ionicons
              name="search"
              size={24}
              color="grey"
              style={{ marginLeft: 6 }}
            />
            <TextInput
              placeholder="Search..."
              style={[styles.input, { width: "80%" }]}></TextInput>
            <Ionicons
              name="close"
              size={24}
              color="grey"
              style={{ marginRight: 6 }}
            />
          </View>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollviewDomaines}
          data={FlatListData}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View
              style={[
                styles.domaineCard,
                { backgroundColor: item.backgroundColor },
              ]}>
              <TouchableOpacity>{item.image}</TouchableOpacity>
            </View>
          )}
        />
        <View style={styles.popularDoctor}>
          <View style={[styles.popularbtns, { width: screenWidth }]}>
            <Text style={{ fontSize: 20, fontWeight: "800" }}>
              Popular Doctors
            </Text>
            <TouchableOpacity>
              <Text>See all {">"}</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollviewDocteurs}
            data={DoctorData}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <View style={[styles.domaineCardDocteur]}>
                <Image
                  source={item.image}
                  style={{
                    width: "100%",
                    height: "60%",
                    resizeMode: "cover",
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                  }}
                />
                <Text
                  style={{ fontSize: 25, fontWeight: "600", marginTop: 15 }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "400",
                    color: "grey",
                    marginBottom: 5,
                    textAlign: "center",
                  }}>
                  {item.speciality}
                </Text>
                <Text>{item.Stars}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.featuredoctor}>
          <View style={[styles.popularbtns, { width: screenWidth }]}>
            <Text style={{ fontSize: 20, fontWeight: "800" }}>
              Feature Doctors
            </Text>
            <TouchableOpacity>
              <Text>See all {">"}</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollviewDocteurs}
            data={DoctorData}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <View style={styles.featureCardDocteur}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    width: "100%",
                    paddingHorizontal: 7,
                    margin: 5,
                  }}>
                  <FontAwesome5 name="heart" size={12} color="grey" />
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexDirection: "row",
                    }}>
                    <AntDesign name="star" size={12} color="gold" />
                    <Text
                      style={{
                        marginLeft: 5,
                      }}>
                      3.7
                    </Text>
                  </View>
                </View>
                <Image
                  source={item.image}
                  style={{
                    borderRadius: 100,
                    width: 50,
                    height: 50,
                    marginTop: 10,
                  }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    marginTop: 15,
                    color: "#333333",
                  }}>
                  {item.name}
                </Text>
                <Text style={{ color: "grey" }}>
                  <Text style={{ color: "#26b280" }}>$</Text>
                  {item.prixHeure}
                  /hours
                </Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f5f5",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    marginTop: 45,
    alignItems: "center",
    padding: 10,
    justifyContent: "flex-start",
    backgroundColor: "#26b280",
    height: 150,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
  },
  titresProfil: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  titles: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title1: {
    color: "white",
    fontSize: 20,
    fontWeight: "200",
  },
  title2: {
    color: "white",
    fontSize: 25,
    fontWeight: "800",
  },
  img: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    marginRight: 9,
    borderRadius: 100,
  },
  searchBar: {
    height: 55,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 46,
    borderColor: "grey",
    borderWidth: 0.5,
  },
  scrollviewDomaines: {
    height: 90,
    marginTop: 48,
    marginBottom: 10,
    flexGrow: 0,
    marginHorizontal: 8,
  },
  domaineCard: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 80,
    width: 80,
    margin: 8,
    borderRadius: 6,
  },
  featureCardDocteur: {
    alignItems: "center",
    justifyContent: "flex-start",
    height: 160,
    width: 120,
    margin: 10,
    borderRadius: 6,
    backgroundColor: "white",
  },
  popularDoctor: {
    height: 350,
    flexGrow: 0,
    marginBottom: 0,
  },
  popularbtns: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  domaineCardDocteur: {
    alignItems: "center",
    justifyContent: "flex-start",
    height: 300,
    width: 230,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 15,
  },
  scrollviewDocteurs: {
    marginTop: 10,
  },
  featuredoctor: {},
});
