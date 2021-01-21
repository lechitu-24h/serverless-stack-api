const config = {
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
    IDENTITY_POOL_ID: 'us-east-1:1dbbd0b7-591d-4787-8c83-ebde58e858a5',
  },
};

export default config;
