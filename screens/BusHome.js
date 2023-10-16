import React from "react";
import BusHomeScreen from "../Navigation/BusHomeScreen";
import InspectorScreen from "../Navigation/InspectorScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BusHomePage() {
  return (
    <Tab.Navigator
      initialRouteName="BusHome"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="BusHome"
        component={BusHomeScreen}
        options={{
          title: "Home page",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Inspector"
        component={InspectorScreen}
        options={{
          title: "Inspector",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="account-tie-hat-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
