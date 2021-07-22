import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const StatusBar = () => (
 <Appbar.Header style={styles.header} >
    <Appbar.Content titleStyle={{textAlign: 'center'}} title="City" />
  </Appbar.Header>
 );

export default StatusBar

const styles = StyleSheet.create({});