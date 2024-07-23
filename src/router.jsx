import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Account from './pages/Account';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default Router;
