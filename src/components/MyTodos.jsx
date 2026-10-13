import React from "react";
import { useState, useEffect } from "react";
import { todosData } from "../data";
import { Button } from "@heroui/react";
import { FaTrash } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import { NewTodo } from "./NewTodo";
import { IoIosLogOut } from "react-icons/io";

export const MyTodos = ({ setIsLoggedIn }) => {
	const [todos, setTodos] = useState(todosData);
	const [remaining, setRemaining] = useState(0);
	console.log(import.meta.env.VITE_API_URL);

	useEffect(() => {
		setRemaining(todos.filter(({ done }) => !done).length);
	}, [todos]);

	const handleDelete = (id) => {
		console.log(id);
		setTodos((prev) => prev.filter((obj) => obj.id != id));
	};

	const handleDone = (id) => {
		setTodos((prev) =>
			prev.map((obj) => (obj.id == id ? { ...obj, done: !obj.done } : obj)),
		);
	};
	const handleAdd = (descr) => {
		const newTodo = {
			id: Date.now(),
			descr,
			done: false,
		};
		setTodos((prev) => [...prev, newTodo]);
	};

	return (
		<div>
			<NewTodo handleAdd={handleAdd} />
			<ul className="flex flex-col gap-3 shadow-md shadow-indigo-50 mt-4 max-w-3xl m-auto">
				{todos.map(({ id, descr, done }) => (
					<li key={id} className="flex justify-between p-5 border-b-2">
						<Button
							isIconOnly
							variant="tertiary"
							onClick={() => handleDone(id)}
						>
							<MdDoneOutline style={{ color: done ? "green" : "gray" }} />
						</Button>

						<div style={{ textDecoration: done ? "line-through" : "" }}>
							{descr}
						</div>

						<Button
							isIconOnly
							aria-label="Delete"
							variant="danger"
							onClick={() => handleDelete(id)}
						>
							<FaTrash />
						</Button>
					</li>
				))}
			</ul>
			<div className="p-4">
				{remaining == 0
					? "Nincs több teendő!"
					: `Elvégzetlen feladatok száma: ${remaining}`}
			</div>
			<Button
				onClick={() => setIsLoggedIn(false)}
				className="fixed top-2 right-2 bg-indigo-50 text-indigo-950"
			>
				<IoIosLogOut /> Kijelentkezés
			</Button>
		</div>
	);
};
