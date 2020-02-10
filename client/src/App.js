import React from 'react';

import './App.css';

import SearchBar from './components/SearchBar';

import messages from './.proto-generated/helloworld_pb';
import grpcClient from './.proto-generated/helloworld_grpc_web_pb';

console.log('ONE******');
console.log(Object.getOwnPropertyNames(messages));
console.log(messages.HelloReply === grpcClient.HelloReply);
console.log('TWO******');
console.log(Object.getOwnPropertyNames(grpcClient));

const { HelloRequest, HelloReply } = messages;
const { GreeterClient } = grpcClient;

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
      <SearchBar onSubmit={value => makeRequest(value)} />
    </div>
  );
};

export default App;
