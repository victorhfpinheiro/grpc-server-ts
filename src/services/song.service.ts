import { ISongsServer } from './gRPC/models/songs_grpc_pb';
import * as grpc from 'grpc';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Song, Comment } from './gRPC/models/songs_pb';

export class SongServerService implements ISongsServer {
    addSongs: grpc.handleClientStreamingCall<Song, Empty>;
    getChat: grpc.handleServerStreamingCall<Song, Comment>;
    liveChat: grpc.handleBidiStreamingCall<Comment, Comment>;

    public getSong(call: grpc.ServerUnaryCall<Empty>, callback: grpc.sendUnaryData<Song>): void {
        console.log(`${new Date().toISOString()} ==> getSong()`)
        const song = new Song();
        song.setId(33)
        song.setTitle('Minha Musica')
        song.setArtist('Péricles')

        callback(null, song)
    }
}