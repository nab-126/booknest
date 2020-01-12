import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Header from '../components/Header'

export default class AboutScreen extends React.Component {
  render() {
    return (
      <View flex={1}>
        <Header navigation={this.props.navigation} title='About'/>
        <Image
            source={require('../assets/founders.jpg')}
            style={styles.image}
        />
        <View
        style={styles.separator}
        />
        <View style={styles.textArea}>
          <Text style={styles.textTitle}>Founders</Text>
          <Text style={styles.textSimple}>Nabeel and Imaan Hingun</Text>
          <Text style={styles.textSimple}>Booknest was launched as an initiative to promote reading, particularly among the youth. The project based on the
          "Little Free Library" was launched in 2016 and after difficult starts regarding authorization with local authorities to install the Booknests, 
          the project finally gained some traction. We now have multiple Booknests around the island and have more demand to install additional Booknests.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 180,
    marginTop: 20,
    marginBottom: 10,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#e2e2e2',
    marginVertical:10,
  },
  textArea: {
    flex: 1,
    backgroundColor: 'white',
    width: '90%',
    marginLeft: 10,
  },
  textTitle: {
    fontSize: 20,
  },
  textSimple: {
    fontSize: 15,
  }
});