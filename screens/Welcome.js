import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import Button from "../components/Button";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <Image
        source={require("../assets/bus.png")}
        style={{
          height: 300,
          width: 300,
          borderRadius: 20,
          position: "absolute",
          top: 110,
          left: 50,
          alignItems: "center",
        }}
      />

      {/* content  */}

      <View
        style={{
          paddingHorizontal: 22,
          position: "absolute",
          top: 400,
          width: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 50,
            fontWeight: 800,
            color: COLORS.white,
          }}
        >
          Let's Get
        </Text>
        <Text
          style={{
            fontSize: 46,
            fontWeight: 800,
            color: COLORS.white,
          }}
        >
          Started
        </Text>

        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 16,
              color: COLORS.white,
              marginVertical: 4,
            }}
          >
            Connect with each other with chatting
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: COLORS.white,
            }}
          >
            Calling, Enjoy Safe and private texting
          </Text>
        </View>

        <Button
          title="Join Now"
          onPress={() => navigation.navigate("Signup")}
          style={{
            marginTop: 22,
            width: "100%",
          }}
        />

        <View
          style={{
            flexDirection: "row",
            marginTop: 12,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: COLORS.white,
            }}
          >
            Already have an account ?
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                fontWeight: "bold",
                marginLeft: 4,
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
