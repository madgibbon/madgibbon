import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import CityManagement from './components/CityManagement';
import BuildList from './components/BuildList';
import CitizenList from './components/CitizenList';
import NavBar from './components/NavBar';

const Stack = createStackNavigator();

const saveFunds = async () => {
  try {
    /*const value = await AsyncStorage.getItem('TOTAL_FUNDS');
    if (value === null) {
      await AsyncStorage.setItem(
        '@TOTAL_FUNDS:key',0
      );
    }*/
    await AsyncStorage.setItem("TOTAL_FUNDS", 0)
    console.log('Data successfully saved')
  } catch (error) {
    console.log(error)
  }
};

export default function Main() {


  saveFunds();

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="City Management" component={CityManagement} />
          <Stack.Screen name="Build List" component={BuildList} />
          <Stack.Screen name="Citizen List" component={CitizenList} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}