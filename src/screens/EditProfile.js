import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  // TextInput,
  Image,
  ToastAndroid,
  Alert,
  TextInput,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

import BackButton from '../components/BackButton';

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPicture: '',
      picture: null,
    };
  }

  selectPicture = e => {
    if (!e.didCancel) {
      const maxSize = 1024 * 1024 * 2;
      console.log(e.assets[0].fileSize);
      console.log(maxSize);
      if (e.assets[0].fileSize > maxSize) {
        ToastAndroid.showWithGravity(
          'File to large!',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
        // Toast.show({
        //   type: 'error',
        //   position: 'top',
        //   text1: 'Error',
        //   text2: 'File to large!',
        //   visibilityTime: 1000,
        //   autoHide: true,
        //   topOffset: 30,
        //   bottomOffset: 40,
        // });
        this.setState({
          picture: null,
          showPicture: '',
        });
      } else {
        this.setState({
          showPicture: e.assets[0].uri,
          picture: e.assets[0],
        });
      }
    }
  };

  setPicture = () => {
    Alert.alert('Select Picture', 'Please choose a picture', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Gallery',
        onPress: () => launchImageLibrary({quality: 1}, this.selectPicture),
      },
      {
        text: 'Camera',
        onPress: () => launchCamera({quality: 1}, this.selectPicture),
      },
    ]);
  };

  saveEdit = values => {
    Alert.alert('Edit Profile', 'Do you want to save it?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => console.log(values),
      },
    ]);
  };

  render() {
    const validationSchema = Yup.object().shape({
      email: Yup.string()
        .email('Invalid Email!!')
        .required('Must fill in the form'),
      phoneNumber: Yup.string()
        .min(11, 'Minimum 11 Digits!')
        .required('Must fill in the form'),
      userName: Yup.string()
        .min(8, 'Minimum 8 Characters!')
        .required('Must fill in the form'),
      fullName: Yup.string()
        .min(8, 'Minimum 8 Characters!')
        .required('Must fill in the form'),
      city: Yup.string()
        .min(3, 'Minimum 3 Characters!')
        .required('Must fill in the form'),
      address: Yup.string()
        .min(8, 'Minimum 8 Characters!')
        .required('Must fill in the form'),
      postCode: Yup.string()
        .min(5, 'Minimum 5 Digits!')
        .required('Must fill in the form'),
    });
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapperNav}>
          <BackButton func={() => this.props.navigation.goBack()} />
        </View>
        <View style={styles.wrapperContent}>
          <Text style={[styles.fontBold, styles.title]}>Edit Profile</Text>
          <TouchableOpacity
            onPress={this.setPicture}
            style={styles.containerImage}>
            <Image
              style={styles.image}
              source={
                this.state.showPicture === ''
                  ? {
                      uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                    }
                  : {
                      uri: this.state.showPicture,
                    }
              }
            />
          </TouchableOpacity>

          <Formik
            validationSchema={validationSchema}
            initialValues={{
              email: '',
              phoneNumber: '',
              userName: '',
              fullName: '',
              city: '',
              address: '',
              postCode: '',
            }}
            onSubmit={values => this.saveEdit(values)}>
            {({handleChange, handleBlur, handleSubmit, errors, values}) => (
              <>
                <ScrollView
                  style={styles.wrapperInput}
                  showsVerticalScrollIndicator={false}>
                  <Text style={[styles.fontSemiBold, styles.font16]}>
                    Contact
                  </Text>
                  <TextInput
                    style={[styles.textInput, styles.fontSemiBold]}
                    keyboardType="email-address"
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {errors.email ? (
                    <Text style={[styles.textError, styles.fontRegular]}>
                      {errors.email}
                    </Text>
                  ) : null}
                  <TextInput
                    style={[styles.textInput, styles.fontSemiBold]}
                    keyboardType="number-pad"
                    placeholder="Phone Number"
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                    value={values.phoneNumber}
                  />
                  {errors.phoneNumber ? (
                    <Text style={[styles.textError, styles.fontRegular]}>
                      {errors.phoneNumber}
                    </Text>
                  ) : null}
                  <Text style={[styles.fontSemiBold, styles.font16]}>
                    Biodata
                  </Text>
                  <TextInput
                    style={[styles.textInput, styles.fontSemiBold]}
                    placeholder="Username"
                    onChangeText={handleChange('userName')}
                    onBlur={handleBlur('userName')}
                    value={values.userName}
                  />
                  {errors.userName ? (
                    <Text style={[styles.textError, styles.fontRegular]}>
                      {errors.userName}
                    </Text>
                  ) : null}
                  <TextInput
                    style={[styles.textInput, styles.fontSemiBold]}
                    placeholder="Fullname"
                    onChangeText={handleChange('fullName')}
                    onBlur={handleBlur('fullName')}
                    value={values.FullName}
                  />
                  {errors.fullName ? (
                    <Text style={[styles.textError, styles.fontRegular]}>
                      {errors.fullName}
                    </Text>
                  ) : null}
                  <TextInput
                    style={[styles.textInput, styles.fontSemiBold]}
                    placeholder="City"
                    onChangeText={handleChange('city')}
                    onBlur={handleBlur('city')}
                    value={values.city}
                  />
                  {errors.city ? (
                    <Text style={[styles.textError, styles.fontRegular]}>
                      {errors.city}
                    </Text>
                  ) : null}
                  <TextInput
                    style={[styles.textInput, styles.fontSemiBold]}
                    placeholder="Address"
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur('address')}
                    value={values.address}
                  />
                  {errors.address ? (
                    <Text style={[styles.textError, styles.fontRegular]}>
                      {errors.address}
                    </Text>
                  ) : null}
                  <TextInput
                    style={[styles.textInput, styles.fontSemiBold]}
                    keyboardType="number-pad"
                    placeholder="Post Code"
                    onChangeText={handleChange('postCode')}
                    onBlur={handleBlur('postCode')}
                    value={values.postCode}
                  />
                  {errors.postCode ? (
                    <Text style={[styles.textError, styles.fontRegular]}>
                      {errors.postCode}
                    </Text>
                  ) : null}
                </ScrollView>
                <TouchableOpacity
                  style={[styles.backgroundColor, styles.button]}
                  onPress={handleSubmit}>
                  <Text
                    style={[styles.white, styles.fontBold, styles.textButton]}>
                    Save
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  wrapperInput: {
    width: '80%',
    height: '100%',
    // alignItems: 'center',
    marginBottom: '10%',
  },
  wrapperButton: {
    flexDirection: 'row',
  },
  gap: {
    width: '50%',
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
  button: {
    marginBottom: '8%',
    width: '85%',
    height: 70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 18,
  },
  textInput: {
    width: '100%',
    height: 70,
    borderBottomWidth: 2,
    padding: '3%',
    borderColor: '#9B96AB',
  },
  textError: {
    width: '85%',
    color: '#E45D32',
    marginVertical: '2%',
  },
  title: {
    fontSize: 36,
    width: '95%',
    paddingHorizontal: '5%',
  },
  textForgot: {
    fontSize: 15,
  },
  buttonReset: {
    textDecorationLine: 'underline',
  },
  textDetail: {
    borderTopWidth: 1,
    borderColor: '#595959',
    paddingTop: 20,
    width: '70%',
    textAlign: 'center',
    marginTop: '8%',
    marginBottom: '4%',
  },
  buttonIcon: {
    width: '25%',
    height: '40%',
    margin: '2%',
    borderColor: '#0ac77b',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
  },
  logo: {
    width: 30,
    height: 31,
  },

  containerImage: {
    width: 160,
    height: 160,
    borderWidth: 3,
    borderRadius: 999,
    borderColor: '#0ac77b',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5%',
  },
  image: {
    width: '90%',
    height: '90%',
    borderRadius: 999,
  },
});
