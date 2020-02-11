# grpc-hello-client

An npm package that thinly wraps over gRPC client stubs for a gRPC hello world program

## Setup

At the root of the parent project, build the gRPC client stub from the protobuf files
```
$ npm run build:proto
```

Publish the package
```
$ npm login
...
$ npm publish
```
