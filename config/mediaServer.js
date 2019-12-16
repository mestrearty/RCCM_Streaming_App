//Serviço de streaming
const NodeMediaServer = require('node-media-server');
const streamingConfig = require('./settings');

//instanciando servidor RTMP
//let nms = new NodeMediaServer(streamingConfig.serverConfigRTMP);

//instanciando servidor HLS/DASH
let nms = new NodeMediaServer(streamingConfig.serverConfigHLSDash);

module.exports = nms;
