import subscriptionController from './Subsrciption.controller';

export default (fastify, opts, done) => {
    fastify.get('/', subscriptionController.get);
    done();
};



