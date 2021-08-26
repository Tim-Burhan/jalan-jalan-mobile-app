import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Picker,
} from 'react-native';

import bg from '../../assets/img-search.png';

import {CheckBox} from 'react-native-elements';

import Icon from 'react-native-vector-icons/dist/Fontisto';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: '',
    };
    console.log(this.state.checked);
  }

  render() {
    return (
      <View style={styles.parent}>
        <View>
          <ImageBackground
            imageStyle={styles.bg}
            source={bg}
            style={styles.bgimg}>
            <Text style={styles.bgText}> Destinations </Text>
          </ImageBackground>
          <View style={styles.shadowbox}>
            <View>
              <Text style={styles.h1}>From</Text>
              <Text style={styles.city}>Medan</Text>
              <Text style={styles.h1}>Indonesia</Text>
            </View>
            <View style={styles.box1}>
              <Icon name="arrow-swap" color="#7ECFC0" size={22} />
            </View>
            <View>
              <Text style={styles.h2}>To</Text>
              <Text style={styles.city}>Tokyo</Text>
              <Text style={styles.h2}>Japan</Text>
            </View>
          </View>
          <View style={styles.btnWrap}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>One way</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
              <Text style={styles.btnText2}>Round trip</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box2}>
            <Text style={styles.text1}>Departure</Text>
          </View>

          <View style={styles.container}>
            <Picker style={styles.rectangle2}>
              <Picker.Item
                label="Monday, 20 July 2020"
                value="Monday, 20 July 2020"
              />
              <Picker.Item
                label="Monday, 21 July 2020"
                value="Monday, 21 July 2020"
              />
            </Picker>
          </View>

          <View style={styles.box3}>
            <Text style={styles.text1}>How many person?</Text>
          </View>

          <View style={styles.containerWrap}>
            <View style={styles.container2}>
              <Picker style={styles.rectangle}>
                <Picker.Item label="2 Child" value="2 Child" />
                <Picker.Item label="4 Adult" value="4 Adult" />
              </Picker>
            </View>
            <View style={styles.container2}>
              <Picker style={styles.rectangle2}>
                <Picker.Item label="2 Child" value="2 Child" />
                <Picker.Item label="4 Adult" value="4 Adult" />
              </Picker>
            </View>
          </View>

          <View style={styles.box3}>
            <Text style={styles.text1}>Which class do you want?</Text>
          </View>
          <View style={styles.cekboxWrap}>
            <CheckBox
              containerStyle={styles.cekbox1}
              containerWrap={styles.cekbox2}
              checked={this.state.checked}
              checkedColor="#7ECFC0"
              onPress={() => this.setState({checked: !this.state.checked})}
            />
            <CheckBox
              containerStyle={styles.cekbox1}
              containerWrap={styles.cekbox2}
              checked={this.state.checked}
              checkedColor="#7ECFC0"
              onPress={() => this.setState({checked: !this.state.checked})}
            />
            <CheckBox
              containerStyle={styles.cekbox1}
              containerWrap={styles.cekbox2}
              checked={this.state.checked}
              checkedColor="#7ECFC0"
              onPress={() => this.setState({checked: !this.state.checked})}
            />
          </View>
          <View style={styles.box6}>
            <Text style={styles.h9}>Economy</Text>
            <Text style={styles.h9}>Business</Text>
            <Text style={styles.h9}>First Class</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btn5}>
          <Text style={styles.btn5text}>SEARCH FLIGHT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bg: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  bgimg: {
    width: '100%',
    height: 210,
  },
  shadowbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    backgroundColor: '#fff',
    marginTop: -50,
    borderRadius: 12,
    height: 100,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  box1: {
    justifyContent: 'center',
  },
  city: {
    fontSize: 20,
    fontWeight: '600',
  },
  h2: {
    textAlign: 'right',
    color: '#979797',
  },
  h1: {
    color: '#979797',
  },
  btn: {
    backgroundColor: '#7ECFC0',
    flex: 1,
    marginRight: 7,
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
  },
  btn2: {
    backgroundColor: '#F0F0F0',
    width: '100%',
    flex: 1,
    marginLeft: 7,
    height: 44,
    borderRadius: 6,
    justifyContent: 'center',
  },
  btnWrap: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  btnText2: {
    textAlign: 'center',
    color: '#595959',
    fontWeight: 'bold',
  },
  box2: {
    marginHorizontal: 20,
  },
  text1: {
    fontWeight: '500',
    color: '#6B6B6B',
  },
  container: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 6,
    marginHorizontal: 20,
    marginTop: 10,
    paddingHorizontal: 30,
  },
  container2: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 6,
    marginHorizontal: 10,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  box3: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  containerWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  bgText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
    marginHorizontal: 15,
    marginTop: 120,
  },
  cekbox1: {
    backgroundColor: 'white',
    borderWidth: 0,
  },
  cekboxWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
  },
  rectangle2: {
    height: 50,
    width: 250,
  },
  rectangle: {
    height: 50,
    width: 110,
  },
  box6: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: -15,
  },
  h9: {
    fontWeight: '600',
  },
  btn5: {
    backgroundColor: '#7ECFC0',
    marginHorizontal: 20,
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  btn5text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});
