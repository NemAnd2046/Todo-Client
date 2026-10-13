import { useState } from "react";
import "./App.css";
import { MyTodos } from "./components/MyTodos";
import { Login } from "./components/Login";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<div className="bg-indigo-950 text-indigo-50 min-h-screen">
			<h2 className="flex items-center flex-col p-3 font-bold text-3xl">
				My Todos
			</h2>
			{isLoggedIn ? (
				<MyTodos setIsLoggedIn={setIsLoggedIn} />
			) : (
				<Login setIsLoggedIn={setIsLoggedIn} />
			)}
		</div>
	);
}

export default App;
