import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "nativewind";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./Home";
import Search from "./Search";
import ShownItem from "./ShownItem";
import PublicPage from "./PublicPage";
import Other from "./Other";
import Namaz from "./Namaz";
import Eghameh from "./Eghameh";
import { I18nManager } from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabComponent = () => {
  const { colorScheme } = useColorScheme();
  const colors = {
    bg: colorScheme === "dark" ? "rgb(30, 41, 59)" : "#FFF",
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          borderTopColor: colors.bg,
          backgroundColor: colors.bg,
          height: 55,
        },
      }}
    >
      <Tab.Screen
        name="Other"
        component={Other}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cog" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Merge = () => {
  I18nManager.forceRTL(false);
  I18nManager.allowRTL(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeTabs">
        <Stack.Screen
          name={"HomeTabs"}
          component={TabComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"PublicPage"}
          component={PublicPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"Namaz"}
          component={Namaz}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"Eghameh"}
          component={Eghameh}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"ShownItem"}
          component={ShownItem}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Merge;
