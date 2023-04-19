import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'

export default class Nav_Head extends Component {

    state = {
        togglePlus: false,
        toggleEdit: false,
    }

    togglePlus = () => {
        this.setState({
            togglePlus: !this.state.togglePlus,
        })
    }

    toggleEdit = () => {
        this.setState({
            toggleEdit: !this.state.toggleEdit,
        })
    }

    render() {
        return (
            <View style={styles.nav}>
                <Image source={require("../../assets/back-arrow.png")} />
                <Text style={styles.navTitle}>{this.props.title}</Text>

                {/* ----------- plus icon ----------------------------------------------------------- */}

                {this.props.plus === true ? (
                  <TouchableOpacity onPress={this.togglePlus} activeOpacity={0.7}>
                        <Image source={require("../../assets/plus.png")} />
                    </TouchableOpacity>
                ) : null}
                {this.state.togglePlus === true ? (
                  <View style={styles.togglePlusBox}>
                        <Text style={styles.toggleOptions}>Add Products</Text>
                        <Text style={styles.toggleOptions}>Upload CSV File</Text>
                        <Text style={styles.toggleOptions}>Upload Purchase Invoice</Text>
                        <Text style={styles.toggleOptions}>Update Stocks</Text>
                        <Text style={styles.toggleOptions}>Add/Update Units</Text>
                    </View>
                ) : null}

                {/* ----------- edit icon ----------------------------------------------------------- */}

                {this.props.edit === true ? (
                    <TouchableOpacity onPress={this.toggleEdit} activeOpacity={0.7}>
                        <Image source={require("../../assets/editIcon.png")} />
                    </TouchableOpacity>
                ) : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
  nav: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    paddingHorizontal:5,
    height: 45,
    zIndex: 2,
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1
  },
  navTitle: {
    flex: 2,
    paddingHorizontal: 10,
    fontSize: 18,
    fontWeight: 700,
  },
  togglePlusBox: {
    position: "absolute",
    right: 0,
    top: 34,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    shadowColor: 'grey',
    elevation: 15,
    minWidth: 160,
  },
  toggleOptions: {
    fontWeight: 400,
    padding: 12,
  },
  genericList: {
    padding: 15,
    backgroundColor: "#EDF2F3",
  }
})
