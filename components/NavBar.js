import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const CityRoute = () => <></>;

const ResearchRoute = () => <></>;

const EndTurnRoute = () => <></>;

const NavBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'city', title: 'City', icon: (props)=> <MaterialCommunityIcons name="city" size={24} color="white" /> },
    { key: 'research', title: 'Research', icon: (props)=> <SimpleLineIcons name="chemistry" size={24} color="white" /> },
    { key: 'endturn', title: 'End turn', icon: (props)=> <MaterialCommunityIcons name="send-clock" size={24} color="white" /> },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    city: CityRoute,
    research: ResearchRoute,
    endturn: EndTurnRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default NavBar;