import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import Google from '../../assets/google.png';
import Facebook from '../../assets/facebook.png';
import Fingerprint from '../../assets/fingerprint.png';
import BackButton from '../components/BackButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email!!').required(''),
  password: Yup.string().min(8, 'Minimum 8 Characters!').required(''),
});

export default class Login extends Component {
  login = values => {
    console.log(values);
    this.props.navigation.navigate('Dashboard');
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapperNav}>
          <BackButton func={() => this.props.navigation.goBack()} />
        </View>
        <View style={styles.wrapperContent}>
          <Text style={[styles.fontBold, styles.title]}>Login</Text>
          <Formik
            validationSchema={validationSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={values => this.login(values)}>
            {({handleChange, handleBlur, handleSubmit, errors, values}) => (
              <View style={styles.wrapperInput}>
                <TextInput
                  style={[styles.textInput, styles.fontSemiBold]}
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="Email"
                  value={values.email}
                />
                {errors.email ? (
                  <Text style={[styles.textError, styles.fontRegular]}>
                    {errors.email}
                  </Text>
                ) : null}
                <TextInput
                  style={[styles.textInput, styles.fontSemiBold]}
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder="Password"
                />
                {errors.password ? (
                  <Text style={[styles.textError, styles.fontRegular]}>
                    {errors.password}
                  </Text>
                ) : null}
                <TouchableOpacity
                  style={[styles.backgroundColor, styles.button]}
                  onPress={handleSubmit}>
                  <Text
                    style={[styles.white, styles.fontBold, styles.textButton]}>
                    Sign In
                  </Text>
                </TouchableOpacity>
                <Text
                  style={[styles.fontRegular, styles.grey, styles.textForgot]}>
                  Did you forgot your password?
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('ForgotPassword')
                  }>
                  <Text
                    style={[
                      styles.fontRegular,
                      styles.green,
                      styles.buttonReset,
                    ]}>
                    Tap here for reset
                  </Text>
                </TouchableOpacity>
                <Text
                  style={[styles.fontRegular, styles.grey, styles.textDetail]}>
                  or sign in with
                </Text>
                <View style={styles.wrapperButton}>
                  <TouchableOpacity style={styles.buttonIcon}>
                    <Image style={styles.logo} source={Google} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonIcon}>
                    <Image style={styles.logo} source={Facebook} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonIcon}>
                    <Image style={styles.logo} source={Fingerprint} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    marginTop: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperInput: {
    width: '100%',
    alignItems: 'center',
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
    marginVertical: '8%',
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
    width: '85%',
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
});
