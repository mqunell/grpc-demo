import grpc from '@grpc/grpc-js';

/*
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:. \
	--grpc_out=grpc_js:. \
	*.proto

npm install -g grpc-tools
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:../node/static_codegen/ --grpc_out=grpc_js:../node/static_codegen helloworld.proto

grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./path/to/output/dir --grpc_out=./path/to/output/dir --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` path/to/your.proto

grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./proto \
	--grpc_out=./proto \
	--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`
	./proto/*.proto



npx grpc_tools_node_protoc \
	--js_out=import_style=commonjs,binary:./generated \
	--grpc_out=./generated \
	--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
	proto/*.proto

*/

/*
npm install -g grpc-tools

grpc_tools_node_protoc \
	--js_out=import_style=commonjs,binary:../node/static_codegen/ \
	--grpc_out=../node/static_codegen \
	--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
	helloworld.proto

grpc_tools_node_protoc \
	--js_out=import_style=commonjs,binary:./ \
	--grpc_out=./ \
	--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
	*.proto


./node_modules/.bin/grpc_tools_node_protoc \
	--js_out=import_style=commonjs,binary:./proto \
	--grpc_out=./proto \
	--plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
	./proto/*.proto
*/

/*
protoc --go_out=. --go_opt=paths=source_relative \
  --go-grpc_out=. --go-grpc_opt=paths=source_relative \
  *.proto
*/
