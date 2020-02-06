class SubscriptionController {
    get(req, reply) {
        reply.code(200).send({ pong: 'it worked!' });
    }
}

export default new SubscriptionController();