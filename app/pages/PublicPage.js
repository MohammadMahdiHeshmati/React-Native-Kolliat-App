import { View, Text, ScrollView } from "react-native";
import React from "react";
import ItemComponent from "../components/ItemComponent";

const PublicPage = () => {
  return (
    <View className="p-2 h-full">
      <View className="p-2">

      </View>
      <View className="space-y-1">
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <ItemComponent />
          <ItemComponent />
        </ScrollView>
      </View>
    </View>
  );
};

export default PublicPage;
