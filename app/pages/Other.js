import React from "react";
import { View, Text } from "react-native";
import { useColorScheme } from "nativewind";
import Ionicons from "react-native-vector-icons/Ionicons";

const Other = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const colors = {
    bg: colorScheme === "dark" ? "bg-slate-900" : "text-white",
    text: colorScheme === "dark" ? "text-gray-200" : "text-gray-800",
    icon: colorScheme === "dark" ? "yellow" : "orange",
  };

  return (
    <View className={`h-full ${colors.bg}`}>
      <View className="flex flex-row justify-center items-center mt-16">
        <View>
          <Ionicons name="sparkles" color={colors.icon} size={50} />
          <Ionicons name="sparkles" color={colors.icon} size={40} />
        </View>
        <View>
          <Ionicons name="sparkles" color={colors.icon} size={30} />
        </View>
      </View>
      <View className="text-center space-y-6 p-5 py-8">
        <Text className={`text-center text-2xl ${colors.text}`}>
          سخنی با استفاده کنندگان
        </Text>
        <Text
          className={`text-xl text-center ${colors.text}`}
        >
          این اپلیکیشن فعلا در نسخه اول ارائه شده و طراحی اکثر برنامه به اتمام
          رسیده اما به دلیل کوتاه بودن زمان ثبت نام ما تا زمان ارسال اثار هنوز
          دیتای کامل قران و مفاتیح درون دیتابیس ما ریخته نشده و از این جهت قفل
          است و قابل نمایش نیست و بقیه موارد هم به صورت تستی چندین مورد جهت
          نمایش قرار داده شده. امیدواریم به لطف و فضل خداوند بتوانیم در زمان
          دیگری این اپلیکیشن را تکمیل و آن را در دسترس عموم قرار دهیم.
        </Text>
        <Text className={`text-right text-xl ${colors.text}`}>
          و من الله توفیق.
        </Text>
      </View>
    </View>
  );
};

export default Other;
