import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput, Modal} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FilterBtn from '../components/filter';

const Products = [
    {
        id: '1',
        name: 'Nike Revolution 6 Next Nature Masculino',
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
        name: 'Nike Downshifter 11 Masculino',
        price: 'R$ 269,99',
        image: require('../../assets/4.jpg')
    }, {
        id: 5,
        name: 'Adidas Runfalcon 2.0 Masculino',
        price: 'R$ 229,99',
        image: require('../../assets/5.jpg')
    }, {
        id: 6,
        name: 'Olympikus Indico Masculino',
        price: 'R$ 113,99',
        image: require('../../assets/6.jpg')
    }, {
        id: 7,
        name: 'Olympikus Cyber 2 Masculino',
        price: 'R$ 113,99',
        image: require('../../assets/7.jpg')
    }, {
        id: 8,
        name: 'Mizuno Cometa',
        price: 'R$ 179,99',
        image: require('../../assets/8.jpg')
    }, {
        id: 9,
        name: 'Adidas Coreracer Masculino',
        price: 'R$ 199,99',
        image: require('../../assets/9.jpg')
    }, {
        id: 10,
        name: 'Olympikus Ação Masculino',
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

//explain the const above. It's a function that returns a component. The component is a view.
//The view has a style. The style has a container. The container has a product. The product has a touchableopacity.
//The touchableopacity has a style. The style has an image. The image has a source. The source has the image.
//The image has a style. The style has an itemname. The itemname has a text. The text has a style.
//The style has an itemprice. The itemprice has a text. The text has a style.
//The style has a header. The header has a text. The text has a style. The style has a text. The text has a style.

const HomeScreen = ({navigation}) => {
 return ( 
   <SafeAreaView>

    <View style={styles.header}>
        <View style={{width: '90%', width: '100%', justifyContent:'center', alignItems: 'center' }}>
            <Text style={styles.store}> STORE </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Feather name="shopping-cart" size={30} color="black" style={{right: 55}}/>
        </TouchableOpacity>
    </View>


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

   <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Text style={{fontSize: 20, fontWeight: 'bold'}}> Products </Text>
    <Text style={{fontSize: 14, marginTop: 5}}> 10 </Text>
    <FilterBtn/>
   </View>


    <FlatList
        showsVerticalScrollIndicator={false}
        data={Products}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => 
        <View style={styles.container}>
            
            <View style={styles.product}>
                <TouchableOpacity onPress={() => navigation.navigate('Details')}>
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