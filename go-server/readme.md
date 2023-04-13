Full tutorial: Full tutorial: https://itnext.io/build-grpc-server-with-golang-go-step-by-step-b3f5abcf9e0e

---

Install the protocol buffer compiler and Go plugins (check [the official docs](https://grpc.io/docs/languages/go/quickstart/ 'the official docs')) for updated versions)

```
brew install protobuf
protoc --version  # Ensure compiler version is 3+
go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2
```

Add environment variables to `.zshrc`

```
# Go
export GO_PATH=~/go
export PATH=$PATH:$GO_PATH/bin
```

Create the project and install grpc-go

```
go mod init grpc-tutorial
go get -u google.golang.org/grpc
```

Write the proto file, then navigate to its directory and compile it

```
protoc --go_out=. --go_opt=paths=source_relative \
  --go-grpc_out=. --go-grpc_opt=paths=source_relative \
  *.proto
```
