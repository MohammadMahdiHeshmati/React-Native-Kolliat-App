import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";
import Header from "./Header";

const Eghameh = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const colors = {
    bg: colorScheme === "dark" ? "bg-slate-900" : "text-white",
    border: colorScheme === "dark" ? "border-slate-600" : "border-gray-300",
    search: colorScheme === "dark" ? "bg-slate-700" : "bg-gray-200",
    header: colorScheme === "dark" ? "bg-slate-700" : "bg-blue-600",
  };

  return (
    <View className={`h-full ${colors.bg}`}>
      <Header title="اقامه" color={colors.header} />
      <ScrollView className="w-full h-full">
        <Image
          className="w-full h-[550px]"
          source={require("../../assets/images/eghameh-image/1.jpg")}
        />
      </ScrollView>
    </View>
  );
};

export default Eghameh;
