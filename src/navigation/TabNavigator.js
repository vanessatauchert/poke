import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import SavedPokemonsScreen from '../screens/SavedPokemonsScreen';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => (
          <Ionicons name={focused ? 'home' : 'home-outline'} size={24} />
        ),
      },
    },
    SavedPokemons: {
      screen: SavedPokemonsScreen,
      navigationOptions: {
        tabBarLabel: 'Saved Pokémons',
        tabBarIcon: ({ focused }) => (
          <Ionicons name={focused ? 'star' : 'star-outline'} size={24} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
      showLabel: true,
      labelStyle: {
        fontSize: 12,
      },
    },
  }
);

export default TabNavigator;
