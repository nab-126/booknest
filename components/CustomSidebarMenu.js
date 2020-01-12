import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import colors from '../constants/colors';
import { TouchableHighlight } from 'react-native-gesture-handler';
 
export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
    this.items = [
      {
        navOptionThumb: 'map-pin',
        type: 'feather',
        navOptionName: 'Map',
        screenToNavigate: 'Map',
      },
      {
        navOptionThumb: 'user',
        type: 'feather',
        navOptionName: 'About',
        screenToNavigate: 'About',
      },
      {
        navOptionThumb: 'mail',
        type: 'feather',
        navOptionName: 'Contact',
        screenToNavigate: 'Contact',
      },
      {
        navOptionThumb: 'help-circle',
        type: 'feather',
        navOptionName: 'Help',
        screenToNavigate: 'Help',
      },
    ];
  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        <Image
          source={require('../assets/logo.jpg')}
          style={styles.sideMenuProfileIcon}
        />
        <View
          style={styles.sideMenuSeparator}
        />
        
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <TouchableHighlight 
            onPress={() => {
              global.currentScreenIndex = key;
              this.props.navigation.navigate(item.screenToNavigate);
            }} 
            key={key}>
            <View
              style={{
                ...styles.sideMenuTab,
                backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}
              >
              <View style={{ marginRight: 10, marginLeft: 20 }}>
                <Icon 
                  name={item.navOptionThumb} 
                  type={item.type}
                  size={25} 
                  color="#808080" 
                />
              </View>
              <Text
                style={{
                  ...styles.sideMenuText,
                  color: global.currentScreenIndex === key ? colors.primary : 'black',
                }}>
                {item.navOptionName}
              </Text>
            </View>
            </TouchableHighlight>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2,
  },
  sideMenuSeparator: {
    width: '100%',
    height: 1,
    backgroundColor: '#e2e2e2',
  },
  sideMenuTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  sideMenuText: {
    fontSize: 15,
  } 
});