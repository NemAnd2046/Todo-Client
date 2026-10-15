import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import { FaTrash } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import { NewTodo } from "./NewTodo";
import { IoIosLogOut } from "react-icons/io";
import { addTodo, deleteTodo, patchTodo, readTodos } from "../api";
import { Message } from "./Message";

export const MyTodos = ({ setIsLoggedIn }) => {
	const [todos, setTodos] = useState(null);
	const [remaining, setRemaining] = useState(0);
	const [message, setMessage] = useState(null);

	useEffect(() => {
		readTodos().then(setTodos);
	}, []);

	useEffect(() => {
		if (!todos) return;
		setRemaining(todos.filter(({ complete }) => !complete).length);
	}, [todos]);

	const handleDelete = async (id) => {
		setMessage("");
		const data = await deleteTodo({ id });
		setMessage(data.msg);
		setTodos((prev) => prev.filter((obj) => obj.id != id));
	};

	const handleDone = async (id) => {
		setMessage("");
		const data = await patchTodo({ id });
		setMessage(data.msg);
		setTodos((prev) =>
			prev.map((obj) =>
				obj.id == id ? { ...obj, complete: !obj.complete } : obj,
			),
		);
	};

	const handleAdd = async (task) => {
		setMessage("");
		const data = await addTodo({ task });
		setMessage(data.msg);
		readTodos().then(setTodos);
	};

	return (
		<div>
			<NewTodo handleAdd={handleAdd} />
			<ul className="flex flex-col gap-3 shadow-md shadow-indigo-50 mt-4 max-w-3xl m-auto">
				{todos &&
					todos.map(({ id, task, complete }) => (
						<li key={id} className="flex justify-between p-5 border-b-2">
							<Button
								isIconOnly
								variant="tertiary"
								onClick={() => handleDone(id)}
							>
								<MdDoneOutline style={{ color: complete ? "green" : "gray" }} />
							</Button>

							<div style={{ textDecoration: complete ? "line-through" : "" }}>
								{task}
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
			<div className="p-4 text-center">
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
			<Message message={message} />
		</div>
	);
};
