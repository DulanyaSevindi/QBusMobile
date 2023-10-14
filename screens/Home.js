import React from "react";
import InfoScreen from "../navigation/InfoScreen";
import TopupScreen from "../navigation/TopupScreen";
import TicketScreen from "../navigation/TicketScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function HomePage() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={InfoScreen}
        options={{
          title: "Home page",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Topup"
        component={TopupScreen}
        options={{
          title: "Topup",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="account-cash"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          title: "Ticket",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="ticket" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
