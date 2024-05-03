import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import Header from "./Header";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ShownItem = () => {
  const [colors, setColors] = useState({
    bg: "text-white",
    text: "text-gray-600",
    header: "bg-blue-600",
  });

  useFocusEffect(() => {
    const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem("theme");
        if (value !== null) {
          setColors({
            bg: value === "dark" ? "bg-slate-900" : "text-white",
            text: value === "dark" ? "text-gray-200" : "text-gray-600",
            header: value === "dark" ? "bg-slate-700" : "bg-blue-600",
          });
        }
      } catch (error) {}
    };
    _retrieveData();
  });

  return (
    <View className={`h-full ${colors.bg}`}>
      <Header title="مسجد جمکران" color={colors.header} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View className="p-2">
          <Image
            className="w-full h-[200px] bg-cover rounded-lg drop-shadow-sm shadow-sm"
            source={require("../../assets/images/ziaratgah-image.jpg")}
          />
        </View>
        <Text
          className={`text-base text-justify font-vazir p-3 pt-0 ${colors.text}`}
        >
          مسجد جمکران (نام‌های دیگر: مسجد صاحب‌الزمان، قدمگاه، حسن بن مثله) یکی
          از مشهورترین و مهم‌ترین مساجد شیعیان و منسوب به حجت بن الحسن امام
          دوازدهم شیعیان است که در محدوده محلهٔ جمکران شهر قم واقع شده‌است. این
          مسجد، به خاطر قرارداشتن در این محله، به مسجد جمکران شهرت یافته‌است و
          به سبب انتساب به حجت بن الحسن، مسجد صاحب‌الزمان هم نامیده می‌شود، در
          گذشته به مسجد قدمگاه نیز مشهور بوده‌است. به گفته دانشنامه جهان اسلام
          جمکران در گذشته روستای مهمی بوده و نام آن در کتاب تاریخ قم بارها تکرار
          شده‌است.[۱] این مسجد سابقه‌ای بیش از ۱۰۰۰ سال دارد و در سده اخیر در پی
          توجه شماری از علمای شیعه، به یکی از زیارتگاه‌های مهم ایران تبدیل شده،
          و آداب و رسوم و باورهای خاصی پیرامون آن شکل گرفته‌است.[۲] این مسجد
          دارای ساختمان اداری، هیئت امنا، دایره انتظامات، دفتر ثبت کرامات،
          انتشارات کتاب جمکران، واحد تحقیقات، وا هٔ جمکران شهر قم واقع شده‌است.
          این مسجد، به خاطر قرارداشتن در این محله، به مسجد جمکران شهرت یافته‌است
          و به سبب انتساب به حجت بن الحسن، مسجد صاحب‌الزمان هم نامیده می‌شود، در
          گذشته به مسجد قدمگاه نیز مشهور بوده‌است. به گفته دانشنامه جهان اسلام
          جمکران در گذشته روستای مهمی بوده و نام آن در کتاب تاریخ قم بارها تکرار
          شده‌است.[۱] این مسجد سابقه‌ای بیش از ۱۰۰۰ سال دارد و در سده اخیر در پی
          توجه شماری از علمای شیعه، به یکی از زیارتگاه‌های مهم ایران تبدیل شده،
          و آداب و رسوم و باورهای خاصی پیرامون آن شکل گرفته‌است.[۲] این مسجد
          دارای ساختمان اداری، هیئت امنا، دایره انتظامات، دفتر ثبت کرامات،
          انتشارات کتاب جمکران، واحد تحقیقات، واحد ارشاد و کتابخانه تخصصی
          است.[۳]حد ارشاد و کتابخانه تخصصی است.[۳]
        </Text>
      </ScrollView>
    </View>
  );
};

export default ShownItem;
