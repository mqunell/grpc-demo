package main

import (
	"grpc-tutorial/tutorial"
	"log"
	"net"

	"google.golang.org/grpc"
)

func main() {
	println("Go gRPC server")

	lis, err := net.Listen("tcp", ":9000")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	s := grpc.NewServer()
	tutorial.RegisterTutorialServer(s, &tutorial.Server{})
	if err := s.Serve(lis); err != nil {
		log.Fatalf("Failed to server: %v", err)
	}
}
