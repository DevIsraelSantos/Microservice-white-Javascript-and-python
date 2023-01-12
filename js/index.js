const express = require('express');
const { Kafka, logLevel } = require('kafkajs');

const app = express();
const routes = require('./routes');

const kafka = new Kafka({
	clientId: 'jsapp',
	brokers: ['kafka:9092'],
	logLevel: logLevel.WARN,
	retry: {
		initialRetryTime: 300,
		retries: 10,
	},
});
const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'request-group-receiver' });

app.use(express.json());

app.use((req, res, next) => {
	req.producer = producer;
	return next();
});
app.use(routes);

const run = async () => {
	await producer.connect();
	await consumer.connect();

	let topic = 'request';
	// Code Consumer for test of read message
	topic = 'teste';
	await consumer.subscribe({ topic });

	await consumer.run({
		eachMessage: async ({ topic, partition, message }) => {
			console.log('Resposta', String(message.value));
		},
	});

	app.listen(process.env.EXTERNALPORT, () => console.log(`Server listening at http://localhost:${process.env.EXTERNALPORT}`));
};

run().catch(console.error);
