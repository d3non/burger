//Node Connection to MySQL

var mysql = require ('mysql');

var connection;

if (process.env.JAWSDB_URL)
{
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else
{
    connection = mysql.createConnection(
	{
		host: 'us-cdbr-iron-east-02.cleardb.net',
		user: 'bd973a01a0abbc',
		password: 'bd2ce921',
		database: 'heroku_6b3c7e799dbaffb'
	});
};


connection.connect(function(err) 
{
  if (err) 
  {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;