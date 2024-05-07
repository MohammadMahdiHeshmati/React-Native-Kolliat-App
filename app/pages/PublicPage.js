import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { useColorScheme } from "nativewind";
import ItemComponent from "../components/ItemComponent";
import Header from "./Header";
import { ziaratgahDB } from "../db/ziaratgah_db";
import { shohadaDB } from "../db/shohada_db";
import { adeeyehDB } from "../db/adeeyeh_db";
import { quranDB } from "../db/quran_db";

const PublicPage = ({ route }) => {
  const { colorScheme } = useColorScheme();
  const [items, setItems] = useState();
  const colors = {
    bg: colorScheme === "dark" ? "bg-slate-900" : "text-white",
    border: colorScheme === "dark" ? "border-slate-600" : "border-gray-300",
    search: colorScheme === "dark" ? "bg-slate-700" : "bg-gray-200",
    text: colorScheme === "dark" ? "text-gray-100" : "text-gray-500",
    header: colorScheme === "dark" ? "bg-slate-700" : "bg-blue-600",
  };

  useEffect(() => {
    if (route.params.item == "ziaratgah") {
      setItems(ziaratgahDB);
    } else if (route.params.item == "shohada") {
      setItems(shohadaDB);
    }else if (route.params.item == "adeyeh") {
      setItems(adeeyehDB);
    } else if (route.params.item == "quran") {
      setItems(quranDB);
    }
  }, [route.params.item]);

  return (
    <View className={`h-full ${colors.bg}`}>
      <Header title="فهرست" color={colors.header} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View className="p-2">
          {items?.map((item) => (
            <ItemComponent
              id={item.id}
              title={item.title}
              category={item.category}
              img={item.img}
              kay={route.params.item}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default PublicPage;
