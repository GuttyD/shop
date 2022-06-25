import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function FilterBtn() {
    const [modalVisible, setModalVisible] = useState(false);
    const [size, setSize] = useState()
    const [color, setColor] = useState()
    const [gender, setGender] = useState()
    const [price, setPrice] = useState('50')
 return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Feather name="filter" size={24} color="black" style={{ marginStart: '75%'}}/>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        >
            <View style={{width: '100%', height: '100%', justifyContent: 'center'}}>

            <View style={styles.modalContainer}>

                    <TouchableOpacity style={styles.exit} onPress={() => setModalVisible(!modalVisible)}>
                     <Feather name="x-circle" size={24} color="black" />
                    </TouchableOpacity>

                    <View>
                        <Text style={styles.type}> Size: </Text>
                        <Picker
                            mode={'dropdown'}
                            style={styles.picker}
                            selectedValue={size}
                            onValueChange={(itemValue, itemIndex) =>
                                setSize(itemValue)
                            }>

                            <Picker.Item style={styles.pickerItem} label="38" value="38" />
                            <Picker.Item style={styles.pickerItem} label="39" value="39" />
                            <Picker.Item style={styles.pickerItem} label="40" value="40" />
                            <Picker.Item style={styles.pickerItem} label="41" value="41" />
                            <Picker.Item style={styles.pickerItem} label="42" value="42" />
                            <Picker.Item style={styles.pickerItem} label="43" value="43" />
                            <Picker.Item style={styles.pickerItem} label="44" value="44" />

                        </Picker>

                        <View style={{width: '100%', height: 1, backgroundColor: '#a6a6a6' }}/>

                        <Text style={styles.type}> Color: </Text>
                        <Picker 
                        mode={'dropdown'}
                        style={styles.picker}
                        selectedValue={color}
                        onValueChange={(itemValue, itemIndex) =>
                            setColor(itemValue)
                        }>
                            <Picker.Item style={styles.pickerItem} label="White" value="White"/>
                            <Picker.Item style={styles.pickerItem} label="Black" value="Black"/>
                            <Picker.Item style={styles.pickerItem} label="Blue" value="Blue"/>
                            <Picker.Item style={styles.pickerItem} label="Yellow" value="Yellow"/>
                            <Picker.Item style={styles.pickerItem} label="Red" value="Red"/>
                            <Picker.Item style={styles.pickerItem} label="Green" value="Green"/>

                        </Picker>

                        <View style={{width: '100%', height: 1, backgroundColor: '#a6a6a6' }}/>
                        
                        <Text style={styles.type}> Gender: </Text>
                        <Picker
                        mode={'dropdown'}
                        style={styles.picker}
                        selectedValue={gender}
                        onValueChange={(itemValue, itemIndex) =>
                            setGender(itemValue)
                        }>
                            <Picker.Item style={styles.pickerItem} label="Male" value="Male"/>
                            <Picker.Item style={styles.pickerItem} label="Female" value="Female"/>
                            <Picker.Item style={styles.pickerItem} label="Unisex" value="Unisex"/>

                        </Picker>

                        <View style={{width: '100%', height: 1, backgroundColor: '#a6a6a6' }}/>

                        <Text style={[styles.type,  { alignSelf: 'center'}]}> Price: </Text>

                        <Slider
                            style={{width: '90%', height: 40, alignSelf: 'center'}}
                            minimumValue={100}
                            maximumValue={1000}
                            onValueChange={setPrice}
                            step={10}
                            minimumTrackTintColor="#000"
                            maximumTrackTintColor="#A6A6A6"
                            thumbTintColor='black'
                            />

                            <Text style={styles.price}> R${price} </Text>
                    </View>
                
                <View style={{width: '100%', height: 1, backgroundColor: '#a6a6a6', marginTop: 20 }}/>

            <View style={styles.filterContainer}>

                <TouchableOpacity>
                    <Text style={[styles.type, { borderWidth: 1, backgroundColor: 'white' }]}> Filter </Text>
                </TouchableOpacity>

            </View>

            </View>

            </View>

            </Modal>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    modalContainer: {
        width: '90%',
        height: '65%',
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf: 'center',
        shadowColor: '#000',  
        elevation: 5,
    },
    modalText: {
        fontSize: 32,
        color:'black',
        alignSelf: 'center',
    },
    exit: {
        margin: 10,
    },
    type: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    picker: {
        width: '100%',
        height: 50,

    },
    pickerItem: {
        fontSize: 16,
        borderWidth: 1,
    },
    price: {
        fontSize: 20,
        alignSelf: 'center',
    },
    filterContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})