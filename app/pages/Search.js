import { View, Text, TextInput, ScrollView } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";
import ItemComponent from "../components/ItemComponent";
import { useColorScheme } from "nativewind";
import { ziaratgahDB } from "../db/ziaratgah_db";
import { shohadaDB } from "../db/shohada_db";
import { adeeyehDB } from "../db/adeeyeh_db";
import { quranDB } from "../db/quran_db";

const Search = () => {
  const inputRef = useRef(null);
  const { colorScheme } = useColorScheme();
  const [items, setItems] = useState([
    ...ziaratgahDB,
    ...shohadaDB,
    ...adeeyehDB,
    ...quranDB,
  ]);
  const [shownItems, setShownItems] = useState([]);
  const [search, setSearch] = useState("");
  const colors = {
    bg: colorScheme === "dark" ? "bg-slate-900" : "text-white",
    border: colorScheme === "dark" ? "border-slate-600" : "border-gray-300",
    search: colorScheme === "dark" ? "bg-slate-700" : "bg-gray-200",
    text: colorScheme === "dark" ? "text-gray-100" : "text-gray-500",
  };

  useEffect(() => {
    if (search.length > 0) {
      const filteredItems = items.filter((item) => item.title.includes(search));
      setShownItems(filteredItems);
    } else {
      setShownItems([]);
    }
  }, [search]);

  useFocusEffect(() => {
    inputRef.current.focus();
  });

  return (
    <View className={`p-2 h-full ${colors.bg}`}>
      <View className="p-2">
        <View
          className={`border rounded-full relative p-1 ${colors.search} ${colors.border}`}
        >
          <TextInput
            ref={inputRef}
            value={search}
            onChangeText={(text) => setSearch(text)}
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
          {search.length > 0 && (
            <Text className="font-vazir text-xs text-gray-600">
              نتایج جستجو
            </Text>
          )}
        </View>
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            {shownItems?.map((item, index) => (
              <ItemComponent
                key={index + 1}
                id={item.id}
                title={item.title}
                category={item.category}
                img={item.img}
                kay={item.mode}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Search;
