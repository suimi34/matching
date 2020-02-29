import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

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
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {partners.map(p => {
            return (
              <View
                style={{
                  borderWidth: 1,
                  padding: "2%",
                  margin: "5%",
                  marginBottom: "1%",
                  width: "40%",
                  borderColor: "grey"
                }}
              >
                <Text>{p.name}</Text>
                <Text>出身</Text>
                <Text>相性</Text>
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
    width: "100%"
  }
});

export default HomeScreen;
