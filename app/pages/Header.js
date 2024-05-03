import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, color = "bg-blue-600" }) => {
  const navigation = useNavigation();

  return (
    <View className={`flex flex-row justify-between items-center p-4 ${color}`}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Ionicons
          name="chevron-forward-outline"
          color={"rgb(255, 255, 255)"}
          size={35}
        />
      </TouchableOpacity>
      <View>
        <Text className="text-2xl text-center p-1 relative top-[3px] font-vazir text-white">
          {title.substring(0, 15) + (title.length > 15 ? "..." : "")}
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Ionicons name="search" color={"rgb(255, 255, 255)"} size={35} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
