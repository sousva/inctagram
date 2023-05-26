import {useDispatch} from 'react-redux'

import {AppDispatchType} from 'common/types/types'

export const useAppDispatch = () => useDispatch<AppDispatchType>()
