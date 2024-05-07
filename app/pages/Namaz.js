import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useColorScheme } from "nativewind";
import Header from "./Header";

const Namaz = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const colors = {
    bg: colorScheme === "dark" ? "bg-slate-900" : "text-white",
    border: colorScheme === "dark" ? "border-slate-600" : "border-gray-300",
    search: colorScheme === "dark" ? "bg-slate-700" : "bg-gray-200",
    header: colorScheme === "dark" ? "bg-slate-700" : "bg-blue-600",
  };
  return (
    <View className={`h-full ${colors.bg}`}>
      <Header title="نماز چهار رکعتی" color={colors.header} />
      <ScrollView className="w-full h-full">
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/1.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/2.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/3.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/4.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/5.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/6.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/7.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/8.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/9.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/10.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/11.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/12.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/13.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/14.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/15.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/16.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/17.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/18.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/19.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/20.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/21.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/22.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/23.png")} />
      <Image className="w-full h-[550px]" source={require("../../assets/images/namaz-image/24.png")} />
      </ScrollView>
    </View>
  );
};

export default Namaz;
