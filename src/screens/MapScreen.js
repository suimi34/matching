import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapPartnerCarousel from "../components/Carousel";
import { Marker } from "react-native-maps";

const defaultRegion = {
  // 東京都新宿区
  latitude: 35.693825,
  longitude: 139.703356,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05
};

const defaultPartners = [
  { id: 1, name: "有楽町", latitude: 35.674919, longitude: 139.76282 },
  { id: 2, name: "銀座駅", latitude: 35.671728, longitude: 139.764443 },
  { id: 3, name: "東京駅", latitude: 35.681236, longitude: 139.767125 },
  { id: 4, name: "品川駅", latitude: 35.628471, longitude: 139.73876 },
  { id: 5, name: "上野駅", latitude: 35.714167, longitude: 139.777409 }
];

const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    setPartners(defaultPartners);
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
  const handleClickPartner = props => {
    setRegion({
      ...region,
      latitude: props.latitude,
      longitude: props.longitude
    });
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.75 }}>
        <MapView
          ref={map => (this.map = map)}
          region={region}
          onRegionChange={() => onRegionChange}
          style={styles.mapStyle}
          showsUserLocation={true}
        >
          {partners &&
            partners.map((p, index) => {
              return (
                <Marker
                  key={index}
                  title={p.name}
                  coordinate={{ latitude: p.latitude, longitude: p.longitude }}
                />
              );
            })}
        </MapView>
      </View>
      <View style={{ flex: 0.25 }}>
        <MapPartnerCarousel onPress={handleClickPartner} />
      </View>
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
