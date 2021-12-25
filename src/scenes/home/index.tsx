import React, { useContext } from 'react';
import { View, Button } from 'react-native';
import Text from '../../components/atoms/Text';
import AuthContext from '../../contexts/auth';
import { removeData } from '../../services';

const HomeScreen: React.FC = (): JSX.Element => {
  const { setLoggedIn } = useContext(AuthContext);
  const logout = async () => {
    await removeData({ key: 'userName' });
    await removeData({ key: 'userCurrency' });
    setLoggedIn(false);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Home </Text>
      <Button title="logout" onPress={() => logout()} />
    </View>
  );
};

export default HomeScreen;
