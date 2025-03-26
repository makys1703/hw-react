import { useSelector } from 'react-redux';
import { RootState } from '../store/store.api';


export const useAppSelector = useSelector.withTypes<RootState>();