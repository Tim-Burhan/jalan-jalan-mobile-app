import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  Image,
  Alert,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import CardBooking from '../components/CardBooking';
import ChatButton from '../components/ChatButton';
import logoGrey from '../../assets/logoGrey.png';

import {connect} from 'react-redux';
import {
  getBookingUser,
  getBookingUserId,
  confirmPayment,
  deleteBooking,
} from '../redux/actions/transaction';
import {authLogout} from '../redux/actions/auth';

class MyBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      isLoading: true,
      isUpdate: false,
      loading: true,
      refreshing: false,
    };
  }

  getBookingUser = () => {
    const {token} = this.props.auth;
    this.props.getBookingUser(token).then(() => {
      if (this.props.transaction.errMsg === 'Session expired, please login!') {
        this.props.authLogout();
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Error',
          text2: `${this.props.transaction.errMsg}`,
          visibilityTime: 1000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
        });
      }
      this.setState({
        loading: false,
      });
    });
  };

  onRefresh = () => {
    this.setState(
      {
        refreshing: true,
      },
      () => {
        if (this.state.refreshing === true) {
          this.getBookingUser();
        }
      },
    );
    setTimeout(() => {
      this.setState({
        refreshing: false,
      });
    }, 1000);
  };

  payment = id => {
    const {token} = this.props.auth;
    this.props.confirmPayment(id, token).then(() => {
      this.setState({
        modalVisible: false,
        isUpdate: !this.state.isUpdate,
      });
      if (this.props.transaction.errMsg === '') {
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Success',
          text2: 'Payment success',
          visibilityTime: 1000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
        });
      } else {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Error',
          text2: `${this.props.transaction.errMsg}`,
          visibilityTime: 1000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
        });
      }
    });
  };

  delete = id => {
    const {token} = this.props.auth;
    this.props.deleteBooking(id, token).then(() => {
      this.setState({
        modalVisible: false,
        isUpdate: !this.state.isUpdate,
      });
      if (this.props.transaction.errMsg === '') {
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Success',
          text2: 'Delete success',
          visibilityTime: 1000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
        });
      } else {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Error',
          text2: `${this.props.transaction.errMsg}`,
          visibilityTime: 1000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
        });
      }
    });
  };

  confirmPayment = id => {
    Alert.alert('Confirm Payment', 'Do you want to pay it?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => this.payment(id),
      },
    ]);
  };

  confirmDelete = id => {
    Alert.alert('Delete Book', 'Do you want to delete it?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => this.delete(id),
      },
    ]);
  };

  setModalVisible = (visible, id) => {
    const {token} = this.props.auth;
    this.setState({
      isLoading: true,
    });
    this.props.getBookingUserId(token, id).then(() => {
      this.setState({
        modalVisible: visible,
        isLoading: false,
      });
    });
  };

  componentDidMount() {
    this.getBookingUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isUpdate !== this.state.isUpdate) {
      this.getBookingUser();
    }
  }

  render() {
    const {modalVisible} = this.state;
    return (
      <>
        {this.state.loading === false ? (
          <View style={styles.wrapper}>
            <ScrollView
              contentContainerStyle={styles.wrapperHeader}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.onRefresh}
                />
              }>
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
            </ScrollView>
            <View style={styles.wrapperContent}>
              {this.props.transaction.data.length > 0 ? (
                <FlatList
                  style={styles.flatList}
                  data={this.props.transaction.data}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => (
                    <>
                      {item.deletedBy === 0 && (
                        <TouchableOpacity
                          onPress={() =>
                            this.props.navigation.navigate('BookingDetail', {
                              id: item.id,
                            })
                          }>
                          <CardBooking
                            data={item}
                            func={() => this.setModalVisible(true, item.id)}
                          />
                        </TouchableOpacity>
                      )}
                      <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                          this.setModalVisible(
                            !modalVisible,
                            this.props.transaction.detailData[0].id,
                          );
                        }}>
                        <View style={styles.centeredView}>
                          {this.state.isLoading === false ? (
                            <View style={styles.modalView}>
                              <View style={styles.modalTop}>
                                <Text style={styles.fontRegular}>
                                  {
                                    this.props.transaction.detailData[0].product
                                      .day
                                  }
                                  ,{' '}
                                  {
                                    this.props.transaction.detailData[0].product
                                      .date
                                  }{' '}
                                  {
                                    this.props.transaction.detailData[0].product
                                      .month
                                  }{' '}
                                  {
                                    this.props.transaction.detailData[0].product
                                      .year
                                  }{' '}
                                  -{' '}
                                  {
                                    this.props.transaction.detailData[0].product
                                      .time_leave
                                  }
                                </Text>
                                <View style={styles.wrapperDes}>
                                  <Text
                                    style={[
                                      styles.fontSemiBold,
                                      styles.font20,
                                    ]}>
                                    {
                                      this.props.transaction.detailData[0]
                                        .product.destination.base_country_code
                                    }
                                    {/* FRM */}
                                  </Text>
                                  <Image
                                    style={styles.logoGrey}
                                    source={logoGrey}
                                  />
                                  <Text
                                    style={[
                                      styles.fontSemiBold,
                                      styles.font20,
                                    ]}>
                                    {
                                      this.props.transaction.detailData[0]
                                        .product.destination
                                        .destination_country_code
                                    }
                                    {/* TO */}
                                  </Text>
                                </View>
                                <Text style={[styles.fontRegular, styles.grey]}>
                                  {
                                    this.props.transaction.detailData[0].product
                                      .airline.name
                                  }
                                  ,{' '}
                                  {
                                    this.props.transaction.detailData[0].product
                                      .code
                                  }
                                </Text>
                                <View style={styles.label}>
                                  <Text
                                    style={[styles.fontSemiBold, styles.white]}>
                                    Waiting for payment
                                  </Text>
                                </View>
                              </View>
                              {this.props.transaction.detailData[0].status ===
                                0 && (
                                <TouchableOpacity
                                  onPress={() =>
                                    this.confirmPayment(
                                      this.props.transaction.detailData[0].id,
                                    )
                                  }
                                  style={[
                                    styles.buttonConfirm,
                                    styles.bgGreen,
                                  ]}>
                                  <Text
                                    style={[
                                      styles.fontSemiBold,
                                      styles.font20,
                                      styles.white,
                                    ]}>
                                    Confirm Payment
                                  </Text>
                                </TouchableOpacity>
                              )}
                              {this.props.transaction.detailData[0]
                                .deletedBy === 0 && (
                                <TouchableOpacity
                                  onPress={() =>
                                    this.confirmDelete(
                                      this.props.transaction.detailData[0].id,
                                    )
                                  }
                                  style={[
                                    styles.buttonConfirm,
                                    styles.bgOrange,
                                  ]}>
                                  <Text
                                    style={[
                                      styles.fontSemiBold,
                                      styles.font20,
                                      styles.white,
                                    ]}>
                                    Delete Booking
                                  </Text>
                                </TouchableOpacity>
                              )}
                              <TouchableOpacity
                                onPress={() =>
                                  this.setModalVisible(
                                    !modalVisible,
                                    this.props.transaction.detailData[0].id,
                                  )
                                }
                                style={[styles.buttonConfirm, styles.bgBlue]}>
                                <Text
                                  style={[
                                    styles.fontRegular,
                                    styles.font20,
                                    styles.white,
                                  ]}>
                                  Close
                                </Text>
                              </TouchableOpacity>
                            </View>
                          ) : (
                            <>
                              <Text>Loading</Text>
                            </>
                          )}
                        </View>
                      </Modal>
                    </>
                  )}
                />
              ) : (
                <>
                  <MaterialCommunityIcons
                    color={'#595959'}
                    name="ticket-account"
                    size={80}
                  />
                  <Text style={[styles.fontSemiBold, styles.font20]}>
                    Booking Ticket Now!
                  </Text>
                </>
              )}
            </View>
          </View>
        ) : (
          <View style={styles.wrapperLoading}>
            <ActivityIndicator size="large" color="#0ac77b" />
          </View>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  transaction: state.transaction,
});

const mapDispatchToProps = {
  getBookingUser,
  getBookingUserId,
  confirmPayment,
  authLogout,
  deleteBooking,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBooking);

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
  bgOrange: {
    backgroundColor: '#FF7F23',
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
  wrapperLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperHeader: {
    flex: 2,
  },
  wrapperContent: {
    flex: 12,
    alignItems: 'center',
    justifyContent: 'center',
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
