import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/pages/homescreen';
import Details from './src/pages/details';
import CartScreen from './src/pages/cartscreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto"/>
      <Stack.Navigator
        initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Cart" component={CartScreen}/>
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}