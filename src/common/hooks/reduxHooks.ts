import {useDispatch, useSelector} from 'react-redux'
import type {TypedUseSelectorHook} from 'react-redux'
import {AppDispatch, RootState} from 'redux/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const reduxHooks: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
