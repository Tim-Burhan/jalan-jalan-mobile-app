import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BackButton = props => {
  return (
    <>
      <TouchableOpacity onPress={props.func}>
        <MaterialIcons
          name="arrow-back-ios"
          color={`${props.color}`}
          size={30}
        />
      </TouchableOpacity>
    </>
  );
};

export default BackButton;
