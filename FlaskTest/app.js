let testSelect = document.getElementById("test-select");
let heading = document.getElementById("heading");

// Read data from Node.js API
function getData() {
	// const response = await
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

	// const body = await response.text();
	// console.log(body);
}

testSelect.addEventListener("change", (e) => {
	let option = e.target.options[testSelect.selectedIndex];
	console.log(option);

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
