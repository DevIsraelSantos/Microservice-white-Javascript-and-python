const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
	const files = fs.readdirSync('./files');
	const output = files.map((name) => {
		const fullPath = './files/' + name;
		const content = fs.readFileSync(fullPath, { encoding: 'utf8' });
		return { file: name, content };
	});

	return res.status(200).json(output);
});

app.post('/', async (req, res) => {
	try {
		const { message } = req.body;
		const output = `Init process of create file with message '${message}'`;
		return res.status(200).json(output);
	} catch (error) {
		return res.status(500).json(error);
	}
});

app.listen(process.env.EXTERNALPORT || 3000, () => console.log(`Server listening at http://localhost:${process.env.EXTERNALPORT || 3000}`));
