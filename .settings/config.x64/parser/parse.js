const parser = function parserGet() {
	fetch('../config.json')
		.then(results => results.json())
		.then(console.log);
}

console.log(parser)