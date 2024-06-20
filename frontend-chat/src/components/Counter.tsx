// unused
import { useState } from 'react'

export default function Counter() {
	const [count, setCount] = useState(0)
	const increment = () => setCount(count + 1)
	const decrement = () => setCount(count - 1)

	return (
		<div>
			<h3 className='m-2'>COUNTER COMPONENT</h3>
			<h3 className='m-2'>{count}</h3>
			<button className={'btn btn-primary m-2'} onClick={increment}>
				Increment
			</button>
			<button className={'btn btn-danger m-2'} onClick={decrement}>
				Decrement
			</button>
		</div>
	)
}
