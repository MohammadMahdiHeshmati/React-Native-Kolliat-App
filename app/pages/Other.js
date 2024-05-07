import React from "react";
import { View, Text } from "react-native";
import { useColorScheme } from "nativewind";
import Ionicons from "react-native-vector-icons/Ionicons";

const Other = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const colors = {
    bg: colorScheme === "dark" ? "bg-slate-900" : "text-white",
    border: colorScheme === "dark" ? "border-slate-600" : "border-gray-300",
    search: colorScheme === "dark" ? "bg-slate-700" : "bg-gray-200",
  };

  return (
    <View className={`h-full ${colors.bg}`}>
      <View className="flex flex-row justify-center items-center mt-16">
        <View>
          <Ionicons name="sparkles" color={"yellow"} size={30} />
        </View>
        <View>
          <Ionicons name="sparkles" color={"yellow"} size={50} />
          <Ionicons name="sparkles" color={"yellow"} size={40} />
        </View>
      </View>
      <View className="text-center space-y-6 p-5 py-8">
        <Text className="text-white text-center text-2xl">سخنی با استفاده کنندگان</Text>
        <Text className="text-white text-justify text-xl">
          این اپلیکیشن فعلا در نسخه اول ارائه شده و طراحی اکثر برنامه به اتمام
          رسیده اما به دلیل کوتاه بودن زمان ثبت نام ما تا زمان ارسال اثار هنوز
          دیتای کامل قران و مفاتیح درون دیتابیس ما ریخته نشده و از این جهت قفل است و
          قابل نمایش نیست و بقیه موارد هم به صورت تستی چندین مورد جهت نمایش
          قرار داده شده. امیدواریم به لطف و فضل خداوند بتوانیم در زمان دیگری این
          اپلیکیشن را تکمیل و آن را در دسترس عموم قرار دهیم.
        </Text>
        <Text className="text-white text-justify text-xl">و من الله توفیق.</Text>
      </View>

      <Text>Other</Text>
    </View>
  );
};

export default Other;
