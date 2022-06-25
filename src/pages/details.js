import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';

const Products = [
    {name: 'Tênis Nike Revolution 6 Next Nature Masculino', price: 'R$ 279,99', id: '1', image: require('../../assets/1.jpg') },
    {name: 'Adidas Ultimashow', price: 'R$ 242,99', id: 2, image: require('../../assets/2.jpg') },
    {name: 'Evoltenn Easy Style', price: 'R$ 119,90', id: 3 ,image: require('../../assets/3.jpg')},
    {name: 'Nike Downshifter 11 Masculino', price: 'R$ 269,99', id: 4 ,image: require('../../assets/4.jpg')},
    {name: 'Adidas Runfalcon 2.0 Masculino', price: 'R$ 229,99', id: 5 ,image: require('../../assets/5.jpg')},
    {name: 'Olympikus Indico Masculino', price: 'R$ 113,99', id: 6 ,image: require('../../assets/6.jpg')},
    {name: 'Olympikus Cyber 2 Masculino', price: 'R$ 113,99', id: 7 ,image: require('../../assets/7.jpg')},
    {name: 'Mizuno Cometa', price: 'R$ 179,99', id: 8 ,image: require('../../assets/8.jpg')},
    {name: 'Adidas Coreracer Masculino', price: 'R$ 199,99', id: 9 ,image: require('../../assets/9.jpg')},
    {name: 'Olympikus Ação Masculino', price: 'R$ 132,99', id: 10 ,image: require('../../assets/10.jpg')},
]

const Details = ({ navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text> Details </Text>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 150,
        height: 200,
        resizeMode: 'contain',
        marginTop: '5%',
        marginBottom: '5%',
    },
    itemname: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
    },
    itemprice: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

export default Details;