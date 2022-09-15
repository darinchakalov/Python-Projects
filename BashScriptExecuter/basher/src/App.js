import "./App.css";
import { useState } from "react";

function App() {
	const [dirContent, setDirContent] = useState();
	const [flaskContent, setFlaskContent] = useState();

	function buttonClickHandler() {
		fetch("http://localhost:3000")
			.then((res) => res.text())
			.then((data) => {
				let result = [];
				for (const row of data.split("\n")) {
					result.push(<p>{row}</p>);
				}
				console.log(result);
				setDirContent(result);
			})
			.catch((err) => alert(err));
	}

	function getFlaskDataHandler() {
		fetch("http://127.0.0.1:5000")
			.then((res) => res.text())
			.then((data) => {
				setFlaskContent(data);
				console.log(data);
			});
	}

	function getDate() {
		fetch("http://127.0.0.1:5000/date")
			.then((res) => res.text())
			.then((data) => {
				console.log(data);
			});
	}

	return (
		<>
			<button
				onClick={() => {
					setDirContent("");
					setFlaskContent("");
				}}
			>
				Reset data
			</button>
			<div>
				<button onClick={buttonClickHandler}>Get current directory content</button>
				<div>{dirContent ? dirContent : ""}</div>
			</div>
			<div>
				<button onClick={getFlaskDataHandler}>Get flask data</button>
				<div>
					<p>{flaskContent}</p>
				</div>
			</div>
			<div>
				<button onClick={getDate}>Get date</button>
				<div>
					<p>{flaskContent}</p>
				</div>
			</div>
		</>
	);
}

export default App;
