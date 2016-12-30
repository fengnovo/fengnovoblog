module.exports = {
		port: 3000,
	  	session: {
		    secret: 'myblog',
		    key: 'myblog',
		    maxAge: 2592000000
	  	},
		mongodb: 'mongodb://fengnovo:123456@ds149268.mlab.com:49268/myblog'
};