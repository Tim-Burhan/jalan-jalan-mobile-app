import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import vector from '../../assets/logoGrey.png';
import garuda from '../../assets/garuda.png';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon2 from 'react-native-vector-icons/dist/FontAwesome5';

export default class FlightDetail extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.nav} />
        <View style={styles.shadowbox}>
          <View style={styles.rowbox}>
            <View>
              <Text style={styles.city}>IDN</Text>
              <Text style={styles.h1}>12:33</Text>
            </View>
            <View style={styles.box1}>
              <Image source={vector} />
            </View>
            <View>
              <Text style={styles.city}>JPN</Text>
              <Text style={styles.h2}>15:21</Text>
            </View>
          </View>
          <View style={styles.wrap1}>
            <Image style={styles.img} source={garuda} />
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
              <Text>AB-221</Text>
            </View>
            <View>
              <Text style={styles.code}>Class</Text>
              <Text>Economy</Text>
            </View>
            <View>
              <Text style={styles.code}>Terminal</Text>
              <Text>A</Text>
            </View>
            <View>
              <Text style={styles.code}>Gate</Text>
              <Text>221</Text>
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
              <Icon2
                style={styles.burger}
                name="hamburger"
                color="#FFF"
                size={18}
              />
              <Text style={styles.burgerText}>Snack</Text>
            </View>

            <View style={styles.burgerWrap}>
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
            </View>
          </ScrollView>
          <View style={styles.totalWrap}>
            <Text>Total you’ll pay</Text>
            <Text style={styles.total}>$ 145,00</Text>
          </View>
          <TouchableOpacity style={styles.btn19}>
            <Text style={styles.h19}>BOOK FLIGHT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
  },

  nav: {
    backgroundColor: '#7ECFC0',
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
    color: '#7ECFC0',
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
    justifyContent: 'space-between',
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
    backgroundColor: '#7ECFC0',
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
});
