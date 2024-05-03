import { View, Text, TextInput, ScrollView } from "react-native";
import React, {  useRef, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";
import ItemComponent from "../components/ItemComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Search = () => {
  const inputRef = useRef(null);
  const [colors, setColors] = useState({
    bg: "text-white",
    border: "border-gray-300",
    search: "bg-gray-200",
    text: "text-gray-500",
  });

  useFocusEffect(() => {
    // inputRef.current.focus();

    const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem("theme");
        if (value !== null) {
          setColors({
            bg: value === "dark" ? "bg-slate-900" : "text-white",
            border: value === "dark" ? "border-slate-600" : "border-gray-300",
            search: value === "dark" ? "bg-slate-700" : "bg-gray-200",
            text: value === "dark" ? "text-gray-100" : "text-gray-500",
          });
        }
      } catch (error) {}
    };
    _retrieveData();
  });

  return (
    <View className={`p-2 h-full ${colors.bg}`}>
      <View className="p-2">
        <View
          className={`border rounded-full relative p-1 ${colors.search} ${colors.border}`}
        >
          <TextInput
            ref={inputRef}
            cursorColor={"rgb(156, 163, 175)"}
            className={`p-2 px-3 font-vazir text-sm text-right ${colors.text}`}
            placeholder="جستجو کنید ..."
          />
          <Ionicons
            style={{ position: "absolute", right: 10, top: 11 }}
            name="search"
            color={"rgb(156, 163, 175)"}
            size={30}
          />
        </View>
      </View>
      <View className="space-y-1">
        <View className="p-1">
          <Text className="font-vazir text-xs text-gray-600">نتایج جستجو</Text>
        </View>
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <ItemComponent />
            <ItemComponent />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Search;
