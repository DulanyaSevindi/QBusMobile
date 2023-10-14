import { View, Text, Image, ScrollView, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";

const InfoScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View
        style={{
          marginHorizontal: 22,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 36,
            fontWeight: "bold",
            marginVertical: 8,
          }}
        >
          Welcome QBus!
        </Text>
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 5,
            marginTop: 10,
            left: 10,
          }}
          source={require("../assets/profile.png")}
        />
      </View>
      <View
        style={{
          margin: 20,
          paddingTop: 70,
          paddingLeft: 70,
          borderRadius: 50,
          backgroundColor: "rgb(173, 216, 230)",
        }}
      >
        <Text style={{ fontSize: 30, right: 50, bottom: 50 }}>Balance</Text>
        <Image
          style={{
            width: 80,
            height: 160,
            resizeMode: "contain",
            bottom: 75,
            right: 40,
          }}
          source={require("../assets/money.png")}
        />

        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            bottom: 110,
            left: 10,
          }}
        >
          Rs.1,250.40
        </Text>
      </View>
      <View
        style={{
          margin: 10,
          flex: 1,
          padding: 100,
          borderRadius: 50,
          backgroundColor: "rgb(173, 216, 230)",
        }}
      >
        <Text
          style={{ fontSize: 30, right: 50, bottom: 50, fontWeight: "bold" }}
        >
          Qr Code
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default InfoScreen;
