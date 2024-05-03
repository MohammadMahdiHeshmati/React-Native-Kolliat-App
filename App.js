import { StatusBar } from "expo-status-bar";
import { I18nManager, View } from "react-native";
import Merge from "./app/pages/Merge";
import { useFonts } from "expo-font";
import Loading from "./app/pages/Loading";
import * as Updates from "expo-updates";

export default async function App() {
  await I18nManager.forceRTL(true);
  await I18nManager.allowRTL(true);
  await Updates.reloadAsync();

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
