import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/general/home";
import Favourite from "../screens/general/favourite";
import Booked from "../screens/general/booked";
import Profil from "../screens/general/profil";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

function HomeRoute() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: "white",
        tabBarInactiveBackgroundColor: "#26b280",
        tabBarActiveTintColor: "#26b280",
        tabBarActiveBackgroundColor: "white",
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-home-outline" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Booked"
        component={Booked}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmark-outline" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profil}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeRoute;
