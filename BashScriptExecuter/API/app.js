const { exec } = require("child_process");
const express = require("express");

const app = express();
const port = 3000;

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3001");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get("/", (req, res) => {
	exec("dir", (error, stdout, stderr) => {
		if (error) {
			return console.log(`error: ${error}`);
		}
		if (stderr) {
			return console.log(`stderr: ${stderr}`);
		}
		console.log(`stdout: ${stdout}`);
		res.send(stdout);
	});
});

app.listen(port, () => {
	console.log(`App working on http://localhost:${port}`);
});
