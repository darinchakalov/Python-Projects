const express = require("express");
const { spawn } = require("child_process");
const app = express();
const port = 3000;

app.use(function (req, res, next) {
	// let allowedDomains = ["http://angular.f4ster.com", "https://angular.f4ster.com"];
	// let origin = req.headers.origin;
	// if (allowedDomains.indexOf(origin) > -1) {
	// 	res.setHeader("Access-Control-Allow-Origin", origin);
	// }
	// res.header("Access-Control-Allow-Origin", "https://ssopl.f4ster.com");
	res.header("Access-Control-Allow-Origin", "http://localhost:5500");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get("/script2", (req, res) => {
	let dataToSend;
	// spawn new child process to call the python script
	// const python = spawn("python", ["script1.py"]);

	// spawn new child process to call the python script with parameters
	const python = spawn("python", [`script2.py`, `node.js`, `python`]);
	// collect data from script
	python.stdout.on("data", function (data) {
		console.log("Pipe data from python script...");
		dataToSend = data.toString();
	});
	// in close event we are sure that stream from child process is closed
	python.on("close", (code) => {
		console.log(`child process close all stdio with code ${code}`);
		// send data to browser
		res.send(dataToSend);
	});
});

app.get("/script3", (req, res) => {
	let largeDataSet = [];
	// spawn new child process to call the python script
	const python = spawn("python", ["script3.py"]);
	// collect data from script
	python.stdout.on("data", function (data) {
		console.log("Pipe data from python script...");
		largeDataSet.push(data);
		console.log(largeDataSet);
	});
	// in close event we are sure that stream is from child process is closed
	python.on("close", (code) => {
		console.log(`child process close all stdio with code ${code}`);
		// send data to browser
		res.send(largeDataSet.join(""));
	});
});

app.listen(port, () => {
	console.log(`App listening on port ${port}!`);
});
