package main

import (
	server "grpc-tutorial/proto" // <proto go_package and server.go package> "<go.mod module>/<directory>"
	"log"
	"net"

	"google.golang.org/grpc"
)

func main() {
	println("Go gRPC server")

	lis, err := net.Listen("tcp", ":9001")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	s := grpc.NewServer()
	server.RegisterTutorialServiceServer(s, &server.Server{})
	if err := s.Serve(lis); err != nil {
		log.Fatalf("Failed to server: %v", err)
	}
}
