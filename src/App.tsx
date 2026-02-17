import { useState } from 'react';
import '@/styles.css';
import { Button } from '@/components/ui/button';

export function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Hello World</h1>
			<Button onClick={() => setCount(count + 1)}>Click me {count}</Button>
		</>
	);
}

export default App;
