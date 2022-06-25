import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/header'
import SearchInput from '../components/searchinput'
import ProductsCount from '../components/productscount';

const Products = [
    {
        id: '1',
        name: 'Nike Revolution 6 Next Nature Male',
        price: 'R$ 279,99',
        image: require('../../assets/1.jpg')
    }, {
        id: 2,
        name: 'Adidas Ultimashow',
        price: 'R$ 242,99',
        image: require('../../assets/2.jpg')
    }, {
        id: 3,
        name: 'Evoltenn Easy Style',
        price: 'R$ 119,90',
        image: require('../../assets/3.jpg')
    }, {
        id: 4,
        name: 'Nike Downshifter 11 Male',
        price: 'R$ 269,99',
        image: require('../../assets/4.jpg')
    }, {
        id: 5,
        name: 'Adidas Runfalcon 2.0 Male',
        price: 'R$ 229,99',
        image: require('../../assets/5.jpg')
    }, {
        id: 6,
        name: 'Olympikus Indico Male',
        price: 'R$ 113,99',
        image: require('../../assets/6.jpg')
    }, {
        id: 7,
        name: 'Olympikus Cyber 2 Male',
        price: 'R$ 113,99',
        image: require('../../assets/7.jpg')
    }, {
        id: 8,
        name: 'Mizuno Cometa',
        price: 'R$ 179,99',
        image: require('../../assets/8.jpg')
    }, {
        id: 9,
        name: 'Adidas Coreracer Male',
        price: 'R$ 199,99',
        image: require('../../assets/9.jpg')
    }, {
        id: 10,
        name: 'Olympikus Ação Male',
        price: 'R$ 132,99',
        image: require('../../assets/10.jpg')
    },
]
const limitName = (name) => {
    if(name.length > 23){
        return name.substring(0, 23) + '...'
    }
    return name;
}

const HomeScreen = ({ routes, navigation}) => {
 return ( 
   <SafeAreaView>

    <Header/>
    <SearchInput/>
    <ProductsCount/>

    <FlatList
        showsVerticalScrollIndicator={false}
        data={Products}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => 
        <View style={styles.container}>
            
            <View style={styles.product}>
                <TouchableOpacity onPress={() => navigation.navigate('Details', item, item.image)}>
                    <Image source={item.image} style={styles.image}/>
                    <Text style={styles.itemname}> {limitName(item.name)} </Text>
                    <Text style={styles.itemprice}>{item.price} </Text>
                </TouchableOpacity>
            </View>
        </View>
        }
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderColor: 'rgba(200, 200, 200, 1)',
    },
    product: {
        width: '95%',
        height: 300,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginVertical: '3%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
    image: {
        width: 150,
        height: '70%',
        resizeMode: 'contain',
        marginTop: '5%',
        marginBottom: '5%',
    },
    itemname: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
        alignSelf: 'baseline',
    },
    itemprice: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default HomeScreen