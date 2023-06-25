//your JS code here. If required.
function promiseMaker() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Hello, world!")
		}, 1000);
	});
}

let x = promiseMaker();
x.then((data) => {
	const ele = document.getElementById("output");
	ele.innerText = data;
});