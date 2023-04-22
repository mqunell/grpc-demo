import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';

const PROTO_PATH = './proto/tutorial.proto';

const grpcObj = protoLoader.loadSync(PROTO_PATH, {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true,
});

const TutorialService = grpc.loadPackageDefinition(grpcObj).TutorialService;

/* const client = new TutorialService(
	'localhost:9001',
	grpc.credentials.createInsecure()
);

client.sayHello({}, (error, res) => {
	console.log(res);
}); */
