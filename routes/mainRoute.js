import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/Getstarted/splashScreen";
import GetStarted1 from "../screens/Getstarted/getStarted1";

const Stack = createNativeStackNavigator();

function MainRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="GetStarted1" component={GetStarted1} />
    </Stack.Navigator>
  );
}

export default MainRoute;
