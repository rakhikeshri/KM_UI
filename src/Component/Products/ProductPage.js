import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform } from "react-native";
import Nav_Head from "../Nav_Head";
import { customStyles } from "../../Generic_Styles";

export default class ProductPage extends Component {
  render() {
    return (
      <SafeAreaView style={customStyles.container}>
        <Nav_Head title='Products' plus={true} />

        <View style={{ marginTop: 10, gap: 12 }}>
          <View style={customStyles.genericList}>
            <Text></Text>
          </View>
          <View style={customStyles.genericList}>
            <Text></Text>
          </View>
          <View style={customStyles.genericList}>
            <Text></Text>
          </View>
          <View style={customStyles.genericList}>
            <Text></Text>
          </View>
          <View style={customStyles.genericList}>
            <Text></Text>
          </View>
          <View style={customStyles.genericList}>
            <Text></Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 20,
  },
  genericList: {
    padding: 15,
    backgroundColor: "#EDF2F3",
  }
});
