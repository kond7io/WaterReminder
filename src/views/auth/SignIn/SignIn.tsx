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
import {loginButtonDimensions} from '../../../utils/constants/componentsDimensions';
import {Button} from '../../../components/atoms';

export const SignIn: React.FC<
  StackScreenProps<ParamList, Screens.SignIn>
> = ({}) => {
  const dispatch = useDispatch();
  const loginFormik = useFormik({
    initialValues: {email: '', password: ''},
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
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      <Text
        children={'Water Reminder'}
        category={'h3'}
        weight={'bold'}
        color={colors.wetAsh}
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
      <Button
        target={() => loginFormik.handleSubmit()}
        children={
          <Text
            children={'Zaloguj się'}
            category={'h2'}
            weight={'bold'}
            color={colors.white}
          />
        }
        style={{
          ...loginButtonDimensions,
          backgroundColor: colors.bleuFrance,
          borderRadius: 15,
          marginTop: 20,
        }}
      />
      {/*<TouchableOpacity*/}
      {/*  activeOpacity={0.8}*/}
      {/*  style={{*/}
      {/*    backgroundColor: colors.bleuFrance,*/}
      {/*    alignItems: 'center',*/}
      {/*    justifyContent: 'center',*/}
      {/*    borderRadius: 15,*/}
      {/*    marginTop: 20,*/}
      {/*    ...loginButtonDimensions,*/}
      {/*  }}*/}
      {/*  onPress={() => loginFormik.handleSubmit()}*/}
      {/*/>*/}
    </Column>
  );
};
