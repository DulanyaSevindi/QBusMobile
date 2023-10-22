import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import { useRoute } from "@react-navigation/native";
import ApiManager from "../ApiManager";
import React, { useEffect, useState } from "react";

const UserDetails = ({ navigation }) => {
  const route = useRoute();
  const id = route.params?.id;

  const [tickets, setTickets] = useState();

  useEffect(() => {
    const getTickets = async (id) => {
      try {
        const response = await ApiManager(`/api/user/${id}/tickets`, {
          method: "GET",
        });
        if (response.status === 200) {
          setTickets(response.data);
        } else {
          console.error(response.data.error);
        }
      } catch (err) {
        console.error("Api Failed:", err);
        if (err.response) {
          console.error(err.response.data.error);
        }
      }
    };
    getTickets(id);
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };

    const formattedDate = new Date(dateString).toLocaleString(
      undefined,
      options
    );

    return formattedDate;
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}></View>
        <View
          style={{
            marginBottom: 10,
            marginVertical: 20,
            backgroundColor: "#f0f0f0",
            paddingTop: 10,
            paddingHorizontal: 20,
            borderRadius: 10,
            elevation: 10,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: 800,
              marginVertical: 12,
              color: COLORS.black,
            }}
          >
            User Details
          </Text>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Name :</Text>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Gender :</Text>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>
            Mobile Number :
          </Text>
        </View>
        <ScrollView
          style={{
            top: 40,
            marginBottom: 80,
          }}
        >
          {tickets?.map((t, key) => (
            <View
              style={{
                marginBottom: 25,
                flex: 1,
                backgroundColor: "#f0f0f0",
                paddingTop: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
                elevation: 10,
              }}
            >
              <Text style={{ fontSize: 20, marginBottom: 10 }}>
                {/* {t.pickup} - {t.dropOff} ({t.routeNumber}) */}
              </Text>
              <Text style={{ fontSize: 20, marginBottom: 10 }}>
                {/* Fare : Rs.{t.ticketPrice} */}
              </Text>
              <Text style={{ fontSize: 20, marginBottom: 10 }}>
                {/* {formatDate(t.createdAt)} */}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default UserDetails;
