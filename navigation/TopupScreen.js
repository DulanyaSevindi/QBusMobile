import { View, Text, Alert, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import Button from "../components/Button";

export default function TopupScreen() {
  const confirmAlert = () => {
    Alert.alert("Confirmation", "Are you sure about payment?", [
      {
        text: "Yes",
        onPress: () => {
          console.log("Yes");
        },
      },
      {
        text: "No",
        onPress: () => {
          console.log("No");
        },
      },
    ]);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 30 }}>
        <View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 30,
              marginHorizontal: 50,
              color: COLORS.black,
            }}
          >
            Top-up Your Account
          </Text>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 500,
              marginVertical: 8,
            }}
          >
            Account Balance
          </Text>
          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          ></View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 500,
              marginVertical: 20,
            }}
          >
            Quick Top-up
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button
            title="50.00"
            onPress={confirmAlert}
            style={{
              marginTop: 5,
              marginRight: 10,
              borderColor: COLORS.black,
              borderWidth: 1,
              height: 50,
              width: 80,
              borderRadius: 20,
            }}
          />
          <Button
            title="100.00"
            onPress={confirmAlert}
            style={{
              marginTop: 5,
              marginRight: 10,
              borderColor: COLORS.black,
              borderWidth: 1,
              height: 50,
              width: 80,
              borderRadius: 20,
            }}
          />
          <Button
            title="500.00"
            onPress={confirmAlert}
            style={{
              marginTop: 5,
              marginRight: 10,
              borderColor: COLORS.black,
              borderWidth: 1,
              height: 50,
              width: 80,
              borderRadius: 20,
            }}
          />
          <Button
            title="1000.00"
            onPress={confirmAlert}
            style={{
              marginTop: 5,
              marginRight: 10,
              borderColor: COLORS.black,
              borderWidth: 1,
              height: 50,
              width: 80,
              borderRadius: 20,
            }}
          />
        </View>

        <View style={{ marginBottom: 12, marginVertical: 25 }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 500,
              marginVertical: 8,
            }}
          >
            Custom Top-up
          </Text>

          <View
            style={{
              marginVertical: 20,
              width: "100%",
              height: 50,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 20,
            }}
          >
            <TextInput
              placeholder="Enter your amount"
              placeholderTextColor={COLORS.black}
              keyboardType="numeric"
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        <Button
          title="Proceed"
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
          onPress={confirmAlert}
        />
      </View>
    </SafeAreaView>
  );
}
