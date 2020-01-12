import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { Icon } from 'react-native-elements';

import Header from '../components/Header'

export default class ContactScreen extends React.Component {
  render() {
    return (
      <View flex={1}>
        <Header navigation={this.props.navigation} title='Contact'/>
        <View style={styles.container}>
          <Text style={styles.text}>Contact us by mail for any inquiries or questions at</Text>
          <View flexDirection='row' alignItems="center">
            <Icon 
                name={'mail'} 
                type={'feather'}
                size={25} 
                color="#808080" 
                />
            <Text style={styles.link}
              onPress={() => Linking.openURL('mailto:booknest.mauritius@gmail.com')}>
              booknest.mauritius@gmail.com
            </Text> 
        </View>
         
        <View
          style={styles.separator}
        />
        
        <Text style={styles.text}>Follow us on Facebook</Text>
          <View flexDirection='row' alignItems="center">
            <Icon 
                name={'facebook'} 
                type={'feather'}
                size={25} 
                color="#808080" 
                />
            <Text style={styles.link}
              onPress={() => Linking.openURL('https://www.facebook.com/booknestmauritius/')}>
              https://www.facebook.com/booknestmauritius
            </Text> 
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 20,
  },
  text: {
    fontSize: 20
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#e2e2e2',
    marginVertical: 10,
  },
  link: {
    color: 'blue',
    fontSize:15,
    marginLeft: 10,
  }
});