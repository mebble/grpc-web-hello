# grpcweb-hello

[src](https://github.com/grpc/grpc-web/tree/master/net/grpc/gateway/examples/helloworld)

## Requirements

- protoc
- protoc-gen-grpc-web

## Development

Install dependencies `$ npm run install:dependencies`

Build the gRPC client stub from the protobuf files using `$ npm run build:proto`. They're required by the client during the client's development.

Start the gRPC server `$ npm run dev:server`

In another terminal, start the gRPC client's development server `$ npm run dev:client`. This will spin up a development server for the client-side code.


## Building

First, start the gRPC server that the client will connect to.
```
$ npm run start:server
```

Ensure that the protobuf files are built to create the client stub.
```
$ npm run build:proto
```

Build the client.
```
$ npm run build:client
```

All the above steps could be performed in one command using:
```
$ npm run start:production
```

The client `src` will be bundled up into the `build` directory. To run this bundled code in the browser, host it statically using a simple web server, such as the Python `http.server` module:
```
$ python3 -m http.server 5000 --directory build
```

## Design Decisions
