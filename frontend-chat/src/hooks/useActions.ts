import { useDispatch } from 'react-redux'
import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
import { userActions } from '../store/slices/userSlice'

const rootActions = {
	...userActions,
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
