import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import CardHome from '../components/CardHome';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destinations: [
        {
          id: 1,
          city: 'Tokyo',
          country: 'Japan',
          image:
            'https://digital.ihg.com/is/image/ihg/intercontinental---ana-tokyo-4086842933-2x1?fit=fit,1&wid=2400&hei=1200&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0',
          count: 15,
        },
        {
          id: 2,
          city: 'Barcelona',
          country: 'Spain',
          image:
            'https://lp-cms-production.imgix.net/2021-02/shutterstockRF_1347219839.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850',
          count: 15,
        },
        {
          id: 3,
          city: 'Manchester',
          country: 'England',
          image:
            'https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2Folympic-parade%20%281%29-min.jpg&action=BlogDetailContent',
          count: 15,
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapperHeader}>
          <View style={styles.wrapperNav}>
            <Text style={[styles.fontBold, styles.title]}>Explore</Text>
            <TouchableOpacity style={styles.icon}>
              <MaterialCommunityIcons
                color={'#595959'}
                name="email-outline"
                size={32}
              />
            </TouchableOpacity>
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
              <Text style={[styles.fontSemiBold, styles.viewAll, styles.green]}>
                View all
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapperCard}>
            <FlatList
              style={styles.flatListCard}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={this.state.destinations}
              renderItem={({item}) => <CardHome data={item} />}
            />
          </View>
        </View>
        <View style={styles.wrapperTopDes}>
          <View style={styles.wrapperSubtitle}>
            <Text style={[styles.fontSemiBold, styles.subtitle2]}>
              Top 3 destinations
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
    );
  }
}

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
