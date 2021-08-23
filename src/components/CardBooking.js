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
            {props.data.airlines}, {props.data.code}
          </Text>
        </View>
        <View style={styles.cardBottom}>
          <Text style={[styles.fontSemiBold, styles.grey, styles.status]}>
            Status
          </Text>
          <TouchableOpacity onPress={props.func} style={styles.label}>
            <Text style={[styles.fontSemiBold, styles.white]}>
              {props.data.status}
            </Text>
          </TouchableOpacity>
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
  label: {
    backgroundColor: '#FF7F23',
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
