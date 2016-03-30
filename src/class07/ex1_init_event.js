'use strict';

const EventEmitter = require('events').EventEmitter;
const util = require('util');

function BazingaEmitter (data) {
    this.data = data;
    this.on('init', init);
    EventEmitter.call(this);
}


BazingaEmitter.prototype.init = function () {
    this.emit('init', this.data);
};

util.inherits(BazingaEmitter, EventEmitter);


function init (data) {
    console.log('init =>', data.text);
}

module.exports = BazingaEmitter;
