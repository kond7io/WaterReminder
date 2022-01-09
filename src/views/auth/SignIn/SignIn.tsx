import React from 'react';
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
import {Button} from '../../../components/atoms';
import styles from './SignIn.style';
import {texts} from '../../../utils/constants/texts';

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
    <Column style={styles.container}>
      <Text
        children={texts.APP_TITLE}
        category={'h3'}
        weight={'bold'}
        color={colors.wetAsh}
      />
      <TextInput
        inputLabel={texts.EMAIL}
        value={loginFormik.values.email}
        setValue={loginFormik.handleChange('email')}
        validation={loginFormik.errors.email}
      />
      <TextInput
        password
        inputLabel={texts.PASSWORD}
        value={loginFormik.values.password}
        setValue={loginFormik.handleChange('password')}
        validation={loginFormik.errors.password}
        textInputValidation={texts.PASSWORD_VALIDATION}
      />
      <Button
        target={() => loginFormik.handleSubmit()}
        children={
          <Text
            children={texts.SIGN_IN}
            category={'h2'}
            weight={'bold'}
            color={colors.white}
          />
        }
        style={styles.button}
      />
    </Column>
  );
};
