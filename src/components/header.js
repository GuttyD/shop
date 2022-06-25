import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'

const Header = () => {
 return (
    <View style={styles.header}>
        <View style={{width: '90%', width: '100%', justifyContent:'center', alignItems: 'center' }}>
            <Text style={styles.store}> STORE </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Feather name="shopping-cart" size={30} color="black" style={{right: 55}}/>
        </TouchableOpacity>

        
        <TextInput
            style={styles.input}
            placeholder="Search"
            autoCapitalize="none"
            autoCorrect={false}>
        </TextInput>

        <TouchableOpacity style={{width: 50, height: 50, borderWidth: 1, alignItems:'center', justifyContent: 'center', backgroundColor: 'gray', marginTop: 4, borderRadius: 10}}>
            <Feather name="search" size={20} color="black" />
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 65,
        backgroundColor: 'white',
        flexDirection:'row',
        borderBottomWidth: 1,
        justifyContent:'space-between',
        alignItems: 'center',
        },
    store: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        },
     input: {
        width: '70%',
        height: '70%',
        textAlign: 'center',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
        fontSize: 18,
        marginTop: '1%',
        color: 'black',
        },
});

export default Header