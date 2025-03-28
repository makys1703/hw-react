import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store.api';


export const useAppDispatch = useDispatch.withTypes<AppDispatch>();