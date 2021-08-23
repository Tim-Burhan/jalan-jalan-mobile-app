import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatButton = props => {
  return (
    <>
      <TouchableOpacity onPress={props.func} style={styles.icon}>
        <MaterialCommunityIcons
          color={'#595959'}
          name="email-outline"
          size={32}
        />
      </TouchableOpacity>
    </>
  );
};

export default ChatButton;

const styles = StyleSheet.create({
  icon: {
    width: '15%',
    alignItems: 'flex-end',
  },
});
