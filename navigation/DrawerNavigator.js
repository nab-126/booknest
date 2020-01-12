import React from 'react';
import { Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'; 

import MapScreen from '../screens/MapScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import HelpScreen from '../screens/HelpScreen';

import CustomSidebarMenu from '../components/CustomSidebarMenu'

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  contentComponent: CustomSidebarMenu,
  drawerWidth: WIDTH * 0.70,
}

const DrawerNavigator = createDrawerNavigator({
      Map: {
        screen: MapScreen
      },
      About: {
        screen: AboutScreen
      },
      Contact: {
        screen: ContactScreen
      },
      Help: {
        screen: HelpScreen
      } 
    },
    DrawerConfig
);

export default createAppContainer(DrawerNavigator);