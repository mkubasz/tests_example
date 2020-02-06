
import fastify from '../api/server';
describe('server test', () => {
    afterAll(() => {
        fastify.close();
    });

    test('responds with success on request /', async (done) => {
        const response = await fastify.inject({
            method: 'GET',
            url: '/subscriptions'
        });

        expect(response.statusCode).toBe(200);
        expect(response.payload).toBe('{"pong":"it worked!"}');
        done();
    });
});