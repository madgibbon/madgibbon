import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons';

const ResourceStatus = () => (
    <View style={styles.container}>
        <View style={styles.resourceValueContainer}>
            <MaterialCommunityIcons name="currency-gbp" size={24} color="red" />
            <Text style={styles.label}>0</Text>
        </View>
        <View style={styles.resourceValueContainer}>
            <SimpleLineIcons name="chemistry" size={24} color="blue" />
            <Text style={styles.label}>0</Text>
        </View>
        <View style={styles.resourceValueContainer}>
            <Ionicons name="people" size={24} color="green" />
            <Text style={styles.label}>0</Text>
        </View>
    </View>
);

export default ResourceStatus

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        height: 50,
    },
    resourceValueContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 24,
    }
});