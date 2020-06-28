import * as grpc from 'grpc'
import { ISongsServer, SongsService } from './services/gRPC/models/songs_grpc_pb'
import { SongServerService } from './services/song.service'

const server = new grpc.Server()
const PORT = process.env.PORT || 50001

server.addService<ISongsServer>(SongsService, new SongServerService())

console.log(`:: Servidor online na porta: ${PORT}`);

server.bind(`localhost:${PORT}`, grpc.ServerCredentials.createInsecure())

server.start()