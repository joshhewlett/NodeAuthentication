module.exports = {
	'facebookAuth': {
		'clientID': '1074587792673623',
		'clientSecret': '4a1b35c5112779b90a350df7f7e18d16', //Encrypt all secrets
		'callbackURL': 'http://localhost:2000/auth/facebook/callback',
		'profileFields': ['emails', 'name']
	},
	'twitterAuth': {
		'consumerKey': 'zxuiyvRXPGwJaKSdgrEGVjvk8',
		'consumerSecret': '3d0WkRQt4RdOaeDJGnDlQXeeA47NSCGiDtIV11jdpwxrQEr3IJ',
		'callbackURL': 'http://localhost:2000/auth/twitter/callback'
	},
	'googleAuth': {
		'clientID': '784120565187-do7jm31emv8kidq7ricim47s09luchj8.apps.googleusercontent.com',
		'clientSecret': '4QAZDdrrQOKtU8kTTVwM51aN',
		'callbackURL': 'http://localhost:2000/auth/google/callback'
	}
}
