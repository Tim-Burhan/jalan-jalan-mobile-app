import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {REACT_APP_BASE_URL} from '@env';

import {connect} from 'react-redux';
import {authLogout} from '../redux/actions/auth';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [
        {
          id: 1,
          fullName: 'Muhammad Rizky Ramadhan',
          image:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          city: 'Purwokerto',
        },
      ],
      card: [
        {
          id: 1,
          id_user: 1,
          number: '2443 3445 2345 2311',
          name: 'BCA',
          saldo: 300000,
        },
        {
          id: 2,
          id_user: 1,
          number: '1213 2333 2345 4576',
          name: 'MANDIRI',
          saldo: 9000000,
        },
      ],
    };
  }

  logout = () => {
    Alert.alert('Logout', 'Do you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => this.props.authLogout()},
    ]);
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapperHeader}>
          <View style={styles.wrapperNav}>
            <Text style={[styles.fontBold, styles.title]}>Profile</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('EditProfile')}
              style={styles.icon}>
              <Text style={[styles.green, styles.fontSemiBold, styles.font16]}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapperContent}>
          <View style={styles.wrapperProfile}>
            <View style={styles.containerImage}>
              <Image
                style={styles.image}
                // source={{uri: `${this.state.user[0].image}`}}
                source={
                  this.props.user.data.picture === null
                    ? {
                        uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                      }
                    : {
                        uri: `${REACT_APP_BASE_URL}${this.props.user.data.picture}`,
                      }
                }
              />
            </View>
            <Text style={[styles.fontSemiBold, styles.name]}>
              {this.props.user.data.name}
            </Text>
            <Text style={[styles.fontRegular, styles.grey, styles.city]}>
              {this.props.user.data.address}
            </Text>
          </View>
          <View style={styles.wrapperCard}>
            <View style={styles.wrapperSubtitle}>
              <Text style={[styles.fontSemiBold, styles.subtitle]}>Cards</Text>
              <TouchableOpacity>
                <Text
                  style={[styles.fontSemiBold, styles.green, styles.font16]}>
                  + Add
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.wrapperCardUser}>
              <FlatList
                data={this.state.card}
                style={styles.flatListCard}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({item}) => (
                  <View key={item.id} style={styles.containerCard}>
                    <Text
                      style={[
                        styles.fontSemiBold,
                        styles.font16,
                        styles.white,
                      ]}>
                      {item.number}
                    </Text>
                    <View style={styles.wrapperSaldo}>
                      <Text
                        style={[
                          styles.fontRegular,
                          styles.font16,
                          styles.white,
                          styles.flex,
                        ]}>
                        {item.name}
                      </Text>
                      <Text
                        style={[
                          styles.fontRegular,
                          styles.font16,
                          styles.white,
                          styles.flex,
                          styles.textRight,
                        ]}>
                        Rp {item.saldo}
                      </Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
          <View style={styles.wrapperButton}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('History')}
              style={styles.button}>
              <MaterialCommunityIcons
                color={'#979797'}
                name="lock-clock"
                size={36}
              />
              <Text style={[styles.fontSemiBold, styles.font18]}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <MaterialIcons color={'#979797'} name="settings" size={36} />
              <Text style={[styles.fontSemiBold, styles.font18]}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.logout} style={styles.button}>
              <MaterialCommunityIcons
                color={'#F24545'}
                name="logout"
                size={36}
              />
              <Text style={[styles.fontSemiBold, styles.font18, styles.red]}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
});

const mapDispatchToProps = {authLogout};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  textRight: {
    textAlign: 'right',
  },
  font16: {
    fontSize: 16,
  },
  font18: {
    fontSize: 18,
    width: '50%',
    paddingLeft: '15%',
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
    color: '#6B6B6B',
  },
  red: {
    color: '#F24545',
  },
  border: {
    borderColor: '#0ac77b',
    borderWidth: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  wrapperHeader: {
    flex: 2,
    alignItems: 'flex-start',
  },
  wrapperContent: {
    flex: 12,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  wrapperNav: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperProfile: {
    flex: 5,
    alignItems: 'center',
  },
  wrapperCard: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
  },
  wrapperButton: {
    flex: 4,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperSubtitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
  },
  wrapperCardUser: {
    flex: 3,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  wrapperSaldo: {
    flexDirection: 'row',
  },
  flatListCard: {
    width: '92%',
    height: '90%',
  },
  subtitle: {
    fontSize: 18,
    width: '85%',
  },
  title: {
    width: '70%',
    fontSize: 36,
  },
  icon: {
    width: '15%',
    alignItems: 'flex-end',
  },
  flatList: {
    flex: 1,
    width: '85%',
    height: '100%',
  },
  containerImage: {
    width: 160,
    height: 160,
    borderWidth: 3,
    borderRadius: 999,
    borderColor: '#0ac77b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '90%',
    borderRadius: 999,
  },
  name: {
    width: 260,
    paddingTop: '5%',
    paddingBottom: '2%',
    fontSize: 20,
    textAlign: 'center',
  },
  city: {
    width: '50%',
    fontSize: 16,
    textAlign: 'center',
  },
  containerCard: {
    height: '80%',
    width: 280,
    backgroundColor: '#0ac77b',
    borderRadius: 20,
    marginRight: 20,
    justifyContent: 'center',
    padding: '7%',
  },
  button: {
    flexDirection: 'row',
    width: '100%',
    height: '25%',
    alignItems: 'center',
  },
});
