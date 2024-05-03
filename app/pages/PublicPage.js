import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import ItemComponent from "../components/ItemComponent";
import Header from "./Header";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PublicPage = () => {
  const [colors, setColors] = useState({
    bg: "text-white",
    border: "border-gray-300",
    search: "bg-gray-200",
    text: "text-gray-500",
    header: "bg-blue-600",
  });

  useFocusEffect(() => {
    const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem("theme");
        if (value !== null) {
          setColors({
            bg: value === "dark" ? "bg-slate-900" : "text-white",
            border: value === "dark" ? "border-slate-600" : "border-gray-300",
            search: value === "dark" ? "bg-slate-700" : "bg-gray-200",
            text: value === "dark" ? "text-gray-100" : "text-gray-500",
            header: value === "dark" ? "bg-slate-700" : "bg-blue-600",
          });
        }
      } catch (error) {}
    };
    _retrieveData();
  });

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
