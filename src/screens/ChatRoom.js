import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import BackButton from '../components/BackButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiver: {
        id: 11,
        name: 'Muhammad Rizky Ramadhan',
        image:
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      },
      chat: [
        {
          id: 1,
          chat: 'Hello',
          role: 0,
        },
        {
          id: 2,
          chat: 'Hi',
          role: 1,
        },
        {
          id: 3,
          chat: 'Apa Kabar!',
          role: 0,
        },
        {
          id: 4,
          chat: 'Baik',
          role: 1,
        },
        {
          id: 5,
          chat: 'Syukur!',
          role: 0,
        },
        {
          id: 6,
          chat: 'Hehe',
          role: 1,
        },
        {
          id: 7,
          chat: 'Hello',
          role: 0,
        },
        {
          id: 8,
          chat: 'Hi',
          role: 1,
        },
        {
          id: 9,
          chat: 'Apa Kabar!',
          role: 0,
        },
        {
          id: 10,
          chat: 'Baik',
          role: 1,
        },
        {
          id: 11,
          chat: 'Syukur!',
          role: 0,
        },
        {
          id: 12,
          chat: 'Hehe',
          role: 1,
        },
        {
          id: 13,
          chat: 'Hello',
          role: 0,
        },
        {
          id: 14,
          chat: 'Hi',
          role: 1,
        },
        {
          id: 15,
          chat: 'Apa Kabar!',
          role: 0,
        },
        {
          id: 16,
          chat: 'Baik',
          role: 1,
        },
        {
          id: 17,
          chat: 'Syukur!',
          role: 0,
        },
        {
          id: 18,
          chat: 'asbksdjbvksdbvksdbvkbdfkvksbvkdbvksdbvkdbfjbjkxcbxkbcv',
          role: 1,
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapperNav}>
          <View style={styles.wrapeerBackButton}>
            <BackButton
              color={'#000'}
              func={() => this.props.navigation.goBack()}
            />
          </View>
          <View style={styles.wrapperReceiver}>
            <Image
              style={styles.image}
              source={{uri: `${this.state.receiver.image}`}}
            />
            <Text style={[styles.fontSemiBold, styles.font16]}>
              {this.state.receiver.name}
            </Text>
          </View>
        </View>
        <View style={styles.wrapperContent}>
          <View style={styles.wrapperChatBubble}>
            <FlatList
              data={this.state.chat}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <>
                  {item.role === 0 ? (
                    <View style={styles.containerChatBubbleReceiver}>
                      <Text
                        style={[
                          styles.chatBubbleReceiver,
                          styles.fontSemiBold,
                          styles.white,
                        ]}>
                        {item.chat}
                      </Text>
                    </View>
                  ) : (
                    <View style={styles.containerChatBubbleSender}>
                      <Text
                        style={[
                          styles.chatBubbleSender,
                          styles.fontSemiBold,
                          styles.white,
                        ]}>
                        {item.chat}
                      </Text>
                    </View>
                  )}
                </>
              )}
            />
          </View>
          <View style={styles.wrapperChatInput}>
            <View style={styles.textInput}>
              <TextInput
                style={[
                  styles.grey,
                  styles.fontSemiBold,
                  styles.widthTextInput,
                ]}
                placeholder="Type your message..."
              />
            </View>
            <TouchableOpacity style={styles.containerButtonSend}>
              <MaterialCommunityIcons color={'#fff'} name="send" size={26} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerButtonSend}>
              <MaterialCommunityIcons
                color={'#fff'}
                name="attachment"
                size={26}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  widthTextInput: {
    width: '100%',
  },
  font16: {
    fontSize: 16,
  },
  wrapper: {
    flex: 1,
  },
  wrapperNav: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#595959',
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
    width: '65%',
    height: 45,
    backgroundColor: '#dbdbdb',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '2%',
    borderRadius: 10,
    marginHorizontal: 2.5,
  },
  wrapeerBackButton: {
    flex: 1,
  },
  wrapperReceiver: {
    flex: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: '4%',
  },
  wrapperChatBubble: {
    width: '95%',
    flex: 1,
  },
  wrapperChatInput: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerButtonSend: {
    backgroundColor: '#0ac77b',
    marginHorizontal: 2.5,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  containerChatBubbleReceiver: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  containerChatBubbleSender: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  chatBubbleReceiver: {
    backgroundColor: '#979797',
    padding: 10,
    borderTopRightRadius: 999,
    borderBottomRightRadius: 999,
    borderTopLeftRadius: 999,
  },
  chatBubbleSender: {
    backgroundColor: '#0ac77b',
    padding: 10,
    borderTopRightRadius: 999,
    borderBottomLeftRadius: 999,
    borderTopLeftRadius: 999,
  },
});
