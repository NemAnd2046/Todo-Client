import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Message = ({ message }) => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (!message) return;

		setVisible(true);
		const timer = setTimeout(() => setVisible(false), 2000);

		return () => {
			clearTimeout(timer);
		};
	}, [message]);

	if (!message || !visible) return null;

	return (
		<div className="max-w-xl m-auto bg-indigo-100 text-indigo-950 text-center border rounded-2xl p-4 animate-bounce">
			{message}
		</div>
	);
};
