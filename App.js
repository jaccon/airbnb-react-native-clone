import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import Saved from './screens/Saved';
import Trips from './screens/Trips';
import Inbox from './screens/Inbox';
import Explore from './screens/Explore';
export default createBottomTabNavigator ({
  Explore:{
    screen: Explore,
    navigationOptions:{
      tabBarLabel: "EXPLORE",
      tabBarIcon: ({tintColor}) => {
        return (
          <Icon name="ios-search" color={tintColor} size={24} />
        )
      }
    }
  },
  Saved:{
    screen: Saved,
    navigationOptions:{
      tabBarLabel: "SAVED",
      tabBarIcon: ({tintColor}) => {
        return (
          <Icon name="ios-heart" color={tintColor} size={24} />
        )
      }
    }
  },
  Trips:{
    screen: Trips,
    navigationOptions:{
      tabBarLabel: "TRIPS",
      tabBarIcon: ({tintColor}) => {
        return (
          <Icon name="ios-analytics" color={tintColor} size={24} />
        )
      }
    }
  },
  Inbox:{
    screen: Inbox,
    navigationOptions:{
      tabBarLabel: "INBOX",
      tabBarIcon: ({tintColor}) => {
        return (
          <Icon name="ios-chatboxes" color={tintColor} size={24} />
        )
      }
    }
  },
  Profile:{
    screen: Explore,
    navigationOptions:{
      tabBarLabel: "PROFILE",
      tabBarIcon: ({tintColor}) => {
        return (
          <Icon name="ios-person" color={tintColor} size={24} />
        )
      }
    }
  }, 
},{
  tabBarOptions: {
    inActiveTintColor: "grey",
    activeTintColor: "#FF5A5F",
    style:{
      backgroundColor:'#fff',
      borderTopWidth: 0,
      shadowOffset: {width: 5, height: -3},
      shadowColor: '#ddd',
      shadowOpacity: .2,
      elevatio: 5
    }
  }
})

// export default createBottomTabNavigator