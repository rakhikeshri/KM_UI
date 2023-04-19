import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Modal,
  TextInput
} from "react-native";
import Nav_Head from "../../Nav_Head";
import { customStyles } from "../../Generic_Styles";

export default class Add_Update_Units extends Component {
  state = {
    toggleEdit: false,
    
  };

  toggleEdit = () => {
    this.setState({
      toggleEdit: !this.state.toggleEdit,
    });
  };

  

  render() {
    return (
      <SafeAreaView style={customStyles.container}>

        <Nav_Head title='Add/Update Units' plus={true} />

        <View style={{ marginTop: 10, gap: 12 }}>

          <View style={[customStyles.genericList, { justifyContent: 'space-between', flexDirection: 'row' }]}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: 700 }}>Tablet1 </Text>
              <Text>(Tablet)</Text>
            </View>
            <TouchableOpacity onPress={this.toggleEdit} activeOpacity={0.7}>
              <Image source={require("../../../../assets/editIcon.png")} />
            </TouchableOpacity>
          </View>

          <View style={[customStyles.genericList, { justifyContent: 'space-between', flexDirection: 'row' }]}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: 700 }}>Stripsxyz </Text>
              <Text>(Label)</Text>
            </View>
            <TouchableOpacity onPress={this.toggleEdit} activeOpacity={0.7}>
              <Image source={require("../../../../assets/editIcon.png")} />
            </TouchableOpacity>
          </View>

          <View style={[customStyles.genericList, { justifyContent: 'space-between', flexDirection: 'row' }]}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontWeight: 700 }}>Packet </Text>
              <Text></Text>
            </View>
            <TouchableOpacity onPress={this.toggleEdit} activeOpacity={0.7}>
              <Image source={require("../../../../assets/editIcon.png")} activeOpacity={0.7} />
            </TouchableOpacity>
          </View>

        </View>

        {
          this.state.toggleEdit === true ? (
            <Modal transparent={true}>
              <View style={customStyles.genericTransparentModal} >
                <View style={customStyles.genericModalBox}>

                  <View style={{ paddingHorizontal: 22, paddingVertical: 32, gap: 15 }}>

                    <View style={customStyles.centerView}>
                      <Text style={{ fontWeight: 700 }}>Name</Text>
                      <TextInput placeholder="Name" style={styles.modelInputBox}></TextInput>
                    </View>

                    <View style={customStyles.centerView}>
                      <Text style={{ fontWeight: 700 }}>Label</Text>
                      <TextInput placeholder="Name" style={styles.modelInputBox}></TextInput>
                    </View>

                    <View style={customStyles.centerView}>
                      <Text style={{ fontWeight: 700 }}>Conversion Factor</Text>
                      <TextInput placeholder="Name" style={styles.modelInputBox}></TextInput>
                    </View>

                  </View>

                  <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={[customStyles.genericModalBtn, { backgroundColor: '#EDF2F3', borderBottomStartRadius: 8, }]}
                     activeOpacity={0.7} onPress={this.toggleEdit}>
                      <Text style={[customStyles.genericModalBtnText, { color: "#3C3C3C" }]}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[customStyles.genericModalBtn, { backgroundColor: '#1CBC9B', borderBottomEndRadius: 8, }]} activeOpacity={0.7}>
                      <Text style={[customStyles.genericModalBtnText, { color: "#FFFFFF" }]}>Create</Text>
                    </TouchableOpacity>
                  </View>

                </View>
              </View>
            </Modal>
          ) : null
        }
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  modelInputBox: {
    minWidth: 150,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#BDC6C8',
    paddingHorizontal: 10
  }
});
