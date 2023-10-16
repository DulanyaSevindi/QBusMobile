import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import QRCodeScanner from "../components/QRCodeScanner";

const BusHomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <QRCodeScanner />
      </View>
    </SafeAreaView>
  );
};
export default BusHomeScreen;
