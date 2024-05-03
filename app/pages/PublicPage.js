import { View, ScrollView } from "react-native";
import React from "react";
import ItemComponent from "../components/ItemComponent";
import Header from "./Header";

const PublicPage = () => {
  return (
    <View className="h-full">
      <Header title="فهرست" />
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
