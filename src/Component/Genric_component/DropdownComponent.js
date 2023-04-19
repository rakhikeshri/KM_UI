import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const {width} = Dimensions.get('window')

// const data = [
//     { label: 'Item 1', value: '1' },
//     { label: 'Item 2', value: '2' },
//     { label: 'Item 3', value: '3' },
//     { label: 'Item 4', value: '4' },
//     { label: 'Item 5', value: '5' },
//     { label: 'Item 6', value: '6' },
//     { label: 'Item 7', value: '7' },
//     { label: 'Item 8', value: '8' },
//   ];

export default class DropdownComponent extends Component {
    constructor(props){
        super(props);

        this.state ={
          value: null,
        }
    }

  renderItem = item => {
    // const { value } = this.state;
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {/* {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )} */}
      </View>
    );
  };

  render() {
    const { value } = this.state;
    const {data} = this.props;
    const {placeholder} = this.props;
    const {border} = this.props;

    return (
      <Dropdown
        style={[styles.dropdown, {borderWidth: border}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        // inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={ data }
        // search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={ placeholder}
        // searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          this.setState({ value: item.value });
        }}
        // renderLeftIcon={() => (
        //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        // )}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  dropdown: {
    marginVertical: 4,
    height: 36,
    backgroundColor: '#E9E9E9',
    borderRadius: 4,
    padding: 12,
    // borderWidth: t,
    borderColor:"#AFBABC"

    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,

    // elevation: 2,
  },
  icon: {
    marginRight: 5,

  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 16,
//   },
});
