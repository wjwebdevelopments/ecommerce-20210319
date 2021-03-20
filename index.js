const express = require('express');
const server = require('./server');
const colors = require('colors');
const app = server(express());


class App {

    constructor(){
        this.init()
            .then(message => console.log(message));
    }

    async init(){
        await app.listen(app.get('port'));
        return `Server running on port ${app.get('port').green}`;
    }
}

const init = new App();
