require('dotenv').config();

module.exports = {
  name: 'LastDram',
  extra: {
    apiUrl: process.env.API_URL,
    region: process.env.AWS_REGION,
    userPoolId: process.env.AWS_USER_POOL_ID,
    userPoolWebClientId: process.env.AWS_USER_POOL_CLIENT_ID
  }
};
