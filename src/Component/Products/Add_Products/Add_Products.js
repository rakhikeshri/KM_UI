import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    StatusBar,
    Platform,
} from "react-native";
import Nav_Head from "../../Nav_Head";
import { customStyles } from "../../Generic_Styles";

export default class Add_Products extends Component {
  
    render() {
        return (
            <SafeAreaView style={customStyles.container}>

                    <Nav_Head title='Add Products' />

                    <View style={{ marginTop: 10, marginBottom: 30, gap: 12 }}>

                        <View style={[customStyles.genericList, customStyles.centerView, { borderRadius: 8 }]}>
                            <View style={{ gap: 12, width: '70%' }}>
                                <Text>Session of (04/04/2023 04:00 PM) </Text>
                                <Text style={{ fontWeight: 500 }}>54 Products added currently</Text>
                                <Text style={[customStyles.draft_complete_box, { backgroundColor: '#BAC5C8', width: '40%' }]} >Drafts</Text>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 15, width: '30%' }}>
                                <TouchableOpacity>
                                    <Image source={require("../../../../assets/addProducts_editIcon.png")} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={require("../../../../assets/addProducts_copyIcon.png")} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={[customStyles.genericList, customStyles.centerView, { borderRadius: 8 }]}>
                            <View style={{ gap: 12, width: '70%' }}>
                                <Text>Session of (04/04/2023 04:00 PM)</Text>
                                <Text style={{ fontWeight: 500 }}>54 Products added currently</Text>
                                <Text style={[customStyles.draft_complete_box, { backgroundColor: '#1CBC9B', width: '50%' }]}>Completed</Text>
                            </View>
                        </View>

                    </View>

                    <TouchableOpacity style={[customStyles.genericBtn, { backgroundColor: '#1CBC9B' }]} activeOpacity={0.8} >
                        <Text style={[customStyles.genericBtnText, { color: '#FFFFFF' }]}>+Add More</Text>
                    </TouchableOpacity>   
                                  
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({


});
