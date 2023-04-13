package tutorial

import context "context"

// Define a server struct that implements the server interface
type Server struct {
	UnimplementedTutorialServer
}

// Implement the SayHello method of the server interface
func (s *Server) SayHello(ctx context.Context, in *HelloRequest) (*HelloReply, error) {
	return &HelloReply{Message: "Hello, " + in.GetName()}, nil
}
