const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.status(200).json('Listando arquivos');
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

app.listen(process.env.EXTERNALPORT, () => console.log(`Server listening at http://localhost:${process.env.EXTERNALPORT}`));
