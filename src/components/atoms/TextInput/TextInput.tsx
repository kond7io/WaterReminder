import React, {useState} from 'react';
import {TextInput as ReactNativeTextInput} from 'react-native-paper';
import styles from './TextInput.style';
import {Text} from '../../../components/atoms';
import {colors} from '../../../utils/constants/colors';

export interface TextInputProps {
  focus?: boolean;
  password?: boolean;
  inputLabel: string;
  value: string;
  setValue: (value: string) => void;
  backgroundColor?: string;
  validation?: string;
  textInputValidation?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  focus,
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
        autoFocus={focus}
        secureTextEntry={password}
        onFocus={() => setShowValidation(false)}
        onEndEditing={() => setShowValidation(true)}
        autoCapitalize={'none'}
        value={value}
        onChangeText={setValue}
        mode="outlined"
        label={inputLabel}
        outlineColor={
          value.length > 1
            ? validation
              ? colors.rubyShard
              : colors.limeGreen
            : colors.bleuFrance
        }
        activeOutlineColor={colors.bleuFrance}
        selectionColor={colors.black}
        style={styles.textInput}
        theme={{
          colors: {
            background: backgroundColor ?? colors.white,
            placeholder:
              value.length > 1
                ? validation
                  ? colors.rubyShard
                  : colors.limeGreen
                : colors.black,
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
