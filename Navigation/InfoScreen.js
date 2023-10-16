import { View, Text, Image, ScrollView, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import QRCode from "react-native-qrcode-svg";
import { useRoute } from "@react-navigation/native";

const InfoScreen = ({ navigation }) => {
  const route = useRoute();
  const id = route.params?.id;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View
        style={{
          height: "40%", // Set the height to 40% of the screen
          backgroundColor: "#3d73d4",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          borderBottomLeftRadius: 30, // Adjust this value as needed for the desired oval shape
          borderBottomRightRadius: 30, // Adjust this value as needed for the desired oval shape
        }}
      >
        <Image
          style={{
            position: "relative",
            bottom: 30, // Adjust the position of the image as needed
            right: 10, // Adjust the position of the image as needed
            width: "110%", // Adjust the width to zoom the image
            height: "100%", // Adjust the height to zoom the image
            opacity: 0.5, // Set the opacity to make the image transparent (0.5 is 50% opacity)
          }}
          source={require("../assets/world-mapbackground-removebg-preview.png")}
        />
      </View>

      <View
        style={{
          alignItems: "center", // Center the content vertically
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
          width: "90%", // Adjust the width to zoom the image
          height: "30%", // Adjust the height to zoom the image
          backgroundColor: "#f0f0f0", // Change the background color to gray
          alignItems: "center", // Center the content horizontally
          shadowColor: "black", // Shadow color
          shadowOffset: { width: 0, height: 4 }, // Shadow offset
          shadowOpacity: 0.5, // Shadow opacity
          elevation: 20, // Android shadow elevation
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
          width: "90%", // Adjust the width to zoom the image
          height: "50%", // Adjust the height to zoom the image
          backgroundColor: "#f0f0f0", // Change the background color to gray
          alignItems: "center", // Center the content horizontally
          shadowColor: "black", // Shadow color
          shadowOffset: { width: 0, height: 4 }, // Shadow offset
          // shadowOpacity: 0.9, // Shadow opacity
          elevation: 10, // Android shadow elevation
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
