import {useContext} from 'react';
import RootState from '../services/all-state/RootState';

const useRootState = () => useContext(RootState);
export default useRootState;
