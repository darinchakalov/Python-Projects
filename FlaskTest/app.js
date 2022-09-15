let testSelect = document.getElementById("test-select");
let heading = document.getElementById("heading");
let ipDiv = document.getElementById('ip-div')
// Read data from Node.js API
function getData() {
	fetch("http://localhost:3000/script3", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((data) => data.json())
		.then((res) => {
			// testDiv.textContent = `${res}`;
			for (const country of res) {
				let newOption = document.createElement("option");
				newOption.value = country;
				newOption.textContent = `${country.name}: ${country.code}`;
				testSelect.appendChild(newOption);
			}
		});
}

testSelect.addEventListener("change", (e) => {
	let option = e.target.options[testSelect.selectedIndex];
	heading.textContent = option.textContent;
});

// Read data from Flask API
function flaskTester() {
	fetch("http://localhost:5000")
		.then((data) => data.json())
		.then((res) => {
			for (const country of res) {
				let newOption = document.createElement("option");
				newOption.value = country;
				newOption.textContent = `${country.name}: ${country.code}`;
				testSelect.appendChild(newOption);
			}
		});
}

function get_myIP() {
	fetch("http://localhost:5000/myip")
		.then((res) => res.text())
        .then((data) => {
            let newP = document.createElement('p')
            newP.textContent = `My public ip is: ${data}`;
            ipDiv.appendChild(newP)
        });
}
