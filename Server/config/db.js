const mysql = require('mysql')

const db = mysql.createConnection({
	user: 'b475fc39736d2a',
	host: 'us-cdbr-east-04.cleardb.com',
	password: '18212277',
	database: 'heroku_839c524c89f960b',
})

module.exports = db

