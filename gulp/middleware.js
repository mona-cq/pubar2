/**
 * Created by wj on 2016/5/24.
 */
var os = require('os');
var fs = require('fs');
var path = require('path');
var YAML = require('yamljs');
var doProxy = require('proxy-middleware');


var ENV_FILENAME = 'proxy.yml';

function getApiRoot() {
    var envCfg = {};
    try {
        envCfg = YAML.load(ENV_FILENAME);
    } catch (err) {
        console.error('read ENV.yml failed');
        console.error(err);
    }

    return envCfg.proxy;
}

function mockMiddleware(req, res, next) {
    var reg = /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/;
    if(reg.test(req.url)){
        return next()
    }

    console.log('----------------------request from client:' + req.url);
    var apiRoot = getApiRoot();
    return doProxy(apiRoot)(req, res, next);
}

export default mockMiddleware