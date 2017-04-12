var path = require('path'),  
    Etcd = require('node-etcd');

var etcd = new Etcd();

var p = path.join('/', 'services', 'ping');  
etcd.set(p,  
  JSON.stringify({
    message: 'pong from 127.0.0.1',
    in: '12ms',
  }));
console.log('ETCD: Registered as ' + p);  
