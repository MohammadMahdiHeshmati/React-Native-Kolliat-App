import React from "react";
import { View, ScrollView } from "react-native";
import { useColorScheme } from "nativewind";
import ItemComponent from "../components/ItemComponent";
import Header from "./Header";

const PublicPage = () => {
  const { colorScheme } = useColorScheme();
  const colors = {
    bg: colorScheme === "dark" ? "bg-slate-900" : "text-white",
    border: colorScheme === "dark" ? "border-slate-600" : "border-gray-300",
    search: colorScheme === "dark" ? "bg-slate-700" : "bg-gray-200",
    text: colorScheme === "dark" ? "text-gray-100" : "text-gray-500",
    header: colorScheme === "dark" ? "bg-slate-700" : "bg-blue-600",
  };

  return (
    <View className={`h-full ${colors.bg}`}>
      <Header title="فهرست" color={colors.header} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View className="p-2">
          <ItemComponent />
        </View>
      </ScrollView>
    </View>
  );
};

export default PublicPage;
