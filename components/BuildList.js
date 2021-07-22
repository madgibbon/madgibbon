//import * as React from 'react';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { List } from 'react-native-paper';

function BuildList() {
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    getUsers = () => {
        /*fetch('https://jsonplaceholder.typicode.com/users/' + id)
          .then((response) => response.json())
          .then((json) => setUsers(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));*/
          setUsers(require('../assets/buildings.json'));
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

export default BuildList;