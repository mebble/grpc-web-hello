#!/bin/bash

PROTOC=`command -v protoc`
if [[ "$PROTOC" == "" ]]; then
  echo "Required "protoc" to be installed. Please visit https://github.com/protocolbuffers/protobuf/releases (3.5.0 suggested)."
  exit -1
fi

mkdir -p $PROTO_GEN_PATH

echo "Compiling protobuf definitions"
protoc helloworld.proto \
  --proto_path=$PROTO_PATH \
  --js_out=import_style=commonjs:$PROTO_GEN_PATH \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$PROTO_GEN_PATH
