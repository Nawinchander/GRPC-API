/// client

const client = new userPackage.UserService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

client.GetUser({ id: "1" }, (err, response) => {
  console.log(response);
});


