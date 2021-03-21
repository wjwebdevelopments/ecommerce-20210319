require('dotenv').config({ path: `${__dirname}/config/config.env` });

module.exports = {
    connectString: process.env.CONNECT_STRING,
    api: process.env.API_URL
}