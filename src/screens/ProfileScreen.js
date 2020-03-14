import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  ImageBackground
} from "react-native";

function ProfileScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ maxHeight: 300 }}>
          <ImageBackground
            source={require("../../assets/boy.jpg")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={{ padding: "5%" }}>
          <Text
            style={{
              fontWeight: "bold"
            }}
          >
            基本情報
          </Text>
          <View
            style={{
              flexDirection: "row"
            }}
          >
            <Text style={{ minWidth: 100 }}>ニックネーム</Text>
            <Text style={{ marginLeft: "10%" }}>テスト　太郎</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ minWidth: 100 }}>身長</Text>
            <Text style={{ marginLeft: "10%" }}>179</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileScreen;
