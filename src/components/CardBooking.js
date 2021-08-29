import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import logoGrey from '../../assets/logoGrey.png';
import background from '../../assets/ticketBackground.png';

const CardBooking = props => {
  return (
    <View style={styles.containerCard}>
      <ImageBackground
        style={styles.imageBackground}
        resizeMode="cover"
        source={background}>
        <View style={styles.cardTop}>
          {/* Tuesday, 21 July ‘20 - 12:33 */}
          <Text style={styles.fontRegular}>
            {props.data.product.day}, {props.data.product.date}{' '}
            {props.data.product.month} {props.data.product.year} -{' '}
            {props.data.product.time_leave}
          </Text>
          <View style={styles.wrapperDes}>
            <Text style={[styles.fontSemiBold, styles.font20]}>
              {props.data.product.destination.base_country_code}
              {/* FRM */}
            </Text>
            <Image style={styles.logoGrey} source={logoGrey} />
            <Text style={[styles.fontSemiBold, styles.font20]}>
              {props.data.product.destination.destination_country_code}
              {/* TO */}
            </Text>
          </View>
          <Text style={[styles.fontRegular, styles.grey]}>
            {props.data.product.airline.name}, {props.data.product.code}
          </Text>
        </View>
        <View style={styles.cardBottom}>
          <Text style={[styles.fontSemiBold, styles.grey, styles.status]}>
            Status
          </Text>

          {props.data.status === 0 ? (
            <TouchableOpacity onPress={props.func} style={styles.labelOrange}>
              <Text style={[styles.fontSemiBold, styles.white]}>
                Waiting for payment
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={props.func} style={styles.labelGreen}>
              <Text style={[styles.fontSemiBold, styles.white]}>
                Payment Successfully
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
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
    flex: 4,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  cardBottom: {
    flex: 3,
    flexDirection: 'row',
    height: 50,
    paddingBottom: '5%',
    alignItems: 'center',
  },
  containerCard: {
    width: '100%',
    height: 220,
    borderRadius: 20,
    marginBottom: '5%',
  },
  status: {
    width: '40%',
  },
  labelOrange: {
    backgroundColor: '#FF7F23',
    height: 40,
    width: '60%',
    paddingHorizontal: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  labelGreen: {
    backgroundColor: '#4FCF4D',
    height: 40,
    width: '60%',
    paddingHorizontal: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  imageBackground: {
    flex: 1,
    zIndex: 0,
    padding: '5%',
  },
});
