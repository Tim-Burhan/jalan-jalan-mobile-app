import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {REACT_APP_BASE_URL} from '@env';

const CardHome = props => {
  return (
    <View style={styles.containerCard}>
      <ImageBackground
        source={{
          uri: `${REACT_APP_BASE_URL}${props.data.picture}`,
        }}
        resizeMode="cover"
        borderRadius={30}
        style={styles.imageBackground}>
        <View style={styles.background}>
          <View style={styles.flex1}>
            <View style={styles.count}>
              <Text style={[styles.fontBold, styles.white]}>15 airlines</Text>
            </View>
          </View>
          <View style={styles.wrapperCity}>
            <View style={styles.containerCity}>
              <Text
                style={[styles.fontSemiBold, styles.white, styles.fontCity]}>
                {props.data.destination_city},
              </Text>
              <Text
                style={[styles.fontSemiBold, styles.white, styles.fontCountry]}>
                {props.data.destination_country}
              </Text>
            </View>
            <View style={styles.wrapperButton}>
              <TouchableOpacity onPress={props.func} style={styles.buttonCard}>
                <MaterialIcons
                  name="arrow-forward-ios"
                  color="#fff"
                  size={26}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CardHome;

const styles = StyleSheet.create({
  containerCard: {
    width: 240,
    height: '85%',
    borderRadius: 30,
    marginTop: 20,
    marginRight: 25,
  },
  imageBackground: {
    flex: 1,
    borderRadius: 30,
    zIndex: 0,
  },
  background: {
    flex: 1,
    borderRadius: 30,
    paddingHorizontal: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 0,
  },
  flex1: {
    flex: 1,
  },
  count: {
    width: '60%',
    height: '25%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9,
    borderRadius: 9999,
    marginTop: '15%',
  },
  fontBold: {
    fontFamily: 'Poppins-Bold',
  },
  white: {
    color: '#fff',
  },
  wrapperCity: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  containerCity: {
    width: '70%',
  },
  fontSemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
  fontCity: {
    fontSize: 18,
  },
  fontCountry: {
    fontSize: 30,
  },
  wrapperButton: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttonCard: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
  },
});
