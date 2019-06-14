import AWS from 'aws-sdk';

export default process.env.IS_OFFLINE
    ? new AWS.DynamoDB.DocumentClient({
        region: 'localhost',
        endpoint: 'http://localhost:8000',
    })
    : new AWS.DynamoDB.DocumentClient();