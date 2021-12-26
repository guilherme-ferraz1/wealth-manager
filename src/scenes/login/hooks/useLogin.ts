import { useContext, useEffect } from 'react';
import AuthContext from '../../../contexts/auth';
import { getData, storeData } from '../../../services';

const useLogin = () => {
  const { setLoggedIn } = useContext(AuthContext);

  const getUser = async () => {
    const user = await getData({ key: 'userName' });
    if (user !== null) setLoggedIn(true);
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSave = async (name: string, currency: string) => {
    await storeData({ value: name, key: 'userName' })
      .then(() => 'success')
      .catch(e => {
        console.log(e, 'Error setting user name');
        return 'error';
      });

    await storeData({ value: currency, key: 'userCurrency' })
      .then(() => 'success')
      .catch(e => {
        console.log(e, 'Error setting user currency');
        return 'error';
      })
      .finally(() => {
        setLoggedIn(true);
      });
  };

  return {
    onSave,
  };
};

export default useLogin;
