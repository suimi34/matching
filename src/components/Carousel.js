import React from "react";
import Carousel from "react-native-snap-carousel";
import { Text, Image, Dimensions, TouchableOpacity } from "react-native";

const MapPartnerCarousel = props => {
  const data = [
    { id: 1, name: "有楽町", latitude: 35.674919, longitude: 139.76282 },
    { id: 2, name: "銀座駅", latitude: 35.671728, longitude: 139.764443 },
    { id: 3, name: "東京駅", latitude: 35.681236, longitude: 139.767125 },
    { id: 4, name: "品川駅", latitude: 35.628471, longitude: 139.73876 },
    { id: 5, name: "上野駅", latitude: 35.714167, longitude: 139.777409 }
  ];

  const jumpToPartnerLocation = item => {
    props.onPress(item);
  };
  const _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          borderWidth: "1"
        }}
        onPress={() => jumpToPartnerLocation(item)}
      >
        <Text>{item.name}</Text>
        <Image
          source={require("../../assets/boy.jpg")}
          style={{
            width: null,
            height: 150
          }}
        />
      </TouchableOpacity>
    );
  };
  return (
    <Carousel
      data={data}
      renderItem={_renderItem}
      sliderWidth={Dimensions.get("window").width * 0.8}
      itemWidth={Dimensions.get("window").width * 0.2}
      inactiveSlideOpacity={1.0}
    />
  );
};

export default MapPartnerCarousel;
