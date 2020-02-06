const React = require('react');

require('./App.css');

const { HelloRequest, HelloReply } = require('./.proto-generated/helloworld_pb');
const { GreeterClient } = require('./.proto-generated/helloworld_grpc_web_pb');

const client = new GreeterClient('http://localhost:8080');  // configuring to make requests to envoy

const makeRequest = (name) => {
  const request = new HelloRequest();
  request.setName(name);
  client.sayHello(request, {}, (err, res) => {
    console.log(res.getMessage());
  });
};

const App = () => {
  return (
    <div>
      <button onClick={() => makeRequest('World!!!')}>GO!</button>
    </div>
  );
};

module.exports = App;
