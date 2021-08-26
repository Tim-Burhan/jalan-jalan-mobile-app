import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Toast from 'react-native-toast-message';

import BackButton from '../components/BackButton';

import {connect} from 'react-redux';
import {authRegister} from '../redux/actions/auth';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().min(8, 'Minimum 10 Characters!').required(''),
  email: Yup.string().email('Invalid Email!').required(''),
  password: Yup.string().min(8, 'Minimum 8 Characters!').required(''),
});

class Signup extends Component {
  signup = values => {
    console.log(values);
    this.props
      .authRegister(values.fullName, values.email, values.password)
      .then(() => {
        if (this.props.auth.msg === 'register success!') {
          Toast.show({
            type: 'success',
            position: 'top',
            text1: 'Success',
            text2: 'Register success',
            visibilityTime: 800,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
          });
          this.props.navigation.navigate('Login');
        } else {
          Toast.show({
            type: 'error',
            position: 'top',
            text1: 'Error',
            text2: `${this.props.auth.msg}`,
            visibilityTime: 1000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
          });
        }
      });
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.wrapperNav}>
          <BackButton
            color={'#000'}
            func={() => this.props.navigation.goBack()}
          />
          <View style={styles.gap} />
          <TouchableOpacity>
            <Text style={[styles.fontSemiBold, styles.green]}>
              Continue as Guest
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapperContent}>
          <Text style={[styles.fontBold, styles.title]}>Register</Text>
          <Formik
            validationSchema={validationSchema}
            initialValues={{fullName: '', email: '', password: ''}}
            onSubmit={values => this.signup(values)}>
            {({handleChange, handleBlur, handleSubmit, errors, values}) => (
              <View style={styles.wrapperInput}>
                <TextInput
                  style={[styles.textInput, styles.fontSemiBold]}
                  onChangeText={handleChange('fullName')}
                  keyboardType="name-phone-pad"
                  onBlur={handleBlur('fullName')}
                  placeholder="Full Name"
                  value={values.fullName}
                />
                {errors.fullName ? (
                  <Text style={[styles.textError, styles.fontRegular]}>
                    {errors.fullName}
                  </Text>
                ) : null}
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
                    Sign Up
                  </Text>
                </TouchableOpacity>
                <Text
                  style={[styles.fontRegular, styles.grey, styles.textDetail]}>
                  Already have an account?
                </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Login')}
                  style={[styles.border, styles.button]}>
                  <Text
                    style={[styles.fontBold, styles.green, styles.textButton]}>
                    Sign In
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {authRegister};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

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
    marginVertical: '5%',
    width: '85%',
    height: 70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
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
  textDetail: {
    borderTopWidth: 1,
    borderColor: '#595959',
    paddingTop: 20,
    width: '70%',
    textAlign: 'center',
  },
});
