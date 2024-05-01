import { View, Text, TextInput, ScrollView } from "react-native";
import React, { useRef } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";
import ItemComponent from "./ItemComponent";

const Search = () => {
  const inputRef = useRef(null);

  useFocusEffect(() => {
    inputRef.current.focus();
  });

  return (
    <View className="p-2 h-full">
      <View className="p-2">
        <View className="bg-gray-200 border border-gray-300 rounded-full relative p-1">
          <TextInput
            ref={inputRef}
            cursorColor={"rgb(156, 163, 175)"}
            className="p-2 px-3 font-vazir text-sm text-right text-gray-500"
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
