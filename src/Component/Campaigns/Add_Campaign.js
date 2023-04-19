import React, { Component } from "react";
import DropDownPicker from 'react-native-dropdown-picker'
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

export default class Add_Campaign extends Component {
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

        let data = [{
            value: 'Namw1',
        },
        {
            value: 'Namw2',
        },
        {
            value: 'Namw3',
        },
        ]
        return (
            <SafeAreaView style={customStyles.container}>
              
                <Nav_Head title='Add Campaign' />

                <View style={{ marginTop: 10, paddingHorizontal:10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 14 }}>
                        <TouchableOpacity>
                            <Image source={require("../../../assets/biggerEllipse.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require("../../../assets/smallEllipse.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require("../../../assets/smallEllipse.png")} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 150, gap: 20 }} >
                        <View style={{ gap: 4 }}>
                            <Text>Campaign Title</Text>
                            <TextInput style={customStyles.modelInputBox} />
                        </View>
                        <View style={{ gap: 4 }}>
                            <Text>Start Date</Text>
                            <TextInput style={customStyles.modelInputBox} />
                        </View>
                        <View style={{ gap: 4 }}>
                            <Text>Number Of Days</Text>
                            <TextInput style={customStyles.modelInputBox} />
                        </View>
                        {/* <DropDownPicker
                            items={[
                                { label: 'USA', value: 'usa' },
                                { label: 'UK', value: 'uk' },
                                { label: 'France', value: 'france' },
                            ]}
                            defaultValue={this.state.country}
                            containerStyle={{ height: 40 }}
                            style={{ backgroundColor: '#fafafa' }}
                            onChangeItem={item => this.setState({
                                country: item.value
                            })}
                        /> */}






                        {/* function App() {
  const [open, setOpen] = useState(false);
                        const [value, setValue] = useState(null);
                        const [items, setItems] = useState([
                        {label: 'Apple', value: 'apple'},
                        {label: 'Banana', value: 'banana'}
                        ]);

                        return ( */}
                        {/* <DropDownPicker
                            open={false}
                            value={this.state.country}
                            items={[
                                {label: 'Apple', value: 'apple'},
                                {label: 'Banana', value: 'banana'}
                                ]}
                            // setOpen={setOpen}
                            // setValue={setValue}
                            // setItems={setItems}
                        /> */}
                        <View>
                            <Text>Frequency</Text>
                            <DropdownComponent data={this.state.data} placeholder="Once" border={1}/>
                        </View>


                    </View>
                    <View style={{alignItems:"center"}}>
                        <TouchableOpacity style={[customStyles.genericBtn, { marginTop: 60, width:"60%", backgroundColor: '#1CBC9B', flexDirection:"row", justifyContent:"center", gap:15 }]} activeOpacity={0.7}>
                            <Text style={[customStyles.genericBtnText, { color: '#FFFFFF', fontSize:18 }]}>Create Message </Text>
                            <Image source={require("../../../assets/right-arrow.png")}/>
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>
        );

    }
}

const styles = StyleSheet.create({


    // generic styles start ----------------------------


});
