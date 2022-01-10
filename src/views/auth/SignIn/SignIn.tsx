import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {ParamList, Screens} from '../../../navigation';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {TextInput} from '../../../components/atoms/TextInput/TextInput';
import {userLoginAction} from '../../../redux/User/User.action';
import {Column} from '../../../components/containers';
import {Text} from '../../../components/atoms/Text/Text';
import {Button} from '../../../components/atoms';
import {loginSchema} from '../../../utils/validation/validation';
import {colors} from '../../../utils/constants/colors';
import {texts} from '../../../utils/constants/texts';
import styles from './SignIn.style';

export const SignIn: React.FC<
  StackScreenProps<ParamList, Screens.SignIn>
> = ({}) => {
  const dispatch = useDispatch();
  const [response, setResponse] = useState('');
  const loginFormik = useFormik({
    initialValues: {email: '', password: ''},
    validationSchema: loginSchema,
    onSubmit: () => {
      dispatch(
        userLoginAction(
          loginFormik.values.email,
          loginFormik.values.password,
          () => {
            setResponse(texts.SIGN_IN_RESPONSE);
          },
        ),
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
      {!!response && (
        <Text
          children={response}
          style={styles.responseText}
          category={'h4'}
          weight={'regular'}
          color={colors.rubyShard}
        />
      )}
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
