import axios from "axios";
import { BarCodeScanner } from "expo-barcode-scanner";
import COLORS from "../constants/colors";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Button } from "react-native";
import ApiManager from "../ApiManager";

const BusHomeScreen = () => {
  const [id, setId] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const createTicket = async () => {
    try {
      const response = await ApiManager(`/api/ticket/`, {
        method: "POST",
        data: {
          ticketPrice: 120,
          distance: "4km",
          routeNumber: "177",
          pickup: "Malabe",
          dropOff: "Kaduwela",
          user: id,
        },
      });
      alert("Sucess.");
    } catch (error) {
      console.error("API failed:", error);
      if (error.response) {
        console.error(error.response.data.error);
      }
    }
  };

  const handleBarCodeScanned = (data) => {
    setScanned(true);
    setId(data.data);
  };

  useEffect(() => {
    if (id !== "") {
      createTicket();
    }
  }, [id]);

  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={styles.container}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          {scanned && (
            <Button
              title="Tap to Scan Again"
              onPress={() => setScanned(false)}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
});

export default BusHomeScreen;
