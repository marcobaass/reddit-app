import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
const app = express();
const port = 3001; // Choose a port different from your Vite dev server

app.use(cors());

//loggin middleware
app.use((req, res, next) => {
  morgan('dev')
  next();
});

app.get('*', (req, res) => {
  const redditPath = req.url.replace('/api/reddit/', '');
  const fullUrl = `https://www.reddit.com/${redditPath}`;
  console.log('full url in get *', fullUrl);
  fetch(fullUrl)
    .then((response) => {
      if (!response.ok) {
        console.error(`Error fetching from API: ${fullUrl}, Status: ${response.status}`);
        res.status(response.status).send(`Error fetching from API: ${response.status}`);
        return;
      }
      response.json()
        .then(data => {
          res.status(200).json(data)
        }).catch(error => {
          console.error('Error parsing JSON response:', error);
          res.status(500).send('Error parsing JSON response');
        });
    })
    .catch((error) => {
      console.error('Error proxying request:', error);
      res.status(500).send('Proxy error');
    });
});

app.listen(port, () => {
  console.log(`CORS proxy server listening on port ${port}`);
});
