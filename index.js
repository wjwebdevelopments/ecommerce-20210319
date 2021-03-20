const express = require('express');
const server = require('./server');
const colors = require('colors');

const app = server(express());
const database = require('./database');

class App {

    constructor(){
        this.init()
            .then(message => console.log(message));
        database()
            .then(message => console.log(message))
            .catch(error => console.log(error));
    }

    async init(){
        await app.listen(app.get('port'));
        return `Server running on port ${app.get('port').green}`;
    }
}

const init = new App();
