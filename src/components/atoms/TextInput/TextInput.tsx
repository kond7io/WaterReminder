import React, {useState} from 'react';
import {TextInput as ReactNativeTextInput} from 'react-native-paper';
import styles from './TextInput.style';
import {Text} from '../../../components/atoms';
import {colors} from '../../../utils/constants/colors';

export interface TextInputProps {
  password?: boolean;
  inputLabel: string;
  value: string;
  setValue: (value: string) => void;
  backgroundColor?: string;
  validation?: string;
  textInputValidation?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  password,
  inputLabel,
  value,
  setValue,
  backgroundColor,
  validation,
  textInputValidation,
}) => {
  const [showValidation, setShowValidation] = useState(false);

  return (
    <>
      <ReactNativeTextInput
        secureTextEntry={password}
        onFocus={() => setShowValidation(false)}
        onEndEditing={() => setShowValidation(true)}
        autoCapitalize={'none'}
        value={value}
        onChangeText={setValue}
        mode="outlined"
        label={inputLabel}
        outlineColor={
          validation
            ? colors.rubyShard
            : value.length > 1
            ? colors.limeGreen
            : colors.bleuFrance
        }
        activeOutlineColor={colors.bleuFrance}
        selectionColor={colors.black}
        style={styles.textInput}
        theme={{
          colors: {
            background: backgroundColor ?? colors.white,
            placeholder: validation ? colors.rubyShard : colors.black,
            text: 'black',
          },
        }}
      />
      {validation && textInputValidation && showValidation && (
        <Text
          children={textInputValidation}
          weight={'regular'}
          category={'h3'}
          color={colors.rubyShard}
          style={styles.textValidation}
        />
      )}
    </>
  );
};
