import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import Button from "../components/Button";
import { useRoute } from "@react-navigation/native";

const SelectionAcc = ({ navigation }) => {
  const route = useRoute();
  const id = route.params?.id;
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style={{ marginVertical: 22 }}>
        <Text
          style={{
            fontSize: 45,
            color: COLORS.blue,
            fontWeight: "700",
            marginVertical: 4,
            marginTop: 50,
            left: 30,
          }}
        >
          Choose Account
        </Text>
        <Image
          source={require("../assets/passenger.png")}
          style={{
            height: 400,
            width: 300,
            borderRadius: 20,
            position: "absolute",
            top: 80,
            left: 50,
            alignItems: "center",
            marginTop: 50,
          }}
        />

        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 400,
            width: "80%",
            left: 40,
            marginTop: 100,
          }}
        >
          <Button
            title="Local Passenger"
            style={{
              marginTop: 60,
              width: "80%",
              fontWeight: "bold",
              left: 40,
            }}
            onPress={() => navigation.navigate("Account", { id: id })}
          />

          <Button
            title="Foreign Passenger"
            style={{
              marginTop: 22,
              width: "80%",
              fontWeight: "bold",
              left: 40,
            }}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default SelectionAcc;
