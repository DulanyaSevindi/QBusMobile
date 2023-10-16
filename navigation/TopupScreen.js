import axios from "axios";
import Button from "../components/Button";
import COLORS from "../constants/colors";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { View, Text, Alert, TextInput } from "react-native";

export default function TopupScreen() {
  const route = useRoute();
  const id = route.params?.id;

  const [balance, setBalance] = useState(0);
  const [topup, setTopup] = useState(0);

  useEffect(() => {
    const getBalance = async (id) => {
      try {
        const response = await axios.get(
          `http://192.168.1.5:4000/api/user/balance/${id}`
        );
        if (response.status === 200) {
          setBalance(response.data.balance);
        } else {
          console.error(response.data.error);
        }
      } catch (err) {
        console.error("Api Failed:", err);
        if (err.response && err.response.status === 400) {
          console.error(err.response.data.error);
        }
      }
    };
    getBalance(id);
  }, []);

  const topupAccount = async (balance) => {
    try {
      const response = await axios.patch(
        `http://192.168.1.5:4000/api/user/topup/${id}`,
        {
          balance,
        }
      );
      if (response.status === 200) {
        setBalance(response.data.balance);
      } else {
        console.error(response.data.error);
      }
    } catch (err) {
      console.error("Api Failed:", err);
      if (err.response && err.response.status === 404) {
        console.error(err.response.data.error);
      }
    }
  };

  const confirmAlert = (amount) => {
    Alert.alert(
      "Confirmation",
      `Are you sure you want to topup Rs.${amount}.00?`,
      [
        {
          text: "Yes",
          onPress: () => {
            topupAccount(amount);
          },
        },
        {
          text: "No",
          onPress: () => {
            console.log("No");
          },
        },
      ]
    );
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
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: 700,
                left: -20,
              }}
            >
              {`Rs. ${balance}.00`}
            </Text>
          </View>
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
            onPress={() => confirmAlert(50)}
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
            onPress={() => confirmAlert(100)}
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
            onPress={() => confirmAlert(500)}
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
            onPress={() => confirmAlert(1000)}
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
              onChangeText={(t) => setTopup(t)}
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
          onPress={() => confirmAlert(topup)}
        />
      </View>
    </SafeAreaView>
  );
}
