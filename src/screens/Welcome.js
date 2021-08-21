import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Logo from '../../assets/logoWelcome.png';

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapperContent}>
          <Image style={styles.logo} source={Logo} />
          <Text style={[styles.fontBold, styles.textTitle]}>Get Started</Text>
          <Text style={[styles.fontRegular, styles.textParagraph]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </Text>
        </View>
        <View style={styles.wrapperButton}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Signup')}
            style={[styles.backgroundColor, styles.button]}>
            <Text style={[styles.white, styles.fontBold, styles.textButton]}>
              Create My Account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.border, styles.button]}>
            <Text style={[styles.fontBold, styles.green, styles.textButton]}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  wrapperContent: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontBold: {
    fontFamily: 'Poppins-Bold',
  },
  fontRegular: {
    fontFamily: 'Poppins-Regular',
  },
  textTitle: {
    fontSize: 36,
  },
  backgroundColor: {
    backgroundColor: '#0ac77b',
  },
  green: {
    color: '#0ac77b',
  },
  white: {
    color: '#fff',
  },
  border: {
    borderColor: '#0ac77b',
    borderWidth: 2,
  },
  textParagraph: {
    width: '70%',
    textAlign: 'center',
  },
  button: {
    width: '85%',
    height: '25%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  textButton: {
    fontSize: 18,
  },
});
