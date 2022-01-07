import React from 'react';
import {View, Alert, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {ParamList, Screens} from '../../../navigation';
import {useFormik} from 'formik';
import {loginSchema} from '../../../utils/validation/validation';
import {TextInput} from '../../../components/atoms/TextInput/TextInput';

export const SignIn: React.FC<
  StackScreenProps<ParamList, Screens.SignIn>
> = ({}) => {
  const loginFormik = useFormik({
    initialValues: {email: '', password: ''},
    validationSchema: loginSchema,
    onSubmit: () => {
      Alert.alert('Login');
    },
  });

  return (
    <View>
      <Text>SignIn</Text>
      <TextInput
        inputLabel={'E-mail'}
        value={loginFormik.values.email}
        setValue={loginFormik.handleChange('email')}
      />
      <TextInput
        inputLabel={'Hasło'}
        value={loginFormik.values.password}
        setValue={loginFormik.handleChange('password')}
      />
    </View>
  );
};
