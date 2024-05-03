import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { useColorScheme } from "nativewind";
import Header from "./Header";

const ShownItem = () => {
  const { colorScheme } = useColorScheme();
  const colors = {
    bg: colorScheme === "dark" ? "bg-slate-900" : "text-white",
    text: colorScheme === "dark" ? "text-gray-200" : "text-gray-600",
    header: colorScheme === "dark" ? "bg-slate-700" : "bg-blue-600",
  };

  return (
    <View className={`h-full ${colors.bg}`}>
      <Header title="مسجد جمکران" color={colors.header} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View className="p-2">
          <Image
            className="w-full h-52 bg-cover rounded-lg drop-shadow-sm shadow-sm"
            width={"100%"}
            height={"208px"}
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
