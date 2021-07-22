import * as React from 'react';
import ResourceStatus from './ResourceStatus';
import StatusBar from './StatusBar';
import { Image, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import NavBar from './NavBar';

function CityManagement({ navigation }) {

    async () => {
        try {
          const value = await AsyncStorage.getItem('TOTAL_FUNDS');
          if (value !== null) {
            console.log(value);
          }
          else{
            console.log('No funds set');
          }
        } catch (error) {
            console.log(error);
        }
      };

    return (
        <>
            <ResourceStatus />
            <Image source={{ uri: 'https://picsum.photos/700' }} style={{ width: null, height: 200 }} />
            <View style={styles.container}> 
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>London</Text>
                    <Text style={{ color: 'gray' }}>United Kingdom</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.resourceValueContainer}>
                        <Ionicons name="people" size={24} color="green" />
                        <Text style={styles.label}>0</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonRowContainer }>
                <View style={styles.buttonContainer}>
                    <IconButton
                        icon="office-building"
                        color={Colors.red500}
                        size={40}
                        onPress={() => navigation.navigate('Build List')}
                    />
                    <Text style={styles.buttonText}>Build</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <IconButton
                        icon="account-cowboy-hat"
                        color={Colors.red500}
                        size={40}
                        onPress={() => navigation.navigate('Citizen List')}
                    />
                    <Text style={styles.buttonText}>Recruit</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <IconButton
                        icon="arrow-expand-all"
                        color={Colors.red500}
                        size={40}
                        onPress={() => console.log('Pressed')}
                    />
                    <Text style={styles.buttonText}>Expand</Text>
                </View>
            </View>
            <NavBar />
        </>
    );
}

export default CityManagement

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        height: 75,
        padding: 10,
    },
    resourceValueContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonRowContainer: {
        flexDirection: 'row',
        alignContent: 'space-between',
        height: 150,
    },
    buttonContainer: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
    },
    label: {
        fontSize: 24,
    }
});