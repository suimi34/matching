import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const defaultRegion = {
  // 東京都新宿区
  latitude: 35.693825,
  longitude: 139.703356,
  latitudeDelta: 0.2,
  longitudeDelta: 0.2
};

const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getLocationAsync();
  }, []);

  function onRegionChange(region) {
    console.log("onchange", region);
    setRegion(region);
  }
  const getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      setErrorMessage("位置情報のパーミッションの取得に失敗しました。");
      setRegion(defaultRegion);
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    setRegion({
      ...region,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    });
  };
  return (
    <View style={styles.container}>
      <MapView
        region={region}
        onRegionChange={onRegionChange}
        style={styles.mapStyle}
        showsUserLocation={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});

export default MapScreen;
