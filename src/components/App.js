import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = (e) => {
		setInputValue('Hello ' + e.target.value + '!')
	}

	return (
		<div>
			<p>Enter your name: </p>
			<input type="text" id="inp" onChange={handleInputChange} />
			<p>{inputValue}</p>
		</div>
	)
}

export default App
