import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CardBooking from '../components/CardBooking';
import ChatButton from '../components/ChatButton';

import logoGrey from '../../assets/logoGrey.png';

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
          status: 'Payment success',
        },
        {
          id: 3,
          from: 'IDN',
          destination: 'ENG',
          airlines: 'Fly Emirates',
          code: 'AF-224',
          date: 'Tuesday, 21 July ‘20 - 12:33',
          status: 'Payment success',
        },
        {
          id: 4,
          from: 'IDN',
          destination: 'ENG',
          airlines: 'Fly Emirates',
          code: 'AF-224',
          date: 'Tuesday, 21 July ‘20 - 12:33',
          status: 'Payment success',
        },
      ],
      modalVisible: false,
    };
  }

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <View style={styles.wrapper}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalTop}>
                <Text style={styles.fontRegular}>
                  Monday, 20 July ‘20 - 12:33
                </Text>
                <View style={styles.wrapperDes}>
                  <Text style={[styles.fontSemiBold, styles.font20]}>IDN</Text>
                  <Image style={styles.logoGrey} source={logoGrey} />
                  <Text style={[styles.fontSemiBold, styles.font20]}>ENG</Text>
                </View>
                <Text style={[styles.fontRegular, styles.grey]}>
                  Fly Emirates, AC-456
                </Text>
                <View style={styles.label}>
                  <Text style={[styles.fontSemiBold, styles.white]}>
                    Waiting For Payment
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={[styles.buttonConfirm, styles.bgGreen]}>
                <Text
                  style={[styles.fontSemiBold, styles.font20, styles.white]}>
                  Confirm Payment
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setModalVisible(!modalVisible)}
                style={[styles.buttonConfirm, styles.bgBlue]}>
                <Text style={[styles.fontRegular, styles.font20, styles.white]}>
                  Close
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

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
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <CardBooking
                data={item}
                func={() => this.setModalVisible(true)}
              />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  bgGreen: {
    backgroundColor: '#4FCF4D',
  },
  bgBlue: {
    backgroundColor: '#2196F3',
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

  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalView: {
    width: '100%',
    height: '50%',
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: '10%',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  wrapperDes: {
    flexDirection: 'row',
  },
  logoGrey: {
    width: 20,
    height: 19,
    marginHorizontal: 10,
  },
  modalTop: {
    width: '100%',
    paddingVertical: '5%',
    marginBottom: '2%',
    borderBottomWidth: 2,
    borderBottomColor: '#595959',
  },
  label: {
    backgroundColor: '#FF7F23',
    height: 40,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonConfirm: {
    height: '17%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: '2%',
  },
});
