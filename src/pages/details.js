import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';
import Divider from '../components/divider'

const Related = [
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
const Details = ({ route, navigation }) => {
    const { item } = route.params;
    const { name } = route.params;
    const { price } = route.params;
    const { image } = route.params;

    const limitName = (name) => {
        if(name.length > 23){
            return name.substring(0, 16) + '...'
        }
        return name;
    }

    return (
        <SafeAreaView style={styles.container}>

        <ScrollView>
            
            <View style={styles.imageContainer}>
                <Image style={styles.productImage} source={image}/>
            </View>

            <Divider/>

            <View style={styles.infoContainer}>
                <Text style={styles.productName}> {name} </Text>
                <Text style={styles.productPrice}> {price} </Text>
            </View>

        </ScrollView>

            <View>
            <Text style={styles.relatedText}> Related </Text>
            </View>

            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Related}
            keyExtractor={item => item.id}
            renderItem={({item}) => 

            <View style={styles.relatedContainer}>
                    <TouchableOpacity style={styles.related} onPress={() => navigation.navigate('Details', item, item.image)}>
                        <Image source={item.image} style={styles.relatedImage}/>
                        
                        <View style={{alignItems: 'center'}}>
                        <Text> {limitName(item.name)} </Text>
                        <Text> {item.price} </Text>
                        </View>

                    </TouchableOpacity>
                </View>
            }
            />

            <TouchableOpacity style={styles.addCart} onPress={() => Alert.alert("Added to cart")}>
                <Text style={styles.addCartText}> Add to cart </Text>
            </TouchableOpacity>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    infoContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginStart: 5,
    },
    imageContainer: {
        width: '100%',
        height: 300,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    productImage: {
        flex: 1,
        resizeMode: 'contain',
        marginTop: '5%',
        marginBottom: '5%',
    },
    productName: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
    },
    productPrice: {
        color: '#000',
        fontSize: 20,
        marginVertical: 10,
    },
    relatedText: {
        fontSize: 32,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    relatedContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        marginEnd: 5,
        marginStart: 5,
    },
    relatedImage: {
        resizeMode: 'contain',
        width: 150,
        height: 80,
    },
    addCart: {
        width: '90%',
        height: 60,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',   
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 10,
    },
    addCartText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default Details;