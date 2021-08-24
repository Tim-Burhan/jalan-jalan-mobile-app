import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import BackButton from '../components/BackButton';
import ticketDetail from '../../assets/ticketDetailBackground.png';
import logo from '../../assets/garuda.png';
import logoGrey from '../../assets/logoGrey.png';

export default class BookingDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [
        {
          id: 1,
          from: 'IDN',
          destination: 'JPN',
          airlines: 'Garuda Indonesia',
          code: 'AB-221',
          date: 'Monday, 20 July ‘20 - 12:33',
          status: 'Waiting for payment',
          image: '../../assets/garuda.png',
          class: 'Economy',
          terminal: 'A',
          gate: '221',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapperNav}>
          <BackButton
            color={'#fff'}
            func={() => this.props.navigation.goBack()}
          />
          <Text style={[styles.fontSemiBold, styles.font20, styles.white]}>
            Booking Pass
          </Text>
        </View>
        <View style={styles.wrapperContent}>
          <View style={styles.containerTicket}>
            <ImageBackground
              style={styles.imageBackground}
              source={ticketDetail}>
              <View style={styles.ticketTop}>
                <View style={styles.wrapperLogo}>
                  <View style={styles.containerLogo}>
                    <Image style={styles.image} source={logo} />
                  </View>
                </View>
                <View style={styles.wrapperDetail}>
                  <View style={styles.wrapperDes}>
                    <Text style={[styles.fontSemiBold, styles.font26]}>
                      {this.state.detail[0].from}
                    </Text>
                    <Image style={styles.logoGrey} source={logoGrey} />
                    <Text style={[styles.fontSemiBold, styles.font26]}>
                      {this.state.detail[0].destination}
                    </Text>
                  </View>
                  {this.state.detail[0].status === 'Waiting for payment' ? (
                    <TouchableOpacity style={styles.labelOrange}>
                      <Text style={[styles.fontSemiBold, styles.white]}>
                        {this.state.detail[0].status}
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.labelGreen}>
                      <Text style={[styles.fontSemiBold, styles.white]}>
                        {this.state.detail[0].status}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
              <View style={styles.ticketBottom}>
                <View style={styles.wrapperCode}>
                  <View style={styles.containerCode}>
                    <Text style={[styles.fontRegular, styles.grey]}>Code</Text>
                    <Text style={[styles.fontSemiBold, styles.grey]}>
                      {this.state.detail[0].code}
                    </Text>
                  </View>
                  <View style={styles.containerCode}>
                    <Text style={[styles.fontRegular, styles.grey]}>Class</Text>
                    <Text style={[styles.fontSemiBold, styles.grey]}>
                      {this.state.detail[0].class}
                    </Text>
                  </View>
                  <View style={styles.containerCode}>
                    <Text style={[styles.fontRegular, styles.grey]}>
                      Terminal
                    </Text>
                    <Text style={[styles.fontSemiBold, styles.grey]}>
                      {this.state.detail[0].terminal}
                    </Text>
                  </View>
                  <View style={styles.containerCode}>
                    <Text style={[styles.fontRegular, styles.grey]}>Gate</Text>
                    <Text style={[styles.fontSemiBold, styles.grey]}>
                      {this.state.detail[0].gate}
                    </Text>
                  </View>
                </View>
                <View style={styles.wrapperCode}>
                  <View style={styles.containerCode}>
                    <Text style={[styles.fontRegular, styles.grey]}>
                      Departure
                    </Text>
                    <Text style={[styles.fontSemiBold, styles.grey]}>
                      {this.state.detail[0].date}
                    </Text>
                  </View>
                </View>
                <View style={styles.qr}>
                  <QRCode
                    style={styles.qr}
                    size={120}
                    value={`${this.state.detail[0]}`}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    );
  }
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  font26: {
    fontSize: 26,
  },
  font20: {
    fontSize: 20,
  },
  fontBold: {
    fontFamily: 'Poppins-Bold',
  },
  fontRegular: {
    fontFamily: 'Poppins-Regular',
  },
  fontSemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
  green: {
    color: '#0ac77b',
  },
  white: {
    color: '#fff',
  },
  grey: {
    color: '#595959',
  },

  wrapper: {
    flex: 1,
    backgroundColor: '#0AC77B',
  },
  wrapperNav: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  wrapperContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTicket: {
    width: '85%',
    height: '85%',
  },
  imageBackground: {
    flex: 1,
    alignItems: 'center',
  },
  wrapperLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  containerLogo: {
    // width: '25%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: win.width / 2,
    height: win.width / 2,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  ticketTop: {
    flex: 2,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#595959',
  },
  ticketBottom: {
    flex: 3,
    alignItems: 'center',
    width: '90%',
  },
  wrapperDetail: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
  },

  logoGrey: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginHorizontal: '5%',
  },
  wrapperDes: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  labelOrange: {
    backgroundColor: '#FF7F23',
    height: 40,
    width: '70%',
    marginVertical: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  labelGreen: {
    backgroundColor: '#4FCF4D',
    height: 40,
    width: '70%',
    marginVertical: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  wrapperCode: {
    flexDirection: 'row',
    marginVertical: '5%',
    width: '100%',
  },
  containerCode: {
    marginHorizontal: '2%',
  },
  qr: {
    margin: '5%',
  },
});
