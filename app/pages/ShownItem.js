import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { useColorScheme } from "nativewind";
import Header from "./Header";
import { ziaratgahDB } from "../db/ziaratgah_db";
import { shohadaDB } from "../db/shohada_db";
import { adeeyehDB } from "../db/adeeyeh_db";
import { quranDB } from "../db/quran_db";

const ShownItem = ({ route }) => {
  const { colorScheme } = useColorScheme();
  const [items, setItems] = useState();
  const colors = {
    bg: colorScheme === "dark" ? "bg-slate-900" : "text-white",
    text: colorScheme === "dark" ? "text-gray-200" : "text-gray-600",
    header: colorScheme === "dark" ? "bg-slate-700" : "bg-blue-600",
  };

  useEffect(() => {
    if (route.params.kay == "ziaratgah") {
      const findData = ziaratgahDB.find((item) => item.id === route.params.id);
      setItems(findData);
    } else if (route.params.kay == "shohada") {
      const findData = shohadaDB.find((item) => item.id === route.params.id);
      setItems(findData);
    } else if (route.params.kay == "adeyeh") {
      const findData = adeeyehDB.find((item) => item.id === route.params.id);
      setItems(findData);
    } else if (route.params.kay == "quran") {
      const findData = quranDB.find((item) => item.id === route.params.id);
      setItems(findData);
    }
  }, [route.params.kay, route.params.id]);
  console.log(items);
  return (
    <View className={`h-full ${colors.bg}`}>
      <Header title={items?.title || ""} color={colors.header} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        className="space-y-2"
      >
        <View className="p-2">
          <Image
            className="w-full h-52 bg-cover rounded-lg drop-shadow-sm shadow-sm"
            width={"100%"}
            height={"200px"}
            source={items?.img}
          />
        </View>
        <View className="flex flex-row justify-between items-center px-7">
          <Text className="text-base text-justify font-vazir text-orange-500">{items?.category}</Text>
          <Text className="text-base text-justify font-vazir text-orange-500">1403/02/17</Text>
        </View>
        <Text
          className={`text-base text-justify font-vazir p-3 pt-0 ${colors.text}`}
        >
          {items?.desc}
        </Text>
      </ScrollView>
    </View>
  );
};

export default ShownItem;
