const express = require('express');
const axios = require('axios');
const app = express();

const CLIENT_ID = '399946793884-r2llllblbpi6qup42n8cq677o1bri6mo.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://127.0.0.1:8090/api/oauth2-redirect';

app.get('/auth/google', (req, res) => {
  const url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=profile email`;
  res.redirect(url);
});

app.get('/api/oauth2-redirect', async (req, res) => {
  const code = req.query.code;
  const { data } = await axios.post('https://oauth2.googleapis.com/token', null, {
    params: {
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code',
    },
  });

  const { data: userInfo } = await axios.get(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${data.access_token}`);
  
  // Use userInfo to register or log in the user in PocketBase
  // For example, create or fetch the user in your PocketBase database
  
  res.send(userInfo);
});

app.listen(3000, () => {
  console.log('Server running on http://127.0.0.1:8090/api/oauth2-redirect');
});
