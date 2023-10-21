import COLORS from "../constants/colors";
import QRCode from "react-native-qrcode-svg";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { View, Text, Image } from "react-native";
const apiurl = process.env.API_URL;

const InfoScreen = ({ navigation }) => {
  const route = useRoute();
  const id = route.params?.id;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View
        style={{
          height: "40%",
          backgroundColor: "#3d73d4",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <Image
          style={{
            position: "relative",
            bottom: 30,
            right: 10,
            width: "110%",
            height: "100%",
            opacity: 0.5,
          }}
          source={require("../assets/world-mapbackground-removebg-preview.png")}
        />
      </View>

      <View
        style={{
          alignItems: "center",
          marginHorizontal: 22,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 36,
            fontWeight: 800,
            marginVertical: 8,
            color: "white",
          }}
        >
          QBus
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
          paddingTop: 10,
          paddingLeft: 5,
          borderRadius: 40,
          width: "90%",
          height: "30%",
          backgroundColor: "#f0f0f0",
          alignItems: "center",
          shadowColor: "black",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.5,
          elevation: 20,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            marginVertical: 20,
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          Balance
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            borderWidth: 1,
            padding: 10,
          }}
        >
          Rs.1,250.40
        </Text>
      </View>

      <View
        style={{
          margin: 20,
          paddingTop: 10,
          paddingLeft: 5,
          borderRadius: 40,
          width: "90%",
          height: "50%",
          backgroundColor: "#f0f0f0",
          alignItems: "center",
          shadowColor: "black",
          shadowOffset: { width: 0, height: 4 },
          elevation: 10,
        }}
      >
        <Text
          style={{ fontSize: 30, right: 10, bottom: 0, fontWeight: "bold" }}
        >
          Your QR
        </Text>

        <QRCode
          value={id ? id : "NA"}
          size={250}
          color="black"
          backgroundColor="white"
        />
      </View>

      <View
        style={{
          alignItems: "center",
          margin: 20,
        }}
      ></View>
    </SafeAreaView>
  );
};

export default InfoScreen;
