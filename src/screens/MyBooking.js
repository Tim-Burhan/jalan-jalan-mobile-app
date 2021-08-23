import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CardBooking from '../components/CardBooking';
import ChatButton from '../components/ChatButton';

export default class MyBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: [
        {
          id: 1,
          from: 'IDN',
          destination: 'JPN',
          airlines: 'Garuda Indonesia',
          code: 'AB-221',
          date: 'Monday, 20 July ‘20 - 12:33',
          status: 'Waiting for payment',
        },
        {
          id: 2,
          from: 'IDN',
          destination: 'ENG',
          airlines: 'Fly Emirates',
          code: 'AF-224',
          date: 'Tuesday, 21 July ‘20 - 12:33',
          status: 'Waiting for payment',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapperHeader}>
          <View style={styles.wrapperNav}>
            <Text style={[styles.fontBold, styles.title]}>My Booking</Text>
            <ChatButton
              func={() => this.props.navigation.navigate('ChatHome')}
            />
            <TouchableOpacity style={styles.icon}>
              <MaterialCommunityIcons
                color={'#595959'}
                name="bell-outline"
                size={32}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapperContent}>
          <FlatList
            style={styles.flatList}
            data={this.state.booking}
            renderItem={({item}) => <CardBooking data={item} />}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  border: {
    borderColor: '#0ac77b',
    borderWidth: 1,
  },
  wrapper: {
    flex: 1,
  },
  wrapperHeader: {
    flex: 2,
  },
  wrapperContent: {
    flex: 12,
    alignItems: 'center',
  },
  wrapperNav: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: '55%',
    fontSize: 36,
  },
  icon: {
    width: '15%',
    alignItems: 'flex-end',
  },
  flatList: {
    flex: 1,
    width: '86%',
    height: '100%',
  },
});
