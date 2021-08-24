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

import BackButton from '../components/BackButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email!').required(''),
});

export default class ForgotPassword extends Component {
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
          <Text style={[styles.fontBold, styles.title]}>Forgot Password</Text>
          <Formik
            validationSchema={validationSchema}
            initialValues={{email: ''}}
            onSubmit={values => console.log(values)}>
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
                <TouchableOpacity
                  style={[styles.backgroundColor, styles.button]}
                  onPress={handleSubmit}>
                  <Text
                    style={[styles.white, styles.fontBold, styles.textButton]}>
                    Send
                  </Text>
                </TouchableOpacity>
                <Text style={[styles.grey, styles.fontSemiBold]}>
                  You’ll get message soon on your email
                </Text>
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
});
