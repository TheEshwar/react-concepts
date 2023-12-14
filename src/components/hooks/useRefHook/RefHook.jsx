import {
	Button,
	TextField,
	Typography,
	private_excludeVariablesFromRoot,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export default function RefHook() {
	const [name, setName] = useState("");
	const inputRef = useRef(0);

	// Accessing previous value and current values.
	/* useEffect(()=>{
        prevName.current = name
    }, [name]); */

	// To make input field focused on button click event
	/* function focusInput() {
		inputRef.current.focus();
	} */

	useEffect(() => {
		inputRef.current = inputRef.current + 1;
	});

	return (
		<>
			<TextField
				value={name}
				// inputRef={inputRef}
				onChange={(e) => setName(e.target.value)}
				variant="outlined"
				placeholder="Input placeholder"
				label="Input label"
				autoFocus={true}
				size="small"
				sx={{
					margin: "10px",
					fontSize: "12px",
					input: {
						"&::placeholder": {
							fontSize: "12px",
						},
						"&::label": {
							fontSize: "12px",
						},
					},
				}}
			/>
			<br />
			<TextField
				value={name}
				// inputRef={inputRef}
				onChange={(e) => setName(e.target.value)}
				variant="outlined"
				placeholder="Input placeholder"
				label="Input label"
				size="small"
				sx={{
					margin: "10px",
				}}
			/>
			<br />

			{/* <Button variant="outlined" onClick={focusInput}>
				Focus Input
			</Button> */}

			<div>Component rendered {inputRef.current} times</div>
		</>
	);
}
