import { View, Text, ScrollView } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";

const TicketScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
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
              backgroundColor: "rgb(173, 216, 230)",
              paddingTop: 10,
              paddingHorizontal: 20,
              borderRadius: 10,
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
