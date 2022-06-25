import React from 'react';
import { View, TextInput, TextReact, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchInput = () => {
 return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', height:70}}>
    <TouchableOpacity style={{width: 50, height: 50, borderWidth: 1, alignItems:'center', justifyContent: 'center', backgroundColor: 'gray', marginTop: 4, borderRadius: 10}}>
        <Feather name="search" size={20} color="black" />
    </TouchableOpacity>
    
    <TextInput
        style={styles.input}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}>
    </TextInput>

    </View>
  );
}

const styles = StyleSheet.create({
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

export default SearchInput