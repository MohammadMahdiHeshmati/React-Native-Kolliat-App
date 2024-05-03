import React from "react";
import Home from "./Home";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "./Search";
import PublicPage from "./PublicPage";
import ShownItem from "./ShownItem";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabComponent = () => {
  return (
    <Tab.Navigator>
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
    </Tab.Navigator>
  );
};

const Merge = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"HomeTabs"} component={TabComponent} options={{headerShown:false}} />
        <Stack.Screen name={"Quran"} component={PublicPage} options={{headerShown:false}} />
        <Stack.Screen name={"ShownItem"} component={ShownItem} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Merge;
