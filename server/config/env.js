// LOCAL DEV VARIABLES
let env = {
	NODE_ENV: 'development',///changing this changes everything. devel means it is being built. changes to production when done.
	PORT: 3000,
	DBPROTOCOL: 'mongodb',
<<<<<<< HEAD
	DBUSERNAME: 'student',//put personal info here
	DBPASSWORD: 'CodeWorksStudent',
	DBHOST: 'ds056789.mlab.com:56789',
	DBNAME: 'codeworks',
=======
	DBUSERNAME: 'bananaberry',
	DBPASSWORD: 'yellowishred',
	DBHOST: 'ds149431.mlab.com:49431',
	DBNAME: 'youcankanban',
>>>>>>> 6c1862bbaa645b6ca34dad1a385083df7eb3a53a
	SERVERNAME: 'dev-server'
}

// MAPS env TO ACTUAL ENVIRONMENT
Object.keys(env).forEach(v => {
	process.env[v] = process.env[v] || env[v]
}) ///take above and set on the enviro and create one if its not there???


// MongoDb Connection String Builder
env.CONNECTIONSTRING = `${env.DBPROTOCOL}://${env.DBUSERNAME}:${env.DBPASSWORD}@${env.DBHOST}/${env.DBNAME}`
process.env.CONNECTIONSTRING = env.CONNECTIONSTRING

exports = env