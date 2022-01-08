import React, {useState} from 'react';
import {TextInput as ReactNativeTextInput} from 'react-native-paper';
import styles from './TextInput.style';
import {Text} from '../../../components/atoms';

export interface TextInputProps {
  inputLabel: string;
  value: string;
  setValue: (value: string) => void;
  backgroundColor?: string;
  validation?: string;
  textInputValidation?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
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
        onFocus={() => setShowValidation(false)}
        onEndEditing={() => setShowValidation(true)}
        autoCapitalize={'none'}
        value={value}
        onChangeText={setValue}
        mode="outlined"
        label={inputLabel}
        outlineColor={validation ? 'red' : 'blue'}
        activeOutlineColor={'blue'}
        selectionColor={'black'}
        style={styles.textInput}
        theme={{
          colors: {
            background: backgroundColor ?? 'white',
            placeholder: validation ? 'red' : 'black',
            text: 'black',
          },
        }}
      />
      {validation && textInputValidation && showValidation && (
        <Text
          children={'Format text'}
          weight={'regular'}
          category={'h3'}
          color={'red'}
          style={styles.textValidation}
        />
      )}
    </>
  );
};
