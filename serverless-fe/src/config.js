const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-app-upload-tu',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://jcentwq22d.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_iWgHqGy0U',
    APP_CLIENT_ID: '639a7f800mqtk0otap2ee632ef',
    IDENTITY_POOL_ID: 'us-east-1:0d0e7d1b-281b-4165-8e98-7ba0ee8c7383',
  },
};

export default config;
