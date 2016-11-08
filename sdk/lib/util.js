const config = require('./config');
const url = require('url');
const https = require('https');
const request = require('superagent');
const _md5 = require('./md5');

/**
 * @desc 验证参数非空，类型
 * @param {obj} data - common中参数为必要，其他的满足条件必要 
 */

function checkData(param, data) {
    try {
        for (var i in data) {
            if (i === 'common') {
                for (var j in data.common) {
                    if (!param[j]) {
                        throw config.NEED_PARAM + j;
                    } else if (data.common[j] === 'array') {
                        if (!param[j] instanceof Array) {
                            throw config.NEED_VALID_PARAM + j;
                        }
                    } else if (!data.common[j] === 'object') {
                        if (!param[j] instanceof Object) {
                            throw config.NEED_VALID_PARAM + j;
                        }
                    } else {
                        if (typeof param[j] !== data.common[j]) {
                            throw config.NEED_VALID_PARAM + j;
                        }
                    }
                }
            } else {
                for (var j in data[i]) {
                    if (param[i] === j) {
                        for (var k in data[i][j]) {
                            if (!param[k]) {
                                throw config.NEED_PARAM + k;
                            } else if (data[i][j][k] === 'array') {
                                if (!param[k] instanceof Array) {
                                    throw config.NEED_VALID_PARAM + k;
                                }
                            } else if (data[i][j][k] === 'object') {
                                if (!param[k] instanceof Object) {
                                    throw config.NEED_VALID_PARAM + k;
                                }
                            } else {
                                if (typeof param[k] !== data[i][j][k]) {
                                    throw config.NEED_VALID_PARAM + k;
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            resultCode: 0
        };
    } catch (error) {
        return {
            resultCode: 10086,
            errMsg: error
        };
    }
}




function postman(param) {
    return new Promise((resolve, reject) => {
        const _this = param.target;
        let para = Object.assign(_this.data,param.data);
        //签名
        const secret = _this.test?_this.data.test_secret:_this.data.app_secret;
        para.app_sign = _md5(_this.data.app_id + param.data.timestamp + secret);
        //参数验证
        const checkResult = checkData(para.data, para.neededData);
        if (checkResult.resultCode != 0) {
            resolve(checkResult);
        }
        const urlStr = 'https://' + config.servers[Math.ceil(Math.random() * 3)] + param.path;
        const resHandler = (res) => {
            resolve(res.text?JSON.parse(res.text):'');
        }
        if (param.type.toLocaleLowerCase() === 'get') {
            request
                .get(`${urlStr}?para=${encodeURIComponent(JSON.stringify(para))}`)
                .end((err, res) => {
                    resHandler(res);
                });
        } else if (param.type.toLocaleLowerCase() === 'post') {
            request.post(urlStr)
                .send(para)
                .end((err, res) => {
                    resHandler(res);
                })
        } 
    })
}


exports.postman = postman;