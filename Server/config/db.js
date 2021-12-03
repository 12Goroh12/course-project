const mysql = require('mysql')

const db = mysql.createConnection({
	user: 'bad64001dd9722',
	host: 'us-cdbr-east-04.cleardb.com',
	password: '395af6f4',
	database: 'heroku_bf0d2028aee397f',
})

module.exports = db

