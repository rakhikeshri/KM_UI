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
    TextInput,

} from "react-native";
import DropdownComponent from "../Genric_component/DropdownComponent";
import Nav_Head from "../Nav_Head";
import { customStyles } from "../../Generic_Styles";

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

export default class Add_Campaign_body extends Component {
    state = {
        togglePlus: false,
        country: 'India',
        data: data,
    };

    togglePlus = () => {
        this.setState({
            togglePlus: !this.state.togglePlus,
        });
    };

    render() {

        return (
            <SafeAreaView style={customStyles.container}>

                <Nav_Head title='Add Campaign Body' />

                <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 14 }}>
                        <TouchableOpacity>
                            <Image source={require("../../../assets/smallEllipse.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require("../../../assets/biggerEllipse.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require("../../../assets/smallEllipse.png")} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 20, gap: 20 }} >
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
                        <TouchableOpacity style={[customStyles.genericBtn, { marginTop: 60, width: "60%", backgroundColor: '#1CBC9B', flexDirection: "row", justifyContent: "center", gap: 15 }]} activeOpacity={0.7}>
                            <Text style={[customStyles.genericBtnText, { color: '#FFFFFF', fontSize: 18 }]}>Select Audience </Text>
                            <Image source={require("../../../assets/right-arrow.png")} />
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>
        );

    }
}

const styles = StyleSheet.create({


    // generic styles start ----------------------------

   
    textInput:
    {
        width: "100%", height: 36, borderWidth: 1, borderColor: "#AFBABC", borderRadius: 4
    },
    textPara: {
        backgroundColor: "#EDF2F3", padding: 6
    }



});
