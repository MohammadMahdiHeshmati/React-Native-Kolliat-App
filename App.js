import { StatusBar } from "expo-status-bar";
import { I18nManager, StyleSheet, Text, View } from "react-native";
import Merge from "./app/pages/Merge";
import { useFonts } from "expo-font";
import Loading from "./app/pages/Loading";

export default function App() {
  I18nManager.forceRTL(true);
  I18nManager.allowRTL(true);

  const [loaded] = useFonts({
    "vazir-regular": require("./assets/fonts/Vazir.ttf"),
  });

  if (!loaded) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Merge />
      <StatusBar style="auto" hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
