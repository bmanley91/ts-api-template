import express from 'express';
import { getConnection } from './database/postgres-connection';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (_, res) => {
  res.send('Hello World');
});

getConnection().then(() => {
    app.listen(PORT, HOST, () => {
        console.log(`Running on http://${HOST}:${PORT}`);
      });
});
