let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();
exports.handler = function (event, context, callback) {

	console.log(event);
	console.log(context);

	console.log('val 01 = ',event[object.keys(event)[0]]);

	kinesis.describeStream({
		StreamName: 'Hiru_Stream'
	}).promise()
		.then(describeStreamData => {
			console.log('Data',describeStreamData);
			callback(null, describeStreamData);
			
		})
		.catch(err => {
			console.log('Error',err);
			callback(null, err);
			
		});


	//callback(null, 'Successfully executed');
}