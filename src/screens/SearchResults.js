import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/dist/Entypo';
import vector from '../../assets/logoGrey.png';

import {REACT_APP_BASE_URL} from '@env';

import {connect} from 'react-redux';
import {getProduct} from '../redux/actions/product';

class SearchResult extends Component {
  state = {
    search: '',
    filterPrice1: '',
    filterPrice2: '',
    filterDeparture1: '',
    filterArrive1: '',
    filterAirline: '',
    page: 1,
    modalVisible: false,
  };

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  search = async () => {
    await this.setState({
      search: this.props.route.params.search,
    });
    const {
      search,
      filterAirline,
      filterPrice1,
      filterPrice2,
      filterDeparture1,
      filterArrive1,
    } = this.state;
    this.props.getProduct(
      search,
      filterAirline,
      filterPrice1,
      filterPrice2,
      filterDeparture1,
      filterArrive1,
    );
  };

  componentDidMount() {
    this.search();
  }

  render() {
    const {modalVisible} = this.state;
    return (
      <View style={styles.parent}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView} />
          </View>
        </Modal>
        <View style={styles.nav}>
          {/* <View style={styles.wrap1}>
            <Text style={styles.h1}> Monday, 20 July ‘20 </Text>
          </View> */}
          <View style={styles.wrap2}>
            <View>
              <Text style={styles.txt1}>Destination To</Text>
              <Text style={styles.txt2}>{this.props.route.params.search}</Text>
              {/* <Text style={styles.txt3}>Indonesia</Text> */}
            </View>
            {/* <View style={styles.wrap3}>
              <Icon name="arrow-swap" color="#fff" size={25} />
            </View>
            <View>
              <Text style={styles.text1}>To</Text>
              <Text style={styles.text2}>Tokyo</Text>
              <Text style={styles.text3}>Japan</Text>
            </View> */}
          </View>
        </View>
        {/* <View style={styles.wrap4}>
          <View>
            <Text style={styles.text4}>Passengger</Text>
            <Text style={styles.text5}>2 Child 4 Adults</Text>
          </View>
          <View>
            <Text style={styles.text4}>Class</Text>
            <Text style={styles.text5}>Economy</Text>
          </View>
        </View> */}

        <View style={styles.wrap5}>
          <View>
            <Text style={styles.text6}>Any flight found</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.setModalVisible(true)}
            style={styles.wrap6}>
            <Text style={styles.text7}>Filter</Text>
            <Icon2 name="select-arrows" color="#000" size={25} />
          </TouchableOpacity>
        </View>

        {/* <View style={styles.boxrow}>
          <View style={styles.boxGaruda}>
            <Image style={styles.img} source={garuda} />
          </View>
          <View>
            <View style={styles.box1}>
              <View>
                <Text style={styles.h2}>IDN</Text>
                <Text style={styles.jam}>12:33</Text>
              </View>
              <View style={styles.boxCenter}>
                <Image source={vector} />
              </View>
              <View>
                <Text style={styles.h2}>JPN</Text>
                <Text style={styles.jam}>12:33</Text>
              </View>
            </View>
            <View style={styles.box2}>
              <Text style={styles.jam2}>3 hours 11 minutes</Text>
              <Text style={styles.dollar}>$ 214,00</Text>
            </View>
          </View>
        </View> */}

        {this.props.product.data !== undefined ? (
          <FlatList
            style={styles.scroll}
            data={this.props.product.data}
            vertical
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('detail', {id: item.id})
                }
                style={styles.wrapper2}>
                <View style={styles.boxrow}>
                  <View style={styles.boxGaruda}>
                    <Image
                      style={styles.img}
                      source={{
                        uri: `${REACT_APP_BASE_URL}${item.airline.picture}`,
                      }}
                    />
                  </View>

                  <View>
                    <View style={styles.box1}>
                      <View>
                        <Text style={[styles.h2, styles.fontSemiBold]}>
                          {item.destination.base_country_code}
                        </Text>
                        <Text style={[styles.jam, styles.fontRegular]}>
                          {item.time_leave}
                        </Text>
                      </View>
                      <View style={styles.boxCenter}>
                        <Image style={styles.vector} source={vector} />
                      </View>
                      <View>
                        <Text style={[styles.h2, styles.fontSemiBold]}>
                          {item.destination.destination_country_code}
                        </Text>
                        <Text style={[styles.jam, styles.fontRegular]}>
                          {item.time_arrive}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.box2}>
                      <Text style={[styles.jam2]}>{item.airline.name}</Text>
                      <Text style={[styles.dollar, styles.fontSemiBold]}>
                        Rp {item.price}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => String(item.id)}
          />
        ) : (
          <View style={styles.notFound}>
            <MaterialCommunityIcons
              color={'#595959'}
              name="ticket-account"
              size={80}
            />
            <Text style={[styles.fontSemiBold, styles.font20]}>
              Ticket Not Found
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  product: state.product,
});

const mapDispatchToProps = {getProduct};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);

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

  parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  nav: {
    backgroundColor: '#0ac77b',
    height: 200,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    zIndex: 1,
  },
  wrap1: {
    marginLeft: 190,
    marginTop: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 150,
    borderRadius: 6,
  },
  h1: {
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 10,
    textAlign: 'center',
  },
  h2: {
    fontWeight: '500',
    fontSize: 24,
  },
  wrap2: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    marginHorizontal: 20,
    // marginTop: 30,
    justifyContent: 'center',
    flex: 1,
  },
  txt1: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  txt2: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Poppins-Bold',
  },
  txt3: {
    color: 'white',
  },
  text1: {
    textAlign: 'right',
    color: 'white',
  },
  text2: {
    textAlign: 'right',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text3: {
    textAlign: 'right',
    color: 'white',
  },
  wrap3: {
    justifyContent: 'center',
  },
  wrap4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 40,
    backgroundColor: '#F8F8F8',
    marginTop: -30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  text4: {
    fontSize: 12,
    color: '#979797',
    paddingBottom: 5,
  },
  wrap5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  wrap6: {
    flexDirection: 'row',
  },
  text6: {
    fontWeight: '500',
    color: '#979797',
  },
  text7: {
    fontWeight: '500',
  },
  img: {
    width: 60,
    height: 34,
  },
  boxrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 22,
    borderWidth: 1,
    borderColor: '#979797',
    borderRadius: 7.5,
  },
  box1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  jam: {
    color: '#6B6B6B',
  },
  jam2: {
    color: '#6B6B6B',
  },
  dollar: {
    color: '#2395FF',
    fontWeight: 'bold',
  },
  boxGaruda: {
    justifyContent: 'center',
    paddingRight: 20,
  },
  boxCenter: {
    paddingHorizontal: 45,
    paddingTop: 10,
  },
  scroll: {
    marginTop: 30,
  },
  wrapper2: {
    marginBottom: 10,
  },
  vector: {
    width: 22,
    height: 20,
  },

  notFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});
