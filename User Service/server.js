/// server

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDef = protoLoader.loadSync("user.proto");
const grpcObject = grpc.loadPackageDefinition(packageDef);
const userPackage = grpcObject;

function getUser(call, callback) {
  callback(null, { id: call.request.id, name: "Nawin" });
}

const server = new grpc.Server();
server.addService(userPackage.UserService.service, { GetUser: getUser });

server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), () => {
  server.start();
});


