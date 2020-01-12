import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import Header from '../components/Header'

export default class HelpScreen extends React.Component {
  render() {
    return (
      <View flex={1}>
        <Header navigation={this.props.navigation} title='Help'/>
        <Image
            source={require('../assets/booknest.jpg')}
            style={styles.image}
        />
        <ScrollView style={styles.textContainer}>
          <Text style={styles.question}>
            What is 'Booknest'?
          </Text>
          <Text style={styles.answer}>        
            An initiative to offer free books housed in small containers (nests) to members of the local community (Vacoas, Floreal and Quatre Bornes, as pilot)
          </Text>
          <Text style={styles.question}>
            How does it work?
          </Text>
          <Text style={styles.answer}>        
            A doll-size house-shaped box is placed in a neighbourhood
            and people are invited to take a book, leave a book or both.          
          </Text>
          <Text style={styles.question}>
            Why do we do it?
          </Text>
          <Text style={styles.answer}>        
            We want to be part of the solution. 
            By increasing access to books and engaging people to 
            read more books we hope to play a small part in inculcating
            reading in our culture (and hopefully help to make it grow
            as a ‘hobby’), and to a lesser but more essential task of
            improving literacy rates in our community.        
          </Text>
          <Text style={styles.question}>
            Do I need to pay to take a book?
          </Text>
          <Text style={styles.answer}>        
            It’s all free. You can either take a book, or leave a book,
            or both at NO COST.         
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1, 
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
  },    
  image: {
    width: '100%',
    height: 180,
    marginTop: 20,
    marginBottom: 10,
  },
  question: {
    fontSize: 20,
    marginBottom: 3,
  },
  answer: {
    fontSize: 15,
    marginBottom: 15,
  }
});