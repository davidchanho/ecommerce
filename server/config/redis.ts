import { createClient } from "redis";

const client = createClient({
    socket: {
        host: process.env.REDIS_HOST as string,
        port: parseInt(process.env.REDIS_PORT as string),
    },
    password: process.env.REDIS_PW as string,
});

client.on("error", (err: any) => console.error(err));
client.connect();

export { client };
