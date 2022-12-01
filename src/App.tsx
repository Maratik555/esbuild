import React, {useState} from 'react'
import './index.css'
import Logo from './logo.png'

const App = () => {
	const [state, setState] = useState(0)

	function onBtnClick() {
		setState(prev => prev + 1)
	}
	
	return (
		<>
			<img src={Logo}  alt='Loader'/>
			<h1>Count = {state}</h1>
			<button onClick={onBtnClick}>CLICK ME + </button>
			<br/>
			<br/>
			<button onClick={() => setState(0)}>Reset</button>
			<br/>
			<br/>
			<button onClick={() => setState(state - 1 )}>CLICK ME - </button>
		</>
	)
}

export default App
