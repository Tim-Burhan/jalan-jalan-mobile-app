import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';

import vector from '../../assets/logoGrey.png';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import Icon2 from 'react-native-vector-icons/dist/FontAwesome5';
import Toast from 'react-native-toast-message';

import {connect} from 'react-redux';
import {getProductById} from '../redux/actions/product';
import {addBooking, getBookingUser} from '../redux/actions/transaction';

import {REACT_APP_BASE_URL} from '@env';

class FlightDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  getProductById = () => {
    const {id} = this.props.route.params;
    this.props.getProductById(id).then(() => {
      this.setState({
        loading: false,
      });
    });
  };

  bookFlight = async () => {
    await this.setState({
      loading: true,
    });
    const {token} = this.props.auth;
    const {id} = this.props.route.params;
    this.props.addBooking(id, token).then(() => {
      if (this.props.transaction.errMsg === '') {
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Success',
          text2: 'Booking success',
          visibilityTime: 1000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
        });
        this.props.getBookingUser(token).then(() => {
          this.setState({
            loading: false,
          });
          this.props.navigation.navigate('MyBooking');
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

  confirmBooking = () => {
    Alert.alert('Booking Flight', 'Do you want to book it?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => this.bookFlight(),
      },
    ]);
  };

  componentDidMount() {
    this.getProductById();
  }
  render() {
    return (
      <>
        {this.state.loading === false ? (
          <View style={styles.parent}>
            <View style={styles.nav} />
            <View style={styles.shadowbox}>
              <View style={styles.rowbox}>
                <View>
                  <Text style={styles.city}>
                    {
                      this.props.product.detailData.destination
                        .base_country_code
                    }
                  </Text>
                  <Text style={styles.h1}>
                    {this.props.product.detailData.time_leave}
                  </Text>
                </View>
                <View style={styles.box1}>
                  <Image style={styles.vector} source={vector} />
                </View>
                <View>
                  <Text style={styles.city}>
                    {
                      this.props.product.detailData.destination
                        .destination_country_code
                    }
                  </Text>
                  <Text style={styles.h2}>
                    {this.props.product.detailData.time_arrive}
                  </Text>
                </View>
              </View>
              <View style={styles.wrap1}>
                <Image
                  style={styles.img}
                  source={{
                    uri: `${REACT_APP_BASE_URL}${this.props.product.detailData.airline.picture}`,
                  }}
                />
                <View style={styles.wrap2}>
                  <View style={styles.star}>
                    <Icon
                      style={styles.starIcon}
                      name="star"
                      color="#FF7F23"
                      size={18}
                    />
                    <Icon
                      style={styles.starIcon}
                      name="star"
                      color="#FF7F23"
                      size={18}
                    />
                    <Icon
                      style={styles.starIcon}
                      name="star"
                      color="#FF7F23"
                      size={18}
                    />
                    <Icon
                      style={styles.starIcon}
                      name="star"
                      color="#FF7F23"
                      size={18}
                    />
                  </View>
                  <Text style={styles.h5}>120k review</Text>
                </View>
              </View>
              <View style={styles.wrap3}>
                <View>
                  <Text style={styles.code}>Code</Text>
                  <Text>{this.props.product.detailData.code}</Text>
                </View>
                <View>
                  <Text style={styles.code}>Class</Text>
                  <Text>{this.props.product.detailData.class.name}</Text>
                </View>
                <View>
                  <Text style={styles.code}>Terminal</Text>
                  <Text>{this.props.product.detailData.terminal}</Text>
                </View>
                <View>
                  <Text style={styles.code}>Gate</Text>
                  <Text>{this.props.product.detailData.gate}</Text>
                </View>
              </View>
              <View style={styles.wrap9}>
                <View style={styles.childWrap}>
                  <View style={styles.circle}>
                    <Text style={styles.circleText}>2</Text>
                  </View>
                  <View style={styles.box9}>
                    <Text>Child</Text>
                  </View>
                </View>
                <View style={styles.childWrap}>
                  <View style={styles.circle}>
                    <Text style={styles.circleText}>4</Text>
                  </View>
                  <View style={styles.box9}>
                    <Text>Adults</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.facilwrap}>
              <Text style={styles.facil}>Facilities</Text>

              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.burgerWrap}>
                  {/* <Icon2
                    style={styles.burger}
                    name="hamburger"
                    color="#FFF"
                    size={18}
                  /> */}
                  <Text style={styles.burgerText}>
                    {
                      this.props.product.detailData.product_facility.facility
                        .name
                    }
                  </Text>
                </View>

                {/* <View style={styles.burgerWrap}>
                  <Icon2
                    style={styles.burger}
                    name="hamburger"
                    color="#FFF"
                    size={18}
                  />
                  <Text style={styles.burgerText}>Wifi</Text>
                </View>
                <View style={styles.burgerWrap}>
                  <Icon2
                    style={styles.burger}
                    name="hamburger"
                    color="#FFF"
                    size={18}
                  />
                  <Text style={styles.burgerText}>Restroom</Text>
                </View> */}
              </ScrollView>
              <View style={styles.totalWrap}>
                <Text>Total you’ll pay</Text>
                <Text style={styles.total}>
                  Rp {this.props.product.detailData.price}
                </Text>
              </View>
              <TouchableOpacity
                onPress={this.confirmBooking}
                style={styles.btn19}>
                <Text style={styles.h19}>BOOK FLIGHT</Text>
              </TouchableOpacity>
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
  product: state.product,
  transaction: state.transaction,
});

const mapDispatchToProps = {getProductById, addBooking, getBookingUser};

export default connect(mapStateToProps, mapDispatchToProps)(FlightDetail);

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
  },

  nav: {
    backgroundColor: '#0ac77b',
    height: 180,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    zIndex: 1,
  },
  shadowbox: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    marginTop: -50,
    borderRadius: 12,
    height: 310,
    paddingHorizontal: 20,
    // alignItems: 'center',
    paddingVertical: 30,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  rowbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  city: {
    fontSize: 20,
    fontWeight: '600',
  },
  h2: {
    textAlign: 'right',
    color: '#979797',
    fontSize: 12,
  },
  h1: {
    color: '#979797',
    fontSize: 12,
  },
  star: {
    flexDirection: 'row',
  },
  starIcon: {
    paddingHorizontal: 2,
  },
  wrap1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  h5: {
    textAlign: 'center',
  },
  img: {
    height: 40,
    width: 70,
  },
  wrap3: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: '#E5E5E5',
  },
  code: {
    fontSize: 14,
    fontWeight: '400',
    color: '#A5A5A5',
  },
  childWrap: {
    flexDirection: 'row',
  },
  circle: {
    backgroundColor: '#D1FFED',
    width: 35,
    height: 35,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    color: '#0ac77b',
    fontWeight: '700',
    fontSize: 18,
  },
  box9: {
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  wrap9: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
  },
  burgerWrap: {
    backgroundColor: '#6DDA6B',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 25,
    width: 130,
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    // marginHorizontal: 20,
    marginRight: 10,
  },
  burgerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  facil: {
    paddingTop: 25,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  facilwrap: {
    marginHorizontal: 20,
  },
  totalWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  total: {
    fontSize: 20,
    color: '#2395FF',
    fontWeight: '600',
  },
  btn19: {
    backgroundColor: '#0ac77b',
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    height: 60,
  },
  h19: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  vector: {
    width: 27,
    height: 25,
  },
  wrapperLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
