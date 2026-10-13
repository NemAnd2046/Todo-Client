import React from "react";
import { InputGroup, Label, TextField } from "@heroui/react";
import { Button } from "@heroui/react";
import { useState } from "react";

export const Login = ({ setIsLoggedIn }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [msg, setMsg] = useState("");

	const tempUsername = "asd";
	const tempPw = "123";

	const handleLogin = () => {
		if (username === tempUsername && password === tempPw) {
			setIsLoggedIn(true);
			setMsg("");
		} else setMsg("Hibás email cím vagy jelszó!");
	};

	return (
		<div className="max-w-md m-auto p-4 bg-indigo-400 rounded-2xl">
			<TextField fullWidth name="email">
				<Label>Felhasználónév</Label>
				<InputGroup fullWidth>
					<InputGroup.Input
						placeholder="name@email.com"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</InputGroup>
			</TextField>
			<TextField fullWidth name="password">
				<Label>Jelszó</Label>
				<InputGroup fullWidth>
					<InputGroup.Input
						placeholder="Enter password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</InputGroup>
			</TextField>
			<Button className="m-4 bg-indigo-950" onClick={() => handleLogin()}>
				Belépés
			</Button>
			<div className="text-red-600">{msg}</div>
		</div>
	);
};
