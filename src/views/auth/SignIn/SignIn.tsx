import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {ParamList, Screens} from '../../../navigation';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {loginSchema} from '../../../utils/validation/validation';
import {TextInput} from '../../../components/atoms/TextInput/TextInput';
import {userLoginAction} from '../../../redux/User/User.action';
import {Column} from '../../../components/containers';
import {colors} from '../../../utils/constants/colors';
import {Text} from '../../../components/atoms/Text/Text';

export const SignIn: React.FC<
  StackScreenProps<ParamList, Screens.SignIn>
> = ({}) => {
  const dispatch = useDispatch();
  const loginFormik = useFormik({
    initialValues: {email: 'user@leocode.pl', password: 'leocode'},
    validationSchema: loginSchema,
    onSubmit: () => {
      dispatch(
        userLoginAction(loginFormik.values.email, loginFormik.values.password),
      );
    },
  });

  return (
    <Column
      style={{
        backgroundColor: colors.white,
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
      }}>
      <Text
        children={'Water Reminder'}
        category={'h3'}
        color={'#b1beb6'}
        weight={'bold'}
      />
      <TextInput
        inputLabel={'E-mail'}
        value={loginFormik.values.email}
        setValue={loginFormik.handleChange('email')}
        validation={loginFormik.errors.email}
      />
      <TextInput
        password
        inputLabel={'Hasło'}
        value={loginFormik.values.password}
        setValue={loginFormik.handleChange('password')}
        validation={loginFormik.errors.password}
        textInputValidation={'Hasło min. 6 znaków'}
      />
      <TouchableOpacity onPress={() => loginFormik.handleSubmit()}>
        <Text>Zaloguj</Text>
      </TouchableOpacity>
    </Column>
  );
};
