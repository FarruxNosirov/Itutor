import React from 'react';
import NavigationService from '../../../../NavigationService';
import AuthContainer from '../../../../components/template/AuthContainer';
import useRootState from '../../../../hooks/useRootState';
import useRootStore from '../../../../hooks/useRootStore';

const Teacher = () => {
  const store = useRootStore();
  const state = useRootState();
  console.log(state);

  const hnadleLogin = async () => {
    const res = await store.auth.siginUp(state.auth.state.signUp);
    console.log(res);

    if (res) {
      NavigationService.navigate('TEACHERNAVIGATION');
    }
  };
  return <AuthContainer teacher={true} onClick={hnadleLogin} />;
};

export default Teacher;
