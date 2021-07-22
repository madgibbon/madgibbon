//import * as React from 'react';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { List } from 'react-native-paper';

function CitizenList() {
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    getUsers = () => {
          setUsers(require('../assets/citizens.json'));
          setLoading(false);
    }
    useEffect(() => {
        setLoading(true);
        getUsers();
    }, []);
    return (
        <>
            <View>
            {isLoading ? <Text>Loading...</Text> :
            (
                <FlatList
                    data={users}
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={({ item }) => 
                    <List.Item
                        title={item.name}
                        onPress={() => console.log(item.name + ' pressed')}
                        description={item.description} 
                        left={props => <List.Icon {...props} icon={item.icon} />}
                    />
                    }
                />
            )}
        </View>
        </>
    );
}

export default CitizenList;