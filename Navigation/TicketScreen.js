import COLORS from "../constants/colors";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Image } from "react-native";

const TicketScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View
        style={{
          height: "30%",
          backgroundColor: "#3d73d4",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <Image
          style={{
            position: "relative",
            bottom: -10,
            right: 10,
            width: "110%",
            height: "100%",
            opacity: 0.5,
          }}
          source={require("../assets/world-mapbackground-removebg-preview.png")}
        />
      </View>

      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: COLORS.black,
            }}
          >
            Ticket History
          </Text>
        </View>
        <ScrollView>
          <View
            style={{
              marginBottom: 25,
              flex: 1,
              backgroundColor: "#f0f0f0",
              paddingTop: 10,
              paddingHorizontal: 20,
              borderRadius: 10,
              elevation: 10,
              marginTop: 80,
            }}
          >
            <Text style={{ fontSize: 20, marginBottom: 10 }}>
              Colombo - Kandy
            </Text>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>
              Fare : Rs.250
            </Text>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>20/2/2023</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default TicketScreen;
