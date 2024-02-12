const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const BASE_URL = 'https://api.github.com/user/repos';
//const BASE_URL = 'https://api.github.com/users/TobiasSkog/repos';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.json('hi');

})

app.get('/portfolios', (req, res) => {
  const githubApiRequest = {
    method: 'GET',
    url: BASE_URL,
    headers: {
      "content-type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Authorization": `Bearer ${process.env.REACT_APP_GITHUB_API_KEY}`,
    },
  };
  axios.request(githubApiRequest).then((response) => {
    res.json(response.data);

  }).catch((error) => {
    console.log(error);
  })
});

app.listen(8000, () => {
  console.log(`Backend-Server is running on port ${PORT}`)
});