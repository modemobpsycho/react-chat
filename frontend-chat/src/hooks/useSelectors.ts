import { RootState } from '../store/store'
import { useSelector } from 'react-redux'

export const useSelectorUser = () =>
	useSelector((state: RootState) => state.user)
