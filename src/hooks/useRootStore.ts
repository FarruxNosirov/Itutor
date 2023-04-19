import RootStore from '../services/all-store/RootStore';
import {useContext} from 'react';

const useRootStore = () => useContext(RootStore);

export default useRootStore;
