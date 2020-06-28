import * as grpc from 'grpc';

import { UserRequest, UserResponse} from './proto/index';
import { UserService } from './proto';

class GreeterHandler implements UserService {
    /**
     * Greet the user nicely
     * @param call
     * @param callback
     */
    sayHello = (call: grpc.ServerUnaryCall<UserRequest>, callback: grpc.sendUnaryData<UserResponse>): void => {
        const reply: UserResponse = new UserResponse();

        reply.setMessage(`Hello, ${ call.request.getName() }`);

        callback(null, reply);
    };
}

export default {
    service: GreeterService,                // Service interface
    handler: new GreeterHandler(),          // Service interface definitions
};