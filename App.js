import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import ProductPage from './src/Component/Products/ProductPage'
import Add_Update_Units from './src/Component/Products/Add_Update_Units/Add_Update_Units'
import Add_Products from './src/Component/Products/Add_Products/Add_Products'
import Add_Units from './src/Component/Products/Add_Products/Add_Units'
import Upload_CSV from './src/Component/Products/Upload_CSV/Upload_CSV'
import Upload_Purchase_Invoice from './src/Component/Products/Upload_Purchase_Invoice/Upload_Purchase_Invoice'
import Campaigns from './src/Component/Campaigns/Campaigns'
import Add_Campaign from './src/Component/Campaigns/Add_Campaign'
import Add_Campaign_body from './src/Component/Campaigns/Add_Campaign_body'
import List from './src/Component/Products/Add_Products/List'
import SelectAudiene from './src/Component/Campaigns/SelectAudiene'

 
export default class App extends Component {
  render() {
    return (
      <View>
        {/* <ProductPage/> */}
        {/* <Add_Update_Units /> */}
        {/* <Add_Products /> */}
        
        <Add_Units />
        {/* <Upload_CSV /> */}
        {/* <Upload_Purchase_Invoice /> */}
        {/* <Campaigns /> */}
        {/* <Add_Campaign /> */}
        {/* <Add_Campaign_body/> */}
        {/* <SelectAudiene/> */}
        {/* <List/> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({})
