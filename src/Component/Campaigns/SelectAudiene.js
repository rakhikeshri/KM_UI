import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity, StatusBar, Platform } from 'react-native'
import audience from './List_of_Audience'
import { Checkbox } from 'expo-checkbox';
import Nav_Head from "../Nav_Head";
import { customStyles } from "../../Generic_Styles";

export default class SelectAudiene extends Component {

    state = {
        audienceList: audience
    }

    onChecked(id) {
        const checkData = this.state.audienceList
        const index = checkData.findIndex(checkbox => checkbox.id === id)
        // if (checkData[index].disabled != true) {
        checkData[index].checked = !checkData[index].checked
        // }
        this.setState({ checkData })
    }

    render() {
        const {audienceList } = this.state
        return (
            <SafeAreaView style={customStyles.container}>
                
                <Nav_Head title='Products' />

                <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 14 }}>

                        <TouchableOpacity>
                            <Image source={require("../../../assets/smallEllipse.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require("../../../assets/smallEllipse.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require("../../../assets/biggerEllipse.png")} />
                        </TouchableOpacity>
                    </View>

                    <View style={customStyles.genericModalBox}>
                        <View style={{ paddingHorizontal: 22, paddingVertical: 32, gap: 15 }}>
                            {
                                audienceList.map((item, key) => {
                                    return (
                                        <TouchableOpacity key={key} style={{ flexDirection: "row", gap: 10 }} onPress={() => { this.onChecked(item.id) }} activeOpacity={.7}>
                                            <Checkbox value={item.checked} style={{ borderRadius: 4 }} onValueChange={() => { this.onChecked(item.id) }}  />
                                            <View>
                                            <Text>{item.name}</Text>
                                            <Text>{item.visit}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </View>
                    {/* <View style={{ marginTop: 20, gap: 20 }} >
                        <View>
                            <DropdownComponent data={this.state.data} placeholder="Select Template" border={0} />
                        </View>
                        <View style={{ gap: 4 }}>
                            <Text>Template</Text>
                            <Text style={styles.textPara}>“Hurry up! Your neighbouring shop SHOP_NAME is providing DISCOUNT% discount on PRODUCT_CATEGORY. Offer ends soon.”</Text>
                        </View>
                        <View style={{ gap: 4 }}>
                            <Text>Example</Text>
                            <Text style={styles.textPara}>“Hurry up! Your neighbouring shop KM Groceries is providing 50% discount on Groceries. Offer ends soon.”</Text>
                        </View>
                        <View style={{ gap: 4 }}>
                            <Text>Shop _Name</Text>
                            <TextInput style={styles.textInput} />
                        </View>
                        <View style={{ gap: 4 }}>
                            <Text>DISCOUNT</Text>
                            <TextInput style={styles.textInput} />
                        </View>
                        <View style={{ gap: 4 }}>
                            <Text>PRODUCT_CATEGORY</Text>
                            <TextInput style={styles.textInput} />
                        </View>
                        <View style={{ gap: 4 }}>
                            <Text>Final Message Body</Text>
                            <Text style={styles.textPara}>“Hurry up! Your neighbouring shop KM Groceries is providing 50% discount on Groceries. Offer ends soon.”</Text>
                        </View>

                    </View>
                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity style={[styles.genericBtn, { marginTop: 60, width: "60%", backgroundColor: '#1CBC9B', flexDirection: "row", justifyContent: "center", gap: 15 }]} activeOpacity={0.7}>
                            <Text style={[styles.genericBtnText, { color: '#FFFFFF', fontSize: 18 }]}>Select Audience </Text>
                            <Image source={require("../../../assets/right-arrow.png")} />
                        </TouchableOpacity>
                    </View> */}
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

    checkBoxContainer:{
        flexDirection:"row", justifyContent:"space-between", alignItems:"center", backgroundColor:"#EBF0F1", padding:8, height:42
    },
});
