const express = require('express');

const routes = express.Router();

const fs = require('fs');

routes.get('/', async (req, res) => {
	const files = fs.readdirSync('./files');
	const output = files.map((name) => {
		const fullPath = './files/' + name;
		const content = fs.readFileSync(fullPath, { encoding: 'utf8' });
		return { file: name, content };
	});

	return res.status(200).json(output);
});

routes.post('/', async (req, res) => {
	try {
		const { message } = req.body;
		await req.producer.send({
			topic: 'request',
			messages: [{ value: JSON.stringify({ message }) }],
		});

		const output = `Solicitação enviada com a mensagem '${message}'`;
		return res.status(200).json(output);
	} catch (error) {
		console.log({ error });
		return res.status(500).json(error);
	}
});

module.exports = routes;
