import { StatusBar } from "expo-status-bar";
import { I18nManager, View } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import Merge from "./app/pages/Merge";
import Loading from "./app/pages/Loading";

export default function App() {
  useEffect(() => {
    I18nManager.forceRTL(true);
    I18nManager.allowRTL(true);
  }, []);

  const [loaded] = useFonts({
    "vazir-regular": require("./assets/fonts/Vazir.ttf"),
  });

  if (!loaded) {
    return <Loading />;
  }

  return (
    <View dir="rtl" className="flex-1 bg-white">
      <Merge />
      <StatusBar style="auto" hidden />
    </View>
  );
}
