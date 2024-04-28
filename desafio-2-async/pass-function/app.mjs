import AWS from 'aws-sdk';
AWS.config.region = 'sa-east-1';

const eventbridge = new AWS.EventBridge()

export const lambdaHandler = async (event, context) => {

  console.log('pass function triggered');

  let payload = { Entries: [] };

  for (const record of event.Records) {

    const body = JSON.parse(record.body);

    payload.Entries.push({
      EventBusName: 'RecieveEventBus',
      DetailType: 'Message',
      Time: new Date(),
      Source: 'demo.event',
      Detail: JSON.stringify(body)
    });

  }

  const result = await eventbridge.putEvents(payload).promise();
  console.log('EventBridge result');
  console.log(result);
};
