import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useFonts } from "expo-font";
import Merge from "./app/pages/Merge";
import Loading from "./app/pages/Loading";

export default function App() {
  const [loaded] = useFonts({
    "vazir-regular": require("./assets/fonts/Vazir.ttf"),
  });

  if (!loaded) {
    return <Loading />;
  }

  return (
    <View className="flex-1 bg-white">
      <Merge />
      <StatusBar style="auto" hidden />
    </View>
  );
}
