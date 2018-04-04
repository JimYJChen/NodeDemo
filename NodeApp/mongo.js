'use strict';

const config = require('config-lite')(__dirname)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Objid = Schema.Types.ObjectId;

mongoose.connect(config.mongodb);

mongoose.connection.on('connected', () => {
    console.log('Have connected to Mongo! ');
});

mongoose.connection.on('error', () => {
    console.log('Failed to connected to Mongo !');
});

mongoose.connection.on('disconnected', () => {
    console.log('Monogo disconnected !');
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose disconnected through app termation ');
    });
});

const UserInfo = new Schema({
    name: {
        type: String,
        required: true,
        ObjectId: true,
        _id: false,
    },
    password: {
        type: String,
        required: true,
    },
    createTime: {
        type: Date,
        default: Date.now
    }
}, {
        connection: 'userinfo'
    });//模型名称,


exports.mongoose = mongoose;

var userModle = mongoose.model('userinfo', UserInfo);

module.exports = mongoose.model('userinfo', UserInfo);

UserInfo.method.selectOne = function (data, callback) {
    userModle.findOne(data, (err, adventure) => {
        if (err) {

        } else {

        }
    });
};




