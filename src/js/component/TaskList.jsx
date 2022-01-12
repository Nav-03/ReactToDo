import React, { useState } from "react";

const TaskList = () => {
	let [count, setCount] = useState(0);
	let [task, setTask] = useState("");
	let [list, setList] = useState([]);
	let [inputText, setInput] = useState("");

	const handleInput = (pressedKey) => {
		if (pressedKey.keyCode == 32 && inputText === "") {
			alert("Sorry, use characters!");
			console.log("input reset!");
			setInput("");
		} else if (pressedKey.keyCode == 13) {
			if (inputText === "") {
				alert("Sorry, add task please.");
			} else {
				setTask(pressedKey.target.value);
				setList([...list, task]);
				setTask("");
				setInput("");
				setCount(count + 1);
			}
		}
	};

	return (
		<div className="container-fluid">
			<div className="pt-5 text-center mx-auto">
				<h1 className="fw-light title opacity-25">Your Todo List</h1>
			</div>

			<div className="input-group border">
				<input
					className="form-control"
					type="text"
					value={inputText}
					placeholder="To Do List"
					onKeyDown={(keyDown) => handleInput(keyDown)}
					onChange={(inputKeyPress) => {
						setTask(inputKeyPress.target.value);
						setInput(inputKeyPress.target.value);
					}}></input>
			</div>
			<div className="w-100 h-100">
				<ul>
					{list.map((singleTask, i) => {
						return <li key={i}>{singleTask}</li>;
					})}
					<li className="remTasks">
						You have {count} tasks remaining!
					</li>
				</ul>
			</div>
		</div>
	);
};
export default TaskList;
