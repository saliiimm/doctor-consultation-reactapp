import "react-native-gesture-handler";
import MainRoute from "./routes/mainRoute";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <MainRoute />
    </NavigationContainer>
  );
}
