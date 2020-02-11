import React from 'react';
import { HelloRequest, HelloReply, GreeterClient } from '@mebble/grpc-hello-client';

import './App.css';

import SearchBar from './components/SearchBar';

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
