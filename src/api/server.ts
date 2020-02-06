import * as fastify from 'fastify';
import * as cors from 'cors';

import subscription from './subscription/Subscription.route';

const server = fastify({ logger: true });


server.use(cors());
server.get('/ping', (request, reply) => {
    reply.code(200).send({ pong: 'it worked!' });
});

server.register(subscription, { prefix: 'subscriptions' });

export default server;
