import server from './api/server';

const start = async () => {
    try {
        await server.listen(3000, '0.0.0.0');
    } catch (err) {
        console.log(err);
        server.log.error(err);
        process.exit(1);
    }
};
start().then();