import React, { useState } from 'react';
import { View } from 'react-native';
import Header from '../../components/molecules/Header';
import Input from '../../components/atoms/Input';
import Select from '../../components/atoms/Select';
import { currencyOptions } from '../../constants/currencies';
import Button from '../../components/atoms/Button';
import useLogin from './hooks/useLogin';

const LoginScreen: React.FC = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [currency, setCurrency] = useState<string>('');
  const { onSave } = useLogin();

  return (
    <>
      <Header title="Welcome!" />
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Input
          placeholder="Your full name"
          title="Your name"
          onChangeText={text => setName(text)}
        />
        <Select
          options={currencyOptions}
          onChange={option => setCurrency(option)}
          title="Your currency"
          placeHolder={{ label: 'Your Currency', value: null, key: 'place' }}
        />
        <Button
          title="Start managing"
          onChange={() => onSave(name, currency)}
        />
      </View>
    </>
  );
};

export default LoginScreen;
