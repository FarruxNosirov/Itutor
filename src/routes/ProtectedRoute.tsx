import {useEffect} from 'react';

import tokens from '../api/tokens';
import {ROUTES} from '../constants/routes';
import {useNavigation} from '@react-navigation/native';

const ProtectedRoute = ({children}: any) => {
  const token = tokens.getAccessToken();
  const navigate = useNavigation();

  useEffect(() => {
    if (!token) {
      console.log('token topiladi');
      navigate.navigate(ROUTES.LOGIN as never);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  console.log({token});

  return children;
};

export default ProtectedRoute;
