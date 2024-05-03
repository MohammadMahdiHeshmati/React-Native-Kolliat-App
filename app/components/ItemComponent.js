import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import Ionicons from "react-native-vector-icons/Ionicons";

const ItemComponent = () => {
  const navigation = useNavigation();
  const { colorScheme } = useColorScheme();
  const colors = {
    bg: colorScheme === "dark" ? "bg-slate-700" : "bg-white",
    text: colorScheme === "dark" ? "text-gray-100" : "text-gray-600",
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ShownItem")}>
      <View
        className={`w-full drop-shadow-lg shadow-lg p-3 rounded-lg flex flex-row items-center justify-start mb-2 ${colors.bg}`}
      >
        <Image
          className="w-[65px] h-[65px] rounded-full bg-cover"
          width={"65px"}
          height={"65px"}
          source={require("../../assets/images/no-image.png")}
        />
        <View>
          <Text className={`mx-3 font-vazir text-lg ${colors.text}`}>
            عنوان
          </Text>
          <Text className={`mx-3 font-vazir text-xs ${colors.text}`}>
            دسته بندی
          </Text>
        </View>
        <Ionicons
          style={{ position: "absolute", right: 10, top: 27 }}
          name="arrow-back-circle"
          color={"rgb(156, 163, 175)"}
          size={35}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ItemComponent;
