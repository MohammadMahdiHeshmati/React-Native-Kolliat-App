import React from "react";
import { View, TouchableOpacity, Image, Text, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "nativewind";

const Home = () => {
  const navigation = useNavigation();
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="h-full bg-white dark:bg-slate-800">
      <View className="flex flex-row justify-start items-center gap-1 p-2">
        <TouchableOpacity onPress={toggleColorScheme}>
          <View className="border border-gray-300 rounded-full p-1.5">
            {colorScheme === "dark" ? (
              <Ionicons name="sunny" color={"rgb(156, 163, 175)"} size={35} />
            ) : (
              <Ionicons name="moon" color={"rgb(156, 163, 175)"} size={35} />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-1 w-full"
          onPress={() => navigation.navigate("Search")}
        >
          <View className="p-1">
            <View className="bg-gray-200 border h-[50px] border-gray-300 rounded-full relative p-3">
              <Text className="font-vazir text-gray-500">جستجو کنید...</Text>
              <Ionicons
                style={{ position: "absolute", right: 8, top: 9 }}
                name="search"
                color={"rgb(156, 163, 175)"}
                size={30}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        className="h-full space-y-2 px-2"
      >
        <View className="space-y-2">
          <TouchableOpacity onPress={() => navigation.navigate("Quran")}>
            <LinearGradient
              colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.1)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                height: 145,
                borderRadius: 12,
                overflow: "hidden",
                zIndex: 2,
              }}
            ></LinearGradient>
            <View>
              <Image
                className="w-full h-[145px] rounded-xl bg-cover"
                source={require("../../assets/images/quran-image.jpeg")}
              />
              <View className="absolute inset-0 flex justify-between w-full h-full items-center flex-row p-8 z-[3]">
                <Text className="text-xl font-vazir text-black bg-white p-px px-3 rounded-full">
                  قرآن
                </Text>
                <Ionicons name="arrow-back-circle" color={"#fff"} size={40} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.1)"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                height: 145,
                borderRadius: 12,
                overflow: "hidden",
                zIndex: 2,
              }}
            ></LinearGradient>
            <View>
              <Image
                className="w-full h-[145px] rounded-xl bg-cover"
                source={require("../../assets/images/mafatih-image.png")}
              />
              <View className="absolute inset-0 flex justify-between w-full h-full items-center flex-row p-8 z-[3]">
                <Ionicons
                  name="arrow-forward-circle"
                  color={"#fff"}
                  size={40}
                />
                <Text className="text-xl font-vazir text-black bg-white p-px px-3 rounded-full">
                  مفاتیح
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.1)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                height: 145,
                borderRadius: 12,
                overflow: "hidden",
                zIndex: 2,
              }}
            ></LinearGradient>
            <View>
              <Image
                className="w-full h-[145px] rounded-xl bg-cover"
                source={require("../../assets/images/adeeieh-image.jpg")}
              />
              <View className="absolute inset-0 flex justify-between w-full h-full items-center flex-row p-8 z-[3]">
                <Text className="text-xl font-vazir text-black bg-white p-px px-3 rounded-full">
                  ادعیه
                </Text>
                <Ionicons name="arrow-back-circle" color={"#fff"} size={40} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.1)"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                height: 145,
                borderRadius: 12,
                overflow: "hidden",
                zIndex: 2,
              }}
            ></LinearGradient>
            <View>
              <Image
                className="w-full h-[145px] rounded-xl bg-cover"
                source={require("../../assets/images/shohada-image.jpg")}
              />
              <View className="absolute inset-0 flex justify-between w-full h-full items-center flex-row p-8 z-[3]">
                <Ionicons
                  name="arrow-forward-circle"
                  color={"#fff"}
                  size={40}
                />
                <Text className="text-xl font-vazir text-black bg-white p-px px-3 rounded-full">
                  شهدا
                </Text>
              </View>
              <View className="absolute inset-0 flex justify-center bg-black/60 w-full h-full items-center flex-row rounded-lg p-8 z-[5]">
                <Ionicons name="lock-closed-sharp" color={"#fff"} size={40} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.1)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                height: 145,
                borderRadius: 12,
                overflow: "hidden",
                zIndex: 2,
              }}
            ></LinearGradient>
            <View>
              <Image
                className="w-full h-[145px] rounded-xl bg-cover"
                source={require("../../assets/images/ziaratgah-image.jpg")}
              />
              <View className="absolute inset-0 flex justify-between w-full h-full items-center flex-row p-8 z-[3]">
                <Text className="text-xl font-vazir text-black bg-white p-px px-3 rounded-full">
                  زیارتگاه ها
                </Text>
                <Ionicons name="arrow-back-circle" color={"#fff"} size={40} />
              </View>
              <View className="absolute inset-0 flex justify-center bg-black/60 w-full h-full items-center flex-row rounded-lg p-8 z-[5]">
                <Ionicons name="lock-closed-sharp" color={"#fff"} size={40} />
              </View>
            </View>
          </TouchableOpacity>
          <View className="flex flex-row justify-center items-center gap-x-2 pb-2">
            <TouchableOpacity>
              <View className="relative">
                <Image
                  className="w-[170px] h-[145px] rounded-xl bg-cover"
                  source={require("../../assets/images/amoozesh-namaz-image.jpg")}
                />
                <View
                  x
                  style={{
                    position: "absolute",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderRadius: 12,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    zIndex: 2,
                  }}
                >
                  <Text className="text-xl font-vazir text-center text-white p-2">
                    آموزش تصویری نماز
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="relative">
                <Image
                  className="w-[170px] h-[145px] rounded-xl bg-cover"
                  source={require("../../assets/images/azan-image.jpeg")}
                />
                <View
                  x
                  style={{
                    position: "absolute",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderRadius: 12,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    zIndex: 2,
                  }}
                >
                  <Text className="text-xl font-vazir text-center text-white p-2">
                    اذان و اقامه
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
