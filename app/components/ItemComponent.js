import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const ItemComponent = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ShownItem")}>
      <View className="w-full bg-white drop-shadow-lg shadow-lg p-3 rounded-lg flex flex-row items-center justify-start mb-2">
        <Image
          className="w-[65px] h-[65px] rounded-full bg-cover"
          source={require("../../assets/images/no-image.png")}
        />
        <View>
          <Text className="mx-3 font-vazir text-lg text-gray-600">عنوان</Text>
          <Text className="mx-3 font-vazir text-xs text-gray-600">
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
