import { BarCodeScanner } from "expo-barcode-scanner";
import COLORS from "../constants/colors";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Button } from "react-native";
import ApiManager from "../ApiManager";
import { SelectList } from "react-native-dropdown-select-list";

const BusHomeScreen = () => {
  const [id, setId] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [routes, setRoutes] = useState();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const getRoutes = async () => {
      try {
        const response = await ApiManager(`/api/route/`, {
          method: "GET",
        });
        if (response.status === 200) {
          setRoutes(
            response.data.map((c) => {
              const [pickup, dropOff] = c.routeName.split("-");
              return {
                ...c,
                pickup,
                dropOff,
              };
            })
          );
        } else {
          console.error(response.data.error);
        }
      } catch (error) {
        console.error("Transaction API failed:", error);
        if (error.response) {
          console.error(error.response.data.error);
        }
      }
    };
    getRoutes();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const deductFee = async () => {
    try {
      const response = await ApiManager(`/api/user/topup/${id}`, {
        method: "POST",
        data: {
          balance: -selectedRoute.totalBusFare,
        },
      });
    } catch (error) {
      console.error("Transaction API failed:", error);
      if (error.response) {
        console.error(error.response.data.error);
      }
    }
  };

  const createTicket = async () => {
    try {
      const response = await ApiManager(`/api/ticket/`, {
        method: "POST",
        data: {
          ticketPrice: selectedRoute.totalBusFare,
          distance: selectedRoute.distance,
          routeNumber: selectedRoute,
          pickup: selectedRoute.pickup,
          dropOff: selectedRoute.dropOff,
          user: id,
        },
      });
      alert("Sucess.");
      deductFee();
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

  const routesSelection = routes?.map((item) => {
    return {
      key: item._id,
      value: item.routeName,
    };
  });

  const selectedRoute = routes?.find((item) => item._id === selected);

  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={routesSelection}
          save="key"
          search={false}
        />
        {selected !== null && (
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
        )}
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
