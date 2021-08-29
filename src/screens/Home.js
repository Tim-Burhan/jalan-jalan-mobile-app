import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RNBootSplash from 'react-native-bootsplash';

import CardHome from '../components/CardHome';
import ChatButton from '../components/ChatButton';

import {connect} from 'react-redux';
import {getUserById} from '../redux/actions/user';
import {getDestination} from '../redux/actions/destination';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      search: '',
    };
  }

  getDataUser = () => {
    const {token} = this.props.auth;
    this.props.getUserById(token);
  };

  getDestination = async () => {
    this.props.getDestination();
    await this.setState({
      isLoading: false,
    });
  };

  handleChange = val => {
    this.setState({
      search: val,
    });
  };

  componentDidMount() {
    this.getDataUser();
    this.getDestination();
    RNBootSplash.hide({fade: true});
  }

  // componentDidUpdate(prevProps) {
  //   console.log(prevProps);
  // }

  render() {
    return (
      <>
        {this.state.isLoading === false ? (
          <View style={styles.wrapper}>
            <View style={styles.wrapperHeader}>
              <View style={styles.wrapperNav}>
                <Text style={[styles.fontBold, styles.title]}>Explore</Text>
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
              <View style={styles.wrapperNav}>
                <View style={styles.textInput}>
                  <MaterialIcons color={'#A3A3A3'} name="search" size={32} />
                  <TextInput
                    style={[
                      styles.grey,
                      styles.fontSemiBold,
                      styles.widthTextInput,
                    ]}
                    placeholder="Where you want to go?"
                    onChangeText={this.handleChange}
                    onSubmitEditing={() =>
                      this.props.navigation.navigate('searchResults', {
                        search: this.state.search,
                      })
                    }
                  />
                </View>
              </View>
            </View>
            <View style={styles.wrapperContent}>
              <View style={styles.wrapperSubtitle}>
                <Text style={[styles.fontSemiBold, styles.subtitle]}>
                  Trending destinations
                </Text>
                <TouchableOpacity>
                  <Text
                    style={[styles.fontSemiBold, styles.viewAll, styles.green]}>
                    View all
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.wrapperCard}>
                <FlatList
                  style={styles.flatListCard}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={this.props.destination.data}
                  renderItem={({item}) => (
                    <CardHome
                      data={item}
                      func={() =>
                        this.props.navigation.navigate('searchResults', {
                          search: item.destination_country,
                        })
                      }
                    />
                  )}
                />
              </View>
            </View>
            <View style={styles.wrapperTopDes}>
              <View style={styles.wrapperSubtitle}>
                <Text style={[styles.fontSemiBold, styles.subtitle2]}>
                  Top 10 destinations
                </Text>
              </View>
              <View style={styles.wrapperDes}>
                <View style={styles.containerDes}>
                  <View style={styles.des}>
                    <Image
                      style={styles.desImage}
                      source={{
                        uri: 'https://lp-cms-production.imgix.net/2021-02/shutterstockRF_1347219839.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850',
                      }}
                    />
                  </View>
                  <Text style={[styles.fontSemiBold]}>TOKYO</Text>
                </View>
                <View style={styles.containerDes}>
                  <View style={styles.des}>
                    <Image
                      style={styles.desImage}
                      source={{
                        uri: 'https://lp-cms-production.imgix.net/2021-02/shutterstockRF_1347219839.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850',
                      }}
                    />
                  </View>
                  <Text style={[styles.fontSemiBold]}>TOKYO</Text>
                </View>
                <View style={styles.containerDes}>
                  <View style={styles.des}>
                    <Image
                      style={styles.desImage}
                      source={{
                        uri: 'https://lp-cms-production.imgix.net/2021-02/shutterstockRF_1347219839.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850',
                      }}
                    />
                  </View>
                  <Text style={[styles.fontSemiBold]}>TOKYO</Text>
                </View>
                <View style={styles.containerDes}>
                  <View style={styles.des}>
                    <Image
                      style={styles.desImage}
                      source={{
                        uri: 'https://lp-cms-production.imgix.net/2021-02/shutterstockRF_1347219839.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850',
                      }}
                    />
                  </View>
                  <Text style={[styles.fontSemiBold]}>TOKYO</Text>
                </View>
                <View style={styles.containerDes}>
                  <View style={styles.des}>
                    <Image
                      style={styles.desImage}
                      source={{
                        uri: 'https://lp-cms-production.imgix.net/2021-02/shutterstockRF_1347219839.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850',
                      }}
                    />
                  </View>
                  <Text style={[styles.fontSemiBold]}>TOKYO</Text>
                </View>
              </View>
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
  user: state.user,
  destination: state.destination,
});

const mapDispatchToProps = {getUserById, getDestination};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  widthTextInput: {
    width: '90%',
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
    flex: 4,
  },
  wrapperContent: {
    flex: 7,
    alignItems: 'center',
  },
  wrapperTopDes: {
    flex: 3,
    alignItems: 'center',
  },
  wrapperNav: {
    flexDirection: 'row',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperSubtitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperDes: {
    flex: 2,
    flexDirection: 'row',
    marginLeft: '16%',
    width: '100%',
    alignItems: 'center',
  },
  wrapperCard: {
    flex: 8,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  wrapperCity: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    width: '55%',
    fontSize: 36,
  },
  icon: {
    width: '15%',
    alignItems: 'flex-end',
  },
  textInput: {
    width: '85%',
    height: 60,
    backgroundColor: '#dbdbdb',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '2%',
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    width: '68%',
  },
  subtitle2: {
    fontSize: 18,
    width: '84%',
  },
  viewAll: {
    fontSize: 16,
  },
  flatListCard: {
    width: '92%',
    height: '90%',
  },
  containerDes: {
    alignItems: 'center',
    marginRight: '4%',
  },
  des: {
    width: 60,
    height: 60,
    borderRadius: 999,
    borderColor: '#0ac77b',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  desImage: {
    width: 50,
    height: 50,
    borderRadius: 999,
  },
});
