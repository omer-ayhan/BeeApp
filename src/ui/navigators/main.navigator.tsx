import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import {routes} from '../../config/routes';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const {HOME} = routes;
  return (
    <NavigationContainer>
      {/* Main Page */}
      <Stack.Navigator initialRouteName={HOME}>
        <Stack.Screen
          name={HOME}
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
