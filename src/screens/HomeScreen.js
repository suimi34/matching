import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image
} from "react-native";

function HomeScreen() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const data = [
      { id: 1, name: "girl1" },
      { id: 2, name: "girl2" },
      { id: 3, name: "girl3" }
    ];
    setPartners(data);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          {partners.map(p => {
            return (
              <View
                style={{
                  borderWidth: 0.5,
                  paddingHorizontal: "2%",
                  paddingBottom: "1%",
                  margin: "5%",
                  marginBottom: "1%",
                  width: "40%",
                  borderColor: "grey"
                }}
              >
                <View>
                  <Image
                    source={require("../../assets/boy.jpg")}
                    style={{
                      width: null,
                      resizeMode: "contain",
                      height: 150,
                      marginVertical: "-10%"
                    }}
                  />
                </View>
                <View>
                  <Text>{p.name}</Text>
                  <Text>
                    出身: <Text>埼玉県</Text>
                  </Text>
                  <Text>
                    相性: <Text>80%</Text>
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    // width: "100%",
    height: "100%"
  }
});

export default HomeScreen;
