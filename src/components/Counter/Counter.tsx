import { useState } from 'react'

export const Counter = () => {
	const [count, setCount] = useState(0)

	return (
		<div className="flex items-center justify-center">
			<button
				className="rounded px-4 py-2 border border-solid border-sky-200 bg-sky-200"
				onClick={() => setCount(prevCount => prevCount + 1)}
			>
				Count: <strong>{count}</strong>
			</button>
		</div>
	)
}
