
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDBURI = exports.Host = exports.Secret = void 0;
const localHost = "localhost";
const LocalURI = `mongodb://${localHost}:27017/comp229002`;
const remoteHost = "comp229002.mongodb.net";
const RemoteURI = `mongodb+srv://dbadmin:7awgyVl44hHvEOT7@clusters002.vstpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
exports.Secret = 'someSecret';
exports.Host = remoteHost;
exports.MongoDBURI = RemoteURI;
