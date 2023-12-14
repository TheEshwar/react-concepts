import React from "react";
import { useRef, useState } from "react";

export default function RefStyling() {
	const [number, setNumber] = useState(0);

	const inputOne = useRef();
	const inputTwo = useRef();

	const getNumBox = () => {
		inputOne.current.style.backgroundColor = "red";
		inputOne.current.style.color = "white";
		inputOne.current.style.fontSize = "20px";
	};

	const getTextBox = () => {
		console.log("get text box()");
		console.log("input two :- ", inputTwo);
	};
	return (
		<>
			<h2>useRef hook</h2>
			<input
				ref={inputOne}
				value={number}
				type="number"
				onChange={(e) => setNumber(e.target.value)}
			/>

			<input
				value={number}
				type="text"
				onChange={(e) => setNumber(e.target.value)}
			/>
			<h3>value :- {number}</h3>

			<button onClick={() => getNumBox()}>Rupees</button>
			<button onClick={() => getTextBox()}>Dollars</button>
		</>
	);
}
