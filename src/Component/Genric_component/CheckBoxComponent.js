// import React, { Component } from 'react'
// import { Text, StyleSheet, View, TouchableHighlight, SafeAreaView, TouchableOpacity } from 'react-native'
// import { Checkbox } from 'expo-checkbox'

// export default class CheckBoxComponent extends Component {
//     constructor(props) {
//         super(props);

//         this.state ={
//           data: this.props.list
//         }
//     }
//     onChecked(id) {
//         const checkData = this.state.data
//         const index = checkData.findIndex(checkbox => checkbox.id === id)
//         if (checkData[index].disabled != true) {
//             checkData[index].checked = !checkData[index].checked
//         }
//         this.setState(checkData)
//     }

//     render() {

//         // const { data } = this.state
//         const { list } = this.props;

//         return (

//             <View style={{ paddingHorizontal: 22, paddingVertical: 32, gap: 15 }}>
//                 {
//                     list.map((item, key) => {
//                         return (
//                             <TouchableOpacity key={key} style={{ flexDirection: "row", gap: 10 }}
//                                 onPress={() => { this.onChecked(item.id) }} activeOpacity={.7}>
//                                 <Checkbox value={item.checked} onValueChange={() => { this.onChecked(item.id) }} />
//                                 <Text>{item.value}</Text>
//                             </TouchableOpacity>
//                         )
//                     })
//                 }
//             </View>

//         )
//     }
// }

// const styles = StyleSheet.create({})
