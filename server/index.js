const path = require('path');

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const baseProjectPath = path.join(__dirname, '../');
const protofilePath = path.join(baseProjectPath, process.env.PROTO_PATH, 'helloworld.proto');
const PORT = 9090;

const packageDefinition = protoLoader.loadSync(protofilePath, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const helloworld = protoDescriptor.helloworld;

if (require.main === module) {
    const server = new grpc.Server();
    server.addService(helloworld.Greeter.service, {
        sayHello: (call, callback) => {
            const message = `Hello, ${call.request.name}!`;
            callback(null, { message });
        }
    });
    server.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure());
    server.start();
    console.log(`Node gRPC server listening at port ${PORT}`);
}
