import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  // Dimensions,
  TouchableOpacity,
  // ActivityIndicator,
  FlatList,
} from 'react-native';

import BackButton from '../components/BackButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class ChatHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHome: [
        {
          id: 1,
          lastchat: 'Bro, just fuck off',
          receiver: 'Muhammad Rizky',
          image:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          time: '09:30',
        },
        {
          id: 2,
          lastchat: 'Hi, Bro',
          receiver: 'Muhammad',
          image:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          time: '08:30',
        },
        {
          id: 3,
          lastchat: 'Hello Homie',
          receiver: 'Rizky',
          image:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          time: '07:00',
        },
        {
          id: 4,
          lastchat: 'Bro, just fuck off',
          receiver: 'Muhammad Rizky',
          image:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          time: '09:30',
        },
        {
          id: 5,
          lastchat: 'Hi, Bro',
          receiver: 'Muhammad',
          image:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          time: '08:30',
        },
        {
          id: 6,
          lastchat: 'Hello Homie',
          receiver: 'Rizky',
          image:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          time: '07:00',
        },
        {
          id: 7,
          lastchat: 'Bro, just fuck off',
          receiver: 'Muhammad Rizky',
          image:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          time: '09:30',
        },
        {
          id: 8,
          lastchat: 'Hi, Bro',
          receiver: 'Muhammad',
          image:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          time: '08:30',
        },
        {
          id: 9,
          lastchat: 'Hello Homie',
          receiver: 'Rizky',
          image:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          time: '07:00',
        },
        {
          id: 10,
          lastchat: 'Bro, just fuck off',
          receiver: 'Muhammad Rizky',
          image:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          time: '09:30',
        },
        {
          id: 11,
          lastchat: 'Hi, Bro',
          receiver: 'Muhammad',
          image:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          time: '08:30',
        },
        {
          id: 12,
          lastchat: 'Hello Homie',
          receiver: 'Rizky',
          image:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          time: '07:00',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapperNav}>
          <BackButton
            color={'#000'}
            func={() => this.props.navigation.goBack()}
          />
        </View>
        <View style={styles.wrapperContent}>
          <Text style={[styles.fontBold, styles.title]}>Chat</Text>
          <View style={styles.textInput}>
            <MaterialIcons color={'#A3A3A3'} name="search" size={32} />
            <TextInput
              style={[styles.grey, styles.fontSemiBold, styles.widthTextInput]}
              placeholder="Type your message..."
            />
          </View>
          <View style={styles.wrapperChat}>
            {/* <TouchableOpacity style={styles.containerChat}>
              <View style={styles.wrapperImageChat}>
                <Image
                  style={styles.imageChat}
                  source={{
                    uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                  }}
                />
              </View>
              <View style={styles.wrapperContentChat}>
                <Text style={styles.fontSemiBold}>Muhammad Rizky Ramadhan</Text>
                <Text style={[styles.fontRegular, styles.grey]}>
                  Hello, How are you?
                </Text>
              </View>
              <View style={styles.wrapperStatusChat}>
                <Text style={[styles.fontRegular, styles.grey]}>09:30</Text>
              </View>
            </TouchableOpacity> */}
            <FlatList
              style={styles.flatList}
              data={this.state.chatHome}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableOpacity key={item.id} style={styles.containerChat}>
                  <View style={styles.wrapperImageChat}>
                    <Image
                      style={styles.imageChat}
                      source={{
                        uri: `${item.image}`,
                      }}
                    />
                  </View>
                  <View style={styles.wrapperContentChat}>
                    <Text style={styles.fontSemiBold}>{item.receiver}</Text>
                    <Text style={[styles.fontRegular, styles.grey]}>
                      {item.lastchat}
                    </Text>
                  </View>
                  <View style={styles.wrapperStatusChat}>
                    <Text style={[styles.fontRegular, styles.grey]}>
                      {item.time}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}

// const win = Dimensions.get('window');

const styles = StyleSheet.create({
  widthTextInput: {
    width: '90%',
  },
  font16: {
    fontSize: 16,
    marginTop: '5%',
  },
  wrapper: {
    flex: 1,
  },
  wrapperNav: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  wrapperContent: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundColor: {
    backgroundColor: '#0ac77b',
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
    borderWidth: 2,
  },
  title: {
    fontSize: 36,
    width: '95%',
    paddingHorizontal: '5%',
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

  wrapperChat: {
    width: '85%',
    height: '100%',
    marginTop: '10%',
  },
  containerChat: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    borderBottomColor: '#595959',
    borderBottomWidth: 1,
  },
  wrapperImageChat: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperContentChat: {
    flex: 8,
    justifyContent: 'center',
  },
  wrapperStatusChat: {
    flex: 2,
    justifyContent: 'center',
  },
  imageChat: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  flatList: {
    flex: 1,
  },
});
