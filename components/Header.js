import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import colors from '../constants/colors';

import { Icon } from 'react-native-elements'

const WIDTH = Dimensions.get('window').width;

export default class Header extends React.Component {
  render() {
    return(
        <View style={styles.header}>
          <View style={styles.headerTitle}>
            <Text style={styles.headerText}>{this.props.title}</Text>
          </View>
          <View left={WIDTH / 25}>
            <Icon 
            name='menu'
            type='feather'
            color='white'
            size={32}
            onPress={() => this.props.navigation.toggleDrawer()}
            />
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: colors.primary,
    alignItems: 'center'
  },
  headerText: {
    color: 'white',
    fontSize: 26
  },
  headerTitle: {
    left: 0,
    right: 0,
    top: 30,
    bottom: 0, 
    position: 'absolute', 
    flex: 1, 
    justifyContent:'center', 
    alignItems:'center',
  } 
})
