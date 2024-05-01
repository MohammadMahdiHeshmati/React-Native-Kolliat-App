import React from "react";
import Home from "./Home";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Search from "./Search";

const bttomTab = createBottomTabNavigator();

const Merge = () => {
  return (
    <NavigationContainer>
      <bttomTab.Navigator>
        <bttomTab.Screen
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
        <bttomTab.Screen
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
        {/* <bttomTab.Screen name="Bookmarks" component={} /> */}
        {/* <bttomTab.Screen name="Settings" component={SettingsScreen} /> */}
      </bttomTab.Navigator>
    </NavigationContainer>
  );
};

export default Merge;
