import React from 'react';
import { View, TextInput, TextReact, StyleSheet, TouchableOpacity, Text } from 'react-native';
import FilterBtn from '../components/filter'
import { Feather } from '@expo/vector-icons'

const ProductsCount = () => {
    return(
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}> Products </Text>
        <Text style={{fontSize: 14, marginTop: 5}}> 10 </Text>
        <FilterBtn/>
   </View>
    )
}

const styles = StyleSheet.create({

})

export default ProductsCount