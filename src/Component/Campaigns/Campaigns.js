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
import Nav_Head from "../Nav_Head";
import { customStyles } from "../../Generic_Styles";

export default class Campaigns extends Component {
    state = {
        togglePlus: false,
    };

    togglePlus = () => {
        this.setState({
            togglePlus: !this.state.togglePlus,
        });
    };

    render() {
        return (
            <SafeAreaView style={customStyles.container}>

                <Nav_Head title='Campaigns' plus={true} />

                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={[styles.genericList, { justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '85%' }]}>
                        <View style={{ gap: 12, width: '70%' }}>
                            <View>
                                <Text style={{ fontSize: 14, fontWeight: 700 }}>Campaign Title</Text>
                                <Text>Template - Discount 1</Text>
                            </View>
                            <View>
                                <Text>Start - 24/02/2023 10:10 AM</Text>
                                <Text>End - 28/02/2023 10:10 AM</Text>
                                <Text>Frequency - Once</Text>
                            </View>
                        </View>
                        <View style={{ width: '30%' }}>
                            <Text>105</Text>
                            <Text>Customers</Text>
                            <Text style={[customStyles.draft_complete_box, { backgroundColor: '#BAC5C8' }]} >Completed</Text>
                        </View>
                    </View>
                    <View style={[styles.genericList, { justifyContent: 'center', alignItems: 'center', backgroundColor: '#CEDADC', width: '15%' }]}>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Image source={require("../../../assets/addProducts_copyIcon.png")} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={[styles.genericList, { justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '85%' }]}>
                        <View style={{ gap: 12, width: '70%' }}>
                            <View>
                                <Text style={{ fontSize: 14, fontWeight: 700 }}>Campaign Title</Text>
                                <Text>Template - Discount 1</Text>
                            </View>
                            <View>
                                <Text>Start - 24/02/2023 10:10 AM</Text>
                                <Text>End - 28/02/2023 10:10 AM</Text>
                                <Text>Frequency - Once</Text>
                            </View>
                        </View>
                        <View style={{ width: '30%' }}>
                            <Text>105</Text>
                            <Text>Customers</Text>
                            <Text style={[styles.draft_complete_box, { backgroundColor: '#BAC5C8' }]} >Completed</Text>
                        </View>
                    </View>
                    <View style={[styles.genericList, { justifyContent: 'center', alignItems: 'center', backgroundColor: '#CEDADC', width: '15%' }]}>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Image source={require("../../../assets/addProducts_copyIcon.png")} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={[styles.genericList, { justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '85%' }]}>
                        <View style={{ gap: 12, width: '70%' }}>
                            <View>
                                <Text style={{ fontSize: 14, fontWeight: 700 }}>Campaign Title</Text>
                                <Text>Template - Discount 1</Text>
                            </View>
                            <View>
                                <Text>Start - 24/02/2023 10:10 AM</Text>
                                <Text>End - 28/02/2023 10:10 AM</Text>
                                <Text>Frequency - Once</Text>
                            </View>
                        </View>
                        <View style={{ width: '30%' }}>
                            <Text>105</Text>
                            <Text>Customers</Text>
                            <Text style={[customStyles.draft_complete_box, { backgroundColor: '#BAC5C8' }]} >Completed</Text>
                        </View>
                    </View>
                    <View style={[styles.genericList, { justifyContent: 'center', alignItems: 'center', backgroundColor: '#CEDADC', width: '15%' }]}>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Image source={require("../../../assets/addProducts_copyIcon.png")} />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );

    }
}

const styles = StyleSheet.create({


    // generic styles start ----------------------------

    genericList: {
        padding: 15,
        backgroundColor: "#EDF2F3",
        marginBottom: 12,
        fontSize: 12,
        gap: 10
    },

});
