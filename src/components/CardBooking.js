import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import logoGrey from '../../assets/logoGrey.png';

const CardBooking = props => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.cardTop}>
        <Text style={styles.fontRegular}>{props.data.date}</Text>
        <View style={styles.wrapperDes}>
          <Text style={[styles.fontSemiBold, styles.font20]}>
            {props.data.from}
          </Text>
          <Image style={styles.logoGrey} source={logoGrey} />
          <Text style={[styles.fontSemiBold, styles.font20]}>
            {props.data.destination}
          </Text>
        </View>
        <Text style={[styles.fontRegular, styles.grey]}>
          {props.data.airlines},{props.data.code}
        </Text>
      </View>
      <View style={styles.cardBottom}>
        <Text style={[styles.fontSemiBold, styles.grey, styles.status]}>
          Status
        </Text>
        <TouchableOpacity style={styles.label}>
          <Text style={[styles.fontSemiBold, styles.white]}>
            {props.data.status}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardBooking;

const styles = StyleSheet.create({
  font20: {
    fontSize: 20,
  },
  fontRegular: {
    fontFamily: 'Poppins-Regular',
  },
  fontSemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
  white: {
    color: '#fff',
  },
  grey: {
    color: '#595959',
  },
  wrapperDes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoGrey: {
    width: 20,
    height: 19,
    marginHorizontal: 10,
  },
  cardTop: {
    flex: 1,
    paddingBottom: '5%',
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  cardBottom: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  containerCard: {
    width: '98%',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    elevation: 5,
    padding: '5%',
    marginBottom: '5%',
    marginLeft: '1%',
  },
  status: {
    width: '40%',
  },
  label: {
    backgroundColor: '#FF7F23',
    height: '80%',
    width: '60%',
    paddingHorizontal: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
