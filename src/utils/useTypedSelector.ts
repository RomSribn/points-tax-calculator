import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '@redux/store';
/**
 * Typed useSelector.
 */
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
